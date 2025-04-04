const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const bcrypt = require("bcrypt")
const verifyToken = require("../verifyToken")

//CREATE
router.post("/create", verifyToken , async (req,res) => {
    try
    {
        const newPost= new Post(req.body);
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

router.put("/:id", verifyToken, async (req,res) => {
    try
    {
        const updatedUser = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser);
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id", verifyToken ,async (req,res) => {
    try
    {
        await Post.findByIdAndUpdate(req.params.id)
        return res.status(200).json("Post has been deleted")
    }
    catch(err)
    {
        return res.status(500).json(err)
    }
})

//GET POST DETAILS
//GET POST DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET POSTS
router.get("/",async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const posts=await Post.find(query.search?searchFilter:null)
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER POSTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const posts=await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router