let parent = document.querySelector("#parent");
         let arr = [1, 2, 3, 4, 5];

         for (let elem of arr) {
            let p = document.createElement("p");
            p.textContent = elem;
            parent.appendChild(p);

            p.addEventListener("click", function () {
               let currentValue = parseInt(p.textContent);
               p.textContent = currentValue + 1;
            });
         } 