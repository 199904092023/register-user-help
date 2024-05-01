const { Client } =require("@elastic/elasticsearch");
const fs = require("fs");

const API_KEY = "VXdaSEtZOEJvNUlHa25jR3dUdDA6WHg2ZGdsN3NSQjZZa2ViWE5VNGZWUQ==";
const ELASTICSEARCH_NODE = "https://localhost:9200";
const CA_CERTIFICATE_PATH = "./http_ca.crt";

let client;

try {
  client = new Client({
    node: ELASTICSEARCH_NODE,
    auth: {
      apikey: API_KEY
    },
    tls: {
      ca: fs.readFileSync(CA_CERTIFICATE_PATH),
      rejectUnauthorized: false,
    },
  });
  console.log("Database Connected");
} catch (error) {
  console.error("Failed to connect to Elasticsearch:", error);
}

module.exports = client;
