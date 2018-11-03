const users = require('../models/users.model');

const userContoller = {};


userContoller.getUsers = async(Request, Response) => {
    const data = await users.find();

    Response.json(data);

}
userContoller.getUser = async(Request, Response) => {

    const data = await users.findById(Request.params.id);

    Response.json({
        data: data
    });
}

userContoller.createUsers = async(Request, Response) => {

    const data = new users(Request.body);
    await data.save();
    msg = "registro exitoso";

    Response.json({
        msg: msg
    });

}

userContoller.updateUsers = async(Request, Response) => {
    const {
        id
    } = Request.params;
    const user = {
        name: Request.body.name,
        password: Request.body.password
    };

    await users.findByIdAndUpdate(id, {
        $set: user
    }, {
        new: true
    });

    Response.json({
        status: 'usuario actualizado con exito'
    });
}

userContoller.deleteUsers = async(Request, Response) => {
    const { id } = Request.params;

    await users.findByIdAndDelete(id);


    Response.json({
        status: 'delete user'
    });
}

module.exports = userContoller;