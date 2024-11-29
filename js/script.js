// In your main JavaScript file
// Remove unnecessary code and imports

const script = document.createElement('script');
script.src = './js/guessScript.js'; // Adjust the path
document.body.appendChild(script);

// Rest of your code remains the same


let allPost = document.querySelector(".allPost");
let tskname = document.querySelector(".tskname");
let tsktasks = document.querySelector(".tsktasks");
let postBtn = document.querySelector(".postBtn");
let updtBtn = document.querySelector(".updtBtn");
let error = document.querySelector(".error");
let arr = [];
let inStore;

function isNumber(value) 
{
    return !isNaN(value) && value.trim() !== "";
}

postBtn.addEventListener("click",function()
{
    error.innerHTML = "";
    if(!tskname.value && !tsktasks.value) 
    {
        error.innerHTML = "<div class='alert alert-danger'>Please fill up</div>";
    } 
    else if (!tskname.value) 
    {
        error.innerHTML = "<div class='alert alert-danger'>Please fill up Name</div>";
    } 
    else if (!tsktasks.value)
    {
        error.innerHTML = "<div class='alert alert-danger'>Please fill up Tasks</div>";
    } 
    else 
    {
        //to add the data which is stored in arr and make object
        arr.push({
            name: tskname.value,
            tasks: tsktasks.value 
        });
        tskname.value = "";
        tsktasks.value = "";
        error.innerHTML = "";
        allPost.innerHTML = "";
        display();
    }
});

updtBtn.addEventListener("click",function(){
    arr[inStore].name= tskname.value;
    arr[inStore].tasks= tsktasks.value;
    allPost.innerHTML="";
    display()
    postBtn.style.display="inline-block"
    updtBtn.style.display="none"
    tskname.value=""
    tsktasks .value=""
})

function display(){
    allPost.innerHTML="";
    arr.map(item =>
    {
        let editBtnTxt="Edit";
        let cardColor = "";
        if(isNumber(item.name))
        {
            editBtnTxt="Play"
            cardColor="bg-num"
        }
        else 
        {
            cardColor = "bg-normal"; 
        }
        allPost.innerHTML += `
        <div class="card mt-3 ${cardColor}" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.tasks}</p>
              <button href="#" class="btn btn-success edt">${editBtnTxt}</button>
              <button href="#" class="btn btn-danger dlt">Delete</button>
            </div>
        </div>
        `;
    });

    let dltBtn=document.querySelectorAll(".dlt") 
    let dltBtnConvert=Array.from(dltBtn)
    dltBtnConvert.map((item,index)=>{
        item.addEventListener("click", function(){
            arr.splice(index,1);
            allPost.innerHTML=""
            display();
        })
    })

    let edtBtn=document.querySelectorAll(".edt")
    let edtBtnConvert=Array.from(edtBtn)
    edtBtnConvert.map((item2,index)=>{
        item2.addEventListener("click",function(){
            if(item2.innerHTML=="Play")
            {
                alert(`This button is for Guessgame`);

            }
            else
            {
                tskname.value=arr[index].name
                tsktasks.value=arr[index].tasks
                
                updtBtn.style.display="inline-block"
                postBtn.style.display="none"
                
                inStore=index
            }
        })
    })
}
display()
