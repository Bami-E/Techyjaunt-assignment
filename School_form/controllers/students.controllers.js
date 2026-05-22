const mongoose = require("mongoose")
const Student = require("../models/student.schema")

const addStudent = async(req,res) => {
    const{ fullName, email, phoneNumber, studentClass, gender, address, isAdmitted} = req.body; //destructuring
    try{
        if (!fullName || !email || !phoneNumber || !studentClass || ! gender || !address  )
            return res.status(400).json({message: "All fields are required"})

        const newStudent = new Student({
            fullName,
            email,
            phoneNumber,
            studentClass,
            gender,
            address,
            isAdmitted
        })

        await newStudent.save();
        return res.status(201).json({message: "Student added successfully"})

    }catch(error){
        console.error("Error adding student", error);
        return res.status(500).json({message: "Internal Server Error"})
    }
}

const getAllStudents = async(req,res) => { 
    try{
        const students = await Student.find(); 
            return res.status(400).json({students})

    }catch(error){
        console.error("Error fetching student", error);
        return res.status(500).json({message: "Internal Server Error"})

    }
}

const getStudentById = async(req,res) => {
    const {id} = req.param; 
    try{
        const student = await Student.findByID(id);  
        if (!student){
            return res.status(400).json({message: "Student not found"})}
        return res.status(200).json({student})

    }catch(error){
        console.error("Error fetching student", error);
        return res.status(500).json({message: "Internal Server Error"})

    }
}

const getStudentByName = async(req,res) => {
    const {name} = req.query; 
    try{
        const student = await Student.find({fullname :{ $regex : name, $option: "i"} });  
        if (!student){
            return res.status(400).json({message: "Student not found"})}
        return res.status(200).json({student})
        
    }catch(error){
        console.error("Error fetching student", error);
        return res.status(500).json({message: "Internal Server Error"})

    }
}

module.exports = {addStudent,
    getAllStudents,
    getStudentById,
    getStudentByName,

}