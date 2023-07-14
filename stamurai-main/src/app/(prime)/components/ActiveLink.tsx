'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

// The purpose of this page is highlight the link for better user experience

const ActiveLink = ({ path, children }: any) => {

        const pathName = usePathname();

        return (
                <Link href={path} className={`${pathName === path ? 'text-white bg-blue-400 p-2 rounded-md' : ''} p-2`}>
                        {children}
                </Link>
        );
};

export default ActiveLink;