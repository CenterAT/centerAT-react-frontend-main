import { ReactComponent as AdvIconGear } from "../img/adv-icon-1.svg"
import { ReactComponent as AdvIconScrew } from "../img/adv-icon-2.svg"
import { ReactComponent as AdvIconHouse } from "../img/adv-icon-3.svg"
import { ReactComponent as AdvIconGraph } from "../img/adv-icon-4.svg"

import GoodsIconKeys from "../img/products-image-1.png"
import GoodsIconAtom from "../img/products-image-2.png"
import GoodsIconPapers from "../img/products-image-3.png"

import NewsImageOne from "../img/news-image-1.png"
import NewsImageTwo from "../img/news-image-2.png"
import NewsImageThree from "../img/news-image-3.png"

export const PRODUCTS = [
    {link: '/Atomizators', text: 'Атомизаторы'},
    {link: '/Engineering', text: 'Инжиниринг «под ключ»'},
    {link: '/Production', text: 'Производство «под ключ»'}
]
export const ADVANTAGES = [
    {text: 'Импортозамещаем детали и оборудование', icon: <AdvIconGear />},
    {text: 'Обслуживаем по гарантии', icon: <AdvIconScrew />},
    {text: 'Есть собственный склад в Москве', icon: <AdvIconHouse /> },
    {text: 'Постоянно обновляем оборудование', icon: <AdvIconGraph /> }
]
export const GOODS = [
    {text: 'Производство под ключ', description: 'Полный цикл от идеи до выхода на заявленную проектную мощность.', icon: GoodsIconKeys, link: '/Production'    },
    {text: 'Атомизаторы', description: '', icon: GoodsIconAtom, link: '/Atomizators'},
    {text: 'Инжиниринг под ключ', description: '', icon: GoodsIconPapers, link: '/Engineering' }
]

export const NEWS = [
    { image: NewsImageOne, title: 'Новая технология SLM', text: 'Компания XYZ представила новую технологию SLM (Selective Laser Melting), которая улучшает производительность и точность в 3D-печати металлов. SLM позволяет создавать сложные металлические детали.', date: 'от 21.03.2024' },
    { image: NewsImageTwo, title: 'Металлический порошок везде', text: 'Компания ABC запустила завод по производству металлического порошка для 3D-печати. Завод использует передовые технологии для обеспечения высокого качества порошка, что улучшит характеристики конечных изделий.', date: 'от 21.03.2024' },
    { image: NewsImageThree, title: 'Печатай металлом сам', text: 'В новом технопарке открылся уникальный 3D-принтер, способный печатать металлические изделия. Это оборудование откроет новые возможности для разработки и производства в различных отраслях, включая авиастроение и медицину.', date: 'от 21.03.2024' }
]

export const OddsVIGA = [
    { number: '01', text: 'Использование передовых технологий — плазменная интеллектуальная сварка и струйная обработка песком' },
    { number: '02', text: 'Более 50 тысяч накопленных технологических данных об оборудовании' },
    { number: '03', text: 'Консультационная поддержка и инструктаж для персонала' },
    { number: '04', text: 'Гарантия выполнения проекта в течение 180 дней' },
    { number: '05', text: 'Упрощенный метод модульной сборки' },
    { number: '06', text: 'Бесперебойная и своеременная поставка оборудования' },
    { number: '07', text: 'Ответ технической поддержки в течении 24 часов' },
    { number: '08', text: 'Имеет сертификат на взрывозащиту ЕС' },
    { number: '09', text: 'Проведение ПНР до 3 установок параллельно' },
    { number: '10', text: 'Опыт работы инженеров более 10 лет' },
]
export const OddsVIGAoptions = [
    { number: '01', text: 'Двухконусный смеситель' },
    { number: '02', text: 'Перчаточный бокс' },
    { number: '03', text: 'Ультразвуковое вибрационное сито' },
    { number: '04', text: 'Печь для сушки' },
    { number: '05', text: 'Вакуумная упаковочная машина' },
    { number: '06', text: 'Прибор для измерения температуры' }
]
export const OddsPREP = [
    { number: '01', text: 'Плазменная система ' },
    { number: '02', text: 'Загрузочное и вращающееся подающее устройство' },
    { number: '03', text: 'Камера распыления' },
    { number: '04', text: 'Вакуумная система' },
    { number: '05', text: 'Система сбора' },
    { number: '06', text: 'Газовая система' },
    { number: '07', text: 'Система водяного охлаждения' },
    { number: '08', text: 'Система управления' },
    { number: '09', text: 'Рабочая платформа' }
]