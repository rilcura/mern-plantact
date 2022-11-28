import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

mongoose.connect(`mongodb+srv://plantact:${process.env.MONGODB_PASSWORD}@plantact.yash4wv.mongodb.net/plantact?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let db = mongoose.connection
db.once('open', () => console.log('Connected to MongoDB!'))

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/keys/paypal', (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
// });
// app.get('/api/keys/google', (req, res) => {
//   res.send({ key: process.env.GOOGLE_API_KEY || '' });
// });

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
