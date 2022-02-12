const validator = require("validator")
const valid = [{
    ele: "id",
    invalid: (data) => {
        return false

    }
},

{
    ele: "name",
    invalid: (data) => {
        return (data.length < 3) ? "name must be at least 3character" : false

    }
},
{
    ele: "balance",
    invalid: (data) => {
        return false

    }
},
{
    ele: "phone",
    invalid: (data) => {
        return !(validator.isMobilePhone(data, ['ar-EG'])) ? "invalid phone":false

    }
},
{
    ele: "email",
    invalid: (data) => {
        return !(validator.isEmail(data)) ? "email is wrong":false

    }
},
{
    ele: "transaction",
    invalid: (data) => {
        return false

    }
},
{
    ele: "addAt",
    invalid: (data) => {
        return false

    }
}


]

const validData = (dataObj) => {
    const errors = []
    valid.forEach(e=>{
      if(e.invalid(dataObj[e.ele])) {errors.push(e.invalid(dataObj[e.ele]))}
    })




    return errors
}

module.exports = { validData }