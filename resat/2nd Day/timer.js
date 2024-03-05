/*참고 문헌
https://shin1303.tistory.com/entry/JavaScript-타이머-만들기-오류
https://sevendays.tistory.com/89
*/

const timer = document.querySelector('.timer'),
hourCount = document.querySelector('.hourCount'),
minuteCount = document.querySelector('.minuteCount'),
secondCount = document.querySelector('.secondCount'),
stopTrigger = document.querySelector('.timer_stopTrigger'),
startTrigger = document.querySelector('.timer_startTrigger'),
resetTrigger = document.querySelector('.timer_resetTrigger')

let TIME = 0;
let timerId;
let didStop = true;

function calcTime() {
    let hour = parseInt(hourCount.value) || 0;
    let minute = parseInt(minuteCount.value) || 0;
    let second = parseInt(secondCount.value) || 0;

    TIME = (3600*hour) + (60*minute) + second;
    //console.log(TIME);
}

function startButton() {
    if (!didStop) {
        alert("이미 세고 있는 중입니다!");
    }
    else {
        calcTime();
        updateTime();
        stopButton();
        timerId = setInterval(updateTime, 1000);
        //setInterval(updateTime(), 1000)으로 쓰니까 타이머가 안 움직임
        didStop = false;
    }
}

function stopButton() {
    didStop = true;
    clearInterval(timerId);
}

function resetButton() {
    if (!didStop) {
        alert("타이머를 멈춘 뒤에 초기화해주세요!");
    }
    else {
        TIME = 0;
        updateTime();
    }
}

function updateTime() {
    if (TIME < 0) {
        stopButton();
        alert("시간 종료!");
    }
    else {
        const hour = Math.floor(TIME/3600);
        const minute = Math.floor(TIME/60) % 60;
        const second = TIME % 60;

        //timer.innerText = `${hour<10 ? `0${hour}` : hour}:${minute<10 ? `0${minute}` : minute}:${second<10 ? `0${second}` : second}`;
        hourCount.value = String(hour);
        minuteCount.value = String(minute);
        secondCount.value = String(second);
        console.log(TIME);
        TIME--;
    }
}

startTrigger.addEventListener('click', startButton);
stopTrigger.addEventListener('click', stopButton);
resetTrigger.addEventListener('click', resetButton);