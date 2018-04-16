const db = require('../db');

module.exports = db.defineModel('p_stat_member', {
    smid: db.ID,
    smdate:db.STRING(20),
    smhour: db.STRING(20),
    smamountnew:db.STRING(20),
    smamounttotal:db.STRING(20),
    smcostnew:db.STRING(20),
    smcosttotal:db.STRING(20)
}, {
    freezeTableName: true,
    timestamps: false
})

