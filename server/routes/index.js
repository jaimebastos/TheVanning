module.exports = app => {

    // Base URLS
    app.use('/api/vans', require('./van.routes.js'))
    app.use('/api/extras', require('./extras.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/budget', require('./budget.routes.js'))
    app.use("/api/uploads", require("./upload.routes"));

}

