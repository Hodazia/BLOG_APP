/* this is a middleware, whenver the user has signed in, then the follwing routes of posts, comments the user need to be signed
in via jwt token
*/

const jwt = require("jsonwebtoken");

const verifyToken = async (req,res,next) => {
    const token = req.cookies.token
    if(!token)
    {
        return res.status(401).json("You are not authenticated")
    }
    jwt.verify(token,process.env.JWT_SECRET,async (err,data) => {
        if(err)
        {
            return res.status(403).json("token is not valid,")
        }
        req.userId=data._id
       
        // console.log("passed")
        
        next()
    })
}

module.exports = verifyToken