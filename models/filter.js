const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filterSchema = newSchema({});

module.exports = mongoose.model("Filter", filterSchema);
