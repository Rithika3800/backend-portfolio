let express = require('express');
let mongoose = require('mongoose');
let dotenv = require('dotenv');
let contactRoutes = require('./routes/contactRoutes');
let userRoutes = require('./routes/userRoutes');

dotenv.config();
let app = express();
let SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Connection error:", err));

app.use('/api/contacts', contactRoutes); 
app.use('/api/users', userRoutes);
app.get('/', (req, res) => 
    {
    res.send("Welcome to Portfolio Backend API");
});

app.listen(SERVER_PORT, () =>
     {
    console.log(`Server is running at http://localhost:${SERVER_PORT}`);
});
