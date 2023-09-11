module.exports = {
    development: {
        port: process.env.PORT || 3000,
        db_uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/cubical'
    },
    production: {}
};