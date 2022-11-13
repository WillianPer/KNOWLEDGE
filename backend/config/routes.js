// const users = require('../api/user')

module.exports = app => {
    app.route('/users')
        // .post(user.save)
        .post(app.api.user.save)
}