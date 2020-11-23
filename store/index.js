export const state = () => ({
    sliders: [
        {"id":1, "webp":"img/slider/01.webp", "img":"img/slider/01.jpg","title":"Идеальное место","text":"для встреч с друзьями","subtext":"Марсель - ресторан"},
        {"id":2, "webp":"img/slider/02.webp", "img":"img/slider/02.jpg","title":"Изысканные блюда","text":"из разных стран мира","subtext":"Марсель - ресторан"},
        {"id":3, "webp":"img/slider/03.webp", "img":"img/slider/03.jpg","title":"Уютные зали","text":"для разных мероприятий","subtext":"Марсель - ресторан"}
    ],
    about: 
        {"webp":"img/about_us/01.webp", "img":"img/about_us/01.jpg","title":"Изысканные блюда","subtitle":"Наша кухня","text":"На кухне творчество неотделимо от времени. В любой сезон, и летом и зимой, мы предлагаем Вам самые ценные жемчужины нашей кулинарной сокровищницы. Вы сможете не только насладиться самыми вкусными обедами, а и зарядиться позитивной энергией на весь день. Блюда, приготовленные с душой, наполнят Вас настроением и зарядят бодростью на весь день!"}
    ,
    recalls: [
        {"id":1, "webp":"img/recall/01.webp", "img":"img/recall/01.jpg","data":"14.07.2020","author":"Яна Россо","text":"Мы не с Винницы, искали место покушать вкусно по отзывам в интернете и не ошиблись кухня просто бомба суп с морепродуктами просто ела б каждый день сытно и ну очень вкусно 🤤"},
        {"id":2, "webp":"img/recall/02.webp", "img":"img/recall/02.jpg","data":"04.07.2020","author":"Igor Grynhcuk","text":"Унікальне місце на мапі Вінниці! Компактно! Смачно! Є доставка) .... Стіл бажано замовляти заздалегідь) Бо завжди аншлаг"},
        {"id":3, "webp":"img/recall/00.webp", "img":"img/recall/00.png","data":"15.06.2020","author":"Микола Новицький","text":"Круте місце. Все досить смачно і привітний персонал. Особливо класний чай з кедровими горішками :) рекомендую"},
        {"id":4, "webp":"img/recall/03.webp", "img":"img/recall/03.jpg","data":"12.08.2020","author":"Вика Стопа","text":"Надзвичайно смачна кухня з величезним вибором, що задовольнить найвибагливішого гурмана. Оригінальні рецепти та приємна атмосфера. Всім рекомендую!"},
        {"id":5, "webp":"img/recall/00.webp", "img":"img/recall/00.png","data":"03.07.2020","author":"Sun Light","text":"Тут всегда очень вкусно. Обслуживание хорошее, интерьер уютный. Понравился салат, блины с икрой, кабачки в кляре. Были тут не раз на свадьбах. Всё всегда на уровне, молодцы !"},
        {"id":6, "webp":"img/recall/00.webp", "img":"img/recall/00.png","data":"29.03.2020","author":"Евгений Назаренко","text":"Самая лучшая кухня в городе. Как в ресторане так и на выезд. Уютное и тематическое место для семейных мероприятий. Приветливый персонал. Рекомендую."}
    ],
    events: [
        {"id":1, "webp":"img/events/01.webp", "img":"img/events/01.jpg","subtitle":"Торжественные праздники","title":"Свадьба","text":"Можно придумать много сценариев, как отпраздновать свадьбу. Но, бесспорно, для идеального свадебного дня нужна любовь двух сердец. И, конечно же, место, чтобы устроить запоминающееся торжество.","room":"Форум Холл","col":"До 200 человек","music":"Живая музыка"},
        {"id":2, "webp":"img/events/02.webp", "img":"img/events/02.jpg","subtitle":"Официальные митинги","title":"Деловые встречи","text":"Все деловые люди ценят свое время и быстроту обслуживания. Атмосфера заведения может повлиять на исход встречи. Важна возможность пообщаться в спокойной тихой атмосфере с ненавязчивым, но внимательным обслуживанием.","room":"Бизнес-рум","col":"До 20 человек","music":"Музыка по желанию"},
        {"id":3, "webp":"img/events/03.webp", "img":"img/events/03.jpg","subtitle":"Закрытое мероприятие","title":"День рождения","text":"Предлагаем отметить день рождения - ярко, вкусно и с музыкой! Мы приготовили для Вас подарок, не только скидку -20% на все меню, но и самый любимый торт с авторской интерпритацией от бренд-повара.","room":"Каминный зал","col":"До 50 человек","music":"Живая музыка"}
    ],
    menu: [
        {"id":1, "webp":"img/menu/01.webp", "img":"img/menu/01.jpg","name":"Королевский сэт","text":"Футумаки с фетой, дополненные пеповторимой королевской креветкой","price":"180"},
        {"id":2, "webp":"img/menu/02.webp", "img":"img/menu/02.jpg","name":"Стейк из форели","text":"Нежнейший стейк форели под лимонным соусом, приготовленный на пару","price":"150"},
        {"id":3, "webp":"img/menu/03.webp", "img":"img/menu/03.jpg","name":"Торт Альгамбра","text":"Бисквит торт с пропиткой из сиропа с кофейным экстрактом, сливочно-шоколадным ганашем и глазурью","price":"122"},
        {"id":4, "webp":"img/menu/04.webp", "img":"img/menu/04.jpg","name":"Манду","text":"Неповторимое блюдо, фаворит кухни Восточной и Южной Азии, фарш для мантов закатывается в тонкое тесто, а готовятся они преимущественно","price":"160"}
    ],
    galleries: [
        {"id":1, "category":"nation", "webp":"img/gallery/01.webp", "img":"img/gallery/01.jpg","fancy":"img/gallery/fancybox/01.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":2, "category":"nation", "webp":"img/gallery/02.webp", "img":"img/gallery/02.jpg","fancy":"img/gallery/fancybox/02.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":3, "category":"tai", "webp":"img/gallery/03.webp", "img":"img/gallery/03.jpg","fancy":"img/gallery/fancybox/03.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":4, "category":"franch", "webp":"img/gallery/04.webp", "img":"img/gallery/04.jpg","fancy":"img/gallery/fancybox/04.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":5, "category":"nation", "webp":"img/gallery/05.webp", "img":"img/gallery/05.jpg","fancy":"img/gallery/fancybox/05.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":6, "category":"franch", "webp":"img/gallery/06.webp", "img":"img/gallery/06.jpg","fancy":"img/gallery/fancybox/06.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":7, "category":"ital", "webp":"img/gallery/07.webp", "img":"img/gallery/07.jpg","fancy":"img/gallery/fancybox/07.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":8, "category":"franch", "webp":"img/gallery/08.webp", "img":"img/gallery/08.jpg","fancy":"img/gallery/fancybox/08.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":9, "category":"nation", "webp":"img/gallery/09.webp", "img":"img/gallery/09.jpg","fancy":"img/gallery/fancybox/09.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":10, "category":"nation", "webp":"img/gallery/10.webp", "img":"img/gallery/10.jpg","fancy":"img/gallery/fancybox/10.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":11, "category":"ital", "webp":"img/gallery/11.webp", "img":"img/gallery/11.jpg","fancy":"img/gallery/fancybox/11.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":12, "category":"tai", "webp":"img/gallery/12.webp", "img":"img/gallery/12.jpg","fancy":"img/gallery/fancybox/12.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":13, "category":"franch", "webp":"img/gallery/13.webp", "img":"img/gallery/13.jpg","fancy":"img/gallery/fancybox/13.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":14, "category":"nation", "webp":"img/gallery/14.webp", "img":"img/gallery/14.jpg","fancy":"img/gallery/fancybox/14.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":15, "category":"ital", "webp":"img/gallery/15.webp", "img":"img/gallery/15.jpg","fancy":"img/gallery/fancybox/15.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":16, "category":"franch", "webp":"img/gallery/16.webp", "img":"img/gallery/16.jpg","fancy":"img/gallery/fancybox/16.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":17, "category":"ital", "webp":"img/gallery/17.webp", "img":"img/gallery/17.jpg","fancy":"img/gallery/fancybox/17.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":18, "category":"tai", "webp":"img/gallery/18.webp", "img":"img/gallery/18.jpg","fancy":"img/gallery/fancybox/18.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":19, "category":"tai", "webp":"img/gallery/19.webp", "img":"img/gallery/19.jpg","fancy":"img/gallery/fancybox/19.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":20, "category":"tai", "webp":"img/gallery/20.webp", "img":"img/gallery/20.jpg","fancy":"img/gallery/fancybox/20.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":21, "category":"tai", "webp":"img/gallery/21.webp", "img":"img/gallery/21.jpg","fancy":"img/gallery/fancybox/21.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":22, "category":"franch", "webp":"img/gallery/22.webp", "img":"img/gallery/22.jpg","fancy":"img/gallery/fancybox/22.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":23, "category":"ital", "webp":"img/gallery/23.webp", "img":"img/gallery/23.jpg","fancy":"img/gallery/fancybox/23.jpg","descr":"Блюдо от ресторана Марсель"},
        {"id":24, "category":"ital", "webp":"img/gallery/24.webp", "img":"img/gallery/24.jpg","fancy":"img/gallery/fancybox/24.jpg","descr":"Блюдо от ресторана Марсель"}
    ]
})    