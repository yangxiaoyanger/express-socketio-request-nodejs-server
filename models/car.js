const db = require('../db');

module.exports = db.defineModel('p_car', {
    CAR_ID: {type: db.ID, field: 'carid', allowNull: false, comment: '车辆编号'},
    CAR_MEMBER_ID:{type: db.STRING(20), field: 'carmemberid', allowNull: false, comment: '会员编号'},
    CAR_NO:{type: db.STRING(20), field: 'carno', allowNull: false, comment: '车牌号'},
    CAR_TYPE:{type: db.STRING(20), field: 'cartype', comment: '车辆类型'},
    CAR_CREDIT:{type: db.STRING(20), field: 'carcredit', comment: '车辆征信积分'},
    CAR_CREDIT:{type: db.STRING(30), field: 'carcredit', comment: '车辆品牌'},
    CAR_PLATE_COLOR:{type: db.STRING(30), field: 'carplacecolor', comment: '车牌颜色'},
    CAR_ENGINE_NO:{type: db.STRING(20), field: 'carengineno', comment: '车辆发动机号码'},
    CAR_OWNER_NAME:{type: db.STRING(30), field: 'carownername', comment: '车主姓名'},
    CAR_VIN:{type: db.STRING(50), field: 'carvin', comment: '车辆识别码'},
    CAR_VIN_PIC:{type: db.STRING(20), field: 'carvinpic', comment: '车辆行驶证照片'},
    CAR_STATUS:{type: db.STRING(20), field: 'carstatus', comment: '车辆状态'},
    CAR_AUTH_STATUS:{type: db.STRING(20), field: 'carauthstatus', comment: '车辆认证状态'},
    CAR_AUTH_TYPE:{type: db.STRING(20), field: 'carauthtype', comment: '车辆认证方式'},
    CAR_BINDING_TEL:{type: db.STRING(20), field: 'carbindingtel', comment: '车辆绑定电话'},
    CAR_BINDING_VCODE:{type: db.STRING(20), field: 'carbindingvcode', comment: '车辆绑定验证码'},
    UPDATEBY:{type: db.STRING(20), field: 'updateby', comment: '修改人'},
    UPDATETIME:{type: db.STRING(20), field: 'updatetime', comment: '修改时间'},
    CREATEBY:{type: db.STRING(20), field: 'createby', comment: '创建人'},
    CREATETIME:{type: db.STRING(20), field: 'createtime', comment: '创建时间'}
}, {
    freezeTableName: true,
    timestamps: false
})

