const queryLogin = require("./ORM")


async function QueryLoginSql(req, res) {
    const result = await queryLogin.findAll({
        attributes: ['user_image','user_name','user_id','user_describe'],
        // attributes: { exclude: ['user_body_card', 'user_pwd']},
        where: {
            user_name: req.query.username,
            user_pwd: req.query.password,
        },
    });
    console.log('result', result)
    const data = {
        result: result.rows,
    };
    res.API(result[0]?result[0]:{});
}

module.exports = QueryLoginSql