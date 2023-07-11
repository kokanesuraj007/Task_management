"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var TaskStore_1 = require("../stores/TaskStore");
var TaskItem_1 = require("./TaskItem");
var TaskEditForm_1 = require("./TaskEditForm");
var dynamic_1 = require("next/dynamic");
var TaskList = mobx_react_lite_1.observer(function () {
    var taskStore = TaskStore_1.useTaskStore();
    var _a = react_1.useState(null), editableTaskId = _a[0], setEditableTaskId = _a[1];
    var handleEditClick = function (taskId) {
        setEditableTaskId(taskId);
    };
    var handleCancelEdit = function () {
        setEditableTaskId(null);
    };
    var handleSaveEdit = function (taskId, title, description) {
        taskStore.updateTask(taskId, title, description);
        setEditableTaskId(null);
    };
    var todoTasks = taskStore.tasks.filter(function (task) { return task.status === "To Do"; }).length;
    var progressTasks = taskStore.tasks.filter(function (task) { return task.status === "Progress"; }).length;
    var closedTasks = taskStore.tasks.filter(function (task) { return task.status === "Closed"; }).length;
    return (React.createElement("div", null,
        React.createElement("h2", null, "Tasks:"),
        React.createElement("div", null,
            "Total Tasks: ",
            taskStore.tasks.length),
        React.createElement("div", null,
            "Todo Tasks: ",
            todoTasks),
        React.createElement("div", null,
            "Progress Tasks: ",
            progressTasks),
        React.createElement("div", null,
            "Closed Tasks: ",
            closedTasks),
        taskStore.tasks.map(function (task) { return (React.createElement("div", { key: task.id }, editableTaskId === task.id ? (React.createElement(TaskEditForm_1["default"], { task: task, onSave: function (title, description) { return handleSaveEdit(task.id, title, description); }, onCancel: handleCancelEdit })) : (React.createElement(TaskItem_1["default"], { task: task, onEditClick: function () { return handleEditClick(task.id); }, onDeleteClick: function () { return taskStore.deleteTask(task.id); } })))); })));
});
exports["default"] = dynamic_1["default"](function () { return Promise.resolve(TaskList); }, { ssr: false });

//# sourceMappingURL=TaskList.js.map
