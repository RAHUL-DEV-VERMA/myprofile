const hamburger = document.querySelector('.header .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const menu_item = document.querySelector('.header .nav-list ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListenerI('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position> 250){
        header.style.backgoundColor = "#29323c";
    }else{
        header.style.backgoundColor = "transparent";
    }
})

menu_item.forEach(item=>{
    item.addEventListener('click',()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})