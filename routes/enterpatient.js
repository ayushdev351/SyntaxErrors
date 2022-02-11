const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../fulldatabase.json');
var fs = require('fs');
const { json } = require('body-parser');


router.post('/', (req, res) => {
    let check = 1;
    let obj = req.body;
    let tempid = obj[Object.keys(obj)[0]];
    let record = 
    {
        [tempid] : [obj]
    }
    fs.readFile('./fulldatabase.json', 'utf8', function readFileCallback(err, filedata){
        if (err){
            console.log(err);
        } else {
        fileobj = JSON.parse(filedata); 
        let a = (fileobj[0]);
        //console.log(a);
        // aa = Object.values(a);
        // console.log(aa);
        for(let i =0; i<fileobj.length; i++){
            let b = Object.keys(fileobj[i]);
            let c = Object.values(fileobj[i]);
            //console.log(c[0]);
            if(b[0] == tempid){
                check = 0;
                c[0].push(obj);
                console.log(c);
                break;
            }
        }
        if(check !=0)
        {
            fileobj.push(record);
        }
        fullobj = JSON.stringify(fileobj);
        fs.writeFile('./fulldatabase.json', fullobj, function(err){
            if (err) throw err;
        console.log('complete');
        }); 
    }});   
    
});

module.exports = router;