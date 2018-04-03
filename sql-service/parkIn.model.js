var Sequelize = require('sequelize');
var squelizeConfig = require('./squelizeConfig').config;
const Parkin = squelizeConfig.define('p_park_in', {
    parkininfoid: {
      type: Sequelize.CHAR(32)
    },
    carid: {
      type: Sequelize.CHAR(32)
    },
    parkoutinfoid: {
      type: Sequelize.CHAR(32)
    },
    bookrecordid: {
      type: Sequelize.CHAR(32)
    },
    parkincarno: {
      type: Sequelize.CHAR(32)
    },
    parkincardno: {
      type: Sequelize.CHAR(32)
    },
    parkincartype: {
      type: Sequelize.CHAR(32)
    },
    parkinentryno: {
      type: Sequelize.CHAR(32)
    },
    parkintime: {
      type: Sequelize.CHAR(32)
    },
    parkinpic: {
      type: Sequelize.CHAR(32)
    },
    parkinisbook: {
      type: Sequelize.CHAR(32)
    },
    parkinprepay: {
      type: Sequelize.CHAR(32)
    },
    parkinpaypeople: {
      type: Sequelize.CHAR(32)
    },
    parkinareaid: {
      type: Sequelize.CHAR(32)
    },
    parkinslotid: {
      type: Sequelize.CHAR(32)
    },
    parkinslottime: {
      type: Sequelize.CHAR(32)
    },
    parkinslotpic: {
      type: Sequelize.CHAR(32)
    },
    createtime: {
      type: Sequelize.CHAR(32)
    },
    createby: {
      type: Sequelize.CHAR(32)
    },
    updatetime: {
      type: Sequelize.CHAR(32)
    },
    updateby: {
      type: Sequelize.CHAR(32)
    },
    parkinareatime: {
      type: Sequelize.CHAR(32)
    },
    parkinareapic: {
      type: Sequelize.CHAR(32)
    },
    parkinareaorderno: {
      type: Sequelize.CHAR(32)
    }

  });
  
  // force: true will drop the table if it already exists
  // Parkin.sync({force: false}).then(() => {
  //   // Table created
  //   return User.create({
  //     firstName: 'John',
  //     lastName: 'Hancock'
  //   });
  // });

  exports.Parkin = Parkin;