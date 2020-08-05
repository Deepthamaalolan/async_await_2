
const Models = require("../lib/User");



async function getUsers (req) {
  let x=await Models.findOne(req)
  //console.log(x)
  if(x){
    return x
            //return x
  }
  
}


async function createUser (x)
{
  if( await new Models(x).save())
  {        return x
  }

}

//async function update(y)
  //{ const res = Models.updateOne({ username: y.username}, { $set: {password:y.password}});
    //return res
        
//}

async function update(y){
  const res= await Models.findOneAndUpdate({username:y.username}, {$set: {password:y.password}},{upsert:false})
  return res
}

//async function update(y){
//const res = Models.update({ username: y.username},{ $set: {password:y.password}},{ upsert: false })
  //return res
//}


module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  update:update
};




        






    
