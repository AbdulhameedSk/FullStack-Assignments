const { admin } = require("../admins");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {email,password}=req.headers;
    try{
        const check=await admin.findOne({username,password});
        if(!check){
            // res.msg = "WRONG ADMIN";
            res.status(401).json({
                error:"UNAUTHORISED ADMIN"
            })
        }
    }catch(err){
        res.status(401).json({err});
    }
    req.admin=check;
    next();
}

module.exports = adminMiddleware;