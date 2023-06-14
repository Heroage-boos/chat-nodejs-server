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
  const type = parseInt(req.query.type) || 0;
  console.log('req.query.type', type);
  //100007微博热搜榜--0   100000百度热点--1  100012微信24h热文--2  100015知乎热榜--3  100020抖音热点榜--4
  const map = {
    0: '/api/get.php?rule_id=100007&key=TURVeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    1: '/api/get.php?rule_id=100000&key=TURVeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    2: '/api/get.php?rule_id=100012&key=TURVeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    3: '/api/get.php?rule_id=100015&key=TURVeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s',
    4: '/api/get.php?rule_id=100020&key=TURVeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzJlVnBKZDBKcFNscHpTVnB2YVdWcGVVSXdXV05QTjAxVWRHZHBSV05s'
  };
  const path = map[type];
  const host = 'ionews.top';
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Set-Cookie": "X_CACHE_KEY=489fd2225ee9b81067a462fe829577d0; path=/; Expires=Fri, 31-Dec-9999 23:59:59 GMT",
  }
  request
    .httpGet({ host, path, status: true, https: true, headers })
    .then(function (result) {
      console.log('result',result);
      return res.API(JSON.parse(result).data);
    })
    .catch(function (err) {
      res.API_ERROR('网络好像有点问题', 500);
    });
});
module.exports = app;
