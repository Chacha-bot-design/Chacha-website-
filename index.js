window.onload=function(){
    const greeting =document.getElementById('greeting');
    const hour = new Date().getHours();
    let message = 'Hello!';

    if(hour<12){
        message="Good Morning!";
    }else if (hour<15){
        message="Good Afternoon!";

    }
    else{
        message="Good Evening!"
    }

    greeting.textContent=message;
}

let slideIndex=0;
showSlide();

function showSlide(){
    let slides =document.getElementsByClassName("slide");
    for(let i = 0; i<slides.length; i++)
    {
        slides[i].style.display ="none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {slideIndex = 1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlide,2000);

}