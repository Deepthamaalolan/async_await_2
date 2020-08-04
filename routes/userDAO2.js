
 const Models = require("../lib/User");


 function getUsers(criteria)
 { (Models.find(criteria)).then((result)=>{ return result}).catch((err)=>{
  console.log(err);
})
 }
 
 
 //const getUsers = criteria =>{
  //if(Models.find(criteria))
  //{ 
    //return criteria
  //}
  //else{
  //console.log("Bad")
  //}
//}


 
const createUser = objToSave =>
new Promise((resolve, reject) => {
  new Models(objToSave)
  .save()
  .then(client => resolve(client))
  .catch(err => {reject(err);

});
});

 
module.exports = {
  createUser: createUser,
  getUsers: getUsers
};
