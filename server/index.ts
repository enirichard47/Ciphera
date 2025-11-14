// index.ts
import express from 'express';
import cors from 'cors';
import scanRoutes from './routes/scan';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/scan', scanRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
