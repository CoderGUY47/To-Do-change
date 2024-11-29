
let headingOne=document.querySelector(".headingOne");
let inputOne=document.querySelector(".inputOne");
let btnOne=document.querySelector(".btnOne");
let error=document.querySelector(".error");

let headingTwo=document.querySelector(".headingTwo");
let chance=document.querySelector(".chance");
let inputTwo=document.querySelector(".inputTwo");
let btnTwo=document.querySelector(".btnTwo");
let error2=document.querySelector(".error2");
let count=3

btnOne.addEventListener("click",function(){
    if(!inputOne.value)
    {
        error.innerHTML="Fill the blank box";
    }
    else if(isNaN(inputOne.value))
    {
        error.innerHTML="Please enter a number between(1-9)";
    }
    else if(!(inputOne.value>0 && inputOne.value<=9))
    {
        error.innerHTML="Enter the given number between(1-9)";
    }
    else
    {
        headingTwo.style.display="block";
        chance.style.display="block"; 
        chance.innerHTML=`Chance: ${count}`;
        inputTwo.style.display="inline-block";
        btnTwo.style.display="inline-block";
        error2.style.display="block";


        headingOne.style.display="none";
        inputOne.style.display="none";
        btnOne.style.display="none";
        error.style.display="none";
    }
});




btnTwo.addEventListener("click",function(){
    if(!inputTwo.value)
    {
        error2.innerHTML="Fill the blank box";
    }
    else if(isNaN(inputTwo.value))
    {
        error2.innerHTML="Please enter a number between(1-9)";
    }
    else if(!(inputTwo.value>0 && inputTwo.value<=9))
    {
        error2.innerHTML="Enter the given number between(1-9)";
    }
    else
    {
        if(count>1)
        {
            count--;
            chance.innerHTML=`Chance: ${count}`;
            if(inputOne.value==inputTwo.value)
            {
                headingTwo.innerHTML="Winner is Player 2";
                btnTwo.style.display="none";
            }
        }
        else
        {
            count=0
            chance.innerHTML=`Chance: ${count}`;
            headingOne.innerHTML="Winner is Player 1"; //if count=0 then i have to update with this line
            btnTwo.style.display="none";
        }
    }
});