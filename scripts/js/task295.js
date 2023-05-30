window.onload = function () {
    const container = document.querySelector("#container");
    const first = document.querySelector("#first");
    const second = document.querySelector("#second");
    const button = document.querySelector("#button");

    container.addEventListener("click", (event) => {
       console.log(`Click on ${event.target.tagName} in container`);
    });

    first.addEventListener("click", (event) => {
       console.log(`Click on ${event.target.tagName} in first`);
    });

    second.addEventListener("click", (event) => {
       console.log(`Click on ${event.target.tagName} in second`);
    });

    button.addEventListener("click", (event) => {
       console.log(`Click on ${event.target.tagName} in button`);
    });
    // focus
};              