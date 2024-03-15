/*참고 문헌
https://sisiblog.tistory.com/326
https://webisfree.com/2017-09-06/자바스크립트-event-target-프로퍼티와-currenttarget-프로퍼티의-차이점은*/
const content = document.querySelector('.content'),
loginBar = document.getElementById('login')

let idList = ['hojin', 'admin'], pwrdList = ['1234', '5678'];
let id = 0, isLogin = false;

function onNavClick() {
    var navbar = document.getElementById('navigation-bar');
    navbar.classList.toggle('isClicked');
}

function switchPage(event) {
    var currentPage = event.currentTarget;
    //console.log(currentPage.id);
    removeActive();
    currentPage.classList.add('active');

    switch (currentPage.id) {
        case 'login':
            //content.classList.add('login-page');
            if (!isLogin) {
                content.innerHTML
                = "<h3>로그인 페이지입니다.</h3>    <div class='login-box'><input id='id' type='text'><input id='pwrd' type='password'><input class='login-btn' type='submit' onclick='identifying()' value='로그인'></div>";
            }
            else {
                content.innerHTML
                = "<h3>로그인하셨습니다.    <div class='login-box'><input class='logout-btn' type='submit' onclick='logout()' value='로그아웃'></div></h3>";
            }
            break;

        case 'about':
            content.innerHTML = "<h3>정보 페이지입니다.</h3>";
            break;

        case 'contact':
            content.innerHTML = "<h3>연락 페이지입니다.</h3>";
            break;

        case 'faq':
            content.innerHTML = "<h3>문답 페이지입니다.</h3>";
            break;
    
        default:
            if(isLogin) {
                console.log(idList[id]);
                loginBar.innerHTML = idList[id];
            }
            content.innerHTML = "<h3>HOME입니다.</h3>";
            break;
    }
}

function removeActive() {
    var menu = document.querySelectorAll('.menu');
    //console.log(menu);
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove('active');
    }
}

function identifying() {
    let inputId = document.getElementById('id'),
    inputPwrd = document.getElementById('pwrd')

    for (let i = 0; i < idList.length; i++) {
        if (inputId.value == idList[i]) {
            if (inputPwrd.value == pwrdList[i]) {
                console.log('로그인 성공', inputId, inputPwrd);
                id = i;
                isLogin = true;
                alert("로그인 성공!");
                break;
            }
            else {
                logout();
                alert("비밀번호 오류");
                break;
            }
        }
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

}