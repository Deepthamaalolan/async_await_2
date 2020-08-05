const UserDAO = require('../routes/userDAO');

 
/* API to register new user */
let register = async (req, res) => {
if (!req.body.username || !req.body.password||!req.body.firstname||!req.body.lastname) {
  res.status(401).send('Enter all the details')
} 
else {
  try {
  let criteria = {
    username: req.body.username
  }
  const checkUser = await UserDAO.getUsers(criteria);
  if (checkUser) {
    res.status(401).send('Username already registered')
  } 
  else {
    let userData = {
      username:req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname
      
      
    };
    const addUser = await UserDAO.createUser(userData);
    if (addUser) {
      res.status(200).json({message:'User registered successfully!',addUser})
  
    } 
    else {
      res.status(403).send("Something went wrong");
    }
  }
  } 
  catch (error) {
    res.status(404).json({message:"wrong!!",error:error});
  }
}
};
 
/* API to login user */
let login = async (req, res) => {
if (!req.body.username || !req.body.password) {
  res.status(401).send('Parameters are missing');
} 
else {

  try {
    let criteria = {username: req.body.username };   
    const checkUser= await UserDAO.getUsers(criteria);
    console.log(checkUser)
    if (checkUser) {
      let criteria = {
        username: req.body.username,
        password: req.body.password
      };
      const checkPassword = await UserDAO.getUsers(criteria);
      console.log(checkPassword)
      if (checkPassword) {
        res.status(200).send('Logged in successfully!');
      } 
      else{
        res.status(200).send('Password incorrect!');
      }
    } 
    else {
      res.status(401).send('Username not exist!');
    }
    } 
    catch (error) {
      res.status(401).json({message:'wrong!!',error:error});
    }
  }
};

let forgetpassword = async (req, res) => {
  if (!req.body.username) {
    res.status(401).send('Parameters are missing');
  } 
  else {
  
    try {
      let criteria = {username: req.body.username };   
      const checkUser= await UserDAO.getUsers(criteria);
      //console.log(checkUser)
      if (checkUser) {
        let criteria ={username :req.body.username,password: req.body.password};
        console.log("hello");
        const updatePassword = await UserDAO.update(criteria);
        if (updatePassword) {
          res.status(200).send('updated successfully!');
        } 
        else {
          res.status(401).send('enter another password');
        }
      } 
      else {
        res.status(401).send('Username not exist!');
      }
      } 
      catch (error) {
        res.status(401).json({message:'wrong!!',error:error});
      }
    }
  };
  
   
module.exports = {
  login:login,
  register:register,
  forgetpassword:forgetpassword

};

      
        
