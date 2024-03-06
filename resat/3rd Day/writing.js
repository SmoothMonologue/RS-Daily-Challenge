/*참고 문헌
https://velog.io/@janeljs/making-a-todolist 리스트 작성
https://hianna.tistory.com/322  콤보 박스
*/
const upload = document.querySelector(".upload"),
add = document.querySelector(".add"),
priority = document.querySelector(".priority"),
cancel = document.querySelector(".cancel")


let checkable = [], goalList = [], levelList = [];
let isWriting = false;
let level;

add.addEventListener("click", initial);
priority.addEventListener("click", estimate);
upload.addEventListener("click", addList);
//cancel.addEventListener("click", switchToList);

function addList() {
    let goal = add.value;
    if (goal != null) {
        checkable.push(false);
        goalList.push(goal);
        levelList.push(level);
        isWriting = false;
        initial();
        priority.value = "none";
        upload.disabled = true;
    }
    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i < goalList.length; i++) {
        if (checkable[i]) {
            list += "<input type='checkbox' class='accomplish' id=" + i + " checked>" + goalList[i] + "<button id='level'>" + levelList[i] + "</button><input type='button' class='modify' id=" + i + " value='삭제'><br>";
        }
        else {
            list += "<input type='checkbox' class='accomplish' id=" + i + ">" + goalList[i] + "<button id='level'>" + levelList[i] + "</button><input type='button' class='modify' id=" + i + " value='삭제'><br>";
        }
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;

    let checkButtons = document.querySelectorAll(".accomplish");
    let modifyButtons = document.querySelectorAll(".modify");
    for (let i = 0; i < modifyButtons.length; i++) {
        checkButtons[i].addEventListener("click", checking);
        modifyButtons[i].addEventListener("click", deleteList);
    }
}

function checking() {
    let id = this.getAttribute("id");
    if (checkable[id]) {
        checkable[id] = false;
    }
    else {
        checkable[id] = true;
    }
}

function deleteList() {
    let id = this.getAttribute("id");
    checkable.splice(id, 1);
    goalList.splice(id, 1);
    levelList.splice(id, 1);
    showList();
}

/*function switchToEdit() {
    console.log(location.search);
    location = "./modify.html";
    console.log(location.search);

}

function switchToList() {
    location = "./list.html";
}

function editList() {
    let id = this.getAttribute("id");
    console.log(id);

}*/

function initial() {
    if (!isWriting) {
        add.value = "";
        add.focus();
    }
    isWriting = true;
}

function estimate() {
    level = priority.value;
    if (level != "none") {
        upload.disabled=false;
    }
}