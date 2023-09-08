const express = require('express');
const app = express();
const port = 3001; // Выберите порт, на котором будет работать сервер

// Подключение к PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
  user: 'tinlav',
  host: 'localhost',
  database: 'PostgreSQL',
  password: 'admin',
  port: 5432, // порт по умолчанию для PostgreSQL
});

app.use(express.json());

// Пример маршрута для получения данных из базы данных
app.get('/api/data', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM your_table');
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (error) {
    console.error('Ошибка при запросе к базе данных:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
