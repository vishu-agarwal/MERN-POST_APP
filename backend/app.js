const express = require('express')
const exp = express()
const port = 1000;
const mongoose = require('mongoose');

exp.use(express.json());
//note:-- before check on compass first create model file user.js because for create db have to model file in it then it show 
// and for http driver port you not write this mongo db url on loclhost browser 
// for solve this write localhost:1000 port which is defined then it runs perfect
// and also if localhost:1000 gives error means definetly have problem in server,.js or app.js file like exp.use(express.json); // this is wrong
//exp.use(express.json()); this is correct so first go throgh code once.........
mongoose.connect("mongodb://127.0.0.1:27017/abc").then(() => {
    console.log("Connected .....");
});
exp.get("/", (req, res) => res.send("welcome to practice1...."))
exp.listen(port, () => console.log(`port listen at ${port} !`));

const umodel = require("./user");

exp.get("/user/list", async(req, res) => {
    const userlist = await umodel.find();
   
    if (userlist.lenght === 0) {
        
        return res.json({ data: "no data found" });
    } else {
        console.log(userlist);
        return res.json({ data: userlist });
    }
});

exp.post("/user/reg", async(req, res) => {
    const newuser = req.body;
  //  console.log(newuser)
    
    let usr = await umodel.findOne({ name: req.body.name });
    if (usr) {
        return res.json({ data: 'That user already exisits!'});
    }
    else
    {
        const user = umodel.create(newuser)
        console.log(user)
        console.log(newuser)
    return res.json({ data: "successfully registered" })
}
    
      //  return res.json({ data: "not regester" })
    
})

exp.post("/user/login", async(req, res) => {
    const unm = req.body.name;
    const pwd = req.body.password;
    const fnd = await umodel.findOne({ name: unm, password: pwd })
    console.log(fnd);
    if (fnd) {
        return res.json({ data: "login successfull" })
    } else {
        return res.json({ data: "input is wrong" })
    }
})


exp.put("/user/updt/:id", async(req, res) => {
    const uid = req.params.id;
    const nm = req.body.name;
    const ps = req.body.password
    const updt = await umodel.findOneAndUpdated({ id: uid }, {
        name: nm,
        password: ps
    }, { new: true })
    console.log(updt);
    return res.json({ data: "update successfully" })

})
exp.delete("/user/delt/:id", async(req, res) => {
    const did = req.params.id;
    const del = await umodel.findOneAndDelete({ id: did })
    console.log(del)
    return res.json({ data: "delete successfully" });

})


const pmodel = require("./post");

exp.get("/post/list",async(req,res)=>{
    var mysort = { _id: -1 };
    const postlist = await pmodel.find().sort(mysort);
    if (postlist.length ===0)
    {
        return res.json({data: "no post created"})
    }
    else
    {
        return res.json({data:postlist})
    }
})

exp.post("/post/add",(req,res)=>{
    // const title = req.body.title;
    // const msg = req.body.message;
    const newpost = req.body;
    const npost = pmodel.create(newpost);
    // if (npost)
    // {
        console.log(newpost);
        return res.json({data:"successfully post created"})
    // }
    // else
    // {
    //     return res.json({data: "some problem while creating post"})
    // }
})



// exp.delete("/post/pdel/:did",async(res,req)=>{
//     const pid = req.params.did;
//     console.log(pid)
//     const del = await pmodel.findOneAndDelete({_id:pid})
//     console.log(del);
//     return res.json({ data: "delete successfully" })
// })
exp.delete("/post/pdel/:id",async(req,res)=>{
    const pid = req.params.id;
    const delpost = await pmodel.findOneAndDelete({_id:pid})
    if(delpost.length != 0)
    {
        console.log(delpost);
        return res.json({data:"successfully deleted"})
    }
    else
    {
        return res.json({data:" not deleted any post"})
    }

})

exp.put("/post/updt/:id",async(res,req)=>{
    const pid = req.params.id;
    const updtpost = req.body;
    const updatepost = await pmodel.findOneAndUpdate({_id:pid},{updtpost})
    // const title = req.body.title;
    // const msg = req.body.message;
    // const nm = req.body.name;
    // const updtpost = await pmodel.findOneAndUpdate({_id:pid},
    //     {title:title},
    //     {message:msg},
    //     {name:nm},
    //     {new:true}
    // )
    if(updatepost.lenght!=0){
    console.log(updatepost);
    return res.json({ data: "update successfully" })
    }
    else{
        return res.json({data:"not update"})
    }
})
exp.put("/post/pupdate/:upid",async(req,res)=>{
    const pid = req.params.upid;
    // const upost = req.body;
    const title = req.body.title;
    const msg = req.body.message;
    const nm = req.body.name ;

   // console.log(upost)
    console.log(pid)
    const updatepost = await pmodel.findOneAndUpdate({_id:pid},{
        title:title,
        message:msg,
        name:nm
    }
        
        ,{new:true});
    console.log(updatepost)

    // if (upost === updatepost)
    // {
        return res.json({data:"update successfully"});
    // }
    // else{
        return res.json({data:"not update"});
    // }
})
exp.get("/post/plist/:nm",async(req,res)=>{
    var mysort = { _id: -1 };
    const pnm = req.params.nm;
    const plist = await pmodel.find({name:pnm}).sort(mysort)
    if(plist.length != 0)
    {
        console.log(plist);
        return res.json({data:plist})
    }
    else
    {
        return res.json({data:"yet you not created any post"})
    }

})

exp.get("/post/fetchupdt/:id",async(req,res)=>{
    const pid = req.params.id;
const plist = await pmodel.findOne({_id:pid})

    console.log(plist);
    return res.json({data:plist})


})