/*참고 문헌
https://velog.io/@janeljs/making-a-todolist 리스트 작성
https://hianna.tistory.com/322  콤보 박스
*/
const upload = document.querySelector(".upload"),
add = document.querySelector(".add"),
priority = document.querySelector(".priority")


let goalList = [], levelList = [];
let isWriting = false;
let level;

add.addEventListener("click", initial);
priority.addEventListener("click", estimate);
upload.addEventListener("click", addList);

function addList() {
    let goal = add.value;
    if (goal != null) {
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
    for (let i = 0; i <goalList.length; i++) {
        list += "<input type='checkbox' name='accomplish'/>" + goalList[i] + "<input type='button' value=" + levelList[i] + "><input type='button' class='modify' value='수정'><br>";
    }
    list += "</ul>";
    document.querySelector(".fullList").innerHTML = list;
}

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