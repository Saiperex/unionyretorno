const botonMenu=document.getElementById("buttonMenu");
const signoM=document.getElementById("iconMenu");
const menu=document.getElementById("desplegable")
botonMenu.addEventListener("click", function()
{
    let clases=signoM.classList.value
    if(clases.includes("fa-bars"))
    {
        signoM.classList.remove("fa-bars")
        signoM.classList.add("fa-x")
        menu.style.display="flex"
    }
    if(clases.includes("fa-x"))
    {
        signoM.classList.add("fa-bars")
        signoM.classList.remove("fa-x")
        menu.style.display="none"
    }
})