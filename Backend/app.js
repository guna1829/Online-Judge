const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const problemRoutes = require('./routes/problemRoutes'); 

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes); 

app.get('/', (req, res) => {
  res.send("Online Judge Backend Running");
});

module.exports = app;
