const Sequelize = require('sequelize')
const sequelize = require('./index')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))



function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}



  const User = sequelize.define('usernew', { //資料庫名稱
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING
    },
    {
    hooks: {
      beforeCreate: hashPassword,
      //beforeUpdate: hashPassword,
      //beforeSave: hashPassword
    }
  })




  User.prototype.comparePassword = function (password) { //傳進來的參數 12345678
    console.log('jj')
    console.log(password) //12345678
    console.log(this.password) // 資料庫內的加密資料
    return bcrypt.compare(password, this.password) // 這裡應該要加密前者同時跟後者比
  }



module.exports = User
