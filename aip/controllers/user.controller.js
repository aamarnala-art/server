const USER_MODEL = require("../modules/user.module");

const createUser = (req, res) => {
    const {
        firstName,
        lastName,
        image,
        userName,
        pass,
    } = req.body;
    USER_MODEL.create({
        firstName,
        lastName,
        image,
        userName,
        pass,
    })
        .then((createRes) => {
            res.status(200).json(createRes);

        })
        .catch(e => res.status(500).json({
            error: true,
            errorMessage: e,
        }))

}


const login = async (req, res) => {

    const { userName, pass } = req.body;

   if(!userName || !pass){
    return res
    .ststus(500)
    .json({error:true,errerMessage:"userName and pass are req"});
 }  

 const user = await USER_MODEL.findOne({userName:userName});

 if (!user){
    return res
    .status(404)
    .json({error:true,errorMessage:"user not found"});

 }

 const isValid=user.pass==pass;

 res
 .status(isValid? 200:408)
 .json({valid:isValid,user:isValid? user:null});

};


module.exports = {
    createUser,
    login
};




