module.exports = app => {

    // Base URLS
    app.use('/api', require('./van.routes.js'))
}

