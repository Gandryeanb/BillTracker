'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fname: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$",'i'],
          msg: 'first name must be a letter'
        },
        len: {
          args: [3,15],
          msg: 'first name length must be greater than 3'
        }
      }
    },
    lname: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$",'i'],
          msg: 'last name must be a letter'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email must be filled'
        },
        isEmail: {
          args: true,
          msg: 'Email is invalid'
        },
      }
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'uid must be filled'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'regular'
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
