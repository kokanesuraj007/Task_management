"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var zustand_1 = require("zustand");
var isServer = typeof window === "undefined";
var getSavedTasks = function () {
    if (isServer) {
        return [];
    }
    var tasksJSON = localStorage.getItem("tasks");
    return tasksJSON ? JSON.parse(tasksJSON) : [];
};
var saveTasks = function (tasks) {
    if (!isServer) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
};
exports.useTaskStore = zustand_1.create(function (set) { return ({
    tasks: getSavedTasks(),
    addTask: function (task) {
        set(function (state) {
            var updatedTasks = __spreadArrays(state.tasks, [task]);
            saveTasks(updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    deleteTask: function (taskId) {
        set(function (state) {
            var updatedTasks = state.tasks.filter(function (task) { return task.id !== taskId; });
            saveTasks(updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    updateTaskTitle: function (taskId, title) {
        set(function (state) {
            var updatedTasks = state.tasks.map(function (task) {
                return task.id === taskId ? __assign(__assign({}, task), { title: title }) : task;
            });
            saveTasks(updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    updateTaskDescription: function (taskId, description) {
        set(function (state) {
            var updatedTasks = state.tasks.map(function (task) {
                return task.id === taskId ? __assign(__assign({}, task), { description: description }) : task;
            });
            saveTasks(updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    updateTaskStatus: function (taskId, status) {
        set(function (state) {
            var updatedTasks = state.tasks.map(function (task) {
                return task.id === taskId ? __assign(__assign({}, task), { status: status }) : task;
            });
            saveTasks(updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    updateTask: function (taskId, updatedTask) {
        set(function (state) {
            var updatedTasks = state.tasks.map(function (task) {
                return task.id === taskId ? __assign({}, updatedTask) : task;
            });
            saveTasks(updatedTasks);
            return { tasks: updatedTasks };
        });
    }
}); });

//# sourceMappingURL=TaskStore.js.map
