const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abdulhameed:abdulhameed@travelweb.upbqs02.mongodb.net/Course-Selling');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    email:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email:String,
    password:String,
    purchased:[{
        type:mongoose.Schema.Types.ObjectId, //unique Id of course
        ref:'courses' //collection name
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    course:String,
    courseId:Number,
    creator:String,
    price:Number,
    hours:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}