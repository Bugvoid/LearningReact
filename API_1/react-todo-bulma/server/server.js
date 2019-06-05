const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const TaskRoutes = require('./routes/Task')
const mongoose = require('mongoose')
const config = require('./config/keys.config.js')
const cors = require('cors')

mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
  .then(() => console.log('Database connect'))
  .catch((err) => console.log('Error on database connection', err))
mongoose.set('useFindAndModify', false)


app.use(bodyParser.json());
app.use(cors());
app.use('/api/tasks', TaskRoutes)
const port = process.env.PORT || 3001;

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});






