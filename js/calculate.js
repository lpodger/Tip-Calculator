//select items from menu
//order
//calculate percentage of order cost

//select elements
const addBtns = document.getElementById("add-btns");
const orderBtn = document.getElementById("order");
const menu = document.querySelector(".menu");
const displaySum = document.getElementById("sum");
const displayTip = document.getElementById("tip");
const resetBtn = document.getElementById("reset-btn");

//set price
const dish1 = 8;
const dish2 = 15;
const dish3 = 40;

//start count
var count = 0;
var count2 = 0;
var count3 = 0;

//add count to btns
btnsPushed = e => { 

    if (e.target.id === "btn-1") {
        count ++;
        console.log(count);
    }

    if  (e.target.id === "btn-2") {
        count2 ++;
        console.log(count2);
    }

    if  (e.target.id === "btn-3") {
        count3 ++;
        console.log(count3);
    }
}
//end function

function calculate() {
    let cost = count * dish1 + count2 * dish2 + count3 * dish3;
    let tip = cost * 0.15;
    menu.classList.add("hide");
    displaySum.innerHTML = "The total cost is $" + cost + ".";
    displayTip.innerHTML = "The tip is $" + tip.toFixed(2) + ".";
    resetBtn.classList.remove("hide");
 }
 //end function

 function reset() {
    window.location.reload();
}
//end function

//create event listeners
addBtns.addEventListener("click", btnsPushed);
orderBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);


