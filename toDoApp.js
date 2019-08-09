var toDosObj = {};
var toDosArray = [];
var toDoTd;
var input = document.querySelector("input");
var newT = document.querySelector(".new");
var toDosCounter = 0;
var trashCan = document.querySelector(".trashCan");
var trashSpan = document.querySelector(".trashSpan");
// var toDoTd = document.querySelector(".toDoTd");
var pluss = document.querySelector("#pluss");
var input = document.querySelector("input");
var enterHits = 0;

input.addEventListener("keyup", function (e) {

    if (e.keyCode === 13) {

        //Fill the array with ToDOs obj with value and a serial number
        toDosArray[enterHits] =
            {
                name: input.value,
                number: enterHits
            }
        // Add new row with the new To-Do, the new trashcan btn and its span
        newT.insertAdjacentHTML("beforebegin",
            "<td class=\"toDoTd\" \"><button class=\"trashCan\">" +
            " <i class=\"fas fa-lg fa-trash-alt\"></i></button><span class=\"trashSpan\"></span>"
            + input.value + " </td> ");

        // Add strikethrough
        var toDoTd = document.querySelectorAll(".toDoTd");
        toDoTd[toDosCounter].addEventListener("click", function () {
            this.classList.toggle("done");
        })
        //Console.log for debugging
        toDosArray.forEach(function (i) {
            if( i.name!==undefined)
            console.log("ta toDOs apo toDosArray: " + i.name + " at position : "+ i.number);
        })
        console.log("current length: "+toDosArray.length);
        console.log("\n")

        //Add id to current trashcan (use it for deletion)
        var trashCan = document.querySelectorAll(".trashCan");
        trashCan[enterHits].setAttribute("id", enterHits);

        // DELETE ITEM
        trashCan[toDosCounter].addEventListener("click", function () {
            // get the id of the trashcan to delete the the equivalent object.number
            var itemToDelete = this.getAttribute("id");
            console.log("item to delete:" + itemToDelete);
            //if trashcan id matches serial number of item, delete it
            toDosArray.forEach(function (obj) {
                if (obj.number === Number(itemToDelete)) {
                    console.log("about to kill obj with serial number: " + obj.number );
                    toDosArray.splice(itemToDelete, 1, "");
                }
            })
            toDoTd[itemToDelete].style.display = "none";
            console.log("\n");
        })


        enterHits++;
        toDosCounter++;
        input.value = "";
    }
});



//Epilegei span kai to diwxnei mazi me ton kado
var trashSpan = document.querySelectorAll(".trashSpan");



pluss.addEventListener("click", function () {
    if (input.style.display === "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block";
    }
})


//
// trashCan.addEventListener("click", function (todoPos) {
//     console.log("deleting element");
//     toDosArray.splice(todoPos, 1);
// toDoTd.style.display = "none";

// })

//
// function showTrashCan() {
//     trashCan.style.display = "block";
//     trashSpan.style.display = "inline-block"
// }
//
// function hideTrashCan() {
//     trashCan.style.display = "none";
//     trashSpan.style.display = "none";
// }