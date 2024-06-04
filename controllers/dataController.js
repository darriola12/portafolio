const dataInsert = require("../models/data");

async function getData(req, res) {
    const {account_name,account_email,account_subject,account_message } = req.body;
    try {
        const regResult = await dataInsert.getForm(account_name,account_email,account_subject,account_message);
        console.log(regResult);
        if (regResult) {
            console.log("success");
            res.render("index", { title: "Home" });
        } else {
            console.log("no success");
            // Manejar el caso en que la inserción no tenga éxito
            res.status(500).send("Error al procesar el formulario.");
        }
    } catch (error) {
        console.error("Error al procesar el formulario:", error);
        res.status(500).send("Error interno del servidor.");
    }
}

module.exports = { getData };