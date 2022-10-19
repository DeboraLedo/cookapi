import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";
import path from "path"

class Aplication{
    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set("port",3000);
        this.app.set("views", path.join(__dirname, "views"));
        this.app.engine(
            ".hbc", 
            create({
            layoutsDir: path.join(this.app.get("views"), "layouts"),
            partialsDir: path.join(this.app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
        }).engine
        );
        this.app.set("view engine", ".hbs");
    }

    middlewares(){
        this.app.use(morgan("dev"))
    }

    routes(){

    }

    start(){
        this.app.listen(this.app.get("port"),()=>{
            console.log("Server on port", this.app.get("port")); 
        });
    }
}

export default Aplication;