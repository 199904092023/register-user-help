const { Client } = require("@elastic/elasticsearch");
const exp = require("constants");
const fs = require("fs");

let client;
try {
  client = new Client({
    node: "https://localhost:9200",
    auth: {
     "apikey" : "VXdaSEtZOEJvNUlHa25jR3dUdDA6WHg2ZGdsN3NSQjZZa2ViWE5VNGZWUQ=="
    },
    tls: {
      ca: fs.readFileSync("./http_ca.crt"),
      rejectUnauthorized: false,
    },
  });
  console.log("Database Connected");
} catch (error) {
  console.log("The error is :- ", error);
}
module.exports = client;
