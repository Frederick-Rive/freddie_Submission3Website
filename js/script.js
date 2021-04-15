document.addEventListener("DOMContentLoaded", function(event){
  //Setup the navigation class at the top of the page
  class NavPage
  {
    constructor(nav, page)
    {
      this.nav = nav;
      this.page = page;
      this.color = nav.style.backgroundColor;
    }
  }

  class CustomOrder
  {
    constructor(customBox, customWidget, orderWidget, id)
    {
      this.customBox = customBox;
      this.customBox.style.display = "none";
      this.customWidget = customWidget;
      this.orderWidget = orderWidget;
      this.id = id;
      this.price = parseFloat(orderDict [id]);
      this.basePrice = parseFloat(orderDict [id]);
      this.customIngredients = this.customBox.getElementsByTagName("input");
      for (var i = 0; i < this.customIngredients.length; i++)
      {
        this.customIngredients.checked = false;
      }
    }
  }

  class CartProduct
  {
    constructor(name, price)
    {
      this.name = name;
      this.price = price;
    }
  }

  //Get references for the navs
  var homeNav = document.getElementById('homenav');
  var signNav = document.getElementById('signnav');
  var logNav = document.getElementById('lognav');
  var bioNav = document.getElementById('bionav');
  var shopNav = document.getElementById('shopnav');
  var monthlySpecial = document.querySelector('article');
  var checkoutNav = document.getElementById('checkoutbutton');

  //Get references for all the 'pages'
  var homePage = document.getElementById('homepage');
  var account = document.getElementById('account');
  var bio = document.getElementById('bio');
  var shop = document.getElementById('store');
  var checkOut = document.getElementById('checkout');

  var cart = document.getElementsByClassName('cart')[0];
  var checkoutcart = document.getElementsByClassName('cart')[1];
  var totalPrice = document.getElementById('totalprice');
  var addExtras = document.getElementById('addextra');
  var footer = document.getElementsByTagName('footer')[0];

  //Setup the initial state
  signNav.style.backgroundColor = "#F3D362";
  logNav.style.backgroundColor = "#F3D362";
  bioNav.style.backgroundColor = "#F3D362";
  shopNav.style.backgroundColor = "#D95252";
  signNav.style.cursor = "pointer";
  logNav.style.cursor = "pointer";
  bioNav.style.cursor = "pointer";
  shopNav.style.cursor = "pointer";
  monthlySpecial.style.cursor = "pointer";
  homePage.style.display = "block";
  account.style.display = "none";
  bio.style.display = "none";
  shop.style.display = "none";
  checkOut.style.display = "none";

  //declare the price var
  var price = 0.00;

  var homeHeight;
  var accountHeight;
  var storeHeight;
  var bioHeight;
  var checkoutHeight;

  if (screen.width <= parseInt(400))
  {
    homeHeight = "1100px";
    storeHeight = "3340px";
    bioHeight = "1290px";
    checkoutHeight = "1100px";
  }
  else if (screen.width <= parseInt(500)) {
    homeHeight = "1100px";
    storeHeight = "3520px";
    bioHeight = "1290px";
    checkoutHeight = "1100px";
  }
  else {
    homeHeight = "1100px";
    storeHeight = "1420px";
    bioHeight = "900px";
    checkoutHeight = "1100px";
  }

  footer.style.top = homeHeight;

  //Setup the navigation array and the order dictionary
  const mainNavigation = [new NavPage(homeNav, homePage), new NavPage(signNav, account), new NavPage(logNav, account), new NavPage(bioNav, bio), new NavPage(shopNav, shop), new NavPage(checkoutNav, checkOut)];
  const orderDict = {
    "bollywoodBomb9": 12.99,
    "bollywoodBomb12": 18.99,
    "desiVidesi9": 11.99,
    "desiVidesi12": 17.99,
    "margherita": 13.99,
    "paneerGoNuts9": 13.99,
    "paneerGoNuts12": 19.99,
    "paneerMangoTgo9": 12.99,
    "paneerMangoTango12": 18.99,
    "paneerOnFire9": 12.99,
    "paneerOnFire12": 18.99,
    "popeyeLover9": 12.99,
    "popeyeLover12": 18.99,
    "chickenWellington9": 12.99,
    "chickenWellington12": 18.99,
    "currizza'sFavourite9": 13.99,
    "currizza'sFavourite12": 19.99,
    "desiPepperoni9": 12.99,
    "desiPepperoni12": 19.99,
    "fireyVindaloo9": 13.99,
    "fireyVindaloo12": 19.99,
    "hotDehli-belly9": 12.99,
    "hotDehli-belly12": 18.99,
    "kiwi'sFavourite9": 11.99,
    "kiwi'sFavoruite12": 17.99,
    "meatMasala9": 13.99,
    "meatMasala12": 19.99,
    "modiPremee9": 12.99,
    "modiPremee12": 18.99,
    "nutDelight9": 13.99,
    "nutDelight12": 19.99,
    "pepperizo9": 11.99,
    "pepperizo12": 15.99,
    "slumDog9": 13.99,
    "slumDog12": 20.99,
    "tandooriChicken9": 11.99,
    "tandooriChicken12": 17.99,
    "7up": 2.99,
    "gatorade": 4.99,
    "gingerBeer": 3.50,
    "orangeJuice": 3.99,
    "blueberryKombucha": 3.50,
    "cherryPlumKombucha": 3.50,
    "feijoaKombucha": 3.50,
    "pepsi": 4.50,
    "pepsiMax": 4.50,
    "monsterEnergy": 3.99,
    "garlicBread": 6.49,
    "spicyChips": 5.99,
    "tandooriChickenBites": 6.49,
    "wonderBomb": 6.49,
    "curlyFries": 4.99,
    "brownie": 4.49,
    "passionfruitPeachCheesecake": 4.49,
    "tiramisuSlice": 4.49
  };
  const customiseArray = [new CustomOrder(document.getElementById("bollywoodbombcustom"), document.getElementsByClassName("customise")[0], document.getElementById("bollywoodbomb12"), "bollywoodBomb12"), new CustomOrder(document.getElementById("desividesicustom"), document.getElementsByClassName("customise")[1], document.getElementById("desividesi12"), "desiVidesi12"),  new CustomOrder(document.getElementById("margheritacustom"), document.getElementsByClassName("customise")[2], document.getElementById("margherita"), "margherita"), new CustomOrder(document.getElementById("paneergonutscustom"), document.getElementsByClassName("customise")[3], document.getElementById("paneergonuts12"), "paneerGoNuts12"), new CustomOrder(document.getElementById("paneermangotangocustom"), document.getElementsByClassName("customise")[4], document.getElementById("paneermangotango12"), "paneerMangoTango12"), new CustomOrder(document.getElementById("paneeronfirecustom"), document.getElementsByClassName("customise")[5], document.getElementById("paneeronfire12"), "paneerOnFire12"), new CustomOrder(document.getElementById("popeyelovercustom"), document.getElementsByClassName("customise")[6], document.getElementById("popeyelover12"), "popeyeLover12")];

  var orderArray = new Array;
  var cartElements = new Array;

  //Get the navigation working
  homeNav.addEventListener('click', function(){
    navigate(homeNav, mainNavigation);
    footer.style.top = homeHeight;
    footer.style.display = 'block';
  });
  signNav.addEventListener('click', function(){
    navigate(signNav, mainNavigation);
    footer.style.display = 'none';
  });
  logNav.addEventListener('click', function(){
    navigate(logNav, mainNavigation);
    footer.style.display = 'none';
  });
  bioNav.addEventListener('click', function(){
    navigate(bioNav, mainNavigation);
    footer.style.top = bioHeight;
    footer.style.display = 'block';
  });
  shopNav.addEventListener('click', function(){
    navigate(shopNav, mainNavigation);
    footer.style.top = storeHeight
    footer.style.display = 'block';
  });
  monthlySpecial.addEventListener('click', function(){
    navigate(shopNav, mainNavigation);
    footer.style.top = storeHeight
    var order = new CartProduct("Sweet Heat", 18.99);
    orderArray.push(order);
    UpdateCart();
    footer.style.display = 'block';
  });
  checkoutNav.addEventListener('click', function(){
    navigate(checkoutNav, mainNavigation);
    footer.style.top = checkoutHeight
    footer.style.display = 'none';
  });

  customiseArray[0].customWidget.addEventListener('click', function(){
    ShowCustomBox(0);
    for (var c = 0; c < customiseArray[0].customIngredients.length; c++)
    {
      customiseArray[0].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[0]);
      });
    }
  });
  customiseArray[1].customWidget.addEventListener('click', function(){
    ShowCustomBox(1);
    for (var c = 0; c < customiseArray[1].customIngredients.length; c++)
    {
      customiseArray[1].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[1]);
      });
    }
  });
  customiseArray[2].customWidget.addEventListener('click', function(){
    ShowCustomBox(2);
    for (var c = 0; c < customiseArray[2].customIngredients.length; c++)
    {
      customiseArray[2].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[2]);
      });
    }
  });
  customiseArray[3].customWidget.addEventListener('click', function(){
    ShowCustomBox(3);
    for (var c = 0; c < customiseArray[3].customIngredients.length; c++)
    {
      customiseArray[3].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[3]);
      });
    }
  });
  customiseArray[4].customWidget.addEventListener('click', function(){
    ShowCustomBox(4);
    for (var c = 0; c < customiseArray[4].customIngredients.length; c++)
    {
      customiseArray[4].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[4]);
      });
    }
  });
  customiseArray[5].customWidget.addEventListener('click', function(){
    ShowCustomBox(5);
    for (var c = 0; c < customiseArray[5].customIngredients.length; c++)
    {
      customiseArray[5].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[5]);
      });
    }
  });
  customiseArray[6].customWidget.addEventListener('click', function(){
    ShowCustomBox(6);
    for (var c = 0; c < customiseArray[6].customIngredients.length; c++)
    {
      customiseArray[6].customIngredients[c].addEventListener('click', function(){
        AddCustomPrice(customiseArray[6]);
      });
    }
  });

  customiseArray[0].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[0]);
  });
  customiseArray[1].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[1]);
  });
  customiseArray[2].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[2]);
  });
  customiseArray[3].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[3]);
  });
  customiseArray[4].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[4]);
  });
  customiseArray[5].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[5]);
  });
  customiseArray[6].orderWidget.addEventListener('click', function()
  {
      AddOrder(customiseArray[6]);
  });

  addExtras.addEventListener('click', function(){
    var order = new CartProduct('Curly Fries', 4.99);
    orderArray.push(order);
    UpdateCart();
  });

  function ShowCustomBox (index)
  {
    for (var i = 0; i < customiseArray.length; i++)
    {
      if (i == index)
      {
        customiseArray[i].customBox.style.display = (customiseArray[i].customBox.style.display == "none") ? "block" : "none";
      }
      else {
        customiseArray[i].customBox.style.display = "none";
      }
    }
  }

  //navigation function. to navigate
  function navigate(nav, navArray){
    for (var i = 0; i < navArray.length; i++) {
      if (nav == navArray[i].nav) {
        navArray[i].page.style.display = "block";
        if (nav != homenav && nav != shopnav){
          navArray[i].nav.style.backgroundColor = "#b8a76a";
        }
        else if (nav == shopnav)
        {
          navArray[i].nav.style.backgroundColor = "#8c3737";
        }
        navArray[i].nav.style.cursor = "default";
      } else {
        if (!(navArray[i].page == account && (nav == signNav || nav == logNav)))
        {
          navArray[i].page.style.display = "none";
        }
        if (navArray[i].nav != homeNav){
          navArray[i].nav.style.backgroundColor = navArray[i].color;
        }
        navArray[i].nav.style.cursor = "pointer";
      }
    }
  }

  function AddCustomPrice (customOrder)
  {
    var output = 0.00;
    var customList = customOrder.customIngredients;
    for (var i = 0; i < customList.length; i++)
    {
      if (customList[i].checked)
      {
        output += parseFloat(customList[i].value);
      }
    }
    customOrder.price = (customOrder.basePrice + output).toFixed(2);
    customOrder.orderWidget.getElementsByClassName("price")[0].innerHTML = "$" + (customOrder.price);
  }

  function AddOrder (customOrder)
  {
    var id = customOrder.id.split("");
    var name = id[0].toUpperCase();
    var flag = false;
    for (var i = 1; i < id.length; i++)
    {
      if (!isNaN(id[i]) && !flag)
      {
        name += ' "';
        name += id[i];
        flag = true;
      }
      else if (id[i] == id[i].toUpperCase() && isNaN(id[i]))
      {
        name += ' ';
        name += id[i];
      }
      else
      {
        name += id[i];
      }
    }
    var order = new CartProduct(name, customOrder.price);
    orderArray.push(order);
    UpdateCart();
  }

  function UpdateCart ()
  {
    cart.innerHTML = ' ';
    price = 0.00;
    for (var i = 0; i < orderArray.length; i++)
    {
      cart.innerHTML += '<div class="cartElement"><h5>' + orderArray[i].name + ' - $' + orderArray[i].price + '</h5></div>'
      price += parseFloat(orderArray[i].price);
    }
    cart.innerHTML += '<div class="rowgap"></div>'
    totalPrice.innerHTML = "$" + parseFloat(price).toFixed(2);

    cartElements = cart.getElementsByClassName('cartElement');
    for (var c = 0; c < cartElements.length; c++)
    {
      addListenerToCart(c);
    }
  }

  function addListenerToCart(i)
  {
    cartElements[i].addEventListener('click', function(){
      var newArray = new Array;
      for (var o = 0; o < orderArray.length; o++)
      {
        if (i == o)
        {
          continue;
        }
        newArray.push (orderArray[o]);
      }
      orderArray = newArray;
      UpdateCart();
    })
  }
});
