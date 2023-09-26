function hasUser(req, res, next) {
    if (req.user) {
        next();
    }else {
        res.status(400).json({message: 'Please log in'});
    }
    
}

function isGuest(req, res, next) {
    if (!req.user) {
        next();
    }else {
        res.status(400).json({message: 'You are logged in'});
    }
}

module.exports = {
    hasUser,
    isGuest
}