const add = document.getElementById("newAdd");
const remove = document.getElementById("removeItem");
const done = document.getElementById("doneTask");

add.addEventListener("click", function () {
    let task = document.getElementById("form1").value;   
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    let buttonAdd = document.createElement("button");
    let buttonRemove = document.createElement("button");
    let iconHand = document.createElement("i");
    let iconRemove = document.createElement("i");
    //PRZYCISK DODAWANAIA
    buttonAdd.classList.add("btn","btn-success", "px-3");
    buttonAdd.id = "doneTask";
    //PRZYCISK USUWANIA
    buttonRemove.classList.add("btn","btn-warning", "px-3");
    buttonRemove.id = "removeItem";
    // IKONA RĘKI
    iconHand.classList.add("fa", "fa-thumbs-o-up");
    iconHand.setAttribute("aria-hidden", "true");
    // IKONA X
    iconRemove.classList.add("fa", "fa-remove");
    iconRemove.setAttribute("aria-hidden", "true");
    // TWORZENIE DZIEDZICZENIA
    ul.appendChild(li);
    
    li.classList.add("list-group-item");
    li.innerHTML = `<p>${task}</p>`;
    li.prepend(buttonAdd);
    li.appendChild(buttonRemove);
    
    buttonAdd.appendChild(iconHand);
    buttonRemove.appendChild(iconRemove);
})
