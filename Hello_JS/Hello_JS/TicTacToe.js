var body = document.body;
var table = document.createElement('table');
var tds = [];
var trs = [];
var turn = 'x';
var check = false;

var callback = function (event) {
    console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.children);

    var whatTr = trs.indexOf(event.target.parentNode);
    console.log('몇줄' + whatTr);
    var whatTd = tds[whatTr].indexOf(event.target);
    console.log('몇칸' + whatTd);


    if (tds[whatTr][whatTd].textContent === '') {
        tds[whatTr][whatTd].textContent = turn;

        //3줄확인
        //가로줄 확인
        if (
            tds[whatTr][0].textContent === turn &&
            tds[whatTr][1].textContent === turn &&
            tds[whatTr][2].textContent === turn
        ) {
            check = true;
            console.log('hasdasdsaddi');
        }

        //세로줄 확인
        if (
            tds[0][whatTd].textContent === turn &&
            tds[1][whatTd].textContent === turn &&
            tds[2][whatTd].textContent === turn
        ) {
            check = true;
        }
        //대각선 확인
        if (whatTd - whatTr === 0 || Math.abs(whatTd - whatTr) === 2) {
            if (tds[0][0].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][2].textContent === turn) {
                check = true;
            }
            else if (tds[0][2].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][0].textContent === turn) {
                check = true;
            }
        }

        if (check) {
            resultText.textContent = `'${turn}'가 이겼습니다.`;
            //초기화
            turn = 'x';
            tds.forEach(function (tr) {
                tr.forEach(function (td) {
                    td.textContent = '';
                });
            });
        }
        else {
            if (turn === 'x')
                turn = 'o';
            else
                turn = 'x';
        }

    }
    else {
        console.log('빈칸임');
    }

    
};

for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    trs.push(tr);
    tds.push([]);
    for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        td.addEventListener('click', callback);
        tds[i].push(td);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
body.appendChild(table);     

resultText = document.createElement('h1');
body.append(resultText);