const sequelize = require('../models')
const {
    index,
    Song,
    User
} = require('./models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')


sequelize.sync({force: true})
    .then(() => {

    })