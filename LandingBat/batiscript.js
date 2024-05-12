const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const popUp = document.querySelectorAll('.img-list img');
const poppingUp = document.querySelector('.popup-image');
const changePop = document.querySelector('.popup-image img');
const closePopUp = document.querySelector('.closePopUp');


//carousel 



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


//Carousel 
const initSlider = () => {
    const imageList = document.querySelector('.menu-slider .img-list');
    const slideButton = document.querySelectorAll('.menu-slider .slide-button');
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButton.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === 'prev-slide' ?  -1  : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";

    }
    imageList.addEventListener("scroll", () => {
        handleSlideButtons()
    })
}

window.addEventListener('load', initSlider);





const poppedImg = popUp.forEach(image => {
    image.onclick = () => {
        poppingUp.style.display = 'block';
        changePop.src = image.getAttribute('src');
        console.log('image clicked');
    }
  

});

const closedcarousel = closePopUp.onclick = () =>
poppingUp.style.display = 'none';


closePopUp.onclick = () =>
poppingUp.style.display = 'none';





//Pop up Images for menu Section//
//


//document.querySelectorAll('.img-list img').forEach(image =>{
//     image.onclick = () => {
       
//        document.querySelector('.popup-image').style.display = 'block';
//        document.querySelector('.popup-image img').src = image.getAttribute('src');
//     }
//});




