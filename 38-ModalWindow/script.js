"use strict"

const buttonsShowModal = document.querySelectorAll(".show-modal");
const buttonCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//console.log(buttonsShowModal);

function showModal()
{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < buttonsShowModal.length; i++) { buttonsShowModal[i].addEventListener("click", showModal); }

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event){
    //console.log(event);
    if (event.key === "Escape" && !modal.classList.contains("hidden")) { closeModal(); }
});