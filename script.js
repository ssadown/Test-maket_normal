let search = document.querySelector('.header_right_input_border');
let close = document.querySelector('.header_right_btn_off_active');
let slider = document.querySelector('.offer_slider');
let dot1 = document.querySelector('#dot_first');
let dot2 = document.querySelector('#dot_second');
let dot3 = document.querySelector('#dot_three');
let workPict = document.querySelector('.work_content_pict');
let workHead = document.querySelector('.work_content_info_header_text');
let workInfo = document.querySelector('.work_content_info_body_text');
let step_text1 = document.querySelector('#step_1');
let step_text2 = document.querySelector('#step_2');
let step_text3 = document.querySelector('#step_3');
let step_text4 = document.querySelector('#step_4');
let accordion = document.querySelector('.question_block_quest_button_border');
let accordionBlock = document.querySelector('#quest1');
let accordionAnswer = document.querySelector('.question_block_answer_border');
let x = 0;

function accordionClick() {
    /* вставка 2 функций при помощи использования if & else if */
    if (x === 0) {
    accordion.style.transform = 'rotate(60deg)';
    accordion.style.transitionDuration = '1s';
    accordionBlock.style.height = '400px';
    accordionAnswer.style.height = '200px';
    accordionAnswer.style.transitionDuration = '0.7s';
    x = x + 1;
    } else if (x === 1) {
        accordion.style.transform = 'rotate(0deg)';
        accordion.style.transitionDuration = '1s';
        accordionBlock.style.height = '200px';
        accordionAnswer.style.height = '0px';
        accordionAnswer.style.transitionDuration = '0.7s';
        x = x - 1;
    }
}

function step1() {
    workPict.style.background = 'url(images/step_1.png)';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Проводим консультацию';
    workInfo.innerHTML = 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
    step_text1.style.color = '#E1670E';
    step_text2.style.color = 'black';
    step_text3.style.color = 'black';
    step_text4.style.color = 'black';
}
function step2() {
    workPict.style.background = 'url(images/step_2.png)';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Составляем смету';
    workInfo.innerHTML = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
    step_text2.style.color = '#E1670E';
    step_text1.style.color = 'black';
    step_text3.style.color = 'black';
    step_text4.style.color = 'black';
}
function step3() {
    workPict.style.background = 'url(images/step_3.png)';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Привлекаем подрядчиков';
    workInfo.innerHTML = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
    step_text3.style.color = '#E1670E';
    step_text2.style.color = 'black';
    step_text1.style.color = 'black';
    step_text4.style.color = 'black';
}
function step4() {
    workPict.style.background = 'url(images/step_4.png)';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Инспектируем все этапы работ';
    workInfo.innerHTML = 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
    step_text4.style.color = '#E1670E';
    step_text2.style.color = 'black';
    step_text3.style.color = 'black';
    step_text1.style.color = 'black';
}

function opacity() {
    search.style.opacity = '1';
    close.style.opacity = '1';
};
function close_opacity() {
    search.style.opacity = '0';
    close.style.opacity = '0';
};
function slider_1() {
    slider.style.background = 'url(images/pict_slider1.png)';
    dot1.style.color = 'white';
    dot1.style.backgroundColor = 'white';
    dot2.style.color = '#CACACA';
    dot2.style.backgroundColor = '#CACACA';
    dot3.style.color = '#CACACA';
    dot3.style.backgroundColor = '#CACACA';
    slider.style.backgroundRepeat = 'no-repeat';
}
function slider_2() {
    slider.style.background = 'url(images/pict_slider2.png)';
    dot2.style.color = 'white';
    dot2.style.backgroundColor = 'white';
    dot1.style.color = '#CACACA';
    dot1.style.backgroundColor = '#CACACA';
    dot3.style.color = '#CACACA';
    dot3.style.backgroundColor = '#CACACA';
    slider.style.backgroundRepeat = 'no-repeat';
}
function slider_3() {
    slider.style.background = 'url(images/pict_slider3.png)';
    dot3.style.color = 'white';
    dot3.style.backgroundColor = 'white';
    dot2.style.color = '#CACACA';
    dot2.style.backgroundColor = '#CACACA';
    dot1.style.color = '#CACACA';
    dot1.style.backgroundColor = '#CACACA';
    slider.style.backgroundRepeat = 'no-repeat';
}
