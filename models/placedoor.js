const db = require('../db');

module.exports = db.defineModel('p_place_door', {
    pdid: db.ID,
    pdlaceid:db.STRING(20),
    pdno: db.STRING(20),
    pdtype:db.STRING(20),
    pdaddress:db.STRING(20),
    pdlng:db.STRING(20),
    pdlat:db.STRING(20),
    pddesc:db.STRING(20),
    pdstatus:db.STRING(20),
    createtime:db.STRING(20),
    createby:db.STRING(20),
    updateby:db.STRING(20),
    updatetime: db.STRING(20),
    isdel:db.STRING(20)
}, {
    freezeTableName: true,
    timestamps: false
})

