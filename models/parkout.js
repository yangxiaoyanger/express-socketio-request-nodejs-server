const db = require('../db');

module.exports = db.defineModel('p_park_out', {
    PARKOUT_INFO_ID: {type: db.ID, field: 'parkoutinfoid', allowNull: false, comment: '出场信息编号'},
    PARKOUT_IN_ID: {type: db.ID, field: 'parkoutinid', allowNull: false, comment: '入场信息编号'},
    PARKOUT_DAYSTAT_ID: {type: db.STRING(20), field: 'parkoutdaystatid', comment: '日总结编号'},
    PARKOUT_CAR_NO: {type: db.STRING(20), field: 'parkoutcarno', comment: '车牌号'},
    PARKOUT_CARD_NO: {type: db.STRING(20), field: 'parkoutcardno', comment: '停车卡号'},
    PARKOUT_CAR_TYPE: {type: db.STRING(20), field: 'parkoutcartype', comment: '车辆类型'},
    PARKOUT_EXIT_NO: {type: db.STRING(20), field: 'parkoutexitno', comment: '出口编号'},
    PARKOUT_TIME: {type: db.STRING(20), field: 'parkouttime', comment: '出场时间'},
    PARKOUT_PIC: {type: db.STRING(20), field: 'parkoutpic', comment: '出场照片'},
    PARKOUT_AREA_ID: {type: db.STRING(20), field: 'parkoutareaid', comment: '驶离区域编号'},
    PARKOUT_SLOT_TIME: {type: db.STRING(20), field: 'parkoutslottime', comment: '驶离泊位时间'},
    PARKOUT_SLOT_PIC: {type: db.STRING(20), field: 'parkoutslotpic', comment: '驶离泊位照片'},
    PARKOUT_SLOT_ID: {type: db.STRING(20), field: 'parkoutslotid', comment: '驶离泊位编号'},
    PARKOUT_FEE: {type: db.STRING(20), field: 'parkoutfee', comment: '停车金额'},
    PARKOUT_DISCOUNT_FEE: {type: db.STRING(20), field: 'parkoutdiscountfee', comment: '免收金额'},
    PARKOUT_PAY_FEE: {type: db.STRING(20), field: 'parkoutpayfee', comment: '实收金额'},
    PARKOUT_PAY_TYPE: {type: db.STRING(20), field: 'parkoutpaytype', comment: '收费类型'},
    PARKOUT_COLLECTOR: {type: db.STRING(20), field: 'parkoutcollector', comment: '收费人员'},
    PARKOUT_PAY_STATUS: {type: db.STRING(20), field: 'parkoutpaystatus', comment: '缴费状态'},
    PARKOUT_PAY_MEMBER: {type: db.STRING(20), field: 'parkoutpaymember', comment: '缴费人员'},
    PARKOUT_PAY_TIME: {type: db.STRING(20), field: 'parkoutpaytime', comment: '收费时间'},
    PARKOUT_CREDIT: {type: db.STRING(20), field: 'parkoutcredit', comment: '停车积分'},
    UPDATEBY:{type: db.STRING(20), field: 'updateby', comment: '修改人'},
    UPDATETIME:{type: db.STRING(20), field: 'updatetime', comment: '修改时间'},
    CREATEBY:{type: db.STRING(20), field: 'createby', comment: '创建人'},
    CREATETIME:{type: db.STRING(20), field: 'createtime', comment: '创建时间'}
}, {
    freezeTableName: true,
    timestamps: false
})

