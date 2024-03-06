
const upload = document.querySelector(".upload"),
add = document.querySelector(".add")


let goalList = [];
let isWriting = false;

add.addEventListener("click", initial);
upload.addEventListener("click", addList);

function addList() {
    let goal = add.value;
    if (goal != null) {
        goalList.push(goal);
        isWriting = false;
        initial();
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i <goalList.length; i++) {
        list += "<input type='checkbox' name='accomplish'/>" + goalList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span><br>";
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;
}

function initial() {
    if (!isWriting) {
        add.value = "";
    }
    isWriting = true;
}