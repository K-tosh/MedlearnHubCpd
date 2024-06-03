const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    content: String,
    status: String,
});

module.exports = mongoose.model('Course', CourseSchema);
