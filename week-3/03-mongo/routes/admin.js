const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../solution/db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        // Assuming you have an Admin model, use it to create a new admin
        const { email, password } = req.body;
        const newAdmin = new admins({ email, password });
        await newAdmin.save();
        res.json({ msg: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        // Assuming you have a Course model, use it to create a new course
        const { cname, cid, creater, price, hours } = req.body;
        const newCourse = new courses({ cname, cid, creater, price, hours });
        await newCourse.save();
        res.json({ msg: 'COURSE ADDED' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        // Assuming you have a Course model, use it to find a course
        const { cname, creater } = req.body;
        const course = await courses.findOne({ cname: cname, creater: creater });

        if (!course) {
            res.status(404).json({ msg: 'Course not found' });
        } else {
            res.json({ course });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
