// database red mysql port 3306; node server port 8081 -> API

module.exports = {
    port: 3306,
    db: {
        database: process.env.DB_NAME || 'test01',
        user: process.env.DB_USER || 'michaelyenoke',
        password:  process.env.DB_PASS || '1qaz2wsx3edc',
        options: {
            dialect:  'mysql',
            host:  'database-1.cqwpdgcki6p6.ap-southeast-1.rds.amazonaws.com',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    },
    authentication:{
        jwtSecret: process.env.JWT_SECERT || 'secret'
    }

}