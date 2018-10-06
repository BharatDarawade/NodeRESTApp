const express = require('express');
var router = express.Router();

const Item =require('../models/shoppingItem');
//retrive data from db
router.get('/items',(req,res,next)=>{
Item.find(function(err,itemsRetrieved){
  if (err) {
    res.json(err);
  }else {
    res.json(itemsRetrieved);
  }

});
});
//inserting new data
router.post('/item',(req,res,next)=>{
  let newShoppingItem=new Item({
    itemName:req.body.itemName,
    itemQuantity:req.body.itemQuantity,
    itemBought:req.body.itemBought
  });
  newShoppingItem.save((err,item)=>{
    if (err) {
      res.json(err);
    }else {
      res.json({msg:"Item inserted SuccessFully"});
    }

  })

});

router.put('/item/:id',(req,res,next)=>{
  Item.findOneAndUpdate({_id:req.params.id},{
    $set:{
      itemName:req.body.itemName,
      itemQuantity:req.body.itemQuantity,
      itemBought:req.body.itemBought

    }
  },function(err,result){
    if (err) {
      res.json(err);
    }else {
      res.json(result);
    }

  });

});

router.delete('/item/:id',(req,res,next)=>{

  Item.remove({_id:req.params.id},function(err,result){
    if (err) {
      res.json(err);
    }else {
      res.json(result);
    }


  });

});





module.exports=router;
