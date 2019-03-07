var word = document.createElement('div');
word.textContent = 'lerningsteady';
document.body.append(word);
var form = document.createElement('form'); 
document.body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);
var result = document.createElement('div');
document.body.append(result);


// textcontent  -> html 태그 사이에있는 값 <div> textcontent <div/>
// value -> input과 같은 값이 저장되는 것 의 저장된 값.
// button.addEventListener('click', ~~~) -> 버튼이 눌려졌을 때
form.addEventListener('submit', function callback(event) {
    event.preventDefault(); // form은 엔터를 쳐서submit을 하면 다른페이지로 넘어가게 되어있음. -> 새로고침됨 -> 기본동작 하지않게 하기 위한 명령어
    if (word.textContent[word.textContent.length - 1] === input.value[0]) {
        result.textContent = '딩동댕';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    }
    else {
        result.textContent = '땡';
        input.value = '';
        input.focus();
    } 
});

/*
var word = '시작';
var i = 0;
while (i>999) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert('정답');
        word = answer;
    }
    else
        alert('떙');

    i++;
}

for (i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

for (i = 5; i >= 1; i--) {
    console.log(' '.repeat(5 - i), '*'.repeat(i));
}

for (i = 1; i <= 5; i++) {
    console.log(' '.repeat(i), '*'.repeat(9 - (i * 2)) , ' '.repeat(i));
}

*/