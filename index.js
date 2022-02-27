function hamburger(){
    const click = document.getElementById("links");
    const close = document.getElementById("close");

    if(click.style.display == "block"){
        click.style.display = "none";
        close.setAttribute("src", "./images/icon-hamburger.svg");
    }

        else{
            click.style.display = "block"; 
            close.setAttribute("src", "./images/icon-close.svg");
        }
}