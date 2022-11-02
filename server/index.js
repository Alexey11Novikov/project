const express = require("express");
const app = express();
const axios = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT");
  next();
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
app.listen(getHttpServerPort(), function () {
  console.log(
    "tp.cek.ru sucessfully started on " + getHttpServerPort() + " port"
  );
});