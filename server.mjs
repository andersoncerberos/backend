import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('ola mundo');
});

app.listen(3000,'127.0.0.1', () => {
    console.log('rodando na porta 3000');
})



