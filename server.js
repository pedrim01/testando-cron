import express from 'express';
import cron from 'node-cron'
import 'dotenv/config'
import axios from 'axios';

const { APIKEY, CHAT_ID_FREE } = process.env;

const app = express()

const telegramApiUrl = "https://api.telegram.org/bot";
const CHAT_ID_NOW = CHAT_ID_FREE

const requestTelegram = async (endpoint, body) => {

  try {
    const response = await axios.post(`${telegramApiUrl}${APIKEY}/${endpoint}`, body);
    return response.data;
  } catch (err) {
    console.error(`Ocorreu um erro ao fazer a requisição: ${err}`);
    return {};
  }
};

const sendImageGoodMorning = async () => {

  const imageUrl = 'https://imgur.com/tI2Wwk8'; // URL da imagem pública
  const textHeader = '*🚀Cangas Tips Team🚀*'
  const msgCustom = `
*BOM DIA CANGAS*‼️‼️‼️\n
Começando o dia analisando com carinho o mercado.\n
BORA PRA CIMA‼️‼️‼️
`

  const messageText = `${textHeader}\n\n${msgCustom}`;

  try {

    const body = {
      chat_id: Number(CHAT_ID_NOW),
      // text: messageText,
      caption: messageText,
      parse_mode: 'Markdown', // Para formatar o link como um link clicável
      disable_web_page_preview: false, // Para habilitar a visualização da página web
      photo: imageUrl, // Use a URL da imagem como o campo "photo" diretamente
      // reply_markup: JSON.stringify(keyboard),

    };


    await requestTelegram('sendPhoto', body);
  } catch (error) {
    console.error(`Ocorreu um erro antes de enviar a imagem/msg: ${error}`);
  }
};

const sendImageAfiliadoCangas = async () => {


  const imageUrl = 'https://imgur.com/1yaKcS0'; // URL da imagem pública


  const textHeader = '*🚀Cangas Tips Team🚀*'
  const msgCustom = `
*VENHA SER NOSSO PARCEIRO*‼️‼️‼️\n\n
Convide pessoas para faturar utilizando nossos métodos e receba parte de sua assinatura mensalmente!\n
Basta clicar no link abaixo e entrar em nosso grupo.\n\n
👇👇👇👇👇👇
https://t.me/afiliadocangas
`

  const messageText = `${textHeader}\n\n${msgCustom}`;

  try {

    const body = {
      chat_id: Number(CHAT_ID_NOW),
      // text: messageText,
      caption: messageText,
      parse_mode: 'Markdown', // Para formatar o link como um link clicável
      disable_web_page_preview: false, // Para habilitar a visualização da página web
      photo: imageUrl, // Use a URL da imagem como o campo "photo" diretamente

    };


    await requestTelegram('sendPhoto', body);
  } catch (error) {
    console.error(`Ocorreu um erro antes de enviar a  imagem/msg: ${error}`);
  }
};

const sendImageInstagram = async () => {


  const imageUrl = 'https://imgur.com/1yaKcS0'; // URL da imagem pública


  const textHeader = '*🚀Cangas Tips Team🚀*'
  const msgCustom = `
*FAÇA PARTE DO NOSSO INSTAGRAM*‼️‼️‼️\n\n
Nos siga no Instagram e fique por dentro de promoções e dicas sobre o mundo das apostas!\n
Basta clicar no link abaixo e entrar em nosso grupo.\n\n
👇👇👇👇👇👇
https://instagram.com/cangastips
`

  const messageText = `${textHeader}\n\n${msgCustom}`;

  try {

    const body = {
      chat_id: Number(CHAT_ID_NOW),
      // text: messageText,
      caption: messageText,
      parse_mode: 'Markdown', // Para formatar o link como um link clicável
      disable_web_page_preview: false, // Para habilitar a visualização da página web
      photo: imageUrl, // Use a URL da imagem como o campo "photo" diretamente

    };


    await requestTelegram('sendPhoto', body);
  } catch (error) {
    console.error(`Ocorreu um erro antes de enviar a  imagem/msg: ${error}`);
  }
};

const sendImageVIP = async () => {


  const imageUrl = 'https://imgur.com/a/4keJaqn'; // URL da imagem pública


  const textHeader = '*🚀Cangas Tips Team🚀*'
  const msgCustom = `
*Assine* já o nosso *VIP* e tenha acesso a todas as entradas‼️‼️‼️\n\n
Entradas selecionadas por software e por tipsters, que batem mais de 90% das vezes.\n
`

  const messageText = `${textHeader}\n\n${msgCustom}`;

  try {

    const keyboard = {
      inline_keyboard: [
        [
          {
            text: 'Assinar o VIP 💎💎💎',
            url: 'https://linktr.ee/cangastips', // Substitua pelo seu link real
          },
        ],
      ],
    };

    const body = {
      chat_id: Number(CHAT_ID_NOW),
      // text: messageText,
      caption: messageText,
      parse_mode: 'Markdown', // Para formatar o link como um link clicável
      disable_web_page_preview: false, // Para habilitar a visualização da página web
      photo: imageUrl, // Use a URL da imagem como o campo "photo" diretamente
      reply_markup: JSON.stringify(keyboard),

    };


    await requestTelegram('sendPhoto', body);
  } catch (error) {
    console.error(`Ocorreu um erro antes de enviar a imagem/msg: ${error}`);
  }
};

const sendImageBotBroker = async () => {


  const imageUrl = 'https://imgur.com/1b8VTPz'; // URL da imagem pública


  const textHeader = '*🚀Cangas Tips Team🚀*'
  const msgCustom = `
Está sem *TEMPO* para realizar suas apostas???\n\n
Então, que tal deixar sua conta lucrando em nosso *BOT* 24h por dia?\n\n
*Maiores informações*:\n
@cangastips  
`

  const messageText = `${textHeader}\n\n${msgCustom}`;

  try {

    const keyboard = {
      inline_keyboard: [
        [
          {
            text: 'Assinar o VIP 💎💎💎',
            url: 'https://linktr.ee/cangastips', // Substitua pelo seu link real
          },
        ],
      ],
    };

    const body = {
      chat_id: Number(CHAT_ID_NOW),
      // text: messageText,
      caption: messageText,
      parse_mode: 'Markdown', // Para formatar o link como um link clicável
      disable_web_page_preview: false, // Para habilitar a visualização da página web
      photo: imageUrl, // Use a URL da imagem como o campo "photo" diretamente
      // reply_markup: JSON.stringify(keyboard),

    };


    await requestTelegram('sendPhoto', body);
  } catch (error) {
    console.error(`Ocorreu um erro antes de enviar a imagem/msg: ${error}`);
  }
};


app.listen(3333, () => {
  console.log('Server is Running...')
  
  cron.schedule('*/10 * * * * *', () => console.log(new Date().toLocaleTimeString()))

  
  cron.schedule('0 0 8 * * *', () => sendImageGoodMorning())
  cron.schedule('0 0 11 * * *', () => sendImageVIP())
  cron.schedule('0 0 14 * * *', () => sendImageAfiliadoCangas())
  cron.schedule('0 0 18 * * *', () => sendImageBotBroker())
  cron.schedule('0 0 20 * * *', () => sendImageInstagram())

})