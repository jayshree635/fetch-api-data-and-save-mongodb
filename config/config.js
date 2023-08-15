require('dotenv').config();


module.exports = {
    db_url : process.env.DB_URL,
    app_project_path : process.env.APP_PROJECT_PATH,
    database : {
        port : process.env.PORT,
        protocol : process.env.PROTOCOL,
        host :process.env.HOST
    },
    sslCertificates : {
      privkey : process.env.PRIVKEY,
      fullchain : process.env.fullchain
    }

}