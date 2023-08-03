const orm = require("@/src/config/orm")
const { DataTypes } = require('sequelize');

const queryLogin=orm.define(
    "chat_user", //表名，
    // 字段
    {
        user_no: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_true_name: {
            type: DataTypes.STRING
        },
        nick_name: {
            type: DataTypes.STRING
        },
        user_body_card: {
            type: DataTypes.INTEGER
        },
        user_image: {
            type: DataTypes.STRING
        },
        user_sign: {
            type: DataTypes.STRING
        },
        user_describe: {
            type: DataTypes.STRING
        },
        user_certified: {
            type: DataTypes.INTEGER
        },
        user_pwd: {
            type: DataTypes.STRING
        },
        user_phone: {
            type: DataTypes.STRING
        }
    }, {
    tableName: 'chat_user',
}
)

module.exports=queryLogin