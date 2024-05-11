"use client";
import { Navbar } from "@/components";
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";

function Page() {
  const [open, setopen] = useState(false);
  const manageOpen = () => {
    setopen(!open);
  };
  let categories = [
    "Drinks",
    "Main Course",
    "Chicken",
    "Appetizer",
    "Appetizer",
    "Appetizer",
    "Appetizer",
  ];
  let menuData = {
    Starter: [
      {
        nameEnglish: "Buddha’s Special Roll",
        nameRussian: "Урбан рулетики",
        nameEstonian: "Buddha kevadrullid",
        price: 6.2,
        type: "veg",
        desc: "An exquisite specialty roll with a delightful blend of mushrooms, eggs, and vegetables, offering a unique culinary experience.",
      },
      {
        nameEnglish: "Vegetable Roll",
        nameRussian: "Крõбедад паннкоогироллид кана",
        nameEstonian: "Krobedad pannkoogirullid kana",
        price: 4.6,
        type: "veg",
        desc: "Satisfy your taste buds with crispy pancake rolls filled with a variety of vegetables, bursting with flavor and goodness.",
      },
      {
        nameEnglish: "Chicken Roll",
        nameRussian: "Крõбедад паннкоогироллид кана",
        nameEstonian: "Krobedad pannkoogirullid kana",
        price: 5.4,
        type: "non-veg",
        desc: "Indulge in flavorful rolls filled with tender, seasoned chicken, offering a savory taste experience you won't forget.",
      },
      {
        nameEnglish: "Spicy Garlic Chicken Wings",
        nameRussian: "Маринованные канатиивы",
        nameEstonian: "Marineeritud kanatiivad",
        price: 7.3,
        type: "non-veg",
        desc: "Deliciously fried marinated chicken wings infused with garlic and chili, offering a spicy and savory delight.",
      },
      {
        nameEnglish: "Chicken / Fish / Paneer Pakora",
        nameRussian: "Курица / рыба / панер пакора",
        nameEstonian: "Kana / kala / paneer pakora",
        price: [7.5, 7.6, 7.6],
        type: "non-veg / veg",
        desc: "Savor the crispy goodness of Indian-style fritters, available with chicken, fish, or paneer, seasoned with aromatic Indian spices.",
      },
      {
        nameEnglish: "Crispy Vegetables Kung Pao",
        nameRussian: "Хрустящие овощи кунг пао",
        nameEstonian: "Kung Pao krõbedad köögiviljad",
        price: 7.6,
        type: "veg",
        desc: "Enjoy a mouthwatering dish of crispy vegetables in Kung Pao sauce, offering a perfect balance of sweet, spicy, and savory flavors.",
      },
      {
        nameEnglish: "Drums of Heaven",
        nameRussian: "Куриные крылышки",
        nameEstonian: "Friteeritud kanatiivad",
        price: 7.8,
        type: "non-veg",
        desc: "Indulge in fried marinated chicken wings seasoned with ginger, garlic, onion, and paprika, offering a heavenly taste sensation.",
      },
      {
        nameEnglish: "Chili Potato",
        nameRussian: "Тшелли картошка",
        nameEstonian: "Tšilli kartul",
        price: 7.8,
        type: "veg",
        desc: "Savor the fiery goodness of spicy potatoes, offering a perfect balance of heat and flavor that will tantalize your taste buds.",
      },
      {
        nameEnglish: "Krõbe Chili Tofu",
        nameRussian: "Суитсуне крõбе чили тофу",
        nameEstonian: "Suitsune krõbe chili tofu",
        price: 8.6,
        type: "veg",
        desc: "Indulge in smoky, crispy chili tofu, infused with Indian cheese and spices, offering a delightful burst of flavor in every bite.",
      },
      {
        nameEnglish: "Honey Potato",
        nameRussian: "Медовая картошка",
        nameEstonian: "Meekartul",
        price: 8.6,
        type: "veg",
        desc: "Satisfy your sweet tooth with honey-glazed potatoes, offering a perfect blend of sweetness and savory goodness.",
      },
      {
        nameEnglish: "Crispy Eggplant",
        nameRussian: "Хрустящий баклажан",
        nameEstonian: "Krõbe baklažaan",
        price: 8.6,
        type: "veg",
        desc: "Indulge in crispy eggplant, offering a perfect combination of crunchiness and tenderness with each delicious bite.",
      },
      {
        nameEnglish: "Crispy Chilli Fish",
        nameRussian: "Жареная рыба с чили",
        nameEstonian: "Friteeritud kala tšillikastmes",
        price: 9.3,
        type: "non-veg",
        desc: "Savor the delectable flavor of fried fish in a spicy garlic sauce, complemented with onions, beans, and peppers.",
      },
      {
        nameEnglish: "Crispy Chicken Salt & Pepper",
        nameRussian: "Хрустящая курица с солью и перцем",
        nameEstonian: "Krõbe kana soola ja pipraga",
        price: 9.5,
        type: "non-veg",
        desc: "Delight in crispy chicken seasoned with salt and pepper, offering a perfect balance of flavors and textures.",
      },
      {
        nameEnglish: "Smoky Crispy Chili (Indian Cheese)",
        nameRussian: "Суитсуне крõбе чили (индийский сыр)",
        nameEstonian: "Suitsune krõbe chili (India juust)",
        price: 9.5,
        type: "veg",
        desc: "Indulge in the smoky goodness of crispy chili infused with Indian cheese, offering a unique and flavorful taste experience.",
      },
      {
        nameEnglish: "Crispy Chili Chicken with Celery",
        nameRussian: "Жареная курица с тšилли и сельдереем",
        nameEstonian: "Krõbedaks küpsetatud kana tšilli ja selleriga",
        price: 9.9,
        type: "non-veg",
        desc: "Savor the tantalizing flavor of crispy chicken seasoned with chili and fresh celery, offering a perfect blend of spice and crunch.",
      },
      {
        nameEnglish: "Chicken Shashlik",
        nameRussian: "Курица барбекю",
        nameEstonian: "Kanaliha sašlõkk",
        price: 10.5,
        type: "non-veg",
        desc: "Indulge in succulent chicken shashlik, served with potatoes, salad, and sauce, offering a delightful barbecue experience.",
      },
      {
        nameEnglish: "Prawn Tempura (6pcs)",
        nameRussian: "Темпура креветки (6шт)",
        nameEstonian: "Tempura taignas friteeritud krevetid (6tk)",
        price: 10.9,
        type: "non-veg",
        desc: "Savor the crispy goodness of tempura-battered prawns, offering a delightful crunch with every bite.",
      },
      {
        nameEnglish: "Pork Shashlik",
        nameRussian: "Свинина барбекю",
        nameEstonian: "Sealiha sašlõkk",
        price: 11.6,
        type: "non-veg",
        desc: "Indulge in tender pork shashlik, served with potatoes, salad, and sauce, offering a succulent barbecue experience.",
      },
      {
        nameEnglish: "Prawn Salt & Pepper",
        nameRussian: "Креветки соль и перец",
        nameEstonian: "Krevetid soola ja pipraga",
        price: 11.5,
        type: "non-veg",
        desc: "Savor the tantalizing flavor of prawns seasoned with salt, pepper, and a hint of cooking wine, offering a perfect blend of savory goodness.",
      },
    ],
    soup: [
      {
        nameEnglish: "Tom Yum Soup - Chicken / Prawn",
        nameRussian: "Том Ям Суп - Курица / Креветки",
        nameEstonian: "Tom Yum supp - kana / krevett",
        price: [6.5, 7.0],
        type: "non-veg",
        desc: "Spicy Thai soup with vegetables, lemongrass, and Thai ginger, served with chicken or prawns for a flavorful experience.",
      },
      {
        nameEnglish: "Noodle Soup with Chicken or Prawn",
        nameRussian: "Суп с лапшой с курицей или креветками",
        nameEstonian: "Nuudli supp kana või krevettidega",
        price: [6.0, 7.0],
        type: "non-veg",
        desc: "Enjoy a comforting bowl of noodle soup with tender chicken or succulent prawns, perfect for a satisfying meal.",
      },
      {
        nameEnglish: "Hot and Sour Soup with Chicken",
        nameRussian: "Остро-кислый суп с курицей",
        nameEstonian: "Vürtsikas ja hapu supp kanaga",
        price: 6.1,
        type: "non-veg",
        desc: "Indulge in a rich, spicy, and tangy soup with chicken, mushrooms, green onions, and egg, offering a flavorful delight.",
      },
      {
        nameEnglish: "Tomato Chicken Soup",
        nameRussian: "Томатный суп с курицей",
        nameEstonian: "Tomati kanasupp",
        price: 6.2,
        type: "non-veg",
        desc: "Savor the richness of tomato soup with tender chicken and egg, offering a comforting and satisfying dining experience.",
      },
      {
        nameEnglish: "Tom Kha Soup - Chicken / Prawn",
        nameRussian: "Том Кха Суп - Курица / Креветки",
        nameEstonian: "Tom Kha supp - kana / krevett",
        price: [7.4, 8.4],
        type: "non-veg",
        desc: "Enjoy a spicy Thai soup with coconut milk, vegetables, lemongrass, and Thai ginger, served with chicken or prawns for an authentic taste.",
      },
      {
        nameEnglish: "Buddha's Noodle Soup",
        nameRussian: "Буддийский суп с лапшой",
        nameEstonian: "Buddha nuudlisupp",
        price: 7.5,
        type: "non-veg",
        desc: "Delight in a spicy noodle soup with vegetables, chicken, and prawns, offering a harmonious blend of flavors and textures.",
      },
    ],
    salad: [
      {
        nameEnglish: "Fresh Vegetable Salad (Caesar Sauce)",
        nameRussian: "Свежий овощной салат (соус Цезарь)",
        nameEstonian: "Värske köögiviljasalat (Caesar kaste)",
        price: 6.0,
        type: "veg",
        desc: "Enjoy a refreshing salad with crisp fresh vegetables, topped with creamy Caesar sauce for a delightful burst of flavor.",
      },
      {
        nameEnglish: "Bacon & Cheese Salad",
        nameRussian: "Салат с беконом и сыром",
        nameEstonian: "Krõbe peekon- ja juustusalat",
        price: 7.0,
        type: "non-veg",
        desc: "Indulge in a crunchy salad with crispy bacon, flavorful cheese, fresh romaine lettuce, cabbage, cucumber, tomato, and creamy mayo dressing.",
      },
      {
        nameEnglish: "Avocado Salad with Chicken / Shrimp (Caesar Sauce)",
        nameRussian: "Салат с авокадо и курицей / креветками (соус Цезарь)",
        nameEstonian: "Avokaado salat kanaga / krevettidega (Caesar kaste)",
        price: [7.0, 7.6],
        type: "non-veg",
        desc: "Savor the goodness of avocado salad with mixed greens, cucumber, and bell pepper, topped with grilled chicken or shrimp and Caesar dressing.",
      },
    ],
    indian_Main_Course_Veg: [
      {
        nameEnglish: "Mix Veg (Asian Style)",
        nameRussian: "Смешанные овощи (азиатский стиль)",
        nameEstonian: "Aasia stiilis segatud köögiviljad",
        price: 10.5,
        type: "veg",
        desc: "Indulge in a delightful mix of Asian-style assorted vegetables, offering a burst of flavors and aromas with every bite.",
      },
      {
        nameEnglish: "Paneer Butter Masala (Indian Cheese)",
        nameRussian: "Панеер Баттер Масала (Индийский сыр)",
        nameEstonian: "Paneer Butter Masala (India juust)",
        price: 10.6,
        type: "veg",
        desc: "Savor the rich and creamy curry made with Indian cheese, spices, onions, tomatoes, cashews, and butter for a truly indulgent experience.",
      },
      {
        nameEnglish: "Paneer Makhani (Indian Cheese)",
        nameRussian: "Панеер Махани (Индийский сыр)",
        nameEstonian: "Paneer Makhani (India juust)",
        price: 10.7,
        type: "veg",
        desc: "Enjoy tender Indian cheese cooked in a flavorful sauce made with tomatoes, cashews, spices, and cream for a luxurious dining experience.",
      },
      {
        nameEnglish: "Paneer Lababdar (Indian Cheese)",
        nameRussian: "Панеер Лабабдар (Индийский сыр)",
        nameEstonian: "Paneer Lababdar (India juust)",
        price: 10.7,
        type: "veg",
        desc: "Indulge in Indian cheese cooked in a rich and creamy sauce with onions and tomatoes, offering a perfect balance of flavors and textures.",
      },
      {
        nameEnglish: "Palak Paneer (Spinach)",
        nameRussian: "Палак Панеер (Индийский сыр)",
        nameEstonian: "Palak Paneer (India juust)",
        price: 10.7,
        type: "veg",
        desc: "Savor the creamy spinach sauce with tender Indian cheese, offering a delightful blend of flavors and a nutritious dining option.",
      },
      {
        nameEnglish: "Kadai Paneer (Indian Cheese)",
        nameRussian: "Кадай Панеер (Индийский сыр)",
        nameEstonian: "Kadai Paneer (India juust)",
        price: 10.9,
        type: "veg",
        desc: "Enjoy Indian cheese cooked in a flavorful Kadai sauce, offering a tantalizing blend of spices and aromas for a memorable dining experience.",
      },
    ],
    indian_Main_Course_NonVeg: [
      {
        nameEnglish: "Chicken Tikka Masala",
        nameRussian: "Курица Тикка Масала",
        nameEstonian: "Kana tikka masala",
        price: 12.5,
        type: "non-veg",
        desc: "Indulge in tender tandoori chicken immersed in a spicy tomato-onion sauce, offering a tantalizing fusion of flavors and aromas.",
      },
      {
        nameEnglish: "Butter Chicken",
        nameRussian: "Курица в сливочном соусе",
        nameEstonian: "Võikana",
        price: 12.5,
        type: "non-veg",
        desc: "Savor the richness of tandoori chicken in a creamy butter-cashew tomato sauce, offering a luxurious dining experience.",
      },
      {
        nameEnglish: "Spinach Chicken",
        nameRussian: "Курица со шпинатом",
        nameEstonian: "Spinati kana",
        price: 12.6,
        type: "non-veg",
        desc: "Enjoy tender chicken pieces cooked in a flavorful garlic spinach curry, offering a nutritious and delicious dining option.",
      },
      {
        nameEnglish: "Lamb Masala",
        nameRussian: "Баранина Масала",
        nameEstonian: "Lamba masala",
        price: 13.6,
        type: "non-veg",
        desc: "Savor the succulent lamb cooked in a rich onion-tomato sauce with aromatic Indian spices, offering a delightful culinary experience.",
      },
      {
        nameEnglish: "Lamb Curry",
        nameRussian: "Карри из баранины",
        nameEstonian: "Lamba karri",
        price: 13.6,
        type: "non-veg",
        desc: "Indulge in tender lamb pieces cooked in a flavorful Indian spiced onion-tomato curry, offering a perfect blend of spices and flavors.",
      },
      {
        nameEnglish: "Prawn Masala",
        nameRussian: "Креветки Масала",
        nameEstonian: "Kreveti masala",
        price: 13.7,
        type: "non-veg",
        desc: "Savor the succulent prawns cooked in a rich onion-tomato sauce with aromatic Indian spices, offering a delightful burst of flavors.",
      },
    ],
    oriental_MainCourse_Veg: [
      {
        nameEnglish: "Tofu Hot Garlic Sauce",
        nameRussian: "Тофу в остром чесночном соусе",
        nameEstonian: "Tofu teravas küüslaugukastmes",
        price: 8.0,
        type: "veg",
        desc: "Enjoy tofu and vegetables immersed in a spicy chili-pepper sauce, offering a flavorful and aromatic experience.",
      },
      {
        nameEnglish: "Tofu Black Pepper",
        nameRussian: "Тофу с черным перцем",
        nameEstonian: "Tofu musta pipra kastmes",
        price: 8.0,
        type: "veg",
        desc: "Savor tofu and vegetables in a flavorful chili-pepper sauce with a hint of black pepper, offering a delightful burst of flavors.",
      },
      {
        nameEnglish: "Crispy Eggplant in Hot Garlic Sauce",
        nameRussian: "Хрустящий баклажан в остром чесночном соусе",
        nameEstonian: "Krõbe baklažaan teravas küüslaugukastmes",
        price: 8.2,
        type: "veg",
        desc: "Indulge in crispy eggplant coated in a spicy garlic sauce, offering a perfect blend of crispiness and spice for a delightful dining experience.",
      },
      {
        nameEnglish: "Crispy Honey Eggplant",
        nameRussian: "Хрустящий баклажан с медом",
        nameEstonian: "Krõbe baklažaan mee-seesamiseemne kastmes",
        price: 8.6,
        type: "veg",
        desc: "Savor crispy eggplant and vegetables in a delightful honey-sesame sauce, offering a perfect balance of sweetness and crunchiness.",
      },
      {
        nameEnglish: "Crispy Eggplant Chilli Basil Sauce",
        nameRussian: "Хрустящий баклажан в томатном соусе с базиликом",
        nameEstonian: "Krõbe baklažaan tšilli basiiliku kastmes",
        price: 8.7,
        type: "veg",
        desc: "Indulge in crispy eggplant tossed in a tangy chili basil sauce, offering a perfect balance of flavors and textures for a delightful meal.",
      },
    ],
    chicken_Dishes: [
      {
        nameEnglish: "SWEET AND SOUR CHICKEN",
        nameEstonian:
          "Taignas küpsetatud kana köögiviljadega magushapus kastmes",
        nameRussian: "Жареная курица с овощами в кисло-сладком соусе",
        price: "9.40",
        type: "non veg",
        desc: "A classic dish featuring tender chicken cooked with vegetables in a sweet and tangy sauce.",
      },
      {
        nameEnglish: "ORANGE CHICKEN",
        nameEstonian:
          "Taignas küpsetatud kanatükid apelsinimaitselises kastmes",
        nameRussian:
          "Кусочки курицы, обжаренные в кляре, в соусе со вкусом апельсина",
        price: "9.40",
        type: "non veg",
        desc: "Juicy chicken pieces coated in a rich orange-flavored sauce, delivering a burst of citrusy goodness.",
      },
      {
        nameEnglish: "HONEY CHICKEN",
        nameEstonian: "Taignas küpsetatud kana mee-tšilli kastmes",
        nameRussian: "Жареный цыпленок в медово-чили соусе с кунжутом",
        price: "9.50",
        type: "non veg",
        desc: "Tender chicken cooked in a savory honey-chili sauce, offering a perfect balance of sweet and spicy flavors.",
      },
      {
        nameEnglish: "CHICKEN HOT GARLIC",
        nameEstonian:
          "Tükeldatud kana, sibul ja paprikas vürtsikas küüslaugukastmes",
        nameRussian: "Куриное филе, лук, паприка в остром чесночном соусе",
        price: "9.60",
        type: "non veg",
        desc: "Spicy and aromatic, this dish features diced chicken cooked with onion, paprika, and garlic in a fiery sauce.",
      },
      {
        nameEnglish: "PEKING CHICKEN",
        nameEstonian: "Taignas küpsetatud kanafilee magushapus tšillikastmes",
        nameRussian: "Жареное куриное филе в кисло-сладком соусе чили",
        price: "9.60",
        type: "non veg",
        desc: "A delightful combination of crispy fried chicken filet in a sweet and tangy chili sauce.",
      },
      {
        nameEnglish: "THAI BASIL CHILLI CHICKEN BASIL TRANSLATE",
        nameEstonian:
          "Tükeldatud kana, suvikõrvitsa, paprika, tšillipipra ja India pähklitega",
        nameRussian:
          "Кусочки курицы, нарезанные кубиками, с цуккини, паприкой, перцем чили и орехи кешью",
        price: "9.60",
        type: "non veg",
        desc: "A flavorful Thai-inspired dish with diced chicken, zucchini, paprika, chili, and cashew nuts.",
      },
      {
        nameEnglish: "KUNG PAO CHICKEN",
        nameEstonian:
          "Tükeldatud kana, suvikõrvitsa, paprika, tšillipipra ja India pähklitega",
        nameRussian:
          "Кусочки курицы, нарезанные кубиками, с цуккини, паприкой, перцем чили и орехи кешью",
        price: "9.60",
        type: "non veg",
        desc: "A spicy and savory dish featuring diced chicken tossed with zucchini, paprika, chili, and cashew nuts.",
      },
      {
        nameEnglish: "HOISIN CHICKEN",
        nameEstonian:
          "Нежные ломтики курицы с луком, фасолью и побегами бамбука в соусе барбекю с чесноком",
        nameRussian:
          "Kanakuubikud sibula, ubade ja bambusevõrsetega küüslauguga maitsestatud barbeque kastmes",
        price: "9.60",
        type: "non veg",
        desc: "Tender chicken cubes cooked in a flavorful barbecue sauce with onions, beans, and bamboo shoots.",
      },
      {
        nameEnglish: "CHICKEN SZECHUAN",
        nameEstonian:
          "Tükeldatud kana sibula, paprika ja selleriga vürtsikas Szechuani pipra kastmes",
        nameRussian:
          "Нарезанная кубиками курица, приготовленная с луком, паприкой и сельдереем в остром соусе, соус сычуаньский, перец",
        price: "9.65",
        type: "non veg",
        desc: "Spicy and aromatic, this Szechuan-style chicken dish features diced chicken cooked with onion, paprika, and celery.",
      },
      {
        nameEnglish: "SINGAPOORI CHICKEN",
        price: "9.60",
        type: "non veg",
        desc: "", // Insert a desc here if available
      },
      {
        nameEnglish: "THAI RED CURRY CHICKEN",
        nameEstonian:
          "Tai kookosemaitseline punane karri köögiviljade ja kanaga",
        nameRussian:
          "Тайское красное карри со вкусом кокоса с овощами и курицей",
        price: "10.60",
        type: "non veg",
        desc: "Tender chicken cooked in a rich and creamy Thai red curry sauce with vegetables.",
      },
      {
        nameEnglish: "THAI GREEN CURRY CHICKEN",
        nameEstonian:
          "Tai kookosemaitseline punane karri köögiviljade ja kanaga",
        nameRussian:
          "Тайское красное карри со вкусом кокоса с овощами и курицей",
        price: "10.60",
        type: "non veg",
        desc: "Aromatic and flavorful, this Thai green curry chicken dish features tender chicken cooked in a fragrant coconut milk sauce.",
      },
    ],
    pork_Dishes: [
      {
        nameEnglish: "SWEET AND SOUR PORK",
        nameEstonian:
          "Taignas praetud sealihatükid ananassi, porgandi ja sibulaga magushapus kastmes",
        nameRussian:
          "В тесте обжаренные кусочки свинины с ананасами, морковью и луком в кисло-сладком соусе",
        price: "10.10",
        type: "non veg",
        desc: "Tender pieces of pork cooked in a sweet and tangy sauce with pineapple, carrot, and onion.",
      },
      {
        nameEnglish: "PORK IN HOT GARLIC SAUCE",
        nameEstonian:
          "Sealihaviilud sibula ja ubadega teravas küüslaugukastmes",
        nameRussian:
          "Ломтики свинины с луком и фасолью в остром чесночном соусе",
        price: "10.25",
        type: "non veg",
        desc: "Slices of pork cooked with onion and beans in a spicy garlic sauce.",
      },
      {
        nameEnglish: "PORK WITH MUSHROOMS & BAMBOO SHOOTS",
        nameEstonian: "Sealihaviilud seente ja bambusevõrsetega sojakastmes",
        nameRussian:
          "Ломтики свинины с грибами и побегами бамбука в соевом соусе",
        price: "10.50",
        type: "non veg",
        desc: "Tender slices of pork cooked with mushrooms and bamboo shoots in a savory soy sauce.",
      },
      {
        nameEnglish: "HOISIN PORK",
        nameEstonian:
          "Sealiha viilud sibula, ubade ja bambusevõrsetega küüslauguga maitsestatud barbeque kastmes",
        nameRussian:
          "Ломтики свинины с луком, фасолью и побегами бамбука в соусе барбекю с чесноком",
        price: "10.60",
        type: "non veg",
        desc: "Juicy pork slices cooked in a flavorful barbecue sauce with onions, beans, and bamboo shoots.",
      },
      {
        nameEnglish: "UN-LAU PORK",
        nameEstonian:
          "Sealihaviilud marineeritud kurgi, porgandi, bambusevõrsere, ananassi ja sibulaga spetsiaalses kastmes",
        nameRussian:
          "Ломтики свинины с маринованным бамбука, ананасом и луком в огурцом, морковью, побегами нашем специальном соусе",
        price: "10.60",
        type: "non veg",
        desc: "Tender slices of pork marinated in a special sauce with cucumber, carrot, bamboo shoots, pineapple, and onion.",
      },
      {
        nameEnglish: "SZECHUAN-STYLE PORK",
        nameEstonian:
          "Sealiha viilud sibula, ubade ja selleriga vürtsikas Szechuani kastmes",
        nameRussian:
          "Ломтики свинины с луком, фасолью и сельдереем в густом остром соусе",
        price: "10.80",
        type: "non veg",
        desc: "Slices of pork cooked with onion, beans, and celery in a spicy Szechuan sauce.",
      },
      {
        nameEnglish: "Crispy pork with capsicum and garlic",
        nameEstonian: "Krõbedad sealihafilee ribad paprika ja küüslauguga",
        nameRussian: "Хрустящая свинина с паприкой и чесноком",
        price: "11.00",
        type: "non veg",
        desc: "Crispy pork strips cooked with bell peppers and garlic for a flavorful dish.",
      },
      {
        nameEnglish: "PORK RED CURRY",
        nameEstonian:
          "Tai kookosemaitseline punane karri sealiha ja köögiviljadega",
        nameRussian: "Тайское кокосовое красное карри со свининой и овощами",
        price: "12.20",
        type: "non veg",
        desc: "Tender pork cooked in a fragrant Thai red curry sauce with vegetables.",
      },
      {
        nameEnglish: "PORK GREEN CURRY",
        nameEstonian:
          "Tai kookosemaitseline roheline karri sealiha ja köögiviljadega",
        nameRussian: "Тайское кокосовое красное карри со свининой и овощами",
        price: "12.20",
        type: "non veg",
        desc: "Aromatic and flavorful, this Thai green curry pork dish features tender pork cooked in a fragrant coconut milk sauce with vegetables.",
      },
    ],
    lamb_Dishes: [
      {
        nameEnglish: "HOISIN LAMB WITH BROCCOLI",
        nameEstonian:
          "Lambaliha viilud sibula, brokoli ja bambusevõrsetega barbeque kastmes.",
        nameRussian:
          "Ломтики баранины с луком, брокколи и побегами бамбука в соусе барбекю.",
        price: "10.0",
        type: "non veg",
        desc: "Tender slices of lamb cooked with onion, broccoli, and bamboo shoots in a savory barbecue sauce.",
      },
      {
        nameEnglish: "LAMB IN HOT GARLIC SAUCE",
        nameEstonian:
          "Lambaliha viilud ubade ja sibulaga teravas küüslaugukastmes.",
        nameRussian:
          "Ломтики баранины с фасолью и луком в остром чесночном соусе.",
        price: "10.50",
        type: "non veg",
        desc: "Slices of lamb cooked with beans and onion in a spicy garlic sauce.",
      },
      {
        nameEnglish: "UN-LAU LAMB",
        nameEstonian:
          "Lambaliha viilud marineeritud kurgi, porgandi, bambusevõrsete, ananassi ja sibulaga.",
        nameRussian:
          "Ломтики баранины с маринованным огурцом, морковью, побегами бамбука, ананасом и луком.",
        price: "10.55",
        type: "non veg",
        desc: "Slices of lamb marinated with cucumber, carrot, bamboo shoots, pineapple, and onion.",
      },
      {
        nameEnglish: "LAMB BLACK PEPPER SAUCE",
        nameEstonian:
          "Lambaliha viilud sibula, seente, bambusevõrsete, musta pipra ja tšilliga.",
        nameRussian:
          "Ломтики баранины с луком, грибами, побегами бамбука, чёрным перцем и чили.",
        price: "10.60",
        type: "non veg",
        desc: "Slices of lamb cooked with onion, mushrooms, bamboo shoots, black pepper, and chili.",
      },
      {
        nameEnglish: "LAMB WITH MUSHROOMS AND BAMBOO SHOOTS",
        nameEstonian:
          "Lambaliha viilud bambusevõrsete ja seentega soja-küüslaugukastmes.",
        nameRussian:
          "Ломтики баранины с побегами бамбука и грибами в густом соево- чесночном соусе.",
        price: "10.60",
        type: "non veg",
        desc: "Slices of lamb cooked with bamboo shoots and mushrooms in a rich soy-garlic sauce.",
      },
      {
        nameEnglish: "SZECHUAN LAMB",
        nameEstonian:
          "Vinnutatud lambaliha, sibul, seller ja paprikas vürtsikas szechuani pipra kastmes.",
        nameRussian:
          "Кусочки баранины, лук, сельдерей, паприка в остром сычуаньском соусе с перцем.",
        price: "10.60",
        type: "non veg",
        desc: "Shredded lamb cooked with onion, celery, bell pepper in a spicy Szechuan pepper sauce.",
      },
    ],
    beef_Dishes: [
      {
        nameEnglish: "UN-LAU BEEF",
        nameEstonian:
          "Loomaliha viilud marineeritud kurgi, porgandi, bambusevõrsete, ananassi ja sibulaga.",
        nameRussian:
          "Ломтики говядины с маринованным огурцом, морковью, побегами бамбука, ананасом и луком.",
        price: "10.50",
        type: "non veg",
        desc: "Slices of beef marinated with cucumber, carrot, bamboo shoots, pineapple, and onion.",
      },
      {
        nameEnglish: "BEEF IN HOT GARLIC SAUCE",
        nameEstonian:
          "Loomaliha viilud teravas küüslaugukastmes sibula ja ubadega.",
        nameRussian:
          "Ломтики говядины в остром чесночном соусе с луком и фасолью.",
        price: "10.60",
        type: "non veg",
        desc: "Slices of beef cooked in a spicy garlic sauce with onion and beans.",
      },
      {
        nameEnglish: "BEEF WITH MUSHROOMS AND BAMBOO SHOOTS",
        nameEstonian:
          "Loomaliha lõigud seente ja bambusevõrsetega küüslaugu-ingveri kastmes.",
        nameRussian:
          "Ломтики говядины с грибами,побегами бамбука и чесноком в имбирном соусе.",
        price: "10.80",
        type: "non veg",
        desc: "Slices of beef with mushrooms, bamboo shoots in a garlic-ginger sauce.",
      },
      {
        nameEnglish: "BEEF SZECHUAN",
        nameEstonian:
          "Loomaliha viilud ubade, sibula, selleri ja pipraga vürtsikas Szechuani kastmes.",
        nameRussian:
          "Ломтики говядины с фасолью, луком, сельдереем и перцем в остром соусе.",
        price: "10.90",
        type: "non veg",
        desc: "Slices of beef with beans, onion, celery, and pepper in a spicy Szechuan sauce.",
      },
      {
        nameEnglish: "Crispy beef with capsicum and garlic",
        nameEstonian: "Krõbedad kanafilee ribad paprika ja küüslauguga.",
        nameRussian: "Хрустящие полоски говядины с паприкой и чесноком.",
        price: "13.00",
        type: "non veg",
        desc: "Crispy beef strips with capsicum and garlic.",
      },
      {
        nameEnglish: "BEEF GREEN CURRY TRANSLATED",
        nameEstonian:
          "Tai kookosmaitseline роhеlіnе kаrrі vеіsеlіhа ја köögіvіljаdеgа.",
        nameRussian: "Тауское зеленое кокосовое карри с говядиной и овощами.",
        price: "13.00",
        type: "non veg",
        desc: "Thai coconut flavored green curry with beef and vegetables.",
      },
      {
        nameEnglish: "BEEF RED CURRY",
        nameEstonian:
          "Tai kookosmaitseline punane karri veiseliha ja köögiviljadega.",
        nameRussian: "Тайское красное кокосовое карри с говядиной и овощами.",
        price: "13.20",
        type: "non veg",
        desc: "Thai coconut flavored red curry with beef and vegetables.",
      },
    ],
    sea_food_Dishes: [
      {
        nameEnglish: "SWEET AND SOUR FISH",
        nameEstonian: "Friteeritud kala ja köögiviljad magushapus kastmes",
        nameRussian: "Жареная рыба с овощами в кисло-сладком соусе",
        price: "9.20",
        type: "non veg",
        desc: "Fried fish and vegetables in sweet and sour sauce.",
      },
      {
        nameEnglish: "SWEET CHILLI FISH",
        nameEstonian: "Friteeritud kala magushapus tšillikastmes",
        nameRussian: "Хрустящая жареная рыба в сладком соусе чили",
        price: "9.30",
        type: "non veg",
        desc: "Fried fish in sweet chili sauce.",
      },
      {
        nameEnglish: "SWEET AND SOUR PRAWN",
        nameEstonian:
          "Taignas krevetid, sibul ja paprika pipra-küüslaugu kastmes.",
        nameRussian: "Жареная рыба, лук, паприка в перечно-чесночном соусе.",
        price: "11.60",
        type: "non veg",
        desc: "Batter-fried prawns with onion and paprika in pepper-garlic sauce.",
      },
      {
        nameEnglish: "PRAWN IN HOT GARLIC SAUCE",
        nameEstonian: "Krevetid teravas küüslaugukastmes sibula ja ubadega.",
        nameRussian:
          "Креветки говядины в остром чесночном соусе с луком и фасолью.",
        price: "12.60",
        type: "non veg",
        desc: "Prawns in hot garlic sauce with onion and beans.",
      },
      {
        nameEnglish: "PRAWN SZECHUAN",
        nameEstonian:
          "Krevetid, sibul, paprika ja seller vürtalge Szechuan pipra kastmes.",
        nameRussian:
          "Креветки, лук, паприка и сельдерей в соусе из сычуаньского перца.",
        price: "12.90",
        type: "non veg",
        desc: "Prawns with onion, paprika, and celery in spicy Szechuan pepper sauce.",
      },
      {
        nameEnglish: "THAI GREEN CURRY PRAWN",
        nameEstonian:
          "Tai kookosemaitseline roheline karri köögiviljade ja krevettidega.",
        nameRussian: "Тайское зеленое кокосовое карри с овощами креветками.",
        price: "13.40",
        type: "non veg",
        desc: "Thai coconut flavored green curry with vegetables and prawns.",
      },
      {
        nameEnglish: "THAI RED CURRY PRAWN",
        nameEstonian:
          "Tai kookosemaitseline punane karri köögiviljade ja  krevettidega.",
        nameRussian: "Тайское красное кокосовое карри с овощами креветками.",
        price: "13.60",
        type: "non veg",
        desc: "Thai coconut flavored red curry with vegetables and prawns.",
      },
    ],
    squid_Dishes: [
      {
        nameEnglish: "Chinese salt and pepper squid",
        nameEstonian: "Hiina soola ja pipra kalmaar",
        nameRussian: "китайский кальмар с солью и перцем",
        price: "10.40",
        type: "non veg",
        desc: "Chinese-style salt and pepper squid.",
      },
      {
        nameEnglish: "Squid in honey sauce",
        nameEstonian: "Kalmaar meekastmes",
        nameRussian: "кальмары в медовом соусе",
        price: "10.50",
        type: "non veg",
        desc: "Squid cooked in honey sauce.",
      },
      {
        nameEnglish: "Stir fry squid with oyster sauce",
        nameEstonian: "Praetud kalmaar austrikastmega",
        nameRussian: "Жареные кальмары с устричным соусом",
        price: "10.60",
        type: "non veg",
        desc: "Stir-fried squid with oyster sauce.",
      },
      {
        nameEnglish: "Squid with capsicum and celery in garlic sauce",
        nameEstonian: "Kalmaar paprika ja selleriga küüslaugukastmes",
        nameRussian: "Кальмары с паприкой и сельдереем в чесночном соусе",
        price: "10.60",
        type: "non veg",
        desc: "Squid with capsicum and celery in garlic sauce.",
      },
    ],
    duck_Dishes: [
      {
        nameEnglish: "Crispy fried duck in sweet and sour sauce",
        nameEstonian:
          "Taignas küpsetatud part praetud köögiviljadega magushapus kastmes",
        nameRussian: "Жареная утка овощами в кисло-сладком соусе",
        price: "12.50",
        type: "non veg",
        desc: "Crispy fried duck served with vegetables in sweet and sour sauce.",
      },
      {
        nameEnglish: "Crispy duck with pineapple in orange sauce",
        nameEstonian: "Krõbedaks praetud part ananassiga apelsinikastmes",
        nameRussian: "Хрустящая утка с ананасами в апельсиновом соусе",
        price: "12.60",
        type: "non veg",
        desc: "Crispy duck served with pineapple in orange sauce.",
      },
      {
        nameEnglish: "Crispy duck with honey and pineapple",
        nameEstonian: "Krõbedaks praetud part mee ja ananassiga",
        nameRussian: "Хрустящая утка с медом и ананасами",
        price: "12.60",
        type: "non veg",
        desc: "Crispy duck served with honey and pineapple.",
      },
      {
        nameEnglish: "Crispy fried duck in hot garlic sauce",
        nameEstonian: "Krõbedaks praetud part teravas küüslaugukastmes",
        nameRussian: "Хрустящая утка в чесночном соусе",
        price: "12.70",
        type: "non veg",
        desc: "Crispy fried duck served in hot garlic sauce.",
      },
      {
        nameEnglish: "Crispy fried duck in hoisin sauce",
        nameEstonian:
          "Kanakuubikud sibula, ubade ja bambusevõrsetega küüslauguga maitsestatud barbeque kastmes",
        nameRussian:
          "Утка ломтики курицы с луком, фасолью и побегами бамбука в соусе барбекю с чесноком",
        price: "12.70",
        type: "non veg",
        desc: "Crispy fried duck served in hoisin sauce with onion, beans, and bamboo shoots.",
      },
    ],
    tandoori_Bread: [
      {
        nameEnglish: "Plain Naan",
        nameEstonian: "Tavaline Naan",
        nameRussian: "Простой наан",
        price: "2.30",
        type: "veg",
        desc: "Traditional Indian bread baked in a tandoor oven.",
      },
      {
        nameEnglish: "Butter Naan",
        nameEstonian: "Või Naan",
        nameRussian: "Масло наан",
        price: "2.50",
        type: "veg",
        desc: "Naan bread brushed with butter for a rich flavor.",
      },
      {
        nameEnglish: "Garlic Naan",
        nameEstonian: "Küüslaugu Naan",
        nameRussian: "Чесночный наан",
        price: "3.00",
        type: "veg",
        desc: "Naan bread infused with garlic, adding a savory taste.",
      },
      {
        nameEnglish: "Paneer Naan (Indian cheese)",
        nameEstonian: "India juustu Naan",
        nameRussian: "Творожный наан",
        price: "3.50",
        type: "veg",
        desc: "Naan bread stuffed with Indian cottage cheese (paneer).",
      },
      {
        nameEnglish: "Cheese Naan",
        nameEstonian: "Juustu Naan",
        nameRussian: "Сыр HaaH",
        price: "4.00",
        type: "veg",
        desc: "Naan bread filled with cheese, offering a gooey texture.",
      },
      {
        nameEnglish: "Cheese and Bacon Naan",
        nameEstonian: "Juustu ja peekoni Naan",
        nameRussian:
          "Juustolla ja pekonilla täytetty litteä leipä, кypsennetty tandooriuunissa",
        price: "4.20",
        type: "non veg",
        desc: "White flatbread filled with cheese and bacon, baked in a tandoor oven.",
      },
      {
        nameEnglish: "Cheese and Garlic Naan",
        nameEstonian: "Juustu ja küüslaugu Naan",
        nameRussian:
          "Валкосипули-juustolla täytetty litteä leipä, кypsennetty tandooriuunissa",
        price: "4.50",
        type: "veg",
        desc: "White flatbread filled with cheese and garlic, baked in a tandoor oven.",
      },
    ],
    rice_And_Noodle: [
      {
        nameEnglish: "Steamed Rice",
        nameEstonian: "Aurutatud riis",
        nameRussian: "Пареный рис",
        price: 2.8,
        type: "veg",
        desc: "A simple yet satisfying side dish, steamed rice pairs well with a variety of main courses.",
      },
      {
        nameEnglish: "Veg Hakka Noodle",
        nameEstonian: "Hakka nuudlid juurviljadega",
        nameRussian: "Хакка лапша с овощами",
        price: 5.0,
        type: "veg",
        desc: "Delicious Hakka noodles stir-fried with fresh vegetables, offering a burst of flavors in every bite.",
      },
      {
        nameEnglish: "Chicken Hakka Noodle",
        nameEstonian: "Hakka nuudlid kanaga",
        nameRussian: "Хакка лапша с курицей",
        price: 5.8,
        type: "non veg",
        desc: "Savor the taste of tender chicken combined with savory Hakka noodles, a delightful treat for the taste buds.",
      },
      {
        nameEnglish: "Prawn Hakka Noodle",
        nameEstonian: "Hakka nuudlid krevettidega",
        nameRussian: "Хакка лапша с креветками",
        price: 6.3,
        type: "non veg",
        desc: "Indulge in the richness of succulent prawns mingled with flavorful Hakka noodles, a seafood lover's delight.",
      },
      {
        nameEnglish: "Mixed Hakka Noodle",
        nameEstonian: "Hakka nuudlid erineva lihaga",
        nameRussian: "Хакка лапша с разным мясом",
        price: 6.8,
        type: "non veg",
        desc: "Enjoy a delightful blend of flavors with mixed Hakka noodles, featuring a combination of chicken, prawns, and more.",
      },
      {
        nameEnglish: "Rice with Vegetables",
        nameEstonian: "Riis köögiviljadega",
        nameRussian: "Жареный рис с овощами",
        price: 5.2,
        type: "veg",
        desc: "Satisfy your hunger with a hearty portion of rice stir-fried with a colorful assortment of fresh vegetables.",
      },
      {
        nameEnglish: "Chicken Rice",
        nameEstonian: "Riis kanaga",
        nameRussian: "Жареный рис с курицей",
        price: 5.7,
        type: "non veg",
        desc: "Tender pieces of chicken served with fragrant rice, creating a fulfilling and flavorful meal.",
      },
      {
        nameEnglish: "Prawn Rice",
        nameEstonian: "Riis krevettidega",
        nameRussian: "Жареный рис с креветками",
        price: 6.0,
        type: "non veg",
        desc: "Indulge in the exquisite taste of prawns combined with perfectly cooked rice, a seafood lover's delight.",
      },
      {
        nameEnglish: "Mixed Rice",
        nameEstonian: "Riis erineva lihaga",
        nameRussian: "Жареный рис с разным мясом",
        price: 6.2,
        type: "non veg",
        desc: "Experience the best of both worlds with mixed rice, featuring a tantalizing combination of meats and flavors.",
      },
      {
        nameEnglish: "Rice Noodle with Vegetable",
        nameEstonian: "Riisinuudlid kanaga",
        nameRussian: "рисовая лапша с овощами",
        price: 5.4,
        type: "veg",
        desc: "Savor the delicate flavors of rice noodles stir-fried with fresh vegetables, creating a light yet satisfying meal.",
      },
      {
        nameEnglish: "Chicken Rice Noodle",
        nameEstonian: "Riisinuudlid kanaga",
        nameRussian: "рисовая лапша с курицей",
        price: 5.8,
        type: "non veg",
        desc: "Enjoy the perfect blend of tender chicken and soft rice noodles, seasoned to perfection for a delightful dining experience.",
      },
      {
        nameEnglish: "Prawn Rice Noodle",
        nameEstonian: "Riisinuudlid krevettidega",
        nameRussian: "рисовая лапша с креветками",
        price: 6.0,
        type: "non veg",
        desc: "Treat yourself to the succulent taste of prawns paired with soft rice noodles, a dish that delights the senses.",
      },
      {
        nameEnglish: "Mixed Rice Noodle",
        nameEstonian: "Riisinuudlid erineva lihaga",
        nameRussian: "рисовая лапша с разным мясом",
        price: 6.8,
        type: "non veg",
        desc: "Indulge in the richness of mixed rice noodles, featuring a delightful combination of meats and flavors in every bite.",
      },
      {
        nameEnglish: "Chilli Garlic Noodle Chicken",
        nameEstonian: "Teravad nuudlid küüslauguga kanaga",
        nameRussian: "Остро чесночная лапша с курицей",
        price: 6.3,
        type: "non veg",
        desc: "Experience the bold flavors of chili and garlic combined with tender chicken and savory noodles, a true culinary delight.",
      },
      {
        nameEnglish: "Chilli Garlic Noodle Mix",
        nameEstonian: "Teravad nuudlid küüslauguga erineva lihaga",
        nameRussian: "Остро чесночная лапша с разным мясом",
        price: 6.8,
        type: "non veg",
        desc: "Savor the fiery taste of chili and garlic with mixed noodles, offering a perfect blend of flavors in every mouthful.",
      },
      {
        nameEnglish: "Chicken Chilli Garlic Rice",
        nameEstonian: "Terav riis küüslaugu ja tšilliga kanaga",
        nameRussian: "Жареный рис с чили и чесноком курицей",
        price: 6.5,
        type: "non veg",
        desc: "Indulge in the bold flavors of chili and garlic infused with tender chicken and aromatic rice, a dish that packs a punch.",
      },
      {
        nameEnglish: "Mixed Chilli Garlic Rice",
        nameEstonian: "Terav riis küüslaugu ja tšilliga erineva lihaga",
        nameRussian: "Жареный рис с чили и чесноком разным мясом",
        price: 6.7,
        type: "non veg",
        desc: "Enjoy the spicy kick of chili and garlic with mixed rice, featuring a tantalizing combination of meats and flavors.",
      },
      {
        nameEnglish: "Pad Thai Vegetable",
        nameEstonian: "PAD THAI VEGETABLE",
        nameRussian:
          "Тайская жареная рисовая лапша с яйцом, арахисом и овощами в кисло-сладком соусе Пад Тай",
        price: 6.8,
        type: "veg",
        desc: "Indulge in the authentic flavors of Thailand with Pad Thai vegetable noodles, featuring a delightful mix of eggs, peanuts, and vegetables.",
      },
      {
        nameEnglish: "Singapore Noodle Chicken",
        nameEstonian: "Singapuri stiilis riisinuudlid kanaga",
        nameRussian: "В сингапурском стиле рисовая лапша с курицей",
        price: 6.8,
        type: "non veg",
        desc: "Transport yourself to the streets of Singapore with this flavorful noodle dish featuring tender chicken and fragrant spices.",
      },
      {
        nameEnglish: "Singapore Noodle Shrimp",
        nameEstonian: "Singapuri stiilis riisinuudlid krevettidega",
        nameRussian: "В сингапурском стиле рисовая лапша с креветками",
        price: 6.8,
        type: "non veg",
        desc: "Embark on a culinary journey with Singapore-style noodles infused with succulent shrimp and aromatic flavors.",
      },
      {
        nameEnglish: "Chilli Garlic Rice Noodle Chicken",
        nameEstonian: "Riisinuudlid küüslaugu ja tšilliga kanaga",
        nameRussian:
          "рисовая лапша с овощами, яйцом, чили и чесноком и курицей",
        price: 7.0,
        type: "non veg",
        desc: "Satisfy your cravings with this spicy dish featuring rice noodles stir-fried with chili, garlic, and tender chicken.",
      },
      {
        nameEnglish: "Chilli Garlic Rice Noodle Prawn",
        nameEstonian: "Riisinuudlid küüslaugu ja tšilliga krevettidega",
        nameRussian:
          "рисовая лапша с овощами, яйцом, чили и чесноком и креветками",
        price: 7.7,
        type: "non veg",
        desc: "Delight your taste buds with this flavorful dish featuring rice noodles infused with the bold flavors of chili, garlic, and succulent prawns.",
      },
      {
        nameEnglish: "Thai Chilli and Basil Rice Chicken",
        nameEstonian: "Taipärane riis tilli basiiliku ja kanaga",
        nameRussian: "В тайском стиле рис с чили и базиликом с курицей",
        price: 6.8,
        type: "non veg",
        desc: "Transport your palate to Thailand with this fragrant rice dish featuring aromatic basil, spicy chili, and tender chicken.",
      },
      {
        nameEnglish: "Thai Chilli and Basil Rice Prawn",
        nameEstonian: "Taipärane riis tilli basiiliku ja krevettidega",
        nameRussian: "В тайском стиле рис с чили и базиликом с креветками",
        price: 7.2,
        type: "non veg",
        desc: "Indulge in the exotic flavors of Thailand with this aromatic rice dish featuring spicy chili, fragrant basil, and succulent prawns.",
      },
      {
        nameEnglish: "Pad Thai Chicken",
        nameEstonian: "PAD THAI CHICKEN",
        nameRussian:
          "Тайская жареная рисовая лапша с яйцом, овощами, арахисом и курицей в кисло-сладком соусе Пад Тай",
        price: 7.5,
        type: "non veg",
        desc: "Experience the bold and tangy flavors of Thailand with Pad Thai chicken noodles, a perfect blend of sweet, sour, and savory.",
      },
      {
        nameEnglish: "Pad Thai Prawn",
        nameEstonian: "PAD THAI PRAWN",
        nameRussian:
          "Тайская жареная рисовая лапша с яйцом, овощами, арахисом и креветками в кисло-сладком соусе Пад Тай",
        price: 8.2,
        type: "non veg",
        desc: "Satisfy your cravings for Thai cuisine with Pad Thai prawn noodles, featuring succulent prawns and a burst of exotic flavors.",
      },
    ],
    child_Menu: [
      {
        nameEnglish: "French Fries",
        nameEstonian: "Friikartulid",
        nameRussian: "ири картошка",
        price: 4.5,
        type: "veg",
        desc: "Classic French fries, crispy and delicious.",
      },
      {
        nameEnglish: "French Fries with Sausages",
        nameEstonian: "Friikartulid viineritega",
        nameRussian: "ири картошка с сосисками",
        price: 4.6,
        type: "non-veg",
        desc: "French fries served with tasty sausages.",
      },
      {
        nameEnglish: "Ham Cheese Roll",
        nameEstonian: "Laste kevadrullid singi ja juustuga",
        nameRussian: "Детские рулеты с ветчиной и сыром",
        price: 5.2,
        type: "non-veg",
        desc: "Delicious rolls filled with ham and cheese.",
      },
      {
        nameEnglish: "Rice / Noodle with egg and sausage",
        nameEstonian: "Riis / Nuudid muna ja viineritega",
        nameRussian: "Лапша / рис с яйцом и сосисками",
        price: 5.5,
        type: "non-veg",
        desc: "Savory rice or noodles served with egg and sausage.",
      },
      {
        nameEnglish: "Egg Cheese Roll",
        nameEstonian: "Laste kevadrullid muna ja juustuga",
        nameRussian: "детские рулеты с яйцом и сыром",
        price: 5.7,
        type: "veg",
        desc: "Tasty rolls filled with egg and cheese, perfect for kids.",
      },
      {
        nameEnglish: "Noodle with egg and honey chicken",
        nameEstonian: "Nuudlid muna ja kanatiibadega",
        nameRussian: "Лапша / рис с яйцом и куриными крылышками",
        price: 6.0,
        type: "non-veg",
        desc: "Noodles served with egg and honey-glazed chicken wings.",
      },
    ],
    tea_And_Coffee: [
      {
        nameEnglish: "JADE JASMINE PEARLS",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "Delicate green tea pearls infused with jasmine flavor.",
      },
      {
        nameEnglish: "YUNNAN FOP",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "A bold and rich black tea from the Yunnan province of China.",
      },
      {
        nameEnglish: "JAPANESE SEMCHA SANSYU",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "A high-quality green tea from Japan, known for its fresh and grassy flavor.",
      },
      {
        nameEnglish: "GRÖN FRISK & HET",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "A refreshing blend of green tea with a hint of spice.",
      },
      {
        nameEnglish: "APELSINI MIX",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "A citrusy tea blend with orange flavor.",
      },
      {
        nameEnglish: "KISS ME KATE",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "A romantic blend of floral and fruity notes.",
      },
      {
        nameEnglish: "HIBINKU FRUITS",
        price: { cup: 2.0, pot: 4.5 },
        type: "tea",
        desc: "An exotic fruit-infused tea with a hint of hibiscus.",
      },
      {
        nameEnglish: "COCOA",
        price: 3.2,
        type: "coffee",
        desc: "Rich and creamy hot cocoa, perfect for chocolate lovers.",
      },
      {
        nameEnglish: "Espresso",
        price: 2.5,
        type: "coffee",
        desc: "A strong and intense shot of espresso.",
      },
      {
        nameEnglish: "Suur Espresso",
        price: 3.5,
        type: "coffee",
        desc: "A larger serving of espresso for those who need an extra kick.",
      },
      {
        nameEnglish: "Coffee (must või piimaga)",
        price: 2.5,
        type: "coffee",
        desc: "Classic coffee served black or with milk.",
      },
      {
        nameEnglish: "Suur coffee (must või piimaga)",
        price: 3.2,
        type: "coffee",
        desc: "A larger serving of classic coffee, black or with milk.",
      },
      {
        nameEnglish: "Cappuccino",
        price: 3.5,
        type: "coffee",
        desc: "Espresso topped with frothed milk, perfect for coffee connoisseurs.",
      },
      {
        nameEnglish: "Cafe Latte",
        price: 3.5,
        type: "coffee",
        desc: "Creamy and smooth coffee with steamed milk, a comforting choice.",
      },
    ],
    drinks: [
      {
        nameEnglish: "Neptunas (gaasita, gaasiga) 0, 330ml",
        price: 2.3,
        type: "water",
        volume: "330ml",
        desc: "Refreshing Neptune water available in both still and sparkling variants.",
      },
      {
        nameEnglish: "Neptunas (gaasita, gaasiga) 0, 750ml",
        price: 4.0,
        type: "water",
        volume: "750ml",
        desc: "Larger bottle of Neptune water, perfect for sharing or for those who need more hydration.",
      },
      {
        nameEnglish: "Aura-vesi (gaasita, gaasiga, sidruni, pohla) 0, 500ml",
        price: 2.5,
        type: "water",
        volume: "500ml",
        desc: "Aura water with various flavor options including lemon and cranberry, available in still and sparkling.",
      },
      {
        nameEnglish: "Coca Cola 0, 330ml",
        price: 2.5,
        type: "soda",
        volume: "330ml",
        desc: "Classic Coca Cola, the perfect fizzy drink to accompany your meal.",
      },
      {
        nameEnglish: "Coca Cola Zero 0, 330ml",
        price: 2.5,
        type: "soda",
        volume: "330ml",
        desc: "Sugar-free Coca Cola for those who prefer a lighter option.",
      },
      {
        nameEnglish: "Sprite 0, 330ml",
        price: 2.5,
        type: "soda",
        volume: "330ml",
        desc: "Refreshing lemon-lime Sprite, a great thirst-quencher.",
      },
      {
        nameEnglish: "Fanta 0, 330ml",
        price: 2.5,
        type: "soda",
        volume: "330ml",
        desc: "Fruity and vibrant Fanta, perfect for fans of orange soda.",
      },
      {
        nameEnglish: "Energija jook burn 0, 330ml",
        price: 3.0,
        type: "energy drink",
        volume: "330ml",
        desc: "Boost your energy with Burn, a popular energy drink.",
      },
      {
        nameEnglish: "Fuze Tea virsik, sidruni 0, 500ml",
        price: 3.0,
        type: "tea",
        flavor: ["peach", "lemon"],
        volume: "500ml",
        desc: "Delicious Fuze Tea infused with peach and lemon flavors, a refreshing choice.",
      },
      {
        nameEnglish: "Imperial kvass(kali) 0, 400ml",
        price: 3.5,
        type: "soft drink",
        volume: "400ml",
        desc: "Traditional Russian kvass, a fermented beverage made from rye bread.",
      },
      {
        nameEnglish: "LIMONAAD TRADITSIOONILINE O.330L",
        price: 3.3,
        type: "soft drink",
        volume: "330ml",
        desc: "Traditional lemonade, a classic and timeless drink loved by all.",
      },
      {
        nameEnglish: "A.LECoq CLASSIC KVASS 0.5L",
        price: 3.2,
        type: "soft drink",
        volume: "500ml",
        desc: "Classic A. Le Coq kvass, a refreshing beverage with a distinctive taste.",
      },
    ],
    beers: [
      {
        nameEnglish: "KINGFISHER PREMIUM BEER",
        desc: "Indian Beer",
        volume: "0.330L",
        alcoholPercentage: "4.8% VOL",
        price: 4.5,
      },
      {
        nameEnglish: "SINGHA LAGER BEER",
        desc: "Thailand Beer",
        volume: "0.330L",
        alcoholPercentage: "5.0% VOL",
        price: 4.5,
      },
      {
        nameEnglish: "TSINGTAO BEER",
        desc: "Chinese Beer",
        volume: "0.330L",
        alcoholPercentage: "4.7% VOL",
        price: 4.5,
      },
      {
        nameEnglish: "A.LECoq premium",
        volume: "0.5L",
        alcoholPercentage: "4.7% VOL",
        price: 4.3,
      },
      {
        nameEnglish: "CORONA EXTRA",
        volume: "0.330L",
        alcoholPercentage: "4.5% VOL",
        price: 4.3,
      },
      {
        nameEnglish: "TÖMMU HOOD DARK",
        volume: "0.5L",
        alcoholPercentage: "4.7% VOL",
        price: 4.2,
      },
      {
        nameEnglish: "IMPERIAL GOLD",
        volume: "0.4L",
        alcoholPercentage: "4.8% VOL",
        price: 4.3,
      },
      {
        nameEnglish: "A.LECoq SPECIAL",
        volume: "0.5L",
        alcoholPercentage: "5.2% VOL",
        price: 4.2,
      },
      {
        nameEnglish: "WARSTEINER PREMIUM VERUM",
        volume: "0.5L",
        alcoholPercentage: "4.8% VOL",
        price: 4.3,
      },
      {
        nameEnglish: "ALEXANDER",
        volume: "0.5L",
        alcoholPercentage: "5.2% VOL",
        price: 4.2,
      },
      {
        nameEnglish: "BLOND MUNK",
        volume: "0.5L",
        alcoholPercentage: "6% VOL",
        price: 4.3,
      },
      {
        nameEnglish: "KARKSI PORTER",
        volume: "0.5L",
        alcoholPercentage: "6% VOL",
        price: 4.3,
      },
      {
        nameEnglish: "KLOOSTRIÕLU",
        volume: "0.5L",
        alcoholPercentage: "5% VOL",
        price: 4.3,
      },
    ],
    alcohol_Free_Beers: [
      {
        nameEnglish: "A.LECoq premium",
        volume: "0.330L",
        alcoholPercentage: "0% VOL",
        price: 3.5,
      },
      {
        nameEnglish: "WARSTEINER PREMIUM FRESH",
        volume: "0.330L",
        alcoholPercentage: "0% VOL",
        price: 3.5,
      },
    ],
    ciders: [
      {
        nameEnglish: "HOGGY’S PEAR HEAVEN",
        volume: "0.330L",
        alcoholPercentage: "4.5% VOL",
        price: 3.8,
      },
      {
        nameEnglish: "HOGGY’S APPLE PARADISE",
        volume: "0.330L",
        alcoholPercentage: "4.5% VOL",
        price: 3.8,
      },
      {
        nameEnglish: "FIZZ BLUEBERRY",
        volume: "0.5L",
        alcoholPercentage: "4.5% VOL",
        price: 4.0,
      },
      {
        nameEnglish: "FIZZ PEAR",
        volume: "0.5L",
        alcoholPercentage: "4.5% VOL",
        price: 4.0,
      },
      {
        nameEnglish: "G:N LONG DRINK GRAPEFRUIT",
        volume: "0.330L",
        alcoholPercentage: "5.5% VOL",
        price: 3.8,
      },
    ],
    red_Wines: [
      {
        nameEnglish: "SANTA HELENA SYRAH CABERNET SAUVIGNON",
        volume: "12CL",
        alcoholPercentage: "13%",
        price: 4.8,
        desc: "(HOUSE WINE)",
      },
      {
        nameEnglish: "Hardys Crest Shiraz",
        volume: "0.75L",
        alcoholPercentage: "14%",
        price: 16.7,
        desc: "Keskmise täidlusega ja marjase karakteriga kuiv punavein",
      },
      {
        nameEnglish: "Cono Sur Tocornal Cabernet Sauvignon",
        volume: "0.75L",
        alcoholPercentage: "12%",
        price: 16.4,
        desc: "Keskmise täidlusega ja marjase karakteriga kuiv punavein",
      },
      {
        nameEnglish: "Canti Merlot",
        volume: "0.75L",
        alcoholPercentage: "11.5%",
        price: 14.2,
        desc: "Kerge, marjase iseloomuga kuiv punavein",
      },
      {
        nameEnglish: "Savannah Pinotage-Shiraz",
        volume: "0.75L",
        alcoholPercentage: "14%",
        price: 16.2,
        desc: "Keskmise täidlusega ja marjase karakteriga kuiv punavein",
      },
      {
        nameEnglish: "Don David Malbec",
        volume: "0.75L",
        alcoholPercentage: "14%",
        price: 22.1,
        desc: "Keskmisest täidlasem, marjaselt vürtsika iseloomuga kuiv punavein",
      },
      {
        nameEnglish: "Marani Kindzmarauli",
        volume: "0.75L",
        alcoholPercentage: "11.5%",
        price: 22.2,
        desc: "Keskmise täidlusega, marjase iseloomuga poolmagus punavein",
      },
    ],
    white_Wines: [
      {
        nameEnglish: "Pinot Grigio Garda DOC",
        volume: "0.75L",
        alcoholPercentage: "12.5%",
        price: 19.0,
        desc: "Kerge ja värske, puuviljaselt elav kuiv valge vein",
      },
      {
        nameEnglish: "Canti Chardonnay",
        volume: "0.75L",
        alcoholPercentage: "11.5%",
        price: 16.1,
        desc: "Kerge ja värske, puuviljaselt elav kuiv valge vein",
      },
      {
        nameEnglish: "Cono Sur Tocornal Chardonnay BIB",
        volume: "12CL",
        alcoholPercentage: "12%",
        price: 4.8,
        desc: "Kerge ja värske, puuviljaselt elav kuiv valge vein (HOUSE WINE)",
      },
      {
        nameEnglish: "Spier Signature Sauvignon Blanc",
        volume: "0.75L",
        alcoholPercentage: "13%",
        price: 18.4,
        desc: "Kerge ja värske, puuviljaselt elav kuiv valge vein",
      },
      {
        nameEnglish: "Marani Tvishi",
        volume: "0.75L",
        alcoholPercentage: "11%",
        price: 19.0,
        desc: "Keskmise täidlusega, puuviljase iseloomuga poolkuiv valge vein",
      },
    ],
    rose_Wines: [
      {
        nameEnglish: "Cono Sur Bicicleta Pinot Noir Rose",
        volume: "0.75L",
        alcoholPercentage: "12%",
        price: 16.8,
        desc: "Kerge ja marjase karakteriga kuiv roosa vein",
      },
      {
        nameEnglish: "Cono Sur Bicicleta Pinot Noir Rose",
        volume: "0.75L",
        alcoholPercentage: "12%",
        price: 16.8,
        desc: "Kerge ja marjase karakteriga kuiv roosa vein",
      },
      {
        nameEnglish: "Le Grand Noir Rose",
        volume: "0.75L",
        alcoholPercentage: "12.5%",
        price: 18.0,
        desc: "Kerge ja marjase karakteriga kuiv roosa vein",
      },
      {
        nameEnglish: "Le Grand Noir Rose Sparkling",
        volume: "0.75L",
        alcoholPercentage: "12%",
        price: 18.0,
        desc: "Keskmise täidlusega, kuiv roosa vahuvein",
      },
      {
        nameEnglish: "Barone Ricasoli Albia Rose,Toscana IGT",
        volume: "0.75L",
        alcoholPercentage: "13%",
        price: 25.6,
        desc: "Kerge ja marjase karakteriga kuiv roosa vein",
      },
    ],
    sparklingWines: [
      {
        nameEnglish: "Mini Freixenet Cava Carta Nevada",
        nameRussian: "Мини Фрейшенет Кава Карта Невада",
        nameEstonian: "Mini Freixenet Cava Carta Nevada",
        price: "7.40",
        type: "Medium DRH 11.5% 20CL",
        desc: "Light, medium, aromatic sparkling wine",
      },
      {
        nameEnglish: "Martini Asti",
        nameRussian: "Мартини Асти",
        nameEstonian: "Martini Asti",
        price: "7.40",
        type: "7.5% 0.2L",
        desc: "Light, sweet, aromatic sparkling wine",
      },
      {
        nameEnglish: "Maschio Prosecco DOC Treviso Extra Dry",
        nameRussian: "Машкио Прозекко ДОК Тревизо Экстра Драй",
        nameEstonian: "Maschio Prosecco DOC Treviso Extra Dry",
        price: "7.40",
        type: "11% 0.2L",
        desc: "Light, fresh, fruitfully lively dry sparkling wine",
      },
      {
        nameEnglish: "Baron Rosen Alazani Valley White Medium-Sweet",
        nameRussian: "Барон Розен Алазани Вэлли Уайт Медиум-Свит",
        nameEstonian: "Baron Rosen Alazani Valley White Medium-Sweet",
        price: "16.60",
        type: "12% 0.75L",
        desc: "Fruity character, semi-sweet white wine",
      },
      {
        nameEnglish: "Martini Asti",
        nameRussian: "Мартини Асти",
        nameEstonian: "Martini Asti",
        price: "22.00",
        type: "7.5% 0.75L",
        desc: "Light, sweet, aromatic sparkling wine",
      },
      {
        nameEnglish: "Maschio Prosecco DOC Treviso Extra Dry",
        nameRussian: "Машкио Прозекко ДОК Тревизо Экстра Драй",
        nameEstonian: "Maschio Prosecco DOC Treviso Extra Dry",
        price: "22.50",
        type: "11% 0.75L",
        desc: "Light, fresh, fruitfully lively dry sparkling wine",
      },
      {
        nameEnglish: "Carpene Malvolti Prosecco DOC Treviso Brut",
        nameRussian: "Карпене Мальвольти Прозекко ДОК Тревизо Брут",
        nameEstonian: "Carpene Malvolti Prosecco DOC Treviso Brut",
        price: "28.00",
        type: "11% 0.75L",
        desc: "Light, dry, fruitfully refreshing sparkling wine",
      },
      {
        nameEnglish: "Helfrich Cremant d'Alsace Brut",
        nameRussian: "Хельфрих Креман д'Альзас Брут",
        nameEstonian: "Helfrich Cremant d'Alsace Brut",
        price: "28.60",
        type: "12% 0.75L",
        desc: "Dry sparkling wine with ripe tropical fruit character",
      },
    ],
    strongAlcoholicDrinks: [
      {
        nameEnglish: "Hennessy V.S.",
        nameRussian: "Хеннесси V.S.",
        nameEstonian: "Hennessy V.S.",
        priceSmall: "5.40",
        priceLarge: "7.20",
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A classic French cognac, aged in oak barrels",
      },
      {
        nameEnglish: "Hennessy V.S.O.P.",
        nameRussian: "Хеннесси V.S.O.P.",
        nameEstonian: "Hennessy V.S.O.P.",
        priceSmall: "5.20",
        priceLarge: "7.40",
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A premium French cognac, very superior old pale",
      },
      {
        nameEnglish: "Metaxa 5*",
        nameRussian: "Метакса 5*",
        nameEstonian: "Metaxa 5*",
        priceSmall: "5.30",
        priceLarge: "7.20",
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "38% VOL",
        desc: "A Greek brandy blend, aged in oak barrels",
      },
    ],
    whiskey: [
      {
        nameEnglish: "Jack Daniels",
        nameRussian: "Джек Дэниэлс",
        nameEstonian: "Jack Daniels",
        price: { small: "4.40", large: "7.20" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A classic American whiskey, known for its smooth flavor",
      },
      {
        nameEnglish: "RED LABEL",
        nameRussian: "Красная метка",
        nameEstonian: "RED LABEL",
        price: { small: "4.50", large: "7.00" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A blended Scotch whiskey, popular for its versatility",
      },
      {
        nameEnglish: "Jameson IRISH WHISKY",
        nameRussian: "Джемесон ирландский виски",
        nameEstonian: "Jameson Iiri viski",
        price: { small: "4.50", large: "7.00" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A smooth Irish whiskey, triple-distilled for exceptional smoothness",
      },
      {
        nameEnglish: "VANA TALLINN",
        nameRussian: "Вана Таллинн",
        nameEstonian: "VANA TALLINN",
        price: { small: "4.50", large: "7.00" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A traditional Estonian liqueur, with hints of rum and vanilla",
      },
    ],

    rum: [
      {
        nameEnglish: "Bacardi Black",
        nameRussian: "Бакарди Черный",
        nameEstonian: "Bacardi Black",
        price: { small: "4.50", large: "6.50" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "40% VOL",
        desc: "A dark rum with a rich and full-bodied flavor profile",
      },
      {
        nameEnglish: "Bacardi Superior",
        nameRussian: "Бакарди Супериор",
        nameEstonian: "Bacardi Superior",
        price: { small: "4.70", large: "6.70" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "37.5% VOL",
        desc: "A light and smooth rum, perfect for mixing in cocktails",
      },
    ],
    tequila: [
      {
        nameEnglish: "Tequila Silver",
        nameRussian: "Текила Сильвер",
        nameEstonian: "Tequila Silver",
        price: { small: "4.50", large: "6.50" },
        volumeSmall: "4cl",
        volumeLarge: "8cl",
        alcoholPercentage: "38% VOL",
        desc: "A clear tequila with a smooth and crisp taste, perfect for cocktails",
      },
    ],
    iceCreamCocktails: [
      {
        nameEnglish: "VANILLA SHAKE",
        nameRussian: "Ванильный коктейль",
        nameEstonian: "Vanilla shake",
        price: "3.70",
        desc: "Milkshake with vanilla ice cream. Piimakokteil vaniljejäätisega. Молочный коктейль с ванильным мороженым.",
      },
      {
        nameEnglish: "STRAWBERRY SHAKE",
        nameRussian: "Клубничный коктейль",
        nameEstonian: "Strawberry shake",
        price: "3.80",
        desc: "Milkshake with strawberry ice cream. Piimakokteil maasika jäätisega. Молочный коктейль с клубничным мороженым.",
      },
      {
        nameEnglish: "MANGO SHAKE",
        nameRussian: "Манговый коктейль",
        nameEstonian: "Mango shake",
        price: "3.70",
        desc: "Milkshake with mango ice cream. Piimakokteil mangojäätisega. Молочный коктейль с манговым мороженым.",
      },
      {
        nameEnglish: "BANANA SHAKE",
        nameRussian: "Банановый коктейль",
        nameEstonian: "Banana shake",
        price: "3.70",
        desc: "Milkshake with vanilla ice cream and banana. Piimakokteil vaniljejäätise ja banaaniga. Молочный коктейль с ванильным мороженым и бананом.",
      },
      {
        nameEnglish: "MANGO LASSI",
        nameRussian: "Манго Ласси",
        nameEstonian: "Mango lassi",
        price: "4.00",
        desc: "Asian-style milkshake with banana or mango. Aasiapärane piimakokteil banaani või mangoga. Молочный коктейль с бананом и манго.",
      },
    ],
    desserts: [
      {
        nameEnglish: "GULAB JAMUN WITH ICE-CREAM",
        nameRussian: "Гулаб Джамун с мороженым",
        nameEstonian: "Gulab jamun jäätisega",
        price: "4.80",
        desc: "Cottage cheese balls in a sugar syrup with ice-cream. Kohupiimapallid suhkru siirupi ja jäätisega.",
      },
      {
        nameEnglish: "PANCAKE WITH BANANA AND ICE CREAM",
        nameRussian: "Блинчик с бананом и мороженым",
        nameEstonian: "Pannkook banaani ja jäätisega",
        price: "5.00",
        desc: "Banana or apple pancake served with ice cream. Banaani- või õunapannkook jäätisega.",
      },
      {
        nameEnglish: "FRIED BANANA WITH ICE CREAM",
        nameRussian: "Жареный банан с мороженым",
        nameEstonian: "Frititud banaan jäätisega",
        price: "5.00",
        desc: "Battered fried banana served with ice cream. Taignas praetud banaan jäätisega.",
      },
      {
        nameEnglish: "CHOICE OF ICE-CREAM",
        nameRussian: "Выбор мороженого",
        nameEstonian: "Jäätisevalik",
        price: "4.20",
        desc: "Choice of ice cream flavors: Strawberry, Vanilla, Mango, Chocolate. Jäätisevalik: maasika, vanilje, mango, shokolaadi.",
      },
    ],
  };

  const [type, settype] = useState("Starter");
  return (
    <div className="bg-black">
      <Navbar />
      <div
        className={`z-50 fixed inset-0 flex items-center justify-center sm:left-[14%] ${
          open ? "" : "hidden"
        }`}
      >
        <Modal manageOpen={manageOpen} />
      </div>
      <div className="flex flex-col sm:flex-row p-10 justify-center mt-10">
        <div className=" sm:block sm:w-fit lg:w-[30%]">
          <div className="text-5xl font-bold ">Menu</div>
          <div className="flex  flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-8 mt-6 overflow-x-scroll no-scrollbar">
            {Object.keys(menuData).map((item, index) => (
              <div
                className="border-solid border-2 border-green-200 rounded-lg px-1 text-xl h-8 sm:border-none w-fit font-serif cursor-pointer hover:text-yellow-300 "
                key={index}
                onClick={() => {
                  settype(item);
                }}
              >
                {item?.toUpperCase().replace(/_/g, " ")}
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-[60%] flex flex-wrap h-fit justify-center ">
          {menuData[type].map((item, index) => (
            <div
              key={index}
             
              className=""
            >
              <Card
                title={item.nameEnglish.replace("_", " ")}
                desc={item.desc}
                price={item.price}
                type={item.type}
                manageOpen={manageOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
