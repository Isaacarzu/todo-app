const router = require('express').Router();

const todoItemModel = require('../models/todoItems');



router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemModel({
          item: req.body.item
        })

        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

router.get('/api/items', async (req, res)=>{
    try{
        const allTodoItems = await todoItemModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

  
    
