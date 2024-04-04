// Assuming you have MongoDB installed and running, and you have set up your Express server

const mongoose = require('mongoose');

// Define the patient schema
const patientSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    role: { type: String, enum: ['doctor', 'patient'], required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create the Patient model based on the schema
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
