/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "./category.component";
import * as i2 from "./product.service";
var styles_CategoryComponent = [".ui.card[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    display: inline-block;   \n    width:300px;\n    height:350px;    \n  }\n  \n  .ui.image[_ngcontent-%COMP%] {\n    width:300px;\n    height:250px;\n    background-size: cover;\n    max-height: 250px;\n    max-width: 300px;\n    min-height: 250px;\n    min-width: 300px;\n  }"];
var RenderType_CategoryComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_CategoryComponent, data: {} });
export { RenderType_CategoryComponent as RenderType_CategoryComponent };
export function View_CategoryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n "])), (_l()(), i0.ɵeld(1, 0, null, null, 28, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(3, 0, null, null, 25, "div", [["class", "ui card"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, null, null, 3, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(7, 0, null, null, 0, "img", [["height", "250px"], ["width", "300px"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(10, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(12, 0, null, null, 1, "a", [["class", "header"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEdit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(13, null, ["  ", ""])), (_l()(), i0.ɵted(-1, null, ["\n        \n          "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), i0.ɵted(16, null, ["\n            ", "\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          \n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(19, 0, null, null, 8, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(21, 0, null, null, 3, "span", [["class", "right floated"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(23, 0, null, null, 0, "i", [["class", "heart outline like icon"]], null, null, null, null, null)), (_l()(), i0.ɵted(24, null, ["\n              ", " likes\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(26, 0, null, null, 0, "i", [["class", "comment icon"]], null, null, null, null, null)), (_l()(), i0.ɵted(27, null, ["\n            ", " comments\n          "])), (_l()(), i0.ɵted(-1, null, ["       \n      "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.category.CategoryImageUrl, ""); _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.category.CategoryName; _ck(_v, 13, 0, currVal_1); var currVal_2 = _co.category.CategoryDesc; _ck(_v, 16, 0, currVal_2); var currVal_3 = _co.category.CategoryLikeCount; _ck(_v, 24, 0, currVal_3); var currVal_4 = _co.category.CategoryCommentCount; _ck(_v, 27, 0, currVal_4); }); }
export function View_CategoryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-category", [], null, null, null, View_CategoryComponent_0, RenderType_CategoryComponent)), i0.ɵdid(1, 49152, null, 0, i1.CategoryComponent, [i2.ProductService], null, null)], null, null); }
var CategoryComponentNgFactory = i0.ɵccf("app-category", i1.CategoryComponent, View_CategoryComponent_Host_0, { category: "category" }, {}, []);
export { CategoryComponentNgFactory as CategoryComponentNgFactory };
