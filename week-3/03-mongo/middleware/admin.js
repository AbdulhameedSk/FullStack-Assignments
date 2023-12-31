const { Admin } = require("../db/index.js");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const { username, password } = req.headers;

    const u = await Admin.findOne({
        username: username,
        password: password
    });

    if (!u) {
        res.status(403).json({
            msg: "Admin doesn't exist"
        });
    } else {
        next();
    }
}

module.exports = adminMiddleware;
