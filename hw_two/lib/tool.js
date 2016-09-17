/* 自定义包，一般放在项目目录下的 lib 文件夹中 */
function printDate() {
    var d = new Date();
    console.log(d.toString());
}

function printLine() {
    console.log('---------------------------------------');
}

module.exports.printDate = printDate;
module.exports.printLine = printLine;
