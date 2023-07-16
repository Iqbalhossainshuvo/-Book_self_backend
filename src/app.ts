import express, { Application } from 'express'
import cors from 'cors'
import cookieParser  from 'cookie-parser';
import { bookRoute } from './app/module/AllBooks/Books.rotue';
const app:Application = express()

app.use(cors());
app.use(cookieParser())
// parse

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/addBook', bookRoute);
app.use('/api/v1/getAllBook', bookRoute);
app.use('/api/v1/topSell', bookRoute);
app.use('/api/v1/getSingleBook', bookRoute);
app.use('/api/v1/deleteBook', bookRoute);
app.use('/api/v1/updateBook', bookRoute);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
