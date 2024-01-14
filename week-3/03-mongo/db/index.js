const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Sahilkr:6OxYN5v0XnPVGoXx@cluster0.o9jqjtb.mongodb.net/course_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }] 
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    imagelink: String,
    description: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}