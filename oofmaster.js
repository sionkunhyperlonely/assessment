console.log(`oofmaster.js:loaded`);
const binconnect = document.getElementById('binconnect');
binconnect.addEventListener('click', () => {
    console.log('binconnecting');
    infodelete();
    warningdelete();
    binconnect.remove();
    binconnected();
    binbutton();
    console.log('binconnected');
});
function binbutton() {
    let target = document.getElementById('bbutton');
    let bbutton = document.createElement('button');
    bbutton.id = "bbin";
    bbutton.textContent = "捨てる";
    target.appendChild(bbutton);
}
function binconnected() {
    let target = document.getElementById('add');
    let textarea = document.createElement('textarea');
    textarea.rows = "3";
    textarea.cols = "20";
    textarea.id = "trash";
    textarea.textContent = '';
    target.after(textarea);
}
function infodelete(){
    const target = document.getElementById('bininfo');
    target.remove();
}
function warningdelete() {
    let target = document.getElementById('binwarning');
    target.remove();
}
