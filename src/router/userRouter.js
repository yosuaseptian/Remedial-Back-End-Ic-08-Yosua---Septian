const conn = require('../connection/connection') 
const router = require('express').Router()

// Add Karyawan
router.post('/addKaryawan', (req, res) => {
    const {nama, tahun_lahir, kota_kelahiran, status_nikah} = req.body
    const sql = `insert into karyawan (nama, tahun_lahir, kota_kelahiran, status_nikah) value
                 ('${nama}', '${tahun_lahir}', '${kota_kelahiran}', '${status_nikah}') `

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        res.send(result)
    })
})

// Get Karyawan
router.get('/allKaryawan', (req, res) => {
    const sql = `select * from karyawan`

    conn.query(sql, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})


// Edit Karyawan
router.patch('/karyawan/:id', (req, res) => {
    const sql = `update karyawan set ? where id = ?`
    const edit = [req.body, req.params.id]

    conn.query(sql, edit, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})


// Delete Karyawan
router.delete('/karyawan/:id', (req, res) => {
    const sql = `delete from karyawan where id = ?`
    const del = req.params.id

    conn.query(sql, del, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})



module.exports = router