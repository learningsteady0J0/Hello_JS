var body = document.body;
var defult = 0;
var numbers;
var choiceArr;

function NewNumber() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    choiceArr = [];

    // 0~8의값이 필요하기때문이 floor를 씀. , splice로 가져오면 numbers 안에 숫자가 사라지기 때문에  9 - i라는 연산을 안해주면 
    // undefinded 가 계속 나올 수 있음. 또 뒤에[0]을 붙이는 이유는 splice로 뽑아내면 배열로 나오기때문.
    for (var i = 0; i < 4; i++) {
        var choice = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        choiceArr.push(choice);
    }
}

NewNumber();

var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.type = 'number';
input.maxLength = 4;
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var count = document.createElement('div');
body.append(count);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    answer = input.value;
    if (answer === choiceArr.join('')) {
        result.textContent = '홈런';

        NewNumber();
        defult = 0;
        input.value = '';
        input.focus();
    }
    else {
        var reasultArr = answer.split(''); // 배열로 바뀔 때 문자가 됌.  ex) ['1','2','3','4']
        var strike = 0;
        var ball = 0;
        defult++;
        if (defult > 7) {
            result.textContent = '모든 기회를 소진했습니다. 정답은: ' + choiceArr.join(',') + '이였습니다.';
            NewNumber();
            defult = 0;
        }
        else {
            for (var i = 0; i < 4; i++) {
                if (choiceArr[i] === Number(reasultArr[i]))
                    strike++;
                else if (choiceArr.indexOf(Number(reasultArr[i])) > -1)
                    ball++;
            }
            result.textContent = strike + 'Strike ' + ball + 'Ball';
            input.value = '';
            input.focus();
        }

        count.textContent = "현재 진행한 횟수:" + defult;

    }
})