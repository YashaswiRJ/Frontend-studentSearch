var eventButtonPress = document.querySelectorAll("button")[1];
eventButtonPress.addEventListener("click", modeShift);
var change = document.querySelectorAll("link")[0];
var btnChange = document.querySelectorAll("button")[1];
function modeShift(){
    let att = change.getAttribute("href");
    if(att == "styles.css"){
        change.setAttribute("href", "styleDark.css");
        btnChange.setAttribute("class", "btn btn-warning");
    } else {
        change.setAttribute("href", "styles.css");
        btnChange.setAttribute("class", "btn btn-light");
    }
}

