// console.log("Hello!!");

const buttonsBigFive = document.querySelectorAll(".big-five-button");
console.log(buttonsBigFive);

const animalSpotted = event => {
    console.log(event.target.textContent); 
    const spottedAnimal = event.target.textContent; //value animal
    const textNode = document.createTextNode(spottedAnimal);
    //nieuwe list item maken
    const newLi = document.createElement("li");
    newLi.appendChild(textNode);
    //parent element <ul id="spotted-animals-list">
    const list = document.getElementById("spotted-animals-list");
    //append newLi aan list
    list.appendChild(newLi);
};

buttonsBigFive.forEach((btn) => {
    btn.addEventListener("click", animalSpotted) 
});

//werkt!!!!!! YES!!!!

//deel 2 first element verwijderen uit DOM
//button id="remove-first-item-button"

const buttonRemoveFirstItem = document.getElementById("remove-first-item-button");
const list = document.getElementById("spotted-animals-list");
//manier 1
const removeFirstItem = () => {
    const firstItem = list.firstChild;
    firstItem.remove();    
}

buttonRemoveFirstItem.addEventListener("click", removeFirstItem);

//manier2
buttonRemoveFirstItem.addEventListener("click", event => {
    const firstItem = list.firstElementChild;
    firstItem.remove();
})

//alle children verwijderen

const buttonRemoveAll = document.getElementById("remove-all-button");

//manier 1

const removeAll = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }   
}
buttonRemoveAll.addEventListener("click", removeAll);

//manier 2

const removeAll = () => {
    list.querySelectorAll("*").forEach (n => n.remove());
}

buttonRemoveAll.addEventListener("click", removeAll);

//of simpele manier! manier 3

const removeAll = () => {
    list.innerHTML = "";
}

buttonRemoveAll.addEventListener("click", removeAll);

