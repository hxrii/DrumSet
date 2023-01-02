
let handleClick = ()=>{
    alert("I got clicked");
}

for(let i =0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",()=>{
    alert("New Alert")
});
}


