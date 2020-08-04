
const Models = require("../lib/User");
 
function getUsers(x)
{    console.log(x)
    if(!Models.find(x)){
        throw new error("Bad vibes");
    }
    else{
        return x;
    }

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
