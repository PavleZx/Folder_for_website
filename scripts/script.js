
class cart_item {
   constructor(category_n, item_n){
      this.category_id = category_n;
      this.item_id = item_n;
      this.amount = 0;
   }

   get_amount(){
      return this.amount;
   }
   set_amount(number){
      this.amount = number;
   }
}

website_data = {
    "website":"Trading Cards",
    "categories":[
       {
          "name":"Spell-Monsters",
          "image":"tech.jpg",
          "products":[
             {
                "name":"Endymion the Mighty Master of Magic &nbsp 5$",
                "image":"images/1.jpg"
             },
             {
                "name":"Reflection of Endymion &nbsp4$",
                "image":"images/2.jpg"
             },
             {
                "name":"Servant of Endymion &nbsp4$",
                "image":"images/3.jpg"
             },
             {
                "name":"Magister of Endymion &nbsp3$",
                "image":"images/4.jpg"
             },
             {
                "name":"Mythical Beast Bashilisk &nbsp3$",
                "image":"images/6.jpg" 
             },
             {
                "name":"Magical Abductor &nbsp2$",
                "image":"images/5.jpg" 
             }
          ]
       },
       {
          "name":"Regular Monsters",
          "image":"tech.jpg",
          "products":[
             {
                "name":"Sibirski Plavac &nbsp100$",
                "image":"images/slika100.png"
             },{
                "name":"Arcanite Magician &nbsp4$",
                "image":"images/7.jpg"
             },{
               "name":"Shining Magical Warrior &nbsp4$",
               "image":"images/8.jpg"
            },{
               "name":"Crusader of Endymion &nbsp3$",
               "image":"images/9.jpg"
            },{
               "name":"Droll and Lock bird &nbsp3$",
               "image":"images/10.jpg"
            },{
               "name":"Fairty-Tail Luna &nbsp2$",
               "image":"images/11.jpg"
            }
          ]
       },{
         "name":"Spell Cards",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Spell Power Mastery &nbsp5$",
               "image":"images/12.jpg"
            },{
              "name":"Spell Power Grasp &nbsp4$",
              "image":"images/13.jpg"
           },{
              "name":"Citadel of Endymion &nbsp4$",
              "image":"images/14.jpg"
           },{
              "name":"Dwimmered Path &nbsp3$",
              "image":"images/15.jpg"
           },{
              "name":"Pot of Desires &nbsp3$",
              "image":"images/16.jpg"
           },{
            "name":"Mystical Space Typhoon &nbsp3$",
            "image":"images/17.jpg"
         }
         ]
      },{
         "name":"Trap Cards",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Trap Stun &nbsp3$",
               "image":"images/22.jpg"
            },{
              "name":"Threatening Roar &nbsp4$",
              "image":"images/21.jpg"
           },{
              "name":"Dust Tornado &nbsp3$",
              "image":"images/24.jpg"
           },{
              "name":"Radiant Mirror Force &nbsp4$",
              "image":"images/26.jpg"
           },{
              "name":"Draining Shield &nbsp4$",
              "image":"images/27.jpg"
           },{
            "name":"Magic Cylinders &nbsp4$",
            "image":"images/28.jpg"
         },{
            "name":"Sakuretsu Armor &nbsp3$",
            "image":"images/25.jpg"
         },{
            "name":"Void Trap Hole &nbsp2$",
            "image":"images/23.jpg"
         }
         ]
      },
      {
         "name":"Ancient type",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Arcanite Dragon &nbsp4$",
               "image":"images/slika31.png"
            },{
              "name":"Marble Angel &nbsp4$",
              "image":"images/slika32.png"
           },{
              "name":"Aprentice Magician &nbsp3$",
              "image":"images/slika33.png"
           },{
              "name":"Algae Dragon &nbsp3$",
              "image":"images/slika34.png"
           },{
              "name":"Fire Warrior Emblem &nbsp2$",
              "image":"images/slika35.png"
           }
         ]
      },
      {
         "name":"Hero type",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Elemental Hero Neos &nbsp4$",
               "image":"images/slika91.png"
            },{
              "name":"Elemental Hero Necros &nbsp4$",
              "image":"images/slika92.png"
           },{
              "name":"Elemental Hero Bubbleman &nbsp3$",
              "image":"images/slika93.png"
           },{
              "name":"Elemental Hero Avian &nbsp3$",
              "image":"images/slika94.png"
           },{
              "name":"Elemental Hero Sparkman &nbsp2$",
              "image":"images/slika95.png"
           }
         ]
      },
      {
         "name":"Dragon type",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Dark Tornado Dragon &nbsp4$",
               "image":"images/slika81.png"
            },{
              "name":"Flaming Dragon &nbsp4$",
              "image":"images/slika82.png"
           },{
              "name":"Electric Soul Dragon &nbsp3$",
              "image":"images/slika83.png"
           },{
              "name":"Lvl 4 Dark Draco &nbsp3$",
              "image":"images/slika84.png"
           },{
              "name":"Green Winged Fairy Dragon &nbsp2$",
              "image":"images/slika85.png"
           }
         ]
      },
      {
         "name":"Dark type",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Dark Flame Dragon &nbsp4$",
               "image":"images/slika73.png"
            },{
              "name":"Metal Phoenix Warrior &nbsp4$",
              "image":"images/slika62.png"
           },{
              "name":"Shadow Ice Master &nbsp3$",
              "image":"images/slika63.png"
           },{
              "name":"Shadow Ice Warrioress &nbsp3$",
              "image":"images/slika64.png"
           },{
              "name":"Golden Tiger Warrior &nbsp2$",
              "image":"images/slika65.png"
           }
         ]
      },
      {
         "name":"Mythical Monsters",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Three Soul King Archanis &nbsp5$",
               "image":"images/slika51.png"
            },{
              "name":"Black Luster Soldier &nbsp5$",
              "image":"images/slika52.png"
           },{
              "name":"Blue Eyes Ultimate Dragon &nbsp5$",
              "image":"images/slika53.png"
           },{
              "name":"Dark Chaos Dragon &nbsp5$",
              "image":"images/slika54.png"
           },{
              "name":"Lu-Kang Master of Martial Arts &nbsp3$",
              "image":"images/slika55.png"
           }
         ]
      },
      {
         "name":"Machine type",
         "image":"tech.jpg",
         "products":[
            {
               "name":"Anicent Gear Commando &nbsp4$",
               "image":"images/slika41.png"
            },{
              "name":"Anicent Gear Golem &nbsp4$",
              "image":"images/slika42.png"
           },{
              "name":"Anicent Gear Knight &nbsp3$",
              "image":"images/slika43.png"
           },{
              "name":"Ancient Gear Soldier &nbsp3$",
              "image":"images/slika44.png"
           },{
              "name":"Ancient Gear Battle Hound &nbsp2$",
              "image":"images/slika45.png"
           }
         ]
      }
    ]
 }

let data = website_data.categories;
let length = data.length;
let inner_length = 0;
let first_visit = true;
let str = '';
let amount = 0;

let wish_list = JSON.parse(localStorage.getItem('wish_list'));
if (!wish_list){
   wish_list = {};
}

if (first_visit == true){
   str = '';
   for (let j = 0; j < length; j++){
      str += '<a onclick="funkcija(' + j + ')"><div class="category"><div>' + data[j].name + '</div></div></a>'
   }
   document.querySelector('.categories').innerHTML = str;

   let keys = Object.keys(wish_list);
   let item = wish_list[keys[0]];
   str = '';
      let inner_length = data[0].products.length;
      for (let j = 0; j < inner_length; j++){
         name_of_item = data[0].products[j].name;
         item = wish_list[name_of_item];
         if (item == undefined){
            str += '<div class = "product"><div class = "item"><div class = item_image> <img class = image src = "'+ data[0].products[j].image + '" alt="No image to display."><img class = image2 src = "'+ data[0].products[j].image + '" alt="No image to display."><a onclick = "add_to_cart(' + 0 + ', ' + j + ')"><div class = "hover_cart hoverable"> <img class = bar_cart src="images/cart.png" alt="None"> + </div></a></div><div class = item_data> ' + data[0].name + ': ' + data[0].products[j].name + '<div><button class = "gumb" onclick = "add_to_cart(' + 0 + ', ' + j + ')">+ Add</button></div>' + ' </div></div></div>';
         } else {
            amount = item.amount;
            str += '<div class = "product"><div class = "item"><div class = "item_image newclass"> <img class = image src = "'+ data[0].products[j].image + '" alt="No image to display."> <img class = image2 src = "'+ data[0].products[j].image + '" alt="No image to display."><a onclick = "add_to_cart(' + 0 + ', ' + j + ')"><div class = "hover_cart"> <img class = bar_cart src="images/cart.png" alt="None"> + </div></a>     <div class = "image_item_amount">' + amount + '</div></div><div class = item_data> ' + data[0].name + ': ' + data[0].products[j].name + '<div><button class = "gumb" onclick = "add_to_cart(' + 0 + ', ' + j + ')">+ Add</button></div>' + ' </div></div></div>';
         }
      }
   document.querySelector('.right').innerHTML = '<div class = "upper_bar" ><div class="shop"><div class = shop_icon><a href = "cart.html"><img class = bar_cart src="images/cart2.jpg" alt="None"></a></div></div><div class="cart"><div class = search_icon> <img class = search_img src="images/search.png" alt="None"> <a>Search<\a></div></div></div>';
   document.querySelector('.products').innerHTML = str;
   str = document.querySelector('body').innerHTML;
   str += '<style> .image2 {display: block;} .image2:hover {display: none; cursor: pointer;}.hover_cart {z-index: 400;}</style>';
   document.querySelector('body').innerHTML = str;
   first_visit == false;
}

function funkcija(number){

   let keys = Object.keys(wish_list);
   let item = wish_list[keys[0]];
   str = '';
      let inner_length = data[number].products.length;
      for (let j = 0; j < inner_length; j++){
         name_of_item = data[number].products[j].name;
         item = wish_list[name_of_item];
         if (item == undefined){
            str += '<div class = "product"><div class = "item"><div class = item_image> <img class = image src = "'+ data[number].products[j].image + '" alt="No image to display."><img class = image2 src = "'+ data[number].products[j].image + '" alt="No image to display."><a onclick = "add_to_cart(' + number + ', ' + j + ')"><div class = hover_cart> <img class = bar_cart src="images/cart.png" alt="None"> + </div></a></div><div class = item_data> ' + data[number].name + ': ' + data[number].products[j].name + '<div><button class = "gumb" onclick = "add_to_cart(' + number + ', ' + j + ')">+ Add</button></div>' + ' </div></div></div>';
         } else {
            amount = item.amount;
            str += '<div class = "product"><div class = "item"><div class = item_image> <img class = image src = "'+ data[number].products[j].image + '" alt="No image to display."><img class = image2 src = "'+ data[number].products[j].image + '" alt="No image to display."><a onclick = "add_to_cart(' + number + ', ' + j + ')"><div class = hover_cart> <img class = bar_cart src="images/cart.png" alt="None"> + </div></a>   <div class = image_item_amount>' + amount + '</div></div><div class = item_data> ' + data[number].name + ': ' + data[number].products[j].name + '<div><button class = "gumb" onclick = "add_to_cart(' + number + ', ' + j + ')">+ Add</button></div>' + ' </div></div></div>';
         }
      }
   document.querySelector('.products').innerHTML = str;
   document.querySelector('.right').innerHTML = '<div class = "upper_bar" >Category&nbsp' + '<div class = "category_display">' + data[number].name + '</div><div class="shop"><div class = shop_icon><a href = "cart.html"><img class = bar_cart src="images/cart.png" alt="None"></a>' + total + '</div></div><div class="cart"><div class = search_icon> <img class = search_img src="images/search.png" alt="None"><a>Search<\a></div></div></div>';
   document.querySelector('.greetings').innerHTML = '';
   document.querySelector('.opis').innerHTML = '';
}

let total = JSON.parse(localStorage.getItem('total'));
if (!total){
   total = 0;
}
document.querySelector('.shop').innerHTML = '<div class = shop_icon><a href = "cart.html"><img class = bar_cart src="images/cart.png" alt="None"></a>' + total + '</div>'; 
localStorage.setItem('total', JSON.stringify(total));

function add_to_cart(category_number, product_number){

   document.querySelector('.opis').innerHTML = '';    
   wish_list = JSON.parse(localStorage.wish_list);
   wish_listJSON = '';
   
   total += 1;
   let name_of_item = data[category_number].products[product_number].name;
   let item = wish_list[name_of_item];
   if (item == undefined){
      item = new cart_item(category_number, product_number);
   }
   item.amount += 1;
   wish_list[name_of_item] = item;
   
   /* 
   let keys = Object.keys(wish_list);
   str = '';
   for (let i = 0; i < keys.length; i++){
      str += keys[i] + ': ' + wish_list[keys[i]].amount + '\n'; 
   }
   alert(str);
   */

   let keys = Object.keys(wish_list);
   item = wish_list[keys[0]];
   str = '';
      let inner_length = data[category_number].products.length;
      for (let j = 0; j < inner_length; j++){
         name_of_item = data[category_number].products[j].name;
         item = wish_list[name_of_item];
         if (item == undefined){ 
            str += '<div class = "product"><div class = "item"><div class = item_image> <img class = image src = "'+ data[category_number].products[j].image + '" alt="No image to display."><img class = image2 src = "'+ data[category_number].products[j].image + '" alt="No image to display."><a onclick = "add_to_cart(' + category_number + ', ' + j + ')"><div class = hover_cart> <img class = bar_cart src="images/cart.png" alt="None"> + </div></a></div><div class = item_data> ' + data[category_number].name + ': ' + data[category_number].products[j].name + '<div><button class = "gumb" onclick = "add_to_cart(' + category_number + ', ' + j + ')">+ Add</button></div>' + ' </div></div></div>';
         } else {
            amount = item.amount;
            str += '<div class = "product"><div class = "item"><div class = item_image> <img class = image src = "'+ data[category_number].products[j].image + '" alt="No image to display."><img class = image2 src = "'+ data[category_number].products[j].image + '" alt="No image to display."><a onclick = "add_to_cart(' + category_number + ', ' + j + ')"><div class = hover_cart> <img class = bar_cart src="images/cart.png" alt="None"> + </div></a>  <div class = image_item_amount>' + amount + '</div></div><div class = item_data> ' + data[category_number].name + ': ' + data[category_number].products[j].name + '<div><button class = "gumb" onclick = "add_to_cart(' + category_number + ', ' + j + ')">+ Add</button></div>' + ' </div></div></div>';
         }
      }
   document.querySelector('.products').innerHTML = str;
   document.querySelector('.right').innerHTML = '<div class = "upper_bar" >Category&nbsp' + '<div class = "category_display">' + data[category_number].name + '</div><div class="shop"><div class = shop_icon><a href = "cart.html"><img class = bar_cart src="images/cart.png" alt="None"> </a>' + total + '</div></div><div class="cart"><div class = search_icon> <img class = search_img src="images/search.png" alt="None"><a>Search<\a></div></div></div>';
   

   document.querySelector('.shop').innerHTML = '<div class = shop_icon><a href = "cart.html"><img class = bar_cart src="images/cart.png" alt="None"></a>' + total + '</div>'; 
   wish_listJSON = JSON.stringify(wish_list);
   localStorage.wish_list = wish_listJSON;
   localStorage.setItem('total', JSON.stringify(total));

}

function display(){

   wish_list = JSON.parse(localStorage.wish_list);
   
   let keys = Object.keys(wish_list);
   str = '';
   for (let i = 0; i < keys.length; i++){
      str += keys[i] + ': ' + wish_list[keys[i]].amount + '\n'; 
   }
   alert(str);

}

let wish_listJSON = JSON.stringify(wish_list);
localStorage.wish_list = wish_listJSON;

