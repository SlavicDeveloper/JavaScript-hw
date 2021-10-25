'use strict';
// 1. получите все кнопки и сохраните в переменную
let btns = document.querySelectorAll("button");
// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
btns.forEach(function(btn){
    btn.addEventListener("click", handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent){
    // 2. из объекта события получите ссылку на .product 
    // сохраните в переменную:
    // const cardNode = ;
    const cardNode = clickedButtonEvent.target.parentNode;
    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode.querySelector(".product"), // здесь элемент с классом .product
        img: cardNode.querySelector("img"), // здесь картинка внутри .product
        productName: cardNode.querySelector(".productName") , // здесь .productName, который внутри .product
        button: cardNode.querySelector(".product>button"), // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    let btn_text = card.button.innerText;
    
    if (btn_text == "Подробнее") { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (btn_text == "Отмена") { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = "block";
    // 5. картинке внутри .product ставим стиль display: block
    card.wrap.querySelector(".desk").remove;
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.button.innerText = "Подробнее";
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = "none";
    // 6. картинке внутри .product ставим display: none
    let rand_txt = "random_text";
    // 6.1 сохраняем произвольный текст в переменную
    card.productName.insertAdjacentHTML("afterend", '<div class = "desc">' + rand_txt + '</div>');
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.button.innerText = "Отмена";
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    
}