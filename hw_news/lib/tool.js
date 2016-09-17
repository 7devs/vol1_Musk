/* 自定义包，一般放在项目目录下的 lib 文件夹中 */
function printDate() {
    var d = new Date();
    console.log(d.toString());
}

function printLine() {
    console.log('---------------------------------------');
}

function test1() {
    var obj = {
        hello: 'world',
        x: 'X Value'
    },
    x= 'hello';
    console.log(obj[x]);  /* world */
    console.log(obj['x']); /* X Value */
}
module.exports.printDate = printDate;
module.exports.printLine = printLine;
module.exports.test1 = test1;
