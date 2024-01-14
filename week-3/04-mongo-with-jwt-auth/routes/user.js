const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username= req.body.username;
    const password= req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully."
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;

    const user = await User.findOne({
        username, 
        password
    })
    if(user){
        const jwt = jwt.sign({username}, JWT_SECRET)
        res.json({token})
    }else{
        res.status(411).json({
        msg: "No such user exists."
    })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
     const resp = await Course.find({})
    res.json({
        resp
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router