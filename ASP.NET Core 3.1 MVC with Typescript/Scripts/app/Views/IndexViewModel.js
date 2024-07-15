define(["require", "exports", "jquery", "../Logger"], function (require, exports, jq, Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IndexViewModel {
        constructor() {
            Logger_1.Logger.Log("This is from a viewmodel.");
            jq(".display-4").html("Welcome by JQuery");
        }
    }
    exports.ViewModel = new IndexViewModel();
});
//# sourceMappingURL=IndexViewModel.js.map