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

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)
        
    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    }