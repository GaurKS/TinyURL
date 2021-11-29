const express = require("express");
const bodyParser = require("body-parser");
const validURL = require('valid-url');
const shortid = require('shortid');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// paste the code from codegen here
app.post('/getURL', async (req, res) => {
  const {arg1} = req.body.input;
  try{
    if (!validURL.isUri(arg1)){
      return res.status(401).json({error: 'Invalid URL' });
    }
    // create url token code
    const urlCode = shortid.generate();
    const shortURL = "https://localhost:3000" + '/' + urlCode;
    return res.json({
        link: shortURL
    })
  }
  catch (err){
    res.status(500).json({message : "Server Error"});
  }
});

// app.post('/hello', async (req, res) => {
//   return res.json({
//     hello: "world"
//   });
// });

app.listen(PORT);
