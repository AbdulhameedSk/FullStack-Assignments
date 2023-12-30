const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const courses = require("../models/courses");
const users = require("../models/users");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {email,password}=req.body;
    const addu=await users.insertOne({email,password});
    await addu.save()
        res.json({
            msg:'USER CREATED SUCCESSFULLY'
        })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const response = await courses.find({});
     res.json({
         courses: response
     })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const cid=req.params.courseId;
    const email=req.params.body;
    await users.updateOne({email:email},{"$push":{
        purchased:courseId
    }})
    res.json({msg:"COURSE PURChASED SUCCESSFULLY"})
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const email=req.params.email;
    const user=await users.findOne({email:email})
    console.log(purchased);
    const ucourse=await courses.find({courseId:user.purchased})
    res.json({ucourse})
});

module.exports = router