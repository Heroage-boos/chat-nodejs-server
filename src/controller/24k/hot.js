const app = require('express')();
const request = require('../../utils/request.js');

/**
 * GET /api/24k/hot
 * @tags 24k
 * @summary 头条新闻
 * @description
 * @param {string}  req.query.type.require
 */
app.get('/', function (req, res) {
  console.log('req.query.type', req.query.type);
  const type = parseInt(req.query.type) || 0;
  //100007微博热搜榜--0   100000百度热点--1  100012微信24h热文--2  100015知乎热榜--3  100020抖音热点榜--4
  const map = {
    0: '/api/get.php?rule_id=100007&key=TVRNeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    1: '/api/get.php?rule_id=100000&key=TVRNeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    2: '/api/get.php?rule_id=100012&key=TVRNeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    3: '/api/get.php?rule_id=100015&key=TVRNeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    4: '/api/get.php?rule_id=100020&key=TVRNeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s'
  };
  const path = map[type];
  const host = 'ionews.top';
  const headers = {};
  request
    .httpGet({ host, path, status: true, https: true, headers })
    .then(function (result) {
      res.API(JSON.parse(result).data);
    })
    .catch(function (err) {
      res.API_ERROR('网络好像有点问题', 500);
      console.log(err);
    });
});
module.exports = app;
