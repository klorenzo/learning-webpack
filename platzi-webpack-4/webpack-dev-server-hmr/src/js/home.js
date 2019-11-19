import "../css/home.css";

import addText from "./text";

addText();

if(module.hot) {
    module.hot.accept("./text.js", function() {
        addText();
    });
}