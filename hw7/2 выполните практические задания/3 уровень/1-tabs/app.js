const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let txt = document.querySelector(".text");
let nv_link = document.querySelectorAll(".nav-link");
nv_link.forEach(function(el){
    el.addEventListener("click", clickHandler);
});


function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
   changeText(event);
   changeActiveClass(event);
}


function changeActiveClass(event) {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
}


function changeText(event) {
    let txt_content = event.target.textContent;
    if(txt_content == "Link 1"){
        txt.textContent = texts.text1;
    }else if(txt_content == "Link 2"){
        txt.textContent = texts.text2;
    }else if(txt_content == "Link 3"){
        txt.textContent = texts.text3;
    };
}