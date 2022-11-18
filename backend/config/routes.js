// const users = require('../api/user')

module.exports = app => {
    app.route('/users')
        // .post(user.save)
        .post(app.api.user.save)
        .get(app.api.user.get)

    
    app.route('/users/:id')
        .put(app.api.user.save)

    app.route('/users/:id')
        .get(app.api.user.getById)
}