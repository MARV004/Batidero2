const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const imgPop = document.querySelector('.menu-card-image');

//Hamburger button for responsive design //
menu_btn.addEventListener('click',function (){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

//Modal  button //
openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
})

//Pop up Images for menu Section//
document.querySelectorAll('.menu-card-image').forEach(image =>{
     image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image').src = image.getAttribute('src');
     }
});

document.querySelector('.pop-image').onclick = () =>
document.querySelector('.pop-image').style.display = 'none';
