import images from "./images";
const headerContent = {
  english: {
    upperContent: "BUDDHA'S RESTAURANT",
    heading: "The Key To Fine Dining",
    bottom:
      "Experience Flavors That Will Tantalize Your Taste Buds And Leave You Wanting More.",
  },
  russian: {
    upperContent: "BUDDHA'S RESTAURANT",
    heading: "Ключ К Изысканному Питанию",
    bottom:
      "Испытайте вкусы, которые будут дразнить ваши вкусовые рецепторы и оставят вас желающими большего.",
  },
  estonian: {
    upperContent: "BUDDHA'S RESTAURANT",
    bottom:
      "Kogege maitseid, mis kiusavad teie maitsemeeli ja jätavad teid rohkem tahtma.",
  },
};

const exploreMenuBtn = {
  english: "Explore Menu",
  russian: "Исследовать меню",
  estonian: "Uuri menüüd",
};

const aboutUs = {
  english: {
    name: "About Us",
    content:
      "At Buddha's Restaurant, we offer the best european cuisine in Estonia. Our menu features a variety of dishes, including vegetarian options, to cater to all taste preferences. Visit us for a memorable dining experience.",
  },
  russian: {
    name: "О нас",
    content:
      "В ресторане Будда мы предлагаем лучшую европейскую кухню в Эстонии. Наше меню включает разнообразные блюда, в том числе вегетарианские опции, чтобы удовлетворить все вкусовые предпочтения. Посетите нас, чтобы получить незабываемый кулинарный опыт.",
  },
  estonian: {
    name: "Meist",
    content:
      "Buddha restoranis pakume parimat Euroopa kööki Eestis. Meie menüüs on erinevaid roogasid, sealhulgas taimetoitlastele mõeldud valikuid, et rahuldada kõikide maitse-eelistusi. Külastage meid, et saada meeldejääv söögikogemus",
  },
};

const history = {
  english: {
    name: "Our History",
    content:
      "Rooted In Tradition, Evolving With You: Our History Is Rich, Our Future Is Full Of Flavor.",
  },
  russian: {
    name: "Наша история",
    content:
      "Укоренившись в традиции, развиваясь вместе с вами: наша история богата, наше будущее полно вкуса.",
  },
  estonian: {
    name: "Meie Ajalugu",
    content:
      "Traditsioonist juurdunud, koos sinuga arenedes: meie ajalugu on rikas, meie tulevik on täis maitset.",
  },
};

const knowMoreBtn = {
  english: {
    name: "Know More",
  },
  russian: {
    name: "Узнайте больше",
  },
  estonian: {
    name: "Rohkem teada",
  },
};

const todaySpec = {
  english: {
    tagline: "Menu That Fits Your Palatte",
    name: "Today's Special",
  },
  russian: {
    tagline: "Меню, которое подходит вашему вкусу",
    name: "Специальное предложение сегодня",
  },
  estonian: {
    tagline: "Menüü, mis sobib teie maitsele",
    name: "Tänane eripakkumine",
  },
};

const chef = {
  english: {
    name: "Chef's Word",
    headline: "What We Believe In",
    content1: "Devoted to delighting taste buds, fostering community",
    content2:
      "We believe in crafting culinary experiences that celebrate the essence of local flavors, fostering community connections, and promoting sustainability in every dish we serve",
  },
  russian: {
    name: "Слово шеф-повара",
    headline: "Во что мы верим",
    content1: "Преданы радости вкусовых ощущений и развитию сообщества.",
    content2:
      "Мы верим в создание кулинарных впечатлений, отмечающих сущность местных вкусов, способствуя социальным связям и продвигая устойчивость в каждом блюде, которое мы подаем",
  },
  estonian: {
    name: "Peakoka sõna",
    headline: "Millesse me usume",
    content1:
      "Oleme pühendunud maitsemeele rõõmustamisele ja kogukonna edendamisele.",
    content2:
      "Me usume käsitööliste kogemuste loomisse, mis tähistavad kohalike maitsete olemust, soodustavad kogukonna sidemeid ning edendavad jätkusuutlikkust igas meie pakutavas roas.",
  },
};

const award = {
  english: {
    name: "Our Laurels",
    first: "Bib Gourmond",
    firstContent: "Great Food, Great Value.",
    second: "Rising Star",
    secondContent: "Shining Brighter Every Day.",
    third: "AA Hospitality",
    thirdContent: "Cultivating Memorable Moments",
    fourth: "Outstanding Chef",
    fourthContent: "Elevating Taste Buds, Exceeding Expectations",
  },
  russian: {
    name: "Наши лавры",
    first: "Bib Gourmond",
    firstContent: "Великолепная еда, великолепное значение.",
    second: "Восходящая звезда",
    secondContent: "С каждым днем светит ярче.",
    third: "Гостеприимство AA",
    thirdContent: "Культивируя незабываемые моменты",
    fourth: "Выдающийся шеф-повар",
    fourthContent: "Поднятие вкусовых рецепторов, превзойдение ожиданий",
  },
  estonian: {
    name: "Meie laureaadid",
    first: "Bib Gourmond",
    firstContent: "Suurepärane toit, suurepärane väärtus.",
    second: "Tõusv täht",
    secondContent: "Särama iga päevaga aina rohkem.",
    third: "AA Külalislahkus",
    thirdContent: "Meelejäävate hetkede kujundamine",
    fourth: "Väljapaistev peakokk",
    fourthContent: "Maitsemeelte tõstmine, ootuste ületamine",
  },
};

const photoGallery = {
  english: {
    name: "Photo Gallery",
    content:
      "Explore Buddha's Restaurant photo gallery – finest European cuisine, cozy ambiance, and vegetarian options in Estonia.",
  },
  russian: {
    name: "Фотогалерея",
    content:
      "Посмотрите фотогалерею ресторана Будда – лучшие блюда европейской кухни, уютная атмосфера и вегетарианские опции в Эстонии.",
  },
  estonian: {
    name: "Fotogalerii",
    content:
      "Vaadake Buddha restorani fotogaleriid – parimad Euroopa köögi road, hubane atmosfäär, ja taimetoitlaste valikud Eestis.",
  },
};

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Great food, great value.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Shining brighter every day.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Cultivating memorable moments.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Elevating taste buds, exceeding expectations",
  },
];

const bgImg = {
  STARTER: "/food12.jpg",
  SOUP: "/veg.jpg",
  SALAD: "/salad1.jpg",
  INDIAN_MAIN_COURSE_VEG: "veg.jpg",
  INDIAN_MAIN_COURSE_NONVEG: "/non_veg.jpg",
  ORIENTAL_MAINCOURSE_VEG: "/paneer.jpeg",
  CHICKEN_DISHES: "/chicken.jpeg",
  PORK_DISHES: "/food12.jpg",
  LAMB_DISHES: "non_veg.jpg",
  BEEF_DISHES: "/food12.jpg",
  SEA_FOOD_DISHES: "/non_veg.jpg",
  SQUID_DISHES: "/veg.jpg",
  DUCK_DISHES: "/non_veg.jpg",
  TANDOORI_BREAD: "/bread.jpg",
  RICE_AND_NOODLE: "/rice.jpg",
  CHILD_MENU: "/food12.jpg",
  TEA_AND_COFFEE: "/tea.jpg",
  DRINKS: "/tea.jpg",
  BEERS: "/beer.jpg",
  ALCOHOL_FREE_BEERS: "/rose.jpg",
  CIDERS: "beer.jpg",
  RED_WINES: "/rose.jpg",
  WHITE_WINES: "/white.jpg",
  ROSE_WINES: "/rose.jpg",
  SPARKLING_WINES: "/beer.jpg",
  STRONG_ALCOHOLIC_DRINKS: "/white.jpg",
  WHISKEY: "/whiskey.jpg",
  RUM: "/rum.jpg",
  TEQUILA: "rose.jpg",
  ICE_CREAM_COCKTAILS: "/ice.jpg",
  DESSERTS: "/strawberry.jpg",
};
export default {
  wines,
  cocktails,
  awards,
  headerContent,
  aboutUs,
  photoGallery,
  award,
  chef,
  todaySpec,
  exploreMenuBtn,
  knowMoreBtn,
  history,
  bgImg,
};
