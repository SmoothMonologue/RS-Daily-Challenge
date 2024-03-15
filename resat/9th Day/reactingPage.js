/*참고 문헌
https://sisiblog.tistory.com/326
https://webisfree.com/2017-09-06/자바스크립트-event-target-프로퍼티와-currenttarget-프로퍼티의-차이점은*/
const content = document.querySelector('.content'),
homeBar = document.getElementById('home'),
loginBar = document.getElementById('login'),
menu = document.querySelectorAll('.menu');

let idList = ['hojin', 'admin'], pwrdList = ['1234', '5678'];
let id = 0, isLogin = false, isID = false;
//Event home = 

/*for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', switchPage(event));
}*/

function onNavClick() {
    var navbar = document.getElementById('navigation-bar');
    navbar.classList.toggle('isClicked');
}

function switchPage(event) {
    var currentPage = event.currentTarget;
    //console.log(currentPage.id);
    //console.log(event);
    removeActive();
    addActive(currentPage);

    switch (currentPage.id) {
        case 'login':
            //content.classList.add('login-page');
            if (!isLogin) {
                content.innerHTML
                = "<h3>로그인 페이지입니다.</h3>    <div class='login-box'><input id='id' type='text'><input id='pwrd' type='password'><div class='err-reason'></div><input class='login-btn' type='submit' onclick='identifying()' value='로그인'></div>";
            }
            else {
                content.innerHTML
                = "<h3>로그인하셨습니다.    <div class='login-box'><input class='logout-btn' type='submit' onclick='logout()' value='로그아웃'></div></h3>";
            }
            break;

        case 'about':
            content.innerHTML = "<h3>정보 페이지입니다.</h3>    <div>김호진 경기대학교 컴퓨터공학부</div>";
            break;

        case 'contact':
            content.innerHTML = "<h3>연락 페이지입니다.</h3>    <div>tel: 010-8600-5080</div><div>E-mail: mobugy99@naver.com</div>";
            break;

        case 'faq':
            content.innerHTML = "<h3>문답 페이지입니다.</h3>    <div>event 객체를 참조하면서 일괄적으로 onclick을 집어넣고 싶으면 어떻게 하나요?</div><div>글쎄요, 저도 모르겠는데요?</div>";
            break;
    
        default:
            home();
            break;
    }
}

function removeActive() {
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove('active');
    }
}

function identifying() {
    let inputId = document.getElementById('id'),
    inputPwrd = document.getElementById('pwrd'),
    reason = document.querySelector('.err-reason')

    isID = false;
    for (let i = 0; i < idList.length; i++) {
        if (inputId.value == idList[i]) {
            isID = true;
            if (inputPwrd.value == pwrdList[i]) {
                //console.log('로그인 성공', inputId, inputPwrd);
                id = i;
                isLogin = true;
                alert("로그인 성공!");
                home();
                break;
            }
            else {
                reason.innerHTML = "비밀번호 불일치";
                break;
            }
        }
    }

    if (!isID) {
        reason.innerHTML = "아이디 불일치";
    }

    if (!isLogin) {
        alert("로그인 실패!");
    }
}

function logout() {
    isLogin = false;
    alert("로그아웃 하셨습니다!");
    window.location.reload();
}

function home() {
    removeActive();
    addActive(homeBar);
    if(isLogin) {
        //console.log(idList[id]);
        loginBar.innerHTML = idList[id];
    }
    content.innerHTML = "<h3>HOME입니다.</h3>";
}

function addActive(bar) {
    bar.classList.add('active');
}