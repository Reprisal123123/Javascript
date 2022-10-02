// document.getElementById('')
// document.getElementsByClassName('')
// document.getElementsByTagName('p')
// document.querySelector('.list');


var btn = document.getElementById('submit');
var container = document.querySelector('.container');

// 할 일(함수) = function() {}
// 할 일 = 함수 라고 생각하자
// click, mouseenter, mouseleave 등의 이벤트가 있다


/*
    - 이벤트 종류

    click : 클릭시 발생
    change : input 요소의 변동이 있을 때 발생
    focus : 포커스를 얻었을 때 발생(링크, input 등의 요소에)
    keydown : 키를 눌렀을 때 발생
    keyup : 키에서 손을 뗐을 때 발생
    load : 로드가 완료되었을 때 발생(body, image등 선택자가 로드 되었을 때)
    mousedown : 마우스를 클릭했을 때 발생
    mouseup : 마우스에서 손을 뗐을 때 발생
    mouseover : 마우스가 특정 객체 위로 올려졌을 때 발생
    mouseout : 마우스가 특정 객체 밖으로 나갔을 때 발생
    mouseenter : 마우스가 특정 객체 안에 들어왔을 때
    mouseleave : 마우스가 특정 객체에서 떠났을 때
    select : option 태그 등에서 선택을 했을 때
*/

btn.addEventListener('click', function() {
    // 클릭하면 실제로 할 일
    btn.style.color = 'red';
    console.log('버튼이 클릭됨');
});

container.addEventListener('mouseenter', function() {
    console.log('마우스가 들어왔음');
});

container.addEventListener('mouseleave', function () {
    console.log('마우스가 나갔음');
});

window.addEventListener('keydown', function(event){
    console.log(event.key);
    console.log(event.keyCode);
});