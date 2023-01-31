
const contentlBlock = document.querySelector(".content-wrapper");
const burger = document.querySelector (".burger__button");
const menu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".mobile-menu__nav-list");
let items = navList.querySelectorAll(".nav-list__link");
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
let lastScroll = 0;
const header = document.querySelector (".burger-header");
const defaultOffset = 60;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
const uploadFile = document.querySelector(".input__upload-file");
const actualBtn = document.getElementById('actual-btn');
const fileChosen = document.getElementById('file-chosen');
const deleteChosen = document.getElementById('delete-chosen-btn');
const chosenIcon = document.getElementById('chosen-icon');
const form = document.getElementById('form');


//выпадающее меню
burger.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    contentlBlock.classList.toggle('display-none');

    if (menu.classList.contains('display-none') == true) {
        menu.classList.remove('display-none');
    }
    else {menu.classList.add('display-none');
    }
})

 for ( let i = 0 ; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            menu.classList.add('display-none');
            contentlBlock.classList.remove('display-none');
            document.body.classList.remove('no-scroll');
        })
    }


//хэдер появляющийся при прокрутке вверх
window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
    header.classList.add('hide');}
        else if(scrollPosition() < lastScroll  && containHide()){
             header.classList.remove('hide');
        }
            lastScroll = scrollPosition();

    } )


//custom input для отправки файла
actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
    deleteChosen.classList.remove('display-none');
    chosenIcon.classList.add('display-none');
    })

deleteChosen.addEventListener('click', () => {
    fileChosen.textContent = "";
     deleteChosen.classList.add('display-none');
    chosenIcon.classList.remove('display-none');
    window.location.href = 'file:///home/lenovo/dev/Bility/landing/app/index.html?#contacts';
    })


// парвметры валидации
const validation = (form) => {
    removeError = (input) => {
        if (input.classList.contains('form-element__input_error')) {
            input.classList.remove('form-element__input_error');
        }

    }

    createError = (input) => {
       input.classList.add('form-element__input_error')
       console.log(input)
    }

    let result = true;
    document.querySelectorAll('.form-element__input').forEach(input => {
        removeError(input)
        if(input.value == "") {
            console.log('error');
            result = false;
            createError(input);
        }
    });

    return result;
}



//валидация формы
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(validation(this) == true) {
        console.log('valid')
    }

})


