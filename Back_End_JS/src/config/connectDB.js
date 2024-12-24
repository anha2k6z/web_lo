const Sequlize = require('sequelize');
const sequelize = new Sequlize('do_an','root',null,{
    host:"localhost",
    dialect:'mysql',
    logging:false,
});
let connectDB = async()=>{
    try{
        await sequelize.authenticate()
        console.log("Connect DB success")
    }catch(error){
        console.log("Cant connect DB : ",error)
    }
}
module.exports= connectDB;