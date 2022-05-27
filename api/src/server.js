const dotenv = require("dotenv");
const app = require("./app");
const {dbConnection} = require("./config");

dotenv.config();
const port = process.env.PORT || 8000;

// db connection start
dbConnection();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
