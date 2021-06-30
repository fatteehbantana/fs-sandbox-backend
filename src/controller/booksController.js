const { success, failed } = require("../../config/response");
const { books } = require("../models");

exports.getData = async (req, res) => {
    try {
        const data = await books.findAll();
        return res.json(success ({ data: data }));
    } catch (error) {
        return res.json(failed ({ message: error.message }));
    };
};

exports.createData = async ({ body }, res) => {
    const payload = {
        id: body.id,
        type_books_id: body.type_books_id,
        name: body.name,
    };
    try {
        const data = await users.create(payload);
        return res.json(success ({
            message: "Data added!",
            data
        }));
    } catch (error) {
        return res.json(failed ({
            message: error.message
        }));
    };
};