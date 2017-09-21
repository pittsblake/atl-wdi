const express = require('express');
const router = express.Router();
const data = require("../data.js");


/* INDEX TODOS */
router.get('/', function(req,res) {
    res.render('todos/index', {
      todos: data.seededTodos,
      numTotal: data.seededTodos.length,
    });
  });

/* NEW TODOS */
  router.get('/new', (req, res) => {
    res.render('todos/new');
});
  
/* SHOWS TODOS */
router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];

    if(!todo){
        res.render('todos/show', {
            error: "No to-do found with this ID"
        })
    } else {
    res.render('todos/show', {
        todo: todo
        })
    }   
});


/* POST */
router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = req.body;

    data.seededTodos.push(newTodo);
    res.redirect('/todos');
});

//Edit TODOS//
router.get('/:id/edit', (req, res) => {
    res.render('todos/edit', {
        todo : {
            id: req.params.id,
            description: data.seededTodos[req.params.id].description,
            urgent: data.seededTodos[req.params.id].urgent,
        }
    });
});

//UPDATE Todos//
router.put('/:id', function(req, res) {
    var todoToEdit = data.seededTodos[req.params.id];
  
    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
  
    res.redirect('/todos');
  })


//Delete TODO//
router.delete('/:id', function(req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos');  // redirect back to the index route
});





module.exports = router;