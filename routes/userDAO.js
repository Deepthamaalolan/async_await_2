
const Models = require("../lib/User");
#updated
let getUsers = async (req) =>{
    await (Models.find(req)).then((result)=>{ return  result
  }).catch((err)=>{
      console.log(err);
  })
}
function createUser(x)
{
  if(new Models(x).save())
  {        return x
  }
  else{
    return new error("Bad");
  }
    }

     
function update(y)
{ if(Models.find(y)){
  Models(y).save()
  console.log(y);
  return y
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
