import  express  from "express"
import { PORT } from "./congif.js"
import morgan from "morgan";
import PaymentsRoutes from "./Routes/Payments.routes.js"

const app = express()

app.use(PaymentsRoutes)

app.use(morgan("dev"))
app.listen(PORT)
console.log(`Server on port: ${PORT}`)