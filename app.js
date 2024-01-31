let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    ul.appendChild(item);
    item.appendChild(delbtn);
    inp.value = "";
    if (inp.value === "" || inp.value === " ")  {
        
        btn.disabled = true;
    }
});




inp.addEventListener("keyup", () => {
    const value = this.value;
    btn.disabled = false;
    if (value === "" || inp.value === " ") {
        btn.disabled = true;

    }
});
ul.addEventListener("click", (event) => {
    if (event.target.nodeName == "BUTTON") {
        let = listItem = event.target.parentElement;
        listItem.remove();
    }
});


