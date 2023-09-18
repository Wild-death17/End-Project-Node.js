//------------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const port = 1505;
//------------------------------------------------
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use(express.json());
//------------------------------------------------
app.use(express.static(path.join(__dirname, "Public")));
//------------------------------------------------
app.use(express.static(path.join(__dirname, "Css")));
//------------------------------------------------
app.use(express.static(path.join(__dirname, "JavaS")));
//------------------------------------------------
app.use(express.static(path.join(__dirname, "Routs")));
//------------------------------------------------
app.use(express.static(path.join(__dirname, "Views")));
//------------------------------------------------
app.use(express.static(path.join(__dirname, "Data-Base-SQL")));
//------------------------------------------------
let DataBase_Model = require("Data-Base-SQL/Data-Base");
global.DataBase_Pool = DataBase_Model.pool;
//------------------------------------------------
const Page_rt = require('./Routs/Pages');
const Employees_rt = require('./Routs/Employees');
const Work_Hours_rt = require('./Routs/Work_Hours');
app.use('/', Page_rt);
app.use('/Employees', Employees_rt);
app.use('/Work_Hours', Work_Hours_rt);
//------------------------------------------------

//------------------------------------------------
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log(__dirname);
});
//------------------------------------------------