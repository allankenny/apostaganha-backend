import dotenv from "dotenv"
dotenv.config()
import app from "./app"

app.listen(process.env.PORT || 3333, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
