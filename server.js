const express = require('express');
const app = express();
const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'yair5555', 
    database: 'carbon_factor' 
  }
});

app.use('/',express.static(__dirname+'/public'));

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
  console.log('server is running on port 3000');
});

app.post('/register', async (req,res)=>{
  console.log(req.body);

  //TO ADD THE USER'S INFORMATIONS TO THE DATABASE
  saveUser(req.body.firstname, req.body.lastname, req.body.email, req.body.password)
  .then(data => {
    res.sendFile(__dirname+'/public/platform.html')
  })
  .catch(e => {
    console.log(e);
    res.sendFile(__dirname+'/public/register.html')
  })
})

// FUNCTION TO ADD THE INFORMATION OF THE NEW USER TO THE DATABASE.
function saveUser(fname, lname, email, password) {
  return db('users')
  .insert({fname:fname, lname:lname, email:email, password:password})
  .returning('id')
}



app.post('/login', async (req,res)=>{
  console.log(req.body);
  //CHECK IF THE USER EXIST IN THE DATABASE
  getUser(req.body.email)
  .then( async (data) => {
    console.log(data);
    if(data.length == 0){
      res.sendFile(__dirname+'/public/login.html')
    }
  else {
      if(req.body.password != data[0].password){
        res.sendFile(__dirname+'/public/login.html')
      }
      else{
        res.sendFile(__dirname+'/public/platform.html')
      }

    }
  })
  .catch(e=>{
    console.log(e);
  })
})

// FUNCTION TO RETRIEVE THE INFORMATION OF USER THAT JUST REGISTERED.
function getUser(email) {
  return db('users')
  .select('id','email','password')
  .where({email:email}) // WHERE THE EMAIL COLUMN IS EQUAL TO THE VALUE OF THE ARGUMENT (here email adress of the user)
}


app.get('/api', (req, res) => {
    db
    .select('company_name','emissions','index_emissions', 'rating', 'index_rating', 'return', 'index_return', 'volatility', 'index_volatility').from('company_data')
    .then(data =>
            res.send(data)
    )

})