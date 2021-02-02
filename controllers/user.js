
const User=require('../models/user');


 exports.getUser=async(req,res)=>{
    try{

        //{status:"ACTIVE"}
        //{ "age": { $gte:parseInt( req.body.age) } , "name": req.body.name },{name:1,age:1,city:1}
        const savedUser=await User.findById({_id:req.params.userId})
        // ({ 
        //     $or:[
        //     {"age": { $gte:parseInt( req.query.age) } },
        //     {"name":req.query.name}
        // ]},
        //     {age:1,name:1});
           
        
            res.json(savedUser);
    }
    catch(err){
        res.status(500).json({message:err})
    }
 };


 exports.postUser=async(req,res)=>{

    try{
        console.log(`name:${JSON.stringify(req.body)}`)
        let  user=new User({
            name:req.body.name,
            // age:parseInt(req.body.age),
            // city:req.body.city,
            // status:'ACTIVE'
        })
    
        let savedPost=await user.save();
        console.log(`savedPost':${JSON.stringify(savedPost)}`);
        res.json(savedPost);
    }
    catch(err){
        console.log(`err:${err.toString()}`)
        res.status(500).json({message:err})
    }
};


exports.updateUser=async(req,res)=>{

    try{
        let updatedUser=await User.findOneAndUpdate(
            {_id:req.params.userId},
            { $set:{"name":req.body.name,
            //"age":parseInt(req.body.age),
            //{ "name" : { $regex: /Ghost/, $options: 'i' }
            //"city":req.body.city
        }}
            );
            res.json(updatedUser)
        
    }

    catch(err){
        res.status(500).json({message:err})
    }



};

exports.deleteUser=async(req,res)=>{
    try{
        const deletedPost=await User.findOneAndUpdate({_id:req.params.userId},{$set:{status:"INACTIVE"}});
        res.json(this.deleteUser);
    }
    catch(err){
        res.status(500).json({message:err})
    }
}


