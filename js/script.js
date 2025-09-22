let incompleteTaskNum;
let completeTaskNum;
function increaseDecrease() {
    let incompleteTask = document.getElementById("task-incom").innerText;
    let completeTask = document.getElementById("task-com").innerText;
    incompleteTaskNum = Number(incompleteTask);
    completeTaskNum = Number(completeTask);
    incompleteTaskNum = incompleteTaskNum - 1;
    completeTaskNum = completeTaskNum + 1;
    document.getElementById("task-incom").innerText = incompleteTaskNum;
    document.getElementById("task-com").innerText = completeTaskNum;

}

function addToHistory(cardHeading) {

    const newDiv=document.createElement("div");
        newDiv.classList="common-clr px-3 py-3 me-4 mb-4 rounded-box";

    const work = document.getElementById(cardHeading).innerText;
    const p = document.createElement("p");
    p.classList = "font-bold ";
    p.innerText = work;
    const p2 = document.createElement("p");
    p2.classList = "ms-2 "; 
    let now = new Date();
    p2.innerText = `Date: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    
    newDiv.append(p);
    newDiv.append(p2);

    document.getElementById("history").appendChild(newDiv);

}



document.getElementById("comp-btn-1").addEventListener('click', function () {
    alert("You have completed a Task");
    increaseDecrease();
    this.setAttribute("disabled", "true");

    addToHistory("work-name");
})

document.getElementById("comp-btn-2").addEventListener('click', function () {
    alert("You have completed a Task");
    increaseDecrease();
    this.setAttribute("disabled", "true");

    addToHistory("work-name-2");
})

document.getElementById("comp-btn-3").addEventListener('click', function () {
    alert("You have completed a Task");
    increaseDecrease();
    this.setAttribute("disabled", "true");

    addToHistory("work-name-3");
})

document.getElementById("comp-btn-4").addEventListener('click', function () {
    alert("You have completed a Task");
    increaseDecrease();
    this.setAttribute("disabled", "true");

    addToHistory("work-name-4");
})

document.getElementById("comp-btn-5").addEventListener('click', function () {
    alert("You have completed a Task");
    increaseDecrease();
    this.setAttribute("disabled", "true");

    addToHistory("work-name-5");
})

document.getElementById("comp-btn-6").addEventListener('click', function () {
    alert("You have completed a Task");
    increaseDecrease();
    this.setAttribute("disabled", "true");

    addToHistory("work-name-6");
})

document.getElementById("clear-history").addEventListener('click', ()=>{
   historyDiv= document.getElementById("history");
   historyDiv.classList="hidden";
})
function addTime() {
   let now = new Date();
   document.getElementById("date").innerText = 
      `${now.toLocaleDateString()} `;
}
addTime();

const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "beige", "orange", "yellow"];
    let index = 0;

    document.getElementById("change-bg").addEventListener("click", function() {
      index = (index + 1) % colors.length;
      document.body.style.backgroundColor = colors[index];
    });

    