const express = require('express');
const router = express.Router();
module.exports = router;
//------------------------------------------------
router.post('/Create', (req, res) => {
    let {FirstName, LastName} = req.body;
    let Query = `INSERT INTO employees (FirstName, LastName) VALUES `;
    Query += `('${FirstName}',`;
    Query += `'${LastName}')`;
    DataBase_Pool.query(Query, (err, rows) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({message: "Created", lastId: rows.insertId});// success;
    })
})
//------------------------------------------------
router.post('/Read', (req, res) => {
    let Query = `SELECT * FROM employees`;
    DataBase_Pool.query(Query, (err, rows, fields) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({rows: rows, fields: fields});// success
    })
})
//------------------------------------------------
router.post('/Update', (req, res) => {
    let {category, replacement, id} = req.body;
    let Query = `UPDATE employees `;
    Query += `SET ${category} = '${replacement}' `
    Query += `WHERE Employee_Id = ${id}`;
    DataBase_Pool.query(Query, (err) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({message: "Updated",});// success
    })
})
//------------------------------------------------
router.post('/Delete/:id', (req, res) => {
    let id = req.params.id;
    let Query = `DELETE FROM employees WHERE Employee_Id = ${id}`;
    DataBase_Pool.query(Query, (err) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({message: "Deleted"});// success;
    });
});
//------------------------------------------------