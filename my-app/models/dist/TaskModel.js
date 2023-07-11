"use strict";
exports.__esModule = true;
var mobx_state_tree_1 = require("mobx-state-tree");
var Task = mobx_state_tree_1.types
    .model({
    id: mobx_state_tree_1.types.identifier,
    title: mobx_state_tree_1.types.string,
    description: mobx_state_tree_1.types.string,
    status: mobx_state_tree_1.types.string
})
    .actions(function (self) { return ({
    updateTitle: function (newTitle) {
        self.title = newTitle;
    },
    updateDescription: function (newDescription) {
        self.description = newDescription;
    },
    updateStatus: function (newStatus) {
        self.status = newStatus;
    }
}); });
exports["default"] = Task;

//# sourceMappingURL=TaskModel.js.map
