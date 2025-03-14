import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute(
        'SELECT * FROM users'
    );
    return res.render('../views/index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userID = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users where id = ?`, [userID])
    //
    // console.log('check req params: ', user)
    return res.render('../views/detailUser.ejs', { dataUser: user })
}

let createNewUser = async (req, res) => {
    // console.log('Check req: ', req.body)
    let { firstName, lastName, email, address } = req.body
    await pool.execute(
        `INSERT INTO users(firstName, lastName, email, address) values(?, ?, ?, ?)`,
        [firstName, lastName, email, address]
    )
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute(
        `DELETE FROM users where id = ?`,
        [userId]
    )
    return res.redirect('/')
}

let getEditUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [id])

    return res.render('../views/update.ejs', { dataUser: user[0] })
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute(
        `UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?`,
        [firstName, lastName, email, address, id])
    // console.log('check request: ', req.body)

    return res.redirect('/')
}
module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditUser,
    postUpdateUser
}