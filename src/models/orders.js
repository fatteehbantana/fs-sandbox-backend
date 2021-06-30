'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    users_id: {
      type: DataTypes.INTEGER(11),
      foreignKey: true,
      allowNull: false,
    },
    books_id: {
      type: DataTypes.INTEGER(11),
      foreignKey: true,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER(11),
    },
    order_at: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};