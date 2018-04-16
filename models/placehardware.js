const db = require('../db');

module.exports = db.defineModel('p_place_hardware', {
    hardwareid: db.ID,
    hardwareplaceid:db.STRING(20),
    hardwaredoorid: db.STRING(20),
    hardwaretype:db.STRING(20),
    hardwarename:db.STRING(20),
    hardwarestatus:db.STRING(20),
    hardwareparam1:db.STRING(20),
    hardwareparam2:db.STRING(20),
    hardwareparam3:db.STRING(20),
    hardwareparam4:db.STRING(20),
    hardwareio1:db.STRING(20),
    hardwareio2:db.STRING(20),
    hardwareio3:db.STRING(20),
    hardwareio4:db.STRING(20),
    hardwareio5:db.STRING(20),
    createtime:db.STRING(20),
    createby:db.STRING(20),
    updateby:db.STRING(20),
    updatetime: db.STRING(20),
    isdel:db.STRING(20)
}, {
    freezeTableName: true,
    timestamps: false
})

