const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch(error) {
        res.status(500).json({message: error})
    }
}

const createTask = async (req, res) => {
    try {
        const { name, email } = req.body;
        const task = await Task.create({name: name, email: email})
        res.status(201).json({
            message: 'created',
            task: task
        })

    } catch(error) {
       res.status(500).json({message: error})
    }
    
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task) {
            return res.status(404).json({ message: `No task with id: ${taskID}`})
        }
        
        res.status(200).json({ task })

    } catch(error) {
        res.status(500).json({message: error})
    }
    
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        // const { name, email } = req.body;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body)
        if(!task) {
            return res.status(404).json({ message: `No task with id: ${taskID}`})
        }
        
        res.status(200).json({ task })

    } catch(error) {
        res.status(500).json({message: error})
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task) {
            return res.status(404).json({ message: `No task with id: ${taskID}`})
        }
        
        res.status(200).json({ task })

    } catch(error) {
        res.status(500).json({message: error})
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
