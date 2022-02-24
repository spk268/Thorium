const express= require('express');
const router = express.Router();


// 1. this API fetch all movies from array

router.get('/movies',function(req, res){
    res.send('["LALALAND", "DEAR COMRADE", "MASAN", "URI", "NEIL BATE SANNATA"]')
})
 
// 2.
 router.get('/movies/:movieId', function(req, res){
     mov=["LALALAND", "DEAR COMRADE", "MASAN", "URI", "NEIL BATE SANNATA"]
     let value = req.params.movieId;
     if(value>mov.length-1){
         res.send("doesn't xsist")
     }else{
         res.send(mov[value])
     }
 })


// 3.


router.get('/films', function (req, res) {
   
    res.send([ { id: 1, name: 'The Shining' }, {id: 2, name: 'Incendies'}, { id: 3, name: 'Rang de Basanti' }, {id: 4, name:'Finding Demo' }])
   
});

// 4.
 router.get('/films/:filmId', function (req, res){
 let movi=[{ id: 1, name: 'The Shining' }, {id: 2, name: 'Incendies'}, { id: 3, name: 'Rang de Basanti' }, {id: 4, name:'Finding Demo' }]
 let value= req.params.filmId;
 let found= false;
 for(i=0; i<movi.length;i++){
  if (movi[i].id==value){
      found=true
      res.send(movi[i])
      break;
  }   
 }

 if (found==false){
     res.send('No Movie exists with this id')
 }
});


module.exports = router;