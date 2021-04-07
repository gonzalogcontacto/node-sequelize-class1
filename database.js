import sequelize from 'sequelize'

const db = "sequelize_db"
const password = "root"
const username = "root"

const database = new sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false
  }
});

database.authenticate().then(() => {
  async() => {
    console.log("database connected")
    try {
        await database.sync({force: true})

    } catch (error) {
        console.log(error.message)
    }

}}).catch( (e) => {
  console.log(e.message)
})

export default database;