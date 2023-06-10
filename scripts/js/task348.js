window.onload = function () {
    function setAttr(selector, attrName, attrValue) {
       const elem = document.querySelector(selector);
       elem.setAttribute(attrName, attrValue);
    }
    setAttr("#myButton", "disabled", true);
 }; 