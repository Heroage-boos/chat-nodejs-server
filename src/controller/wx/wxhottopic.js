const app = require('express')();
const request = require('../../utils/request.js');
/**
 * GET /api/resou/v1/csdn
 * @tags csdn
 * @summary csdn热搜
 * @description 最新免费CSDN热门技术类文章接口文档
 * @param {string}  key.query.required  -  item_id
 */
app.get('/', function (req, res) {
  const key = req.query.key;
  const host = 'apis.juhe.cn';
  const path = `/fapigx/wxhottopic/query?key=${key}`;
  const headers = {};

  request
    .httpGet({ host, path, headers, status: true })
    .then(function (body) {
      console.log('body', body);
      return res.API(JSON.parse(body).result);
    })
    .catch(function (err) {
      res.API_ERROR('服务器异常');
      console.log('err', err);
    });
});

module.exports = app;
