// const {Schema,model}=require("mongoose")

// const meetSchema = new Schema({

// })

// const mettingadata = model("Meet",meetSchema)
// module.exports=mettingadata 

const redisClient = require("../controllers/config/redis");

exports.saveCallId = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};