require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");

function Server() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = "/animal";
    //Config db
    this.connectToDB();
    //config middlewares
    this.configMiddlewares();
    //config routes
    this.configRoutes();
}

//Config db
Server.prototype.connectToDB = function () {
    dbConnect();
};

//config routes
Server.prototype.configRoutes = function () {
    this.app.use(this.paths, require("./routes/animals"));
};

//config middlewares
Server.prototype.configMiddlewares = function () {
    this.app.use(cors());
    this.app.use(express.json());
};


Server.prototype.listen = function () {
    this.app.listen(this.port, () => {
        console.log("Server listening on port", this.port);
    });
};

module.exports = Server;