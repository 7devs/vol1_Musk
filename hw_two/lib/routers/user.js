// 引入 Express 的路由处理对象
var r = require('express').Router(),

// 引入自定义数据模型
    userModel = require('../models/users.js');

/* 路由（业务）逻辑处理 */
// GET / 返回全部用户
r.route('/')
    .get(function(req, res, next) {
        res.send(userModel);
    });

// GET /ageAvg 返回所有用户年龄平均值
r.route('/ageAvg')
    .get(function(req, res, next) {
        var ageAvg,
            n = userModel.length,
            sum = 0;
        for (var i = 0; i < n; i++) {
            sum += userModel[i].age;
        }
        ageAvg = sum / n;
        res.send('average age: ' + ageAvg);
    });

// GET /:id 获取指定索引用户的全名
r.route('/:id')
    .get(function(req, res, next) {

      // 建立id 与 数组序列的对应关系
      var index = parseInt(req.params.id) - 1;

      // 符合条件的id将res.send对应的数组序列对象属性值，否则错误处理
      if(index >= 0 && index < userModel.length) {
          res.send(userModel[index].firstName + ' ' + userModel[index].lastName);
      } else {
          res.status(404).send('Not Found!');
      }

    });

// PUT /:id 修改指定索引用户的年龄并返回结果
r.route('/:id')
    .put(function(req, res, next) {
      var index = parseInt(req.params.id) - 1;
      if(index >=0 && index < userModel.length) {
          if(isNaN(req.body.age)){
              res.send('Type of age must be number');
          }
          else {
              userModel[index].age = req.body.age;
              res.send(userModel[index]);
          }
      } else {
          res.status(404).send('Not Found!');
      }
    });

// GET /count/:sex 获取指定性别的人数统计
r.route('/count/:sex')
    .get(function(req, res, next) {
        var sex = req.params.sex;
        var count = 0;
        if (sex === 'male' || sex === 'female') {
            for (var i = 0; i < userModel.length; i++) {
                if (userModel[i].sex === sex){
                    count++;
                }
            }
            res.send(sex + ':' + count);
        } else {
            res.send('please choose the male or female');
        }
    });





// GET /search?company=xxx 搜索，返回公司名称包含搜索字符串的用户列表
/*
r.route('/search')
    .get(function(req, res, next) {

    });
*/

module.exports = r;
