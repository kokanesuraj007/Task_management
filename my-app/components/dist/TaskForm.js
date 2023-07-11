"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TaskStore_1 = require("../stores/TaskStore");
var dynamic_1 = require("next/dynamic");
var TaskForm = function () {
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(""), description = _b[0], setDescription = _b[1];
    var taskStore = TaskStore_1.useTaskStore();
    var handleSubmit = function (e) {
        e.preventDefault();
        var task = {
            id: Date.now().toString(),
            title: title,
            description: description,
            status: "To Do"
        };
        taskStore.addTask(task);
        setTitle("");
        setDescription("");
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("h2", null, "Add Task:"),
        React.createElement("label", { htmlFor: "title" }, "Title:"),
        React.createElement("input", { type: "text", id: "title", value: title, onChange: function (e) { return setTitle(e.target.value); } }),
        React.createElement("label", { htmlFor: "description" }, "Description:"),
        React.createElement("textarea", { id: "description", value: description, onChange: function (e) { return setDescription(e.target.value); } }),
        React.createElement("button", { type: "submit" }, "Add Task")));
};
exports["default"] = dynamic_1["default"](function () { return Promise.resolve(TaskForm); }, { ssr: false });

//# sourceMappingURL=TaskForm.js.map
