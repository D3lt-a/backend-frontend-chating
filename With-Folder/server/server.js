const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/button-click', (req, res) => {
    console.log('Message from Frontend: Click the Button!');
    res.json({ message: 'The Button was Clicked!!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});