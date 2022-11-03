const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");

app.use(express.static(path.resolve(__dirname, '../app')));

// let connect = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Aayush",
//   database : "aayush"
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get("/get/document", async (req, res) => {
  const backendHost = getBackendHost();
  let urlHost = backendHost + "/get/document";
  try {
    let response = await axios.get(urlHost);
    res.send(JSON.stringify(response.data));
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.post("", async(req,res) => {
  await axios({
    method: "post",
    url: "",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    data: req.body,
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
});

//Start server
app.listen(5000, function () {
  console.log(
    "project listening on 5000 port"
  );
});