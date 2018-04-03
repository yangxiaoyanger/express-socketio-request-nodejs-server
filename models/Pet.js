const db = require('../db');

module.exports = db.defineModel('p_pet', {
    OWNER_ID: db.ID,
    name: db.STRING(100),
    gender: db.BOOLEAN,
    birth: db.STRING(10),
});