import CRUDserivce from '../services/CRUDservice';


let handleCreatLogin = async(req,res)=>{
    try{
        let createUser = await CRUDserivce.CreatNewUse(req.body);
        console.log("Create account success : ",createUser);
        res.status(200).json({
            user: {
                errCode:0,
                email: createUser.email,
                passowrd: createUser.password,
                roleId: createUser.roleId,
                errMessage: "Account creation successful!",
            }
        });
    }catch(error){
        console.log("Create account falied!!")
        res.status(500).json({
            user:{
                errCode:1,
                errMessage:"Cant create account",
            }
        })
    }
    
}
let handleLogin = async(req,res)=>{
    let email = req.body.email
    let password = req.body.password
    let roleId = req.body.roleId
    if(!email ||!password){
        return res.status(500).json({
            errcode:1,
            message:"misstake input"
        })
    }
    let userData = await CRUDserivce.handleUserLogin(email,password,roleId)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user:userData.user ? userData.user : {}
    })
}

module.exports={
    handleCreatLogin:handleCreatLogin,
    handleLogin:handleLogin
}