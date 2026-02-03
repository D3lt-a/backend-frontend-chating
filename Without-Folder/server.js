const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/button-click', (req, res) => {
    console.log('Button was clicked!');
    res.json({ message: 'Message from the Frontend: CLick the Button' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});