const { admin } = require("../users");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {email,password}=req.headers;
    try{
        const check=await users.findOne({email,password})
        if(!check){
            res.status(401).json({
                msg:"UNAUTHORIZED USER"
            })
        }
    }catch{
        res.status(401).json({msg:"FAILED"})
    }
    req.users=check;
    next();
}

module.exports = userMiddleware;