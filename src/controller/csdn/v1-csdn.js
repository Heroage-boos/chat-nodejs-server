const app = require('express')();
const request = require('../../utils/request.js');
/**
 * GET /api/resou/v1/csdn
 * @tags csdn
 * @summary csdn热搜
 * @description 最新免费CSDN热门技术类文章接口文档
 * @param {string}  size.query.required  -  item_id
 */
app.get('/', function (req, res) {
  //   const pageSize = (req.query.size || 1) * 10 - 10;
  const host = 'www.coderutil.com';
  const path = `/api/resou/v1/csdn?size=${req.query.size}`;
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36',
    'access-key': '780d8cd10734e514ac54a0770c8245a2',
    'secret-key': '9bf78c918d1fc92fbd6247cb942d0826'
  };

  request
    .httpGet({ host, path, headers, status: true })
    .then(function (body) {
      console.log('body', body);
      return res.API(JSON.parse(body).data);
    })
    .catch(function (err) {
      res.API_ERROR('服务器异常');
      console.log('err', err);
    });
});

module.exports = app;
