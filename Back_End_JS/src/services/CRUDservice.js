import db from '../models/index';
import bcrypt from 'bcryptjs';

let CreatNewUse = (data) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            let hashPassword = await hashUserPassword(data.password);
            let newCreateUse =await db.User.create({
                email:data.email,
                password:hashPassword,
                roleId:data.roleId,
                raw:true 
            })
            resolve(newCreateUse.dataValues)
        }catch(e){
            reject(e)
        }
    })
}
let hashUserPassword = (password) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const salt = await bcrypt.genSalt(10)
            let hashPassword = await bcrypt.hash(password,salt)
            resolve(hashPassword)
        }catch(e){
            reject(e)
        }
    })
}

let handleUserLogin = (email,password) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            let dataUser = {}
            let datalogin = await checkUserEmail(email)
            if (datalogin){
                let user = await db.User.findOne({
                    where : {email:email},
                    attributes:['email','password','roleId'],
                    raw:true
                })
                if (user){
                    let check = await bcrypt.compare(password,user.password)
                    if(check){
                        dataUser.errCode=0;
                        dataUser.errMessage="Login Success";
                        delete user.password;
                        dataUser.user=user;
                    }else{
                        dataUser.errCode=1;
                        dataUser.errMessage="Login failed";
                    }
                }else{
                    dataUser.errCode=2;
                    dataUser.errMessage="Failed";
                }
                resolve(dataUser)
            }
        }catch(e){
            reject(e)
        }

    })

}


let checkUserEmail = (userEmail) =>{
    return new Promise(async(resolve,reject) =>{
        try{
            let user = await db.User.findOne({
                where: {email:userEmail}
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }
        }catch(e){
            reject(e)
        }
    })
}
module.exports ={
    CreatNewUse:CreatNewUse,
    handleUserLogin:handleUserLogin,


}