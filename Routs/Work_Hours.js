const express = require('express');
const router = express.Router();
module.exports = router;
//------------------------------------------------
router.post('/Clock_in', (req, res) => {
    let {Employee_id, CurrentTime} = req.body;
    let Query = `INSERT INTO work_hours (Employee_id,Employee_Name, Clock_in) VALUES`;
    Query += `(${Employee_id},`;
    Query += `(SELECT concat(FirstName, ' ', LastName) As 'Employee_Name' FROM employees WHERE Employee_Id = ${Employee_id}),`;
    Query += `'${CurrentTime}')`;
    DataBase_Pool.query(Query, (err, rows) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({message: "Clock in", lastId: rows.insertId});// success;
    })
})
//------------------------------------------------
router.post('/Clock_out', (req, res) => {
    let {Employee_id, CurrentTime} = req.body;
    let Query = `UPDATE work_hours `;
    Query += `SET Clock_out = '${CurrentTime}' `;
    Query += `WHERE Clock_out IS NULL AND `;
    Query += `Employee_Id = ${Employee_id}`;
    DataBase_Pool.query(Query, (err) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({message: "Clock out"});// success;
    })
})
//------------------------------------------------
router.post('/Read', (req, res) => {
    let Query = `SELECT * FROM work_hours`;
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
    let Query = `UPDATE work_hours `;
    Query += `SET ${category} = '${replacement}' `
    Query += `WHERE Shift_id = ${id}`;
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
    let Query = `DELETE FROM work_hours WHERE Shift_id = ${id}`;
    DataBase_Pool.query(Query, (err) => {
        if (err)
            res.status(500).json({message: err});// throw err;
        else
            res.status(200).json({message: "Deleted"});// success;
    });
});
//------------------------------------------------