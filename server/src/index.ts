import app from './app.js';

const PORT = Number(process.env.PORT || 3080);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
