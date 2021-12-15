const Sequelize = require('sequelize')
const sequelize = require('./index')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

  const Song = sequelize.define('song', { 
    title: Sequelize.STRING, 
    artist: Sequelize.STRING,
    genre: Sequelize.STRING,
    album: Sequelize.STRING,
    albumImageUrl: Sequelize.STRING,
    youtubeId: Sequelize.STRING,
    lyrics: Sequelize.TEXT,
    tab: Sequelize.TEXT
  })



  module.exports = Song