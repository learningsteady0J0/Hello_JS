var num1 = Math.ceil(Math.random() * 9); // ceil 올림 floor 내림
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var word = document.createElement('div');
word.textContent = `${num1} * ${num2} = ??`;
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


form.addEventListener('submit', function callback(event) {

});


/*
while (1) {
    var num1 = Math.ceil(Math.random() * 9); // ceil 올림 floor 내림
    var num2 = Math.ceil(Math.random() * 9);
    var result = num1 * num2;

    while (1) {
        var answer = prompt(`${num1} * ${num2} = ??`);
        if (answer === null) {
            alert("답을 입력하세요");
            continue;
        }
        if (Number(answer) === result) {
            alert('정답입니다.');
            break;
        }
        else
            alert('이것도 모르니 에베베');
    }
}
*/