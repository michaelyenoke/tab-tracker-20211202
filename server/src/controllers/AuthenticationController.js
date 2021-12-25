const User = require('../models/User') 
const jwt = require('jsonwebtoken')
const config = require('../config/database_config')
const database_config = require('../config/database_config')

// JWT token
function jwtSignUser (user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, database_config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}


//
module.exports ={
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }
        catch(err){
            res.status(400).send({
                error:'This emal account is already in use. something might be wrong, MOTHERFUCKER!'
            })
        }
    },

    async login (req, res) {
        try {
            const {email,password} = req.body //形成一個帶入參數的物件
            const user = await User.findOne({
                where: {
                    email:email
                }
            })

            //查看問題：
            //console.log('kk')
            //console.log(password) //從body傳進來的 12345678
            //console.log('user',user.toJSON())    

            if(!user){
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            
            const isPasswordValid = await user.comparePassword(password) 
            //12345678
            //這個參數要送進去 User.js進行比較 -> 得到true就可以進行下去
            // const isPasswordValid = true 
            
            //查看問題：
            console.log('ll')
            console.log(password, user.password)
            console.log(isPasswordValid)
            console.log('hi')

            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            

        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to log in.'
            })
        }
    }
}