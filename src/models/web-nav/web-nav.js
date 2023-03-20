const webNav = require('./ORM');
async function WebNavQuery(req, res) {
  const pageSize = 10;
  const page = req.query.page || 1;
  let whereInfo = {};

  const result = await webNav.findAndCountAll({
    order: [['id', 'ASC']], // 正常升序
    where: whereInfo,
    //是否携带id字符
    // attributes: {
    //   exclude: ['id']
    // },
    offset: (page - 1) * pageSize,
    limit: pageSize
  });
  const data = {
    result: result.rows,
    pagination: {
      page,
      pageSize,
      total: result.count
    }
  };
  console.log('datatata', data);
  if (result.rows) {
    res.API(data);
  }
}
module.exports = WebNavQuery;
