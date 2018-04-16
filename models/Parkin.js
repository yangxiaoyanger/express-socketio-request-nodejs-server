const db = require('../db');

module.exports = db.defineModel('p_park_in2', {
    parkininfoid: db.ID,
    carid: db.STRING(10),
    parkoutinfoid: db.STRING(10),
    bookrecordid: db.STRING(10),
    parkincarno: db.STRING(10),
    parkincardno: db.STRING(10),
    parkincartype: db.STRING(10),
    parkinentryno: db.STRING(10),
    parkintime: db.DECIMAL,
    parkinpic: db.STRING(10),
    parkinisbook: db.STRING(10),
    parkinprepay: db.STRING(10),
    parkinpaypeople: db.STRING(10),
    parkinareaid: db.DECIMAL,
    parkinslotid: db.STRING(10),
    parkinslottime: db.STRING(10),
    parkinslotpic: db.STRING(10),
    createtime: db.STRING(10),
    createby: db.STRING(10),
    updatetime: db.STRING(10),
    updateby: db.STRING(10),
    parkinareatime: db.STRING(10),
    parkinareapic: db.STRING(10),
    parkinareaorderno: db.STRING(10)
}, {
    freezeTableName: true,
    timestamps: false
})

