const menus = document.querySelector('.menu')
const menuna = document.querySelector('.menu-navegacion')
console.log(menus)
console.log(menuna)
menus.addEventListener('click',()=>{
    menuna.classList.toggle("spread")
})
window.addEventListener('click',e=>{
   if(menuna.classList.contains('spread') && e.target != menuna && e.target != menus){

    menuna.classList.toggle("spread")

   }
})