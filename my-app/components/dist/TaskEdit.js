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
exports.__esModule = true;
var react_1 = require("react");
var TaskEditForm = function (_a) {
    var task = _a.task, onSave = _a.onSave, onCancel = _a.onCancel;
    var _b = react_1.useState(task.title), title = _b[0], setTitle = _b[1];
    var _c = react_1.useState(task.description), description = _c[0], setDescription = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        var updatedTask = __assign(__assign({}, task), { title: title,
            description: description });
        onSave(updatedTask);
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("h3", null, "Edit Task:"),
        React.createElement("label", { htmlFor: "title" }, "Title:"),
        React.createElement("input", { type: "text", id: "title", value: title, onChange: function (e) { return setTitle(e.target.value); } }),
        React.createElement("label", { htmlFor: "description" }, "Description:"),
        React.createElement("textarea", { id: "description", value: description, onChange: function (e) { return setDescription(e.target.value); } }),
        React.createElement("button", { type: "submit" }, "Save"),
        React.createElement("button", { type: "button", onClick: onCancel }, "Cancel")));
};
exports["default"] = TaskEditForm;

//# sourceMappingURL=TaskEdit.js.map
