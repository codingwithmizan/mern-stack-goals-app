const User = require('../models/User');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message: "Bad Request",
        })
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist){
        return res.status(400).json({
            message: "Email already exist",
        })
    }
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        return res.status(201).json({
            message: "User added successfully",
            data: user,
            status: 201,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }

}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                message: "No user found",
                status: 404,
                success:false
            })
        }

        return res.status(200).json({
            message: "User details fetched successfully",
            data: user,
            status: 200,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}

module.exports = {
    signup,
    getUser
}