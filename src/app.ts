import express from 'express';
import cors from "cors";
import { routes } from './routes/index'; 

const app = express();
app.use(express.json());
app.use(cors());
routes(app);

app.listen(process.env.PORT || 4444, () => {
    console.log('listening on port' + 4444);
});