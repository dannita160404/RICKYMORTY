const {User} = require("../DB_connection")


exports.postUser = async (req,res) =>{
    console.log(req)

    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({error: "faltan datos"})

    }

    try {
        const[user, created] = await User.findOrCreate({
            where: {email},
            defaults:{
                password,
            }
        })
        if(!created){
            return res.status(409).json(user)
        }
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }




}