//关于页信息
const express = require('express');
const router = express.Router();
const connect = require('../db/index')

//查询关于页信息
router.get('/getAbout', function (req, resp) {
    const sql = 'select * from about'
    connect.query(sql, (err, res) => {
        if (err) {
            console.error('数据库查询错误：', err);
            // if(err.code==='ECONNRESET'){
            //   connect = require('../db/index')()
            // }
        } else {
            resp.send({
                code: 200,
                msg: "关于信息获取成功",
                data: res[0]
            })
        }
    })
});

//修改关于页内容
router.post('/editAbout', (req, resp) => {
    const sql = `update about set content=` + `${JSON.stringify(req.body.mdContent)}` + `,htmlContent=` + `${JSON.stringify(req.body.htmlContent)}`
    connect.query(sql, (err, res) => {
        if (err) {
            console.error('数据库执行错误：', err);
        } else {
            resp.send({
                code: 200,
                msg: "关于页信息修改成功"
            })
        }
    })
})


module.exports = router