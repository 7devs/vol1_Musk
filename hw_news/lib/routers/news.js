// 引入 Express 的路由处理对象
var router = require('express').Router(),

// 引入自定义数据模型
    newsModel = require('../models/news.js');

/* 路由（业务）逻辑处理 */
// GET / 返回全部 news 数据
router.route('/')
    .get(function(req, res, next) {
        res.send(newsModel);
    });

// GET /:id 返回指定 id news 数据
router.route('/:id')
    .get(function(req, res, next) {

      // 建立id 与 数组序列的对应关系
      var index = parseInt(req.params.id) - 1;

      // 符合条件的id将res.send对应的数组序列值，否则错误处理
      if(index >= 0 && index < newsModel.length) {
          res.send(newsModel[index]);
      } else {
          res.status(404).send('此条新闻不存在。');
      }

    });

// DELETE /:id 删除指定 news
router.route('/:id')
    delete(function(req, res, next) {
      var index = parseInt(req.params.id) - 1;
      var news;
      if(index >=0 && index < newsModel.length) {
          news = newsModel.splice(index, 1);  /* splice 方法会改变原数组 */
          console.log(newsModel);
          res.status(200).send(news);
      } else {
          res.status(404).send('此条新闻不存在。');
      }
    });

module.exports = router;
