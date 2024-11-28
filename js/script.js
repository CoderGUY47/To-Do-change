let allPost = document.querySelector(".allPost");
let tskname = document.querySelector(".tskname");
let tsktasks = document.querySelector(".tsktasks");
let postBtn = document.querySelector(".postBtn");
let updtBtn = document.querySelector(".updtBtn");
let error = document.querySelector(".error");
let arr = [];
let inStore;

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
        arr.push
        ({
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


updtBtn.addEventListener("click",function()
{
    arr[inStore].name= tskname.value;
    arr[inStore].tasks= tsktasks.value;
    allPost.innerHTML="";
    display()
    postBtn.style.display="inline-block"
    updtBtn.style.display="none"
    tname.value=""
    tasks .value=""
})


function display() 
{
    allPost.innerHTML="";
    arr.map(item =>
    {
        let cardColorClass = "";
        if (!isNaN(item.name) || !isNaN(item.tasks)) 
        {
            cardColorClass = "bg-num";
        } 
        else 
        {
            cardColorClass = "bg-normal"; 
        }

        allPost.innerHTML += `
        <div class="card mt-3 ${cardColorClass}" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.tasks}</p>
              <button href="#" class="btn btn-success edt">Edit</button>
              <button href="#" class="btn btn-danger dlt">Delete</button>
            </div>
        </div>
        `;
    });

    let dltBtn=document.querySelectorAll(".dlt") 
    let dltBtnConvert=Array.from(dltBtn)
    dltBtnConvert.map((item,index)=>
    {
        item.addEventListener("click", function()
        {
            arr.splice(index,1);
            allPost.innerHTML=""
            display();
        })
    })

    let edtBtn=document.querySelectorAll(".edt")
    let edtBtnConvert=Array.from(edtBtn)
    edtBtnConvert.map((item2,index)=>
    {
        item2.addEventListener("click",function()
        {
            tskname.value=arr[index].name
            tsktasks.value=arr[index].tasks
            
            updtBtn.style.display="inline-block"
            postBtn.style.display="none"
            
            inStore=index
        })
    })

}





