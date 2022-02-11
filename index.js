const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/referuser', require('./routes/referuser.js'));
app.use('/showdatabase', require('./routes/showdatabase.js'));
app.use('/showreffered', require('./routes/showreferred.js'));
app.use('/showpatient', require('./routes/showpatient.js'));
app.use('/enterpatient', require('./routes/enterpatient.js'));
app.listen(PORT, () => console.log(`Listening' on port ${PORT}`));