window.addEventListener("load", init);
function $(elem) {
    return document.querySelectorAll(elem);
}
function ID(elem) {
    return document.getElementById(elem);
}
var lepes = 0;
function init() {
    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt += "<div></div>";
    }
    $("section")[0].innerHTML=txt;
    
    var elem=$("section div")
    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener("click",kattintas);
        
    }
    /*elemek fölé viszem az egeret változzon a háttér*/
    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener("mouseover",hatterszinfel);
        elem[index].addEventListener("mouseout",hatterszinle);
        
    }
  
}
function hatterszinfel() {
    event.target.className="kiemel";
}
function hatterszinle() {
    event.target.className="";
}
function kattintas() { 
    if (lepes % 2 === 0) {
        event.target.innerHTML="X";
    }else{
        event.target.innerHTML="O";
    }
    lepes++;
    event.target.removeEventListener("click",kattintas);
    event.target.removeEventListener("click",hatterszinfel);
    event.target.removeEventListener("click",hatterszinle);
    event.target.className="hatter";
    
}
