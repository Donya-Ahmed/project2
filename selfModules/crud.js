const chalk = require("chalk")
const fs = require("fs")
const dealWithJson = require("./dealWithJson.js")
const shortid = require('shortid');
const inputs = ["name", "balance", "phone", "email"]
const validation = require("./validation.js")






const createObj = (user) => {
    let userOB={}
    const data={}
    inputs.forEach(input=>{
        data[input] =user[input]
    })
    
    try {
        const d = new Date();
            userOB= {
                id: shortid.generate(),
                ...data,             
                transaction: [],
                addAt: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
            }
           
        
        return userOB
    

    }
    catch (e) {
        console.log(chalk.bgRed(e.message))
    }

   

}

const addUser = (newUser, fileName) => {
    try {
        const err=validation.validData(newUser)

        if(err.length>0) throw new Error(err)
            users = dealWithJson.readData(fileName)
            users.push(newUser)
            dealWithJson.writeData(fileName, users)
            console.log(chalk.bgGreen.white('data added successfully'))
    

        
      

    }
    catch (e) {
        console.log(chalk.red(e.message))

    }

}

const showAll = () => {
    users = dealWithJson.readData("data")
    users.forEach(user => {
        inputs.forEach(input => {
            console.log(`${input}:${user[input]}`)
        })

    });

}

const findUser=(users,id)=>{
    let index= users.findIndex((user)=>id==user.id)
   
     return index
   
   }
const showSingle=(id)=>{
  try{
    const users=dealWithJson.readData("data")
   let index=findUser(users,id)
   if(index==-1) throw new Error()
    console.log(users[index])
  
  }
  catch(e){
      console.log( chalk.red("not found"))
  }

}
const delSingle=(id)=>{
    try{
        const users=dealWithJson.readData("data")
        console.log(users)
       let index=findUser(users,id)
       console.log(index)
       if(index==-1) throw new Error("index is not found")
        users.splice(index,1)
        dealWithJson.writeData("data",users)
      
      }
      catch(e){
        //   console.log( chalk.red("user is not found"))
        console.log(e.message)
      }
    
}



const addTransaction=(obj)=>{
    try{
        const users=dealWithJson.readData("data")
       let index=findUser(users,obj.id)
       console.log(index)
       if(index==-1) throw new Error()
       console.log(users[index])
       users[index].transaction.push({
           type:obj.type,
           value:obj.balanceVal
       })
      
       console.log(users[index])

        dealWithJson.writeData("data",users)
      
      }
      catch(e){
          console.log( chalk.red("transaction cant't added"))
      }
}

const deleteAllUsers=()=>{
    dealWithJson.writeData("text", [])
    console.log(chalk.bgGreen("data removed"))
}

const editSingle=(id,keys,values)=>{
    try{
        let creatOne={}
        keys.forEach((key,i)=>{
            creatOne[key]=values[i]
        })
        
  
        const objKeys=Object.keys(creatOne)
        const users=dealWithJson.readData("data")
       let index=findUser(users,id)
       console.log(index)
       if(index==-1) throw new Error()
       console.log(users[index])
       objKeys.forEach(key=>{
        users[index][key]=creatOne[key]
       })
       console.log(users[index])

        dealWithJson.writeData("data",users)
      
      }
      catch(e){
          console.log( chalk.red("user is not found"))
      }
    
}



module.exports = {
    
    createObj,
    addUser,
    showAll,
    findUser,
    showSingle,
    delSingle,
    editSingle,
    addTransaction,
    deleteAllUsers

    

}