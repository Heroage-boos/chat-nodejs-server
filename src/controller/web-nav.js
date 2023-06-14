const query = require('@/src/models/web-nav/web-nav');
const app = require('express')();

/**
 * GET /api/web-nav
 * @summary 网页快捷导航
 * @description 网页快捷导航
 * @param {number}  page.query.required  - 页码
 */
app.get('/', async function (req, res) {
  await query(req, res);
  console.log("res", res)
});
module.exports = app;
