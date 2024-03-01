const LibraryBooks = require('./db')
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Get request to retrieve the books
app.get('/lib', (req, res) => {
  // ⭐TODO: import your function and pass req.body into it
  res.json(LibraryBooks);
});

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});