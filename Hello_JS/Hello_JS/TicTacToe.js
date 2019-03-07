var body = document.body;
var table = document.createElement('table');
var tds = [];
for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    tds.push([]);
    for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        tds[i].push(td);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
body.appendChild(table);