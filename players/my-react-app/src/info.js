export const props = {
    name: 'Рюрик',
    sex: 'мужчина',
    rasa: 'дворф',
    class: 'варвар',

    history: 'Я - обычный дварф(сейчас мне 52). Живущий на окраине Клана. Моего отца завалило в пещере, когда мне было ' +
        '25 поэтому до 45 лет меня растила мать. Есть младший брат, Флинт(на 25 лет младше). Однако из-за отдалённости ' +
        'нашего дома от центра клана. Орки однажды утсроили набег на нас. В процессе побега они убили мою мать. С тех ' +
        'пор я решил, что не смогу простить себя, если не подарю своему братцу  хорошую молодость и не отомщу за смерть ' +
        'матери Оркам и за смерть Отца камням. Поэтому пошёл в странствия' +
        '\nА и ещё. Я выигрывал в конкурсе самых лучших юных горных усов - 4 года подряд'
}

export const points = {
    hp: 23, // Обновлено в соответствии с уровнем и телосложением
    'броня': 14, // Класс брони с учетом ловкости и мудрости
    'ловкость': 14, // Ловкость
    'телосложение': 15, // Телосложение
    'мудрость': 10, // Мудрость
    'харизма': 12, // Харизма
    'интеллект': 8, // Интеллект
    'сила': 16 // Сила
}

export const spells = {
    'Обольщение усами': 'При успехе проверки на харизму проводит ночь с предметом обольщения',
    'Чардж': 'Рывок в сторону врага с оглущением на 1 раунд ,только с 5+ метров при 20 удар по яйцам, если противник выше',
    'Бш': 'крутилка топора ВСЕ получают урон оружия в радиусе 1,5 метра'

}

export const passives = {
    n1: 'Ненависть к оркам и камням',
    n2: 'Топографический критинизм в пещерах + клаустрофобия'
}

export const ultimate = {
    ult: 'Новая способность Гнев глубин'
}

export const inventory = {
    'Доспех': 'Средние доспехи',
    'Оружие': 'Двуручный топор',
    'Артефакт': 'Носовой платок',
    'Остальные': 'Кирка, зелье спокойствия х2, точильный камень'
}