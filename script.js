let search = document.querySelector('.header_right_input_border');
let close = document.querySelector('.header_right_btn_off_active');
let slider = document.querySelector('.offer_slider');
let dot1 = document.querySelector('#dot_first');
let dot2 = document.querySelector('#dot_second');
let dot3 = document.querySelector('#dot_three');

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
}
function slider_2() {
    slider.style.background = 'url(images/pict_slider2.png)';
    dot2.style.color = 'white';
    dot2.style.backgroundColor = 'white';
    dot1.style.color = '#CACACA';
    dot1.style.backgroundColor = '#CACACA';
    dot3.style.color = '#CACACA';
    dot3.style.backgroundColor = '#CACACA';
    
}
function slider_3() {
    slider.style.background = 'url(images/pict_slider3.png)';
    dot3.style.color = 'white';
    dot3.style.backgroundColor = 'white';
    dot2.style.color = '#CACACA';
    dot2.style.backgroundColor = '#CACACA';
    dot1.style.color = '#CACACA';
    dot1.style.backgroundColor = '#CACACA';
    
}
