const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("-------------------------------DB sync");
  })
  .catch((err) => {
    console.log("DB not sync: " + err.message);
  });

//User.sync() — создает таблицу при отсутствии (существующая таблица остается неизменной)
//User.sync({ force: true }) — удаляет существующую таблицу и создает новую
//User.sync({ alter: true }) — приводит таблицу в соответствие с моделью
//await User.sync({ force: true })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Serv transportation." });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});