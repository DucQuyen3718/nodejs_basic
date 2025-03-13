import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    //logic 
    let data = []
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            // console.log('>>> check mysql')
            // console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            })
            return res.render('../views/index.ejs', { dataUser: data })

        }
    );
}

module.exports = {
    getHomePage
}