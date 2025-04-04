const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const bcrypt = require("bcrypt")
const verifyToken = require("../verifyToken")

router.post("/create", verifyToken, async (req,res) => {
    try
    {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})
router.put("/:id", verifyToken, async (req,res) => {
    try
    {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json(updatedComment)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id",verifyToken , async (req,res) => {
    try
    {
        await Comment.findByIdAndUpdate(req.params.id)
        return res.status(200).json("Comment has been deleted")
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

//GET POST COMMENTS
router.get("/post/:postId",async (req,res)=>{
    try{
        const comments=await Comment.find({postId:req.params.postId})
        res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router
