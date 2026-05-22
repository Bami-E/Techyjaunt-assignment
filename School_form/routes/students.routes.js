const express = require ("express");
const { addStudent, getAllStudents, getStudentById } = require("../controllers/students.controllers");
const router  = express.Router();

router.post("/add-student", addStudent);
router.get("/all-student", getAllStudents);
router.get("/get-student-by-id", getStudentById);


module.exports = router