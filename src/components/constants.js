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
    {text: 'Атомизаторы'},
    {text: 'Инжиниринг «под ключ»'},
    {text: 'Производствао «под ключ»'}
]
export const ADVANTAGES = [
    {text: 'Импортозамещаем детали и оборудование', icon: <AdvIconGear />},
    {text: 'Обслуживаем по гарантии', icon: <AdvIconScrew />},
    {text: 'Есть собственный склад в Москве', icon: <AdvIconHouse /> },
    {text: 'Постоянно обновляем оборудование', icon: <AdvIconGraph /> }
]
export const GOODS = [
    {text: 'Производство под ключ', description: 'Полный цикл от идеи до выхода на заявленную проектную мощность.', icon: GoodsIconKeys},
    {text: 'Атомизаторы', description: '', icon: GoodsIconAtom },
    {text: 'Инжиниринг под ключ', description: '', icon: GoodsIconPapers }
]

export const NEWS = [
    { image: NewsImageOne, title: 'Новая технология SLM', text: 'Компания XYZ представила новую технологию SLM (Selective Laser Melting), которая улучшает производительность и точность в 3D-печати металлов. SLM позволяет создавать сложные металлические детали.', date: 'от 21.03.2024' },
    { image: NewsImageTwo, title: 'Металлический порошок везде', text: 'Компания ABC запустила завод по производству металлического порошка для 3D-печати. Завод использует передовые технологии для обеспечения высокого качества порошка, что улучшит характеристики конечных изделий.', date: 'от 21.03.2024' },
    { image: NewsImageThree, title: 'Печатай металлом сам', text: 'В новом технопарке открылся уникальный 3D-принтер, способный печатать металлические изделия. Это оборудование откроет новые возможности для разработки и производства в различных отраслях, включая авиастроение и медицину.', date: 'от 21.03.2024' }
]