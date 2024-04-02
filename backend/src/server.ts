import express from 'express';
import cors from 'cors';
import { resultadoController } from './controller';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/resultados', resultadoController.index);
app.post('/resultados', resultadoController.create);
app.delete('/resultados/:id', resultadoController.delete);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
})