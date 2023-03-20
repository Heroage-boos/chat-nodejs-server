

const orm = require('@/src/config/orm');
const { DataTypes } = require('sequelize');
const webNav = orm.define(
  'web_nav',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    web_name: {
      type: DataTypes.STRING,
    },
    web_url: {
      type: DataTypes.STRING
    },
    web_img: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'web_nav',
    deletedAt: false,
    createdAt: false,
    updatedAt: false
  }
);

module.exports = webNav;
