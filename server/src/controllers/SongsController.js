const  Song  = require('../models/Song') 
const { Op } = require("sequelize"); 

module.exports ={
    
  /*
    // get : get song without search
    async get (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 35
            })
            res.send(songs)
        } catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to fetch the songs'
            })
        }
    },
   */ 

  
    // get : search & get songs
    async get (req, res) {
        try {
          let songs = ''
          const search = req.query.search
          //const search ='Aimyon'
          console.log('#####test2022#####')
          console.log(search) // ok
          if (search) {
            songs = await Song.findAll({
              // 問題就出在 sequelize 的寫法
            where:{
              //artist: 'BLACKPINK' 
              [Op.or]: [
                'title','artist','genre','album'
              ].map(key => ({
                //[key]:search
                [key]: {
                  [Op.like]: '%'+search+'%'
                }  

              }))  
            }  
                              
            })
          } else {
            songs = await Song.findAll({
              // 這個修改是有用的證明上面會跑只是沒有作用 ok!
              // offset 跳過
              offset: 0, limit: 3 
            })
          }
          res.send(songs)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the songs'
          })
        }
      },
     

    // post  
    async post (req, res) {
       
        try {
            const song = await Song.create(req.body)
            res.send(song.toJSON())
        } catch(err){
            res.status(500).send({
                error:'An error has occured trying to create the songs'
            })
        }
    },
    
    // show
    async show (req, res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to show the song'
            })
        }
    },

    // put : update data 
    async put (req, res) {
        try {
            const song = await Song.update(req.body,{
                where:{
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to update the song'
            })
        }
    }

}
