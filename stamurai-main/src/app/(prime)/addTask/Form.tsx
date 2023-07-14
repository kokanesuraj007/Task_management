'use client'
import { addTask } from '@/app/utils/actions';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2';

type Inputs = {
        title: string
        description: string
        status: string
}

const Form = () => {

        const {
                register,
                handleSubmit,
                formState: { errors },
                reset
        } = useForm<Inputs>()
        const onSubmit: SubmitHandler<Inputs> = (data) => {
                addTask(data);
                reset();
                Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )
        }

        return (
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                                {errors.title?.type === "required" && (<p className='text-red-500'>required</p>)}
                                <input type="text" placeholder="Type here"
                                        className="input input-bordered input-info w-full block"
                                        {...register("title", { required: true })}
                                        aria-invalid={errors.title ? "true" : "false"}
                                />
                        </div>

                        <div className='my-4'>
                                {errors.description?.type === "required" && (<p className='text-red-500'>required</p>)}
                                <textarea placeholder="Type here"
                                        className="textarea textarea-info w-full block"
                                        {...register("description", { required: true })}
                                        aria-invalid={errors.description ? "true" : "false"}
                                />
                        </div>

                        <div>
                                <select {...register("status")} className="select select-bordered select-sm w-full max-w-xs">
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                </select>
                        </div>

                        <button className="btn btn-info w-full mt-4">
                                <input type="submit" />
                        </button>

                </form>
        );
};

export default Form;