const express = require('express');
const path = require('path');

const app = express();

// if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+ '/frontend/build/index.html'));
    });
// }

// app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 5000);
