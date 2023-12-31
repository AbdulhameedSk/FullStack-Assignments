const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.body;

    const u = await User.findOne({
        username: username,
        password: password
    })
    if (u) {
        res.status(403).json({
            msg: "User doesnt exist"
        })
    } else {
        next();

    }
}

module.exports = userMiddleware;