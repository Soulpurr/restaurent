import images from "./images";
const headerContent = {
  english: {
    upperContent: "Chase The New Flavour",
    heading: "The Key To Fine Dining",
    bottom:
      "Experience Flavors That Will Tantalize Your Taste Buds And Leave You Wanting More.",
  },
  russian: {
    upperContent: "Преследуйте Новый Вкус",
    heading: "Ключ К Изысканному Питанию",
    bottom:
      "Испытайте вкусы, которые будут дразнить ваши вкусовые рецепторы и оставят вас желающими большего.",
  },
  estonian: {
    upperContent: "Ajage Uus Maitse",
    heading: "Peen Toitlustuse Võti",
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
      "From Farm To Fork, With Heart: We Believe In Sourcing Fresh, Local Ingredients And Transforming Them Into Dishes Made With Love And Care",
  },
  russian: {
    name: "О нас",
    content:
      "От фермы до вилки, с душой: мы верим в поиск свежих, местных ингредиентов и превращение их в блюда, приготовленные с любовью и заботой",
  },
  estonian: {
    name: "Meist",
    content:
      "Põllult kahvlini, südamega: usume värskete, kohalike koostisosade hankimisse ja nende muundamisse armastuse ja hoolitsusega valmistatud roogadeks",
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
      "Step Into A World Of Stories, Captured In Time. Explore Our Photo Gallery, Where Memories Come Alive And Emotions Flicker In Every Frame.",
  },
  russian: {
    name: "Фотогалерея",
    content:
      "Войдите в мир историй, запечатленных во времени. Исследуйте нашу фотогалерею, где оживают воспоминания, и эмоции мерцают в каждом кадре.",
  },
  estonian: {
    name: "Fotogalerii",
    content:
      "Astuge maailma lugude sisse, mis on ajas kinni püütud. Uurige meie fotogaleriid, kus elustuvad mälestused ja emotsioonid välgatavad igas kaadris.",
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
};
