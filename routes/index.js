const express = require('express');
const controller = require('../controllers/tasks')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Home Page');
})


router.get('/tasks', controller.getAllTasks)
router.post('/tasks', controller.createTask)
router.get('/tasks/:id', controller.getTask)
router.delete('/tasks/:id', controller.deleteTask)
router.patch('/tasks/:id', controller.updateTask)



module.exports = router