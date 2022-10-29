let myName = "aung hein bo";

export function showMyname(){
    return myName;
}

export function showMynameUI(selector){
    document.querySelector(selector).innerHTML = myName;
}