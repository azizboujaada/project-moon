var star1=document.getElementById("star-1");
var star2=document.getElementById("star-2");
var star3=document.getElementById("star-3");
var star4=document.getElementById("star-4");
var star5=document.getElementById("star-5");
var star6=document.getElementById("star-6");
var star7=document.getElementById("star-7");
var nouvil=document.querySelector(".nouvil");
window.onscroll=function(){
    var value=scrollY;
    star1.style.left=value+"px";
    star2.style.top=value*3+"px";
    star3.style.top=value*2+"px";
    star4.style.top=value*1.5+"px";
    star5.style.top=value+"px";
    star6.style.top=value+"px";
    star6.style.left=value*3+"px";
    nouvil.style.fontSize=value+"px";
    if(scrollY>=67){
        nouvil.style.fontSize=67+"px";
        nouvil.style.position="fixed";
    }
    if(scrollY>=480){
        nouvil.style.display="none";
    }
    else{
        display="block";
    }
    if(scrollY>=127){
        document.querySelector(".main").style.background="blue";

    } 
    else{document.querySelector(".main").style.background="#200016"}
    if(scrollY>=127){
        document.querySelector(".logo").style.color="blue";
    }
    else{
        document.querySelector(".logo").style.color="white";
    }
    if(scrollY>=127){
        document.querySelector("#nav").style.color="blue";
    }
    else{
        document.querySelector("#nav").style.color="green";
    }
    
}