var filename = '../config/data.json';
var fs = require('fs');
var path = require('path')
var model = require(filename);
var Promise = require('bluebird');
const Joi = require('joi');

const schema = Joi.object().keys({
    title : Joi.string().required(),
    content : Joi.string().required(),
})

aboutController = {}

aboutController.getInfo = () => new Promise((resolve, reject) => {
    if(model.about){
        resolve(model.about)
    }
    else{
        reject(new Error("No about infor"))
    }
})

aboutController.updateInfo = (info) => new Promise((resolve, reject) => {
    Joi.validate(info).then((res) => {
        model.about.title = info.title
        model.about.content = info.content
        fs.writeFile(path.join(__dirname,filename), JSON.stringify(model, null, 2), (err) => {
            if (err) return reject(err);
            console.log(JSON.stringify(model.about, null,2));
            console.log('writing to ' + filename);
            return resolve(model.about);
        })
    })
    .catch((err) => {
        reject(err);
    })
})

module.exports = aboutController