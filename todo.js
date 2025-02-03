const inputBox=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container")
const progressBar = document.getElementById("progressBar");
progressBar.innerHTML = `<span id="progressText">0%</span>`;
const progressText = document.getElementById("progressText");

function addTask(){
    if(inputBox.value===""){
        alert("You must write something!");
    }else{
        const li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value='';
    saveData()
    updateprogress();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    updateprogress();

},false)
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
    updateprogress();
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem('data')
    updateprogress();
}
showTask()
function updateprogress(){
    const Totaltasks=document.querySelectorAll('li').length
    const Completedtasks=document.querySelectorAll('li.checked').length
    const progress=Totaltasks===0?0:(Completedtasks/Totaltasks)*100;
    progressBar.style.width = progress + "%";
    progressText.innerText = `${Math.round(progress)}%`;
}