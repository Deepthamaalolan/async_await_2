


const Models = require("../lib/User");



async function getUsers (req) {
  let x=await Models.findOne(req)
  
  //console.log(x)
  if(x){
    return x
            //return x
  }
  
}

//const getUsers = async (req) => {
  //(await Models.find(req)).then((result)=>{ return result}).catch((err)=>{
    //   console.log(err);
    //})
//s}

async function createUser (x)
{
  if( await new Models(x).save())
  {        return x
  }

    }

async function update(y)
  { if(await Models(y).save)
    {return y
      }
    
      else{
        return new error("bad")
      }
        
    
    }





module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  update:update
};

const Models = require("../lib/User");



async function getUsers (req) {
  let x=await Models.findOne(req)
  
  //console.log(x)
  if(x){
    return x
            //return x
  }
  
}

//const getUsers = async (req) => {
  //(await Models.find(req)).then((result)=>{ return result}).catch((err)=>{
    //   console.log(err);
    //})
//s}

async function createUser (x)
{
  if( await new Models(x).save())
  {        return x
  }

    }

async function update(y)
  { if(await Models(y).save)
    {return y
      }
    
      else{
        return new error("bad")
      }
        
    
    }





module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  update:update
};
