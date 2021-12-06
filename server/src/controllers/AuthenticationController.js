const User = require('../models/User') 


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
            console.log('user',user.toJSON())    

            if(!user){
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = password === user.password
            
            //查看問題：
            console.log(password, user.password)
            console.log(isPasswordValid)
            console.log('hi')

            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

/*
            const userJson = user.toJSON()
            res.send({
              user: userJson
            })*/
            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
            

        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to log in.'
            })
        }
    }
}