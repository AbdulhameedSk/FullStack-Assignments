const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config.js");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json(
            {
                msg: "PLEASE PROVIDE TOKEN"
            }
        )
    }
    const sp = token.split(" ");
    const rtoken = sp[1];
    try {
        const ving = jwt.verify(rtoken, JWT_SECRET);
        if (ving) {
            return next();
        }
        else {
            res.json({
                msg: "INVALID USER"
            })
        }
    }
    catch (error) {
        res.status(401).json({
            msg: "INVALID INPUTS"
        })
    }
}

module.exports = adminMiddleware;