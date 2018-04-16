const db = require('../db');

module.exports = db.defineModel('p_place_fee', {
    pfid: db.ID,
    pfplaceid:db.STRING(20),
    pfname: db.STRING(20),
    pfbeginday:db.STRING(20),
    pfendday:db.STRING(20),
    pfweek:db.STRING(20),
    pfcarfee:db.STRING(20),
    pfbcarfee:db.STRING(20),
    pffreetime:db.STRING(20),
    pfbegintime: db.STRING(20),
    pfendtime:db.STRING(20),
    pfcarunit:db.STRING(20),
    pfbcarunit:db.STRING(20),
    pfbcarfeefirst:db.STRING(20),
    pfcarfeefirst:db.STRING(20),
    pfstatus:db.STRING(20),
    pfpriority:db.STRING(20),
    pfsorton:db.STRING(20),
    createby:db.STRING(20),
    createtime:db.STRING(20),
    updateby:db.STRING(20),
    updatetime:db.STRING(20),
    isdel:db.STRING(20),
    pffreetimemode:db.STRING(20),
    pfceilingmode:db.STRING(20),
    pfceilingvalue:db.STRING(20),
    pffeeuint:db.STRING(20),
    pffeedesc:db.STRING(20),
    pffeeprepay:db.STRING(20),
    pfno:db.STRING(20)
}, {
    freezeTableName: true,
    timestamps: false
})

