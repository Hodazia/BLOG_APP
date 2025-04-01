const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const bcrypt = require("bcrypt")
const verifyToken = require("../verifyToken")
const jwt = require("jsonwebtoken")

router.put("/:id", verifyToken, async (req,res) => {
    try
    {
        if (req.body.password)
        {
            const salt =await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hashSync(req.body.password,salt);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json(updatedUser)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id", verifyToken, async (req,res) => {
    try
    {
        await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        await Post.deleteMany({userId: req.params.id})
        await Comment.deleteMany({userId: req.params.id})
        return res.status(200).json("User has been deleted")
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

//GET USER
router.get("/:id", async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        // do not show the password
        const {password,...info}=user._doc
        res.status(200).json(info)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

module.exports = router