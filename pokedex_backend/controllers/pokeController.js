const connection = require('../connection/mysqldb')


const Addpokemon = (req, res) => {

    const { name, breed, description, } = req.body;
  

    const sql = `INSERT INTO   pokedex (name,breed, description) VALUES (?, ?, ? )`;
    const values = [
        name,
        breed,
        description,
        
    ];

    connection.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error inserting data into the database' });
        } else {
            console.log('Data inserted into the database.');
            return res.status(200).json({ message: 'pokemon successfully added' });
        }
    });
}


const GetAllpokemon = (req, res) => {
    connection.query('SELECT * FROM pokedex', (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Error inserting data into the database' });
        } else {
            console.log('Data inserted into the database.');
            return res.status(200).json({ message: ' successfully ', data: user });
        }
    })
}

const Updatepokemon = (req, res) => {
    const { name, breed, description } = req.body;
    const { id } = req.params;

    console.log(id, name, breed, description);

    if (!id || !name || !breed || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = `UPDATE pokedex SET name = ?, breed = ?, Description = ? WHERE id = ?`;
    const values = [name, breed, description, id];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Database update error: ' + err.message);
            return res.status(500).json({ error: 'Error updating data in the database' });
        } else {
            console.log('Data updated in the database.');
            return res.status(200).json({ message: 'Pokemon updated' });
        }
    });
};



const Deletepokemon = (req, res) => {
    const { id } = req.params;

    const deleteQuery = 'DELETE FROM  pokedex WHERE id = "' + id + '" '
    connection.query(deleteQuery, (err, result) => {
        if (err) {
            return res.send({ error: err });
        }

        return res.send({ message: 'pokemon is removed from your pokedex..' });
    });

}


module.exports = { Addpokemon, GetAllpokemon, Updatepokemon, Deletepokemon }


