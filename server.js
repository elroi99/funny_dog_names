const express = require("express");
const app = express();

app.use(express.json()); // body-parser alternative
app.use(express.urlencoded({extended : true}));

const homeRoutes = require("./routes/home");
const nameRoutes = require("./routes/funny-name");

app.use(homeRoutes);    // essentially says, look for more middleware at this route
app.use(nameRoutes);    // essentially says, look for more middleware at this route

app.listen(3000);

