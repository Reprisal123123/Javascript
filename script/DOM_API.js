/* 

    - 나만의 변수 선언 규칙
        변수명 앞에 $를 붙이면 태그 하나를 변수에 담았을음 의미
        $$를 붙이면 태그 여러개를 변수에 담았음을 의미

*/


// HTML 요소(Element) 1개 검색/찾기
// const $box = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드
// $box.addEventListener();

// 인수(Arguments)를 추가 가능
// $box.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
// $box.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
// $box.addEventListener('click', function () {
//     console.log('Click!');
// });

// // 요소의 클래스 정보 객체 활용
// $box.classList.add('active'); // 클래스를 추가
// let isContains = $box.classList.contains('active');
// console.log(isContains); // true


// $box.addEventListener('click', function() {
//     $box.classList.remove('active');
//     let isContains = $box.classList.contains('active');
//     console.log(isContains); // false
// });

// HTML 요소(Element) 모두 검색/찾기
const $$box = document.querySelectorAll('.box');
console.log($$box);

// 찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
// 첫 번째 매개변수($$box) : 반복 중인 요소
// 두 번째 매개변수(index) : 반복 중인 번호
// $$box.forEach(function ($box, index) {});

// 출력
$$box.forEach(function($box, index) {
    // 보관 내용을 사용하려면 백틱 써야 함
    $box.classList.add(`order-${index + 1}`);
    console.log(index, $box);
});


const $box = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log($box.textContent);

// Setter, 값을 설정하는 용도
$box.textContent = 'HEROPY';
console.log($box.textContent);

const a = 'Hello~';
// split : 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse : 배열을 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환.

const b = a.split('').reverse().join('');

console.log(a);
console.log(b);

// 해당 태그의 여러 요소들 선택
let $$test = document.querySelectorAll('div');

$$test.forEach(function ($test) {
    $test.classList.add('hello1');
});

let $test = document.querySelector('div');

let test = $test.classList.contains('active');
if(test) {
    console.log('포함됨!');
}