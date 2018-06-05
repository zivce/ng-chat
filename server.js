const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const ChatKit = require('@pusher/chatkit-server');

const app = express()

const chatkit = new ChatKit.default({
  instanceLocator : 'v1:us1:8a3110ca-c223-41a6-9333-2184f6d2bc83',
  key : 'ae805288-a21c-4e9f-98ba-7a49878cc77f:Y4Wu3Mb6OTAU69hDLILn342n0S+hkfAQsvALIdu+yUo='
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



/**
 * Used for sending username to server
 */

app.post('/users',(req,res)=>{
  
  const {username}  = req.body;


  chatkit
    .createUser({
      id:username,
      name:username
    })
    .then(()=>res
    .send("added user")
    .sendStatus(200))
    .catch((err)=>{
      if(err.error === 'services/chatkit/user_already_exists')
      {
        res.send(username).sendStatus(201);
      }
      else
      {
        res.status(error.status).json(error);
      }

    })
})




/**
 * Used for auth
 */
app.post('/authenticate',(req,res)=>{
  
  const authData = chatkit.authenticate({userId:req.query.user_id})
  res.status(authData.status).send(authData.body);

})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
