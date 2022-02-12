const fs=require("fs")
const chalk=require("chalk")


const readData=(fileName)=>{
    let data;
    try{
        data=JSON.parse(fs.readFileSync(`dataBase/${fileName}.json`)) 
    }
    catch(e){
        data=[]
        console.log(e)
    }

    return data

}

const writeData=(fileName,data)=>{
      
    try{
        if(!Array.isArray(data)) throw new Error ("data must be array")
        fs.writeFileSync(`dataBase/${fileName}.json`,JSON.stringify(data))



    }
    catch(e){
        console.log(chalk.red(e.message))

    }
}

module.exports={
    readData,
    writeData
}