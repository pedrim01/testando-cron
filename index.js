const express = require('express');
const cron = require('node-cron');

const app = express()

app.listen(3333, () => {
  console.log('Server')
  cron.schedule('* * * * * *', () => console.log('Rodando cron a cada 1 seg'))

})