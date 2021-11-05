var express = require('express');
var mongoClient = require('./../mongo/config')
var mongoQueries = require('./../mongo/queries')
var router = express.Router();


// localhost:3000/airbnb
router.get('/', (req, res) => {
  res.render('airbnb', {title:'AirBnb', mongoHost:mongoClient.options.srvHost});
});

/* GET users listing. 
  localhost:3000/airbnb/send
*/


router.get('/send', (req,res)=>{

  //console.log(req.query)

  let criteria = 
  {
    bedrooms:{$gte:parseInt(req.query.bedrooms)}
  }
  mongoQueries.findListing(res, criteria);
})





module.exports = router;
