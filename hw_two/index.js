var app = require('express')(),
    bodyParser = require('body-parser'),
    testTool = require('./lib/tool.js');

app.use(
  bodyParser.urlencoded({
      extended: false
  })
);

app.use('/user', require('./lib/routers/user'));
app.use('/album', require('./lib/routers/album'));
app.use('/*', function(req, res, next) {
    res.status(404).send('Not Found');
});

app.listen(3000, function() {
    testTool.printLine();
    testTool.printDate();
    testTool.printLine();
    console.log('Node.js web 服务搭建 练习2');
    testTool.printLine();
});
