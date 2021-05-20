module.exports = {
    isLoggedIn: (req, res, next) => {
        console.log(req.session.currentUser)
        if (req.session.currentUser) {
            next()
        }
        else {
            res.status(401).json({ errorMessage: 'Inicia sesión para acceder' })
        }
    },
    checkRoles: (...allowedRoles) => (req, res, next) => {          // REST PARAMETERS
        if (allowedRoles.includes(req.session.currentUser.role)) {
            next()
        } else {
            res.status(401).json({ errorMessage: 'Desautorizado' })
        }
    }
}