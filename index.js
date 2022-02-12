const chalk=require("chalk")
const fs=require("fs")
const dealWithJson=require("./selfModules/dealWithJson.js")
const crud=require("./selfModules/crud.js")
const yargs=require("yargs")
 const validation = require("./selfModules/validation.js")
const validator = require("validator")


 yargs.command({
     command:"add",
     describe:"add new user data",
     builder:{
         name:{demondOpyion:true ,describe:"user name"},
         balance:{demondOpyion:true ,describe:"user balance"},
         phone:{demondOpyion:true ,describe:"user phone"},
        email:{demondOpyion:true ,describe:"user email"},
     },
     handler:(argv)=>{
        //  const newUser=crud.createObj(argv)
        //  console.log(newUser)


      
         crud.addUser(crud.createObj(argv),"data")

      


     }
 })


 yargs.command({
    command:"showAll",
    describe:"show all users",
    handler:()=>{
      
         crud.showAll()
     }

 })

 yargs.command({
    command:"addTransaction",
    describe:"add new transaction",
    builder:{
        id:{demandOption:true},
        type:{demondOpyion:true ,describe:"user name"},
        balanceVal:{demondOpyion:true ,describe:"user balance"},
        
    },
    handler:(argv)=>{
      

     
        crud.addTransaction(argv)

     


    }
})

yargs.command({
    command:"showSingle",
    describe:"show single user",
    builder:{
        id:{demandOption:true}
    },
    handler:(argv)=>{
      
         crud.showSingle(argv.id)
     }

 })
 
 yargs.command({
    command:"delSingle",
    describe:"delete single user",
    builder:{
        id:{demandOption:true}
    },
    handler:(argv)=>{
      
         crud.delSingle(argv.id)
     }

 })

 yargs.command({
    command:"delAll",
    describe:"delete all users",
    handler:()=>{
      
         crud.deleteAllUsers()
     }

 })


 yargs.command({
    command:"editSingle",
    describe:"edit single user",
    builder:{
        id:{demandOption:true},
        key:{demondOpyion:true ,describe:"key edit"},
        value:{demondOpyion:true ,describe:"value edit"},
    },
    handler:(argv)=>{
      
         crud.editSingle(argv.id,argv.key,argv.value)
        
     }

 })

 yargs.argv

 

