const valikko = document.querySelector('.valikko');
const valikkoKiinni = document.querySelector('.valikkoKiinni');
const valikkoAuki = document.querySelector('.valikkoAuki');


valikko.addEventListener('click',close);
valikkoAuki.addEventListener('click',show);
valikkoKiinni.addEventListener('click',close);


function show(){
    valikko.style.display = 'flex';
    valikko.style.top = '0';
}
function close(){
    valikko.style.top = '-100%';
}