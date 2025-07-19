const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const problemRoutes = require('./routes/problemRoutes'); // ✅ Add this
const solutionRoutes = require('./routes/solutionRoutes');
app.use('/api/solutions', solutionRoutes);


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes); // ✅ Register problems route

app.get('/', (req, res) => res.send("Online Judge Backend Running"));

module.exports = app;
