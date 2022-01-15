


const commands = `
/call - Позвонить
/view_product -  Посмотреть товар
/price_rub - Прайс в рублях
/route - Где я могу получить товар
/create_bot - Я тоже хочу телеграм бота. 
Связаться с разработчиком  
`
datePrice = {
    price_rub : { source : './price15.1.22.xls'},
    price_usd : { source : './price15.1.22.xlsx'}


}

const routeMap = {
    google: 'https://goo.gl/maps/gdQNoX8CNyNe8E6a8'
}

const articulFurnitura = `
 AP1001 <a href = "https://www.aquapulse.biz/products/brandspojt-ap-1001">посмотреть на сайте</a>`
const countreShlag =  ['Россия', 'Италия', 'Польша']



 
const articul = [
    'AP 1001 Брандспойт',
    'AP 1002 Коннектор 1 / 2 - 5 / 8',
    'AP 1003 Коннектор со стопом 1 / 2 - 5 / 8',
    'AP 1004 Коннектор 3 / 4',
    'AP 1005 Коннектор со стопом 3 / 4',
    'AP 1006 Муфта - соединитель 1 / 2 - 1 / 2',
    'AP 1006T Муфта - соединитель 1 / 2 - 1 / 2 - 1 / 2',
    'AP 1007 Муфта - соединитель 3 / 4 - 3 / 4',
    'AP 1007T Муфта - соединитель 3 / 4 - 3 / 4 - 3 / 4',
    'AP 1008 Муфта - соединитель 3 / 4 - 1 / 2',
    'AP 1009 Кран запорный 3 / 4',
    'AP 1010 Адаптер с внутренней резьбой 1 / 2',
    'AP 1011 Адаптер с внутренней резьбой 3/4',
    'AP 1012 Адаптер с внутренней резьбой 1',
    'AP 1013 Адаптер с внутренней резьбой 3/4 c редуктором 1/2 - 3/4',
    'AP 1014 Адаптер с внутренней резьбой 1 c редуктором 3/4 - 1',
    'AP 1015 Адаптер с наружной резьбой 1/2',
    'AP 1016 Адаптер с наружной резьбой 3/4',
    'AP 1017 Ниппель',
    'AP 1018 Тройник',
    'AP 1019 Адаптер-тройник с двумя кранами с внутр. резьбой 1 и редуктором 3/4 - 1',
    'AP 1020 Универсальный комплект 1/2',
    'AP 1021 Двухсторонний коннектор с запорным краном',
    'AP 1023 Мультитап коннектор 1/2',
    'AP 1024 Планка-адаптер распределительная с 4-мя запорными кранами',
    'AP 1026 Мультитап коннектор 3/4',
    'AP 1030 Адаптер-редуктор с наружной резьбой 1/2 (внутр. резьба 3/4)',
    'AP 1031 Адаптер-редуктор с наружной резьбой 1/2 (внутр. резьба 1)',
    'AP 1032 Адаптер-ниппель с наружной резьбой 1/2 (резьба 3/4)',
    'AP 1033 Адаптер-ниппель с наружной резьбой 1/2 (резьба 1)',
    'AP 1101 Брандспойт MAXI',
    'AP 1104 Коннектор 3/4 MAXI',
    'AP 1105 Коннектор со стопом 3/4 MAXI',
    'AP 1112 Адаптер MAXI с внутренней резьбой 1',
    'AP 1114 Адаптер MAXI с внутренней резьбой 1 с редуктором 3/4 - 1',
    'AP 1116 Адаптер MAXI c наружной резьбой 3/4',
    'AP 1117 Ниппель MAXI',
    'AP 1118 Тройник MAXI',
    'AP 1204 Коннектор 1',
    'AP 1205 Коннектор 1 с функцией СТОП',
    'AP 1206 Муфта-соединитель 1 - 3/4',
    'AP 1207 Муфта - соединитель 1 - 1',
    'AP 1217 Ниппель MIX',
    'AP 1218 Тройник MIX',
    'AP 4005 Тренога телескопическая для оросителей',
    'AP 4006 Насадки для форсунки TURBO',
    'AP 4007 Пластиковая ножка для оросителей',
    'AP 4009 Ножка держатель для шланга',
    'AP 4012 Таймер механический',
    'AP 4013 Программируемый электронный таймер 4 зоны',
    'AP 4014 Программируемый электронный таймер 1 зона',
    'AP 4015 Ножка держатель для оросителя металлическая',
    'AP 5001 Комплект для капиллярного полива',
    'AP 5005 форсунка TURBO для орошения',
    'AS 101 Брандспойт с регулированием потока',
    'AS 102 Быстросъемный коннектор 1/2 -  5/8',
    'AS 103 Быстросъемный коннектор с функцией СТОП 1/2 -  5/8',
    'AS 104 Быстросъемный коннектор 5/8 - 3/4',
    'AS 105 Быстросъемный коннектор с функцией СТОП 5/8 - 3/4',
    'AS 106 Быстросъемный коннектор 1/2-  5/8 - 3/4',
    'AS 107 Быстросъемный коннектор с функцией СТОП 1/2-5/8-3/4',
    'AS 108 Муфта - соединитель 1/2 -  5/8 - 3/4',
    'AS 110 Быстросъемный угловой коннектор 1/2 - 5/8 - 3/4',
    'AS 111 Коннектор с ручным клапаном 1/2-  5/8 - 3/4',
    'AS 112 Адаптер - коннектор  с ручным клапаном',
    'AS 113 Угловой коннектор - адаптер 1/2 -  5/8 - 3/4',
    'AS 114 Многофункциональный адаптер-ороситель',
    'AS 115 Фильтр с внутренней резьбой 3/4',
    'LX 1002R Коннектор 1/2 - 5/8',
    'LX 1003R Коннектор со стопом 1/2 - 5/8',
    'LX 1004R Коннектор 3/4',
    'LX 1005R Коннектор со стопом 3/4',
    'LX 1006R Муфта-соединитель 1/2 - 1/2',
    'LX 1007R Муфта-соединитель 3/4 - 3/4',
    'LX 1008R Муфта-соединитель 3/4 - 1/2',
    'LX 1011R Адаптер с внутренней резьбой 3/4',
    'LX 1012R Адаптер с внутренней резьбой 1',
    'LX 1013R Адаптер с внутренней резьбой 3/4 c редуктором 1/2 - 3/4',
    'LX 1014R Адаптер с внутренней резьбой 1 c редуктором 3/4 - 1',
    'LX 1020R Универсальный комплект 3/4',
    'АР 4008 Датчик влажности почвы',

    // legth  - 11
    ]
  
  
    

module.exports.commands = commands;
module.exports.articulFurnitura = articulFurnitura;   
module.exports.countreShlag = countreShlag;
module.exports.articul = articul;
module.exports.datePrice = datePrice;
module.exports.routeMap = routeMap;


