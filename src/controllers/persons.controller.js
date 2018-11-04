const persons = require('../models/persons.model');

const personContoller = {};


personContoller.getPersons = async(Request, Response) => {
    const data = await persons.find();
    Response.json(data);
}

personContoller.getPerson = async(Request, Response) => {

    const data = await persons.findById(Request.params.id);

    Response.json({
        data: data
    });
}

personContoller.createPerson = async(Request, Response) => {

    const data = new persons(Request.body);
    await data.save();
    msg = "registro exitoso";

    Response.json({
        msg: msg
    });

}

personContoller.updatePerson = async(Request, Response) => {
    const {
        id
    } = Request.params;
    const person = {
        document: Request.body.document,
        name: Request.body.name,
        typePersonId: Request.body.typePersonId,
        semesterId: Request.body.semesterId
    };

    await persons.findByIdAndUpdate(id, {
        $set: person
    }, {
        new: true
    });

    Response.json({
        status: 'usuario actualizado con exito'
    });
}

personContoller.deletePerson = async(Request, Response) => {
    const { id } = Request.params;

    await persons.findByIdAndDelete(id);


    Response.json({
        status: 'delete person'
    });
}

module.exports = personContoller;