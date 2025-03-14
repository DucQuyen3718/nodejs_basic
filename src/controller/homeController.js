import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute(
        'SELECT * FROM users'
    );
    return res.render('../views/index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userID = req.params.id;
    await pool.execute(`SELECT * FROM users where id = ?`, [userID])
    //let [user] = 
    // console.log('check req params: ', user)
    // return res.send(JSON.stringify(user))
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




module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser
}