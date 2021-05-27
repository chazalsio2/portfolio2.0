<<<<<<< HEAD
var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
}
function closeModal() {
    overlay.style.display='none';
=======
var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
}
function closeModal() {
    overlay.style.display='none';
>>>>>>> d2a0064f1d40c115fdff89b5b66ed0fd33055a82
    }