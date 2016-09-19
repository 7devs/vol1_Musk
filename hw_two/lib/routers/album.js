var r = require('express').Router(),
    albumModel = require('../models/albums.js');

// GET / 返回全部唱片
r.route('/')
    .get(function(req, res, next) {
        res.send(albumModel);
    });

// GET /longerSong 返回歌曲时间大于3分钟的歌曲
r.route('/longerSong')
    .get(function(req, res, next) {
        var result = [];
        for (var i = 0; i < albumModel.length; i++) {
            if (albumModel[i].length > 180) {
                result.push(albumModel[i]);
            }
        }
        res.send(result);
    });

// GET /search?type=xxx 获取指定分类下的歌曲列表
r.route('/search')
    .get(function(req, res, next) {
        var result = [];
        for (var i = 0; i < albumModel.length; i++) {
            if (albumModel[i].type === req.query.type) {
                result.push(albumModel[i]);
            }
        }
        if (result.length !== 0) {
            res.send(result);
        } else {
          res.status(404).send('Not Found');
        }
    });

// GET /:id 返回指定索引的唱片数据
r.route('/:id')
    .get(function(req, res, next) {
        var index = parseInt(req.params.id) - 1;
        if(index >= 0 && index < albumModel.length) {
            res.send(albumModel[index]);
        } else {
            res.status(404).send('Not Found!');
        }
    });

// PUT /:id 修改指定索引唱片的时长和标题并返回结果
r.route('/:id')
    .put(function(req, res, next) {
        var index = parseInt(req.params.id) - 1;
        if(index >= 0 && index < albumModel.length) {
            albumModel[index].length = parseInt(req.body.length);
            albumModel[index].title = req.body.title;
            res.send(albumModel[index]);
        } else {
            res.status(404).send('Not Found!');
        }
    });


// GET /singer/:name 返回指定歌手的全部歌曲
r.route('/singer/:name')
    .get(function(req, res, next) {
        var result = [];
        for (var i = 0; i < albumModel.length; i++) {
            if (albumModel[i].singer === req.params.name) {
                result.push(albumModel[i]);
            }
        }
        if (result.length !== 0) {
            res.send(result);
        } else {
            res.status(404).send('Not Found');
        }
    });


module.exports = r;
