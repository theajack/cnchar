window.initRunJS = function (J) {
    J.id('');
    var input = document.getElementById('tryInput');
    input.removeAttribute('readonly');
    input.removeAttribute('class');
    input.value = '';

    window.runJS = function () {

    };
};