let express = require('express');
let router = express();
router.get('/',(req,res)=>{
    res.render('../views/backend/home-page')
})
module.exports = router;