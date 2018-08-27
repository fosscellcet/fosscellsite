var filename = '../config/data.json';
var fs = require('fs');
var path = require('path')
var model = require(filename);
var Promise = require('bluebird');
const Joi = require('joi');

const schema = Joi.object().keys({
    address : Joi.string().required(),
    email : Joi.string().email().required(),
    phone : Joi.number().required()
})

contactController = {}

contactController.getContactInfo = () => new Promise((resolve, reject) => {
    if(model.contact){
        resolve(model.contact)
    }
    else{
        reject(new Error("No contact infor"))
    }
})

contactController.updateContactInfo = (info) => new Promise((resolve, reject) => {
    Joi.validate(info).then((res) => {
        model.contact.address = info.address
        model.contact.email = info.email
        model.contact.phone = info.phone
        fs.writeFile(path.join(__dirname,filename), JSON.stringify(model, null, 2), (err) => {
            if (err) return reject(err);
            console.log(JSON.stringify(model.contact, null,2));
            console.log('writing to ' + filename);
            return resolve(model.contact);
        })
    })
    .catch((err) => {
        reject(err);
    })
})

module.exports = contactController