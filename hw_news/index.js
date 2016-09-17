var app = require('express')(),
    bodyParser = require('body-parser'),
    testTool = require('./lib/tool.js');

app.use(
  bodyParser.urlencoded({
      extended: false
  })
);

app.use('/news', require('./lib/routers/news'));
app.use('/*', function(req, res, next) {
    res.status(404).send('不在地球上。');
});

app.listen(3000, function() {
    testTool.printLine();
    testTool.printDate();
    testTool.printLine();
    console.log('Node.js web 服务搭建 练习1');
    testTool.printLine();
    testTool.test1();
});
