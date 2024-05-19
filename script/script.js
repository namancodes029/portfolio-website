
const menuClick = document.querySelector('.sidebar-icon')
const crossIcon = document.querySelector('#cut-icon')
const side_Bar_Select = document.querySelector('.side-bar')

// function to open sidebar menu 
function menuShowUp(){
    menuClick.addEventListener ( 'click' , function (){
        menuClick.style.display = 'none'
        side_Bar_Select.style.display = "block"
    })
}
menuShowUp()


// function for cut the menu in small screen
function sideBarPopUp() {
    crossIcon.addEventListener('click' , function(){
        side_Bar_Select.style.display = 'none';
        menuClick.style.display = 'inline';
        });
}
sideBarPopUp()



