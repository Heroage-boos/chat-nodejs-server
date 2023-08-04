

const ORM = require("@/src/config/orm")
const { DataTypes } = require("sequelize")

const zhihuModel = ORM.define(
    "zhihu_content",
    {
        zhihu_content_no: {
            type: DataTypes.INTEGER,
        },
        zhihu_content_title: {
            type: DataTypes.STRING,
            unique: true // 设置链接字段为唯一，用于防止重复爬取
        },
        zhihu_content_content: {
            type: DataTypes.STRING
        },
        zhihu_content_id: {
            type: DataTypes.STRING
        },

    },
    {
        tableName: "zhihu_content"
    }
)

module.exports = zhihuModel