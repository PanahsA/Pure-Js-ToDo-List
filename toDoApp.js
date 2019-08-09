var toDosArray = [];
var toDoTd;
var input = document.querySelector("input");
var newT = document.querySelector(".new");
var toDosCounter = 0;
var trashCan = document.querySelector(".trashCan");
var pluss = document.querySelector("#pluss");
var input = document.querySelector("input");
var enterHits = 0;

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        createToDo();
    }
});


function createToDo() {
    console.log("from create");

    //Fill the array with ToDOs obj with value and a serial number
    toDosArray[enterHits] =
        {
            name: input.value,
            number: enterHits
        }

    // Add new row with the new To-Do, the new trashcan btn and its span
    // Dont add if the input is empty or space or spaces
    if (input.value != "") {
        if (!isAllSpace(input.value)) {
            newT.insertAdjacentHTML("beforebegin",
                "<td class=\"toDoTd\" \"><button class=\"trashCan\">" +
                " <i class=\"fas fa-lg fa-trash-alt\"></i></button><span class=\"trashSpan\"></span>"
                + input.value + " </td> ");

        }
    }

    // Add strikethrough
    var toDoTd = document.querySelectorAll(".toDoTd");
    toDoTd[toDosCounter].addEventListener("click", function () {
        this.classList.toggle("done");
    });
    //Console.log for debugging
    toDosArray.forEach(function (i) {
        if (i.name !== undefined)
            console.log("ta toDOs apo toDosArray: " + i.name + " at position : " + i.number);
    })
    console.log("current length: " + toDosArray.length);
    console.log("\n")

    //Add id to current trashcan (use it for deletion)
    var trashCan = document.querySelectorAll(".trashCan");
    console.log("trashcan id: " + enterHits);
    trashCan[enterHits].setAttribute("id", enterHits);

    //DELETE
    // Add event listener to trashcan for deletion
    trashCan[toDosCounter].addEventListener("click", function (e) {
        e.stopPropagation();
        var itemToDelete = this.getAttribute("id");
        this.parentNode.parentNode.remove(itemToDelete.selectedIndex);

        console.log("item to delete:" + itemToDelete);
        //if trashcan id matches serial number of item, delete it
        toDosArray.forEach(function (obj) {
            if (obj.number === Number(itemToDelete)) {
                console.log("about to kill obj with serial number: " + obj.number);
                toDosArray.splice(itemToDelete, 1, "");
            }
        });
        // createToDo();
        // toDoTd[itemToDelete].style.display = "none";
        console.log("\n");
    });
    enterHits++;
    toDosCounter++;
    input.value = "";

}

function isAllSpace(string){
    var counter=0;
    for (var i = 0; i < string.length+1; i++) {
        if(string[i]==" ") counter++;
    }
    if(counter==string.length) return true;
    else
        return false;
}

pluss.addEventListener("click", function () {
    if (input.style.display === "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block";
    }
})

