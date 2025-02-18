const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, User} = require("../db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password =req.body.password;

    await Admin.create({
        username: username,
        password: password
     })
     res.json({
        message: "Admin created successfully."
     })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username
    const password = req.body.password

    const user = await User.find({
        username,
        password 
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    
    const Newcourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: "course created successfully", courseId: Newcourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const resp = await Course.find({});

    res.json({
        courses: resp
    })
});


module.exports = router;