let express = require('express');
let router = express();
router.get('/',(req,res)=>{
    res.send('Header Page')
})
module.exports = router;