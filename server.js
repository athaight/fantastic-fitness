const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const { clog } = require('./clog/clog')
const PORT = process.env.PORT || 3000
const app = express();

app.use(clog);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', 
{useNewUrlParser: true, 
useUnifiedTopology: true 
// useCreateIndex: true,
// useFindAndModify: false
});

app.use(routes);
// app.use(require("./routes/workout"))
// app.use(require("./routes/index"))
app.listen(PORT, () => {
  console.log(`🚀 App running on port ${PORT}! 🚀`);
});