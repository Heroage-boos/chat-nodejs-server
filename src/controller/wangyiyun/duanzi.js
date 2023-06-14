const app = require('express')();
const request = require('../../utils/request.js');

/**
 * GET /api/wangyiyun
 * @tags 网易云
 * @summary 网易云段子
 * @description
 * @param {string}  req.query.type.require
 */
app.get('/', function (req, res) {
    const host = 'www.yduanzi.com';
    const path = '/duanzi/getduanzi';
    const headers = {
        "Content-Length": 44,
        "Content-Type": "multipart / form - data; boundary = ----WebKitFormBoundary85WEbRdmI1VSvGcP",
        Cookie: "PHPSESSID = 21d5df6e9e9b53a4ea014dea086eb814; Hm_lvt_e77bd35ba5df1edb7bc388d695470acf = 1685525861; Hm_lpvt_e77bd35ba5df1edb7bc388d695470acf = 1685525861"
    }
    request
        .httpPost({ host, path, status: true ,headers})
        .then(function (result) {
            console.log('网易云段子-------------', JSON.parse(result));
            return res.API(JSON.parse(result).data);
        })
        .catch(function (err) {
            res.API_ERROR('网络好像有点问题', 500);
            console.log(err);
        });
});

module.exports = app;
