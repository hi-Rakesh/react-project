import express from 'express';
import cors from 'cors';
import cookeParser from 'cookie-parser';


const app = express();

app.use(express.json({limit: '16kb'}));
app.use(cors());
app.use(cookeParser());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

export default app;
