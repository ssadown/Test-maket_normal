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
let y = 0;
let z = 0
let radio = document.querySelector('.radio_button');
let burger = document.querySelector('.header_left_burger');
let windowWidth = window.innerWidth;
let about = document.querySelector('.about_content');
console.log(windowWidth);

function burger_active() {
    if (z === 0){
    burger.innerHTML = '<div class="header_left_burger_border"><button class="header_left_burger_button" onclick="burger_active()"><svg class="header_right_btn_off_active_svg" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg></button> </div> <div class="header_left_burger_nav"><ul><li class="burger_nav_menu"><a href="#" id="list1">О нас</a></li><li class="burger_nav_menu"><a href="#" id="list2">Проекты</a></li><li class="burger_nav_menu"><a href="#" id="list3">Этапы</a></li><li class="burger_nav_menu"><a href="#" id="list4">Отзывы</a></li><li class="burger_nav_menu"><a href="#" id="list5">Контакты</a></li></ul>';
    burger.style.height = '100vh';
    burger.style.width = '420px';
    burger.style.flexDirection = 'column';
    burger.style.backgroundColor = '#FFFFFF';
    burger.style.transitionDuration = '0.5s';
    z = z +1;
    } else if (z === 1) {
        burger.style.position = '';
        burger.style.height = '100%';
        burger.style.width = '20%';
        burger.style.backgroundColor = '';
        burger.innerHTML = '<button class="header_left_burger_button" onclick="burger_active()"><svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg"><line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg></button>';
        z = z - 1;
    }
}

function radio_click() {
    if (y === 0){
        y = y + 1;
    radio.style.background ='url(images/radio.png)';
    radio.style.backgroundRepeat = 'no-repeat';
    radio.style.backgroundPosition = 'center';
    } else if (y === 1) {
        radio.style.background = '';
        y = y - 1;
    }
}

function accordionClick() {
    /* вставка 2 функций при помощи использования if & else if */
    if (x === 0 && windowWidth > 768) {
    accordion.style.transform = 'rotate(60deg)';
    accordion.style.transitionDuration = '1s';
    accordionBlock.style.height = '400px';
    accordionAnswer.style.height = '200px';
    accordionAnswer.style.transitionDuration = '0.7s';
    x = x + 1;
    } else if (x === 1 && windowWidth > 768) {
        accordion.style.transform = 'rotate(0deg)';
        accordion.style.transitionDuration = '1s';
        accordionBlock.style.height = '200px';
        accordionAnswer.style.height = '0px';
        accordionAnswer.style.transitionDuration = '0.7s';
        x = x - 1;
    }
    if (x === 0 && windowWidth <= 768 && windowWidth > 320) {
        accordion.style.transform = 'rotate(60deg)';
        accordion.style.transitionDuration = '1s';
        accordionBlock.style.height = '600px';
        accordionAnswer.style.height = '400px';
        accordionAnswer.style.transitionDuration = '0.7s';
        x = x + 1;
        } else if (x === 1 && windowWidth <= 768 && windowWidth > 320) {
            accordion.style.transform = 'rotate(0deg)';
            accordion.style.transitionDuration = '1s';
            accordionBlock.style.height = '200px';
            accordionAnswer.style.height = '0px';
            accordionAnswer.style.transitionDuration = '0.7s';
            x = x - 1;
        }
        if (x === 0 && windowWidth <= 320) {
            accordion.style.transform = 'rotate(60deg)';
            accordion.style.transitionDuration = '1s';
            accordionBlock.style.height = '900px';
            accordionAnswer.style.height = '700px';
            accordionAnswer.style.transitionDuration = '0.7s';
            x = x + 1;
            } else if (x === 1 && windowWidth <= 320 ) {
                accordion.style.transform = 'rotate(0deg)';
                accordion.style.transitionDuration = '1s';
                accordionBlock.style.height = '200px';
                accordionAnswer.style.height = '0px';
                accordionAnswer.style.transitionDuration = '0.7s';
                x = x - 1;
            }
}

function step1() {
    if (windowWidth > 1024) {
    workPict.style.background = 'url(images/step_1.png)';
    workPict.style.backgroundSize = '100% 100%';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Проводим консультацию';
    workInfo.innerHTML = 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
    step_text1.style.color = '#E1670E';
    step_text2.style.color = 'black';
    step_text3.style.color = 'black';
    step_text4.style.color = 'black';
    } else if (windowWidth <= 1024 && windowWidth > 768) {
            workPict.style.background = 'url(images/step_1_1024.png)';
            workPict.style.backgroundSize = '100% 100%';
            workPict.style.backgroundRepeat = 'no-repeat';
            workHead.innerHTML = 'Проводим консультацию';
            workInfo.innerHTML = 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
            step_text1.style.color = '#E1670E';
            step_text2.style.color = 'black';
            step_text3.style.color = 'black';
            step_text4.style.color = 'black';
    } else if (windowWidth <= 768 && windowWidth > 320) {
        workPict.style.background = 'url(images/step_1_768.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Проводим консультацию';
        workInfo.innerHTML = 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
        step_text1.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text3.style.color = 'black';
        step_text4.style.color = 'black';
    } else if (windowWidth <= 320) {
        workPict.style.background = 'url(images/step_1_320.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Проводим консультацию';
        workInfo.innerHTML = 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
        step_text1.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text3.style.color = 'black';
        step_text4.style.color = 'black';
    }
        
}
function step2() { 
    if (windowWidth > 1024) {
    workPict.style.background = 'url(images/step_2.png)';
    workPict.style.backgroundSize = '100% 100%';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Составляем смету';
    workInfo.innerHTML = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
    step_text2.style.color = '#E1670E';
    step_text1.style.color = 'black';
    step_text3.style.color = 'black';
    step_text4.style.color = 'black';
    } else if (windowWidth <=1024 && windowWidth > 768) {
        workPict.style.background = 'url(images/step_2_1024.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Составляем смету';
        workInfo.innerHTML = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
        step_text2.style.color = '#E1670E';
        step_text1.style.color = 'black';
        step_text3.style.color = 'black';
        step_text4.style.color = 'black';
    } else if (windowWidth <= 768 && windowWidth > 320) {
        workPict.style.background = 'url(images/step_2_768.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Составляем смету';
        workInfo.innerHTML = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
        step_text2.style.color = '#E1670E';
        step_text1.style.color = 'black';
        step_text3.style.color = 'black';
        step_text4.style.color = 'black';
    } else if (windowWidth <= 320) {
        workPict.style.background = 'url(images/step_2_320.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Составляем смету';
        workInfo.innerHTML = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
        step_text2.style.color = '#E1670E';
        step_text1.style.color = 'black';
        step_text3.style.color = 'black';
        step_text4.style.color = 'black';
    }
}
function step3() {
    if (windowWidth > 1024) {
    workPict.style.background = 'url(images/step_3.png)';
    workPict.style.backgroundSize = '100% 100%';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Привлекаем подрядчиков';
    workInfo.innerHTML = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
    step_text3.style.color = '#E1670E';
    step_text2.style.color = 'black';
    step_text1.style.color = 'black';
    step_text4.style.color = 'black';
    } else if (windowWidth <=1024 && windowWidth > 768) {
        workPict.style.background = 'url(images/step_3_1024.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Привлекаем подрядчиков';
        workInfo.innerHTML = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
        step_text3.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text1.style.color = 'black';
        step_text4.style.color = 'black';
    } else if (windowWidth <= 768 && windowWidth >320) {
        workPict.style.background = 'url(images/step_3_768.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Привлекаем подрядчиков';
        workInfo.innerHTML = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
        step_text3.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text1.style.color = 'black';
        step_text4.style.color = 'black';
    } else if (windowWidth <=320) {
        workPict.style.background = 'url(images/step_3_320.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Привлекаем подрядчиков';
        workInfo.innerHTML = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
        step_text3.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text1.style.color = 'black';
        step_text4.style.color = 'black';
    }
}
function step4() {
    if (windowWidth > 1024) {
    workPict.style.background = 'url(images/step_4.png)';
    workPict.style.backgroundSize = '100% 100%';
    workPict.style.backgroundRepeat = 'no-repeat';
    workHead.innerHTML = 'Инспектируем все этапы работ';
    workInfo.innerHTML = 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
    step_text4.style.color = '#E1670E';
    step_text2.style.color = 'black';
    step_text3.style.color = 'black';
    step_text1.style.color = 'black';
    } else if (windowWidth <= 1024 && windowWidth > 768) {
        workPict.style.background = 'url(images/step_4_1024.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Инспектируем все этапы работ';
        workInfo.innerHTML = 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
        step_text4.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text3.style.color = 'black';
        step_text1.style.color = 'black';
    } else if (windowWidth <= 768 && windowWidth > 320) {
        workPict.style.background = 'url(images/step_4_768.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Инспектируем все этапы работ';
        workInfo.innerHTML = 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
        step_text4.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text3.style.color = 'black';
        step_text1.style.color = 'black';
    } else if (windowWidth <= 320) {
        workPict.style.background = 'url(images/step_4_320.png)';
        workPict.style.backgroundSize = '100% 100%';
        workPict.style.backgroundRepeat = 'no-repeat';
        workHead.innerHTML = 'Инспектируем все этапы работ';
        workInfo.innerHTML = 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
        step_text4.style.color = '#E1670E';
        step_text2.style.color = 'black';
        step_text3.style.color = 'black';
        step_text1.style.color = 'black';
    }
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
    if(windowWidth > 1024) {
    slider.style.background = 'url(images/pict_slider1.png)';
    dot1.style.color = 'white';
    dot1.style.backgroundColor = 'white';
    dot2.style.color = '#CACACA';
    dot2.style.backgroundColor = '#CACACA';
    dot3.style.color = '#CACACA';
    dot3.style.backgroundColor = '#CACACA';
    slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <=1024 && windowWidth> 768) {
        slider.style.background = 'url(images/slider_1_1024.png)';
        dot1.style.color = 'white';
        dot1.style.backgroundColor = 'white';
        dot2.style.color = '#CACACA';
        dot2.style.backgroundColor = '#CACACA';
        dot3.style.color = '#CACACA';
        dot3.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <= 768 && windowWidth > 320) {
        slider.style.background = 'url(images/slider_1_768.png)';
        dot1.style.color = 'white';
        dot1.style.backgroundColor = 'white';
        dot2.style.color = '#CACACA';
        dot2.style.backgroundColor = '#CACACA';
        dot3.style.color = '#CACACA';
        dot3.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <=320) {
        slider.style.background = 'url(images/slider_1_320.png)';
        dot1.style.color = 'white';
        dot1.style.backgroundColor = 'white';
        dot2.style.color = '#CACACA';
        dot2.style.backgroundColor = '#CACACA';
        dot3.style.color = '#CACACA';
        dot3.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    }
}
function slider_2() {
    if (windowWidth > 1024) {
    slider.style.background = 'url(images/pict_slider2.png)';
    dot2.style.color = 'white';
    dot2.style.backgroundColor = 'white';
    dot1.style.color = '#CACACA';
    dot1.style.backgroundColor = '#CACACA';
    dot3.style.color = '#CACACA';
    dot3.style.backgroundColor = '#CACACA';
    slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <= 1024 && windowWidth > 768) {
        slider.style.background = 'url(images/slider_2_1024.png)';
        dot2.style.color = 'white';
        dot2.style.backgroundColor = 'white';
        dot1.style.color = '#CACACA';
        dot1.style.backgroundColor = '#CACACA';
        dot3.style.color = '#CACACA';
        dot3.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <= 768 && windowWidth > 320) {
        slider.style.background = 'url(images/slider_2_768.png)';
        dot2.style.color = 'white';
        dot2.style.backgroundColor = 'white';
        dot1.style.color = '#CACACA';
        dot1.style.backgroundColor = '#CACACA';
        dot3.style.color = '#CACACA';
        dot3.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <= 320) {
        slider.style.background = 'url(images/slider_2_320.png)';
        dot2.style.color = 'white';
        dot2.style.backgroundColor = 'white';
        dot1.style.color = '#CACACA';
        dot1.style.backgroundColor = '#CACACA';
        dot3.style.color = '#CACACA';
        dot3.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    }
}
function slider_3() {
    if (windowWidth > 1024) {
    slider.style.background = 'url(images/pict_slider3.png)';
    dot3.style.color = 'white';
    dot3.style.backgroundColor = 'white';
    dot2.style.color = '#CACACA';
    dot2.style.backgroundColor = '#CACACA';
    dot1.style.color = '#CACACA';
    dot1.style.backgroundColor = '#CACACA';
    slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <=1024 && windowWidth > 768) {
        slider.style.background = 'url(images/slider_3_1024.png)';
        dot3.style.color = 'white';
        dot3.style.backgroundColor = 'white';
        dot2.style.color = '#CACACA';
        dot2.style.backgroundColor = '#CACACA';
        dot1.style.color = '#CACACA';
        dot1.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <= 768 && windowWidth > 320) {
        slider.style.background = 'url(images/slider_3_768.png)';
        dot3.style.color = 'white';
        dot3.style.backgroundColor = 'white';
        dot2.style.color = '#CACACA';
        dot2.style.backgroundColor = '#CACACA';
        dot1.style.color = '#CACACA';
        dot1.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    } else if (windowWidth <= 320) {
        slider.style.background = 'url(images/slider_3_320.png)';
        dot3.style.color = 'white';
        dot3.style.backgroundColor = 'white';
        dot2.style.color = '#CACACA';
        dot2.style.backgroundColor = '#CACACA';
        dot1.style.color = '#CACACA';
        dot1.style.backgroundColor = '#CACACA';
        slider.style.backgroundRepeat = 'no-repeat';
    }
}
function sliderSlider() {
setTimeout(slider_1,);
setTimeout(slider_2, 5000);
setTimeout(slider_3, 10000);
};
sliderSlider();
setInterval(sliderSlider, 15000);