/*참고 문헌
https://velog.io/@janeljs/making-a-todolist 리스트 작성
https://hianna.tistory.com/322  콤보 박스
https://cloudcoke.tistory.com/33 게시판 구현할 때 글 수정 기능을 참고
*/
const upload = document.querySelector(".upload"),
add = document.querySelector(".add"),
priority = document.querySelector(".priority"),
both = document.querySelector(".both"),
com = document.querySelector(".com"),
incom = document.querySelector(".incom"),
sort = document.querySelector(".sort"),
sortReverse = document.querySelector(".sortReverse")
//cancel = document.querySelector(".cancel")


let checkable = [], goalList = [], levelList = [];
let levelClassify = ["낮음", "보통", "높음", "초비상!!"];
let isWriting = false;
let level;

add.addEventListener("click", initial);
priority.addEventListener("click", estimate);
upload.addEventListener("click", addList);
//cancel.addEventListener("click", switchToList);
both.addEventListener("click", showList);
com.addEventListener("click", showDone);
incom.addEventListener("click", showYet);
sort.addEventListener("click", sorting);
sortReverse.addEventListener("click", sortingReverse);

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

function showDone() {
    let list = "<ul>"
    for (let i = 0; i < goalList.length; i++) {
        if (checkable[i]) {
            list += "<input type='checkbox' class='accomplish' id=" + i + " checked disabled>" + goalList[i] + "<button id='level'>" + levelList[i] + "</button><br>";
        }
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;
}

function showYet() {
    let list = "<ul>"
    for (let i = 0; i < goalList.length; i++) {
        if (!checkable[i]) {
            list += "<input type='checkbox' class='accomplish' id=" + i + " disabled>" + goalList[i] + "<button id='level'>" + levelList[i] + "</button><br>";
        }
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;
}

function sorting() {
    let list = "<ul>"
    for (let i = levelClassify.length; i > -1; i--) {
        for (let j = 0; j < goalList.length; j++) {
            if (levelList[j] == levelClassify[i]) {
                if (checkable[j]) {
                    list += "<input type='checkbox' class='accomplish' id=" + i + " checked>" + goalList[j] + "<button id='level'>" + levelList[j] + "</button><input type='button' class='modify' id=" + j + " value='삭제'><br>";
                }
                else {
                    list += "<input type='checkbox' class='accomplish' id=" + i + ">" + goalList[j] + "<button id='level'>" + levelList[j] + "</button><input type='button' class='modify' id=" + j + " value='삭제'><br>";
                }

            }
        }
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;
}

function sortingReverse() {
    let list = "<ul>"
    for (let i = 0; i < levelClassify.length; i++) {
        for (let j = 0; j < goalList.length; j++) {
            if (levelList[j] == levelClassify[i]) {
                if (checkable[j]) {
                    list += "<input type='checkbox' class='accomplish' id=" + i + " checked>" + goalList[j] + "<button id='level'>" + levelList[j] + "</button><input type='button' class='modify' id=" + j + " value='삭제'><br>";
                }
                else {
                    list += "<input type='checkbox' class='accomplish' id=" + i + ">" + goalList[j] + "<button id='level'>" + levelList[j] + "</button><input type='button' class='modify' id=" + j + " value='삭제'><br>";
                }

            }
        }
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;
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