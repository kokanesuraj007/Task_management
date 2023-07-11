"use strict";
exports.__esModule = true;
var mobx_react_lite_1 = require("mobx-react-lite");
var dynamic_1 = require("next/dynamic");
var TaskItem = mobx_react_lite_1.observer(function (_a) {
    var task = _a.task, onEditClick = _a.onEditClick, onDeleteClick = _a.onDeleteClick;
    return (React.createElement("div", null,
        React.createElement("h3", null, task.title),
        React.createElement("p", null, task.description),
        React.createElement("p", null,
            "Status: ",
            task.status),
        React.createElement("button", { onClick: onEditClick }, "Edit"),
        React.createElement("button", { onClick: onDeleteClick }, "Delete")));
});
exports["default"] = dynamic_1["default"](function () { return Promise.resolve(TaskItem); }, { ssr: false });

//# sourceMappingURL=TaskItem.js.map
