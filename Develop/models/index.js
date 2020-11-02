const { models } = require("mongoose");
const { model } = require("./transaction");

models.exports = {
    tranactions: require("/.transaction"),
};