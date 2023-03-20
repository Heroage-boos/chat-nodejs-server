const app = require('express')();
const request = require('../../utils/request.js');

/**
 * GET /api/getTouTiaoHot
 * @tags 163
 * @summary 头条新闻
 * @description  0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 散文 5科技 6 财经 7 时尚
 * @param {string}  type.query.required  -  0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 散文 5科技 6 财经 7 时尚
 */
app.get('/', function (req, res) {
  // 0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 散文 5科技 6 财经 7 时尚
  const path = '/hot-event/hot-board/?origin=toutiao_pc&_signature=_02B4Z6wo00f01-K9pMQAAIDCgbdkrQBGtPvimaBAAJzGYJKs9oA.MkFq2zHJt6FuAX.7SWwdxM8Mgk-ud-.3-Qsp3484az7U.Ij1157anF2B8ogl31.XqeZTXyBoFN1xYMXXB6LlyuNOPjrPfb';
  const host = 'www.toutiao.com';
  const headers = {
    Cookie:
    "_ga=GA1.1.1711493543.1678940480; local_city_cache=%E6%B7%B1%E5%9C%B3; csrftoken=6a44faa052668457bfe85948846766a6; s_v_web_id=verify_lfalt9x9_H99kgLXi_IgIG_4lon_9s8B_6bl8R57VoLY7; tt_webid=7210994397205628475; msToken=c11uItxsZH4eR0iQzz5fOUAePdFc7dEyjnhHGj6oQvrerZnjb2-XEwAsYSx0_zcf7dRR7o72UePVBnFd5IjZO7Kc4HgxPCze0k7ln59lT9w=; ttwid=1%7Ci64kqj1l3HUj7adNoXuleIhUGw1WqyDpzWp127bnOxs%7C1679014110%7Ce3de3d25ca2eb46d0ba64c33823ca848870525757d0fa4b9508ecea79fde96eb; tt_scid=DgZEDT7ILmAQx6hNLNqrYbOUlPdLzFv9fZ3tRxuML8BPB43g4tvz6tZN6M7gF9v091cb; _ga_QEHZPBE5HH=GS1.1.1679013892.5.1.1679014231.0.0.0"
};
  request
    .httpGet({ host, path, status: true, https: true,headers })
    .then(function (result) {
      console.log('toutiaoHot',result)
      res.API(JSON.parse(result).data);
    })
    .catch(function (err) {
      res.API_ERROR('网络好像有点问题', 500);
      console.log(err);
    });
});
module.exports = app;
