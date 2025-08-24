require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('✅ Freshstart POS is alive'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Freshstart running on port ${PORT}`));
