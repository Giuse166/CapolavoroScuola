function navBar(){
    var x = document.getElementById("navigazioneMobile")
    if(x.style.display==="flex"){
        x.style.display="none";
    }else{
        x.style.gap=0;
        x.style.display="flex";
        x.style.flexDirection="column-reverse";
    }
}