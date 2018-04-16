const db = require('../db');

module.exports = db.defineModel('p_place_staff', {
    manageid: db.ID,
    manageparkid:db.STRING(20),
    managename: db.STRING(20),
    managegender:db.STRING(20),
    managetel:db.STRING(20),
    manegerole:db.STRING(20),
    createtime:db.STRING(20),
    createby:db.STRING(20),
    updateby:db.STRING(20),
    updatetime: db.STRING(20),
    isdel:db.STRING(20)
}, {
    freezeTableName: true,
    timestamps: false
})

