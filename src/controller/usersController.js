const { success, failed } = require("../../config/response");
const { users } = require("../models");

exports.getData = async (req, res) => {
    try {
        const data = await users.findAll();
        return res.json(success ({ data: data }));
    } catch (error) {
        return res.json(failed ({ message: error.message }));
    };
};

exports.createData = async ({ body }, res) => {
    const payload = {
        id: body.id,
        name: body.name,
        address: body.address,
        phone: body.phone,
        gender: body.gender
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