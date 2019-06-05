const Task = require('../models/task')

module.exports = {
  add:function(req,res){
    let task = new Task(req.body)

    task.save()
    .then(task => res.status(200).json(task))
    .catch(err => {
      res.status(400).send("ERROr",err)
    })

  },

  getAll: function(req,res){
    Task.find(function(err,tasks){
      if(err){
        res.status(400).send("Erro", err)

      }
      else{
        res.status(200).json(tasks)
      }
    })
  },

  getById: function(req,res){
    Task.findById(req.params.id, function (err,task){
      if(err){
        res.status(400).send("Error", err)
      }
      else{
        res.status(200).send(task)
      }
    })
  },

  delete: function (req, res) {
    Task.findByIdAndRemove(req.params.id, req.body, { new: true }, function (err, task) {
      if (err) {
        res.status(400).send("Error", err)
      }
      else {
        res.status(200).send(req.params.id)
      }
    })
  },

  update: function(req,res){
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err,task){
      if (err) {
        res.status(400).send("Error", err)
      }
      else {
        res.status(200).send(task)
      }
    })
  }

};