// npm run dev auto save

const { Telegraf, Markup, Context } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const baseDate = require("./const");


bot.start(async (ctx) => {
  ctx.reply(
    ` ${await ctx.replyWithPhoto({ source: "./img/AquapulseBot.png" })}
Добро пожаловать ${ctx.message.from.first_name}`
      ? `Добро пожаловать ${ctx.message.from.first_name}.
Этот телеграмм бот, подскажет вам цену и даст информацию о товаре.
Нажмите на меню в нижнем левом углу и выбирите команду которая вас интересует или введите '/' и так-же выберите команду.
Спасибо что выбрали Aquapulse 💼 💯` 
      : Клиент
  );
});

bot.command("call", async (ctx) => {
  try {
    await ctx.replyWithHTML(`
Директор -   +7(928)-136-37-08
-----------------------------------------
Менеджер по продажам -  +7(903)-486-81-83
-----------------------------------------
Менеджер по продажам - +7(922)-065-22-52
-----------------------------------------
Менеджер по продажам - +7(961)-302-34-32`);
  } catch (e) {
    console.log(e);
  }
});

bot.command('view_product', async (ctx) => {
  try {
    
    await ctx.replyWithHTML('Перейдите на сайт для ознакомления с товаром')
    await ctx.replyWithHTML('aquapulse.biz')
          
             
  } catch(e) {
    console.log(e)
  }
})




bot.command("route", async (ctx) => {
  try { 
    await ctx.replyWithHTML('Немного терпения...')
    await ctx.replyWithHTML(
 `
➡  Google карта - https://example.com
     
➡  Яндекс карта - https://yandex.ru/maps/-/CCUyy2gipD
     `

     
  )  
} catch (e) {
    console.log(e);
  }
});

bot.command("price_rub", async (ctx) => {
  try {
    await ctx.replyWithHTML('Немного терпения...')
    await ctx.replyWithDocument(baseDate.datePrice.price_rub);
  } catch (e) {
    console.log(e);
  }
});


bot.command('create_bot', async (ctx) => {
  try {
    ctx.replyWithHTML( `
По всем вопросам разработки телеграм ботов, обращаться:
phone: +7(961)-302-34-32
telegram: @nazim_053

    `)
  } catch (e) {
    console.log(e);
  }
})

// bot.command("price_usd", async (ctx) => {
//   try {
//     await ctx.replyWithDocument(baseDate.datePrice.price_usd);
//   } catch (e) {
//     console.log(e);
//   }
// });


// bot.help((ctx) => ctx.reply(text.commands))

// bot.hears('price', (ctx) => (
//     ctx.replyWithDocument( {source: './example.xlsx'})
// ))

// bot.hears('hi', (ctx) => (
//     ctx.replyWithPhoto({source: './img/ap1001.jpg'})
// ))

// bot.command('catalog', async (ctx) => {
//     try {
// await ctx.replyWithHTML('<b>Aquapulse</b>', Markup.inlineKeyboard(

//    [
//        [
//            Markup.button.callback('Шланги', 'btn_1'),
//            Markup.button.callback('Пищевые шланги', 'btn_2'),
//        ],

//        [
//            Markup.button.callback('Фурнитура', 'btn_3'),
//            Markup.button.callback('Lay-flat', 'btn_4')
//        ],
//        [
//            Markup.button.callback('Гофра', 'btn_4'),
//            Markup.button.callback('Спрей-лента туман', 'btn_4')
//        ],
//    ]
//  ))
// } catch(e) {
//    console.error(e)
// }

// })

// function addActionBot (name) { // действие на кнопку btn_1
//     bot.action(name, async (ctx) => {
//        await ctx.answerCbQuery() // убрать часики с кнопки
//        await ctx.replyWithHTML('<b>Выберите  производство</b>', Markup.inlineKeyboard(

//            [
//                [
//                    Markup.button.callback(text.countreShlag[0], 'cointChla_1'),
//                    Markup.button.callback(text.countreShlag[1], 'cointChla_2'),
//                    Markup.button.callback(text.countreShlag[2], 'cointChla_3'),

//                ],
//            ]
//          ))
//     })
// }

// addActionBot('btn_1');

// function addCatalogFuritura(name) {
//     bot.action(name, async (ctx) => {
//         await ctx.answerCbQuery()

//         for( i = 0; i <= text.articul.length; i++ ) {

//             ctx.replyWithHTML( text.articul[i] )

//         }

//     })
// }

// addCatalogFuritura('btn_3');

// function addActionBot(name,src,text) {
//     bot.action(name, async (ctx) => {
//         try {
//            await ctx.answerCbQuery() // убрать часики с кнопки
//            if (src !== false) {
//                await ctx.replyWithPhoto({
//                    source:src
//                })
//            }
//            await  ctx.replyWithHTML(text, {
//                 disable_web_page_preview:true // этот метод запрещает выводить изображение ссылки
//             })
//         } catch (e) {
//             console.log(e)
//         }
//     })
// }
// addActionBot('btn_3', './img/ap1001.jpg', text.articulFurnitura);

//bot.hears('hi', (ctx) => ctx.reply('Hey there')) слушатель выведт reply
//  после ввода hi

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
