var initialBalance = 50000;

var online = prompt("Enter *222# To buy goods Online");
if (online == "*222#") {
  var goods = prompt(
    "Information \n 1. Beverages \n 2. Food \n 3. Fruits \n 4. Clothes \n 5. Logage"
  );
  if (goods == 1) {
    var bev = prompt(
      "Information \n 1.Fanta \n 2. Origin \n 3. Cocacola \n 4. Monster Energy \n 5. Bigi Apple \n 6. Five Alive \n"
    );
    if (bev == 1) {
      var entry = Number(prompt("Enter Amount Of Fanta"));
      if (entry <= 50000) {
        var card = prompt("Enter your 15 ATM card Number");
        if (card.length == 15) {
          var pin = prompt("Enter Your ATM Pin Here");
          if (pin.length == 4) {
            alert(
              "Transaction Successful Your New Balance is" +
                " " +
                (initialBalance - entry5) +
                " " +
                "Your Goods Will Be Deliverd a Week Leter"
            );
          } else {
            alert("Incorrect Pin");
          }
        } else {
          alert("Incorrect Card Number");
        }
      } else {
        alert("Your Do Not Have Enough Balance");
      }
    }
    // else {
    //   alert("Invalid Selection");
    // }
  }
  // else {
  //   alert("Invalid Selection");
  // }
} else {
  alert("Invalid Code");
}

if (bev == 2) {
  var entry1 = Number(prompt("Enter Amount of Origin"));
  if (entry1 <= 50000) {
    var card1 = prompt("Enter Your 15 ATM Card Nunber");
    if (card1.length == 15) {
      var pin1 = prompt("Enter Your ATM Pin Here");
      if (pin1.length == 4) {
        alert(
          "Transaction Successful Your New Balance is" +
            " " +
            (initialBalance - entry5) +
            " " +
            "Your Goods Will Be Deliverd a Week Leter"
        );
      } else {
        alert("Incorrect Pin");
      }
    } else {
      alert("Incorrect card Number");
    }
  } else {
    alert("Your Do Not Have Enough Balance");
  }
}

if (bev == 3) {
  var entry2 = Number(prompt("Enter Amount of Cocacola"));
  if (entry2 <= 50000) {
    var card2 = prompt("Enter Your 15 ATM Card Nunber");
    if (card2.length == 15) {
      var pin2 = prompt("Enter Your ATM Pin Here");
      if (pin2.length == 4) {
        alert(
          "Transaction Successful Your New Balance is" +
            " " +
            (initialBalance - entry5) +
            " " +
            "Your Goods Will Be Deliverd a Week Leter"
        );
      } else {
        alert("Incorrect Pin");
      }
    } else {
      alert("Incorrect card Number");
    }
    alert("Your Do Not Have Enough Balance");
  }
}

if (bev == 4) {
  var entry3 = Number(prompt("Enter Amount of Monster Energy"));
  if (entry3 <= 50000) {
    var card3 = prompt("Enter Your 15 ATM Card Nunber");
    if (card3.length == 15) {
      var pin3 = prompt("Enter Your ATM Pin Here");
      if (pin3.length == 4) {
        alert(
          "Transaction Successful Your New Balance is" +
            " " +
            (initialBalance - entry5) +
            " " +
            "Your Goods Will Be Deliverd a Week Leter"
        );
      } else {
        alert("Incorrect Pin");
      }
    } else {
      alert("Incorrect card Number");
    }
  } else {
    alert("Your Do Not Have Enough Balance");
  }
}

if (bev == 5) {
  var entry4 = Number(prompt("Enter Amount of Bigi Apple"));
  if (entry4 <= 50000) {
    var card4 = prompt("Enter Your 15 ATM Card Nunber");
    if (card4.length == 15) {
      var pin4 = prompt("Enter Your ATM Pin Here");
      if (pin4.length == 4) {
        alert(
          "Transaction Successful Your New Balance is" +
            " " +
            (initialBalance - entry5) +
            " " +
            "Your Goods Will Be Deliverd a Week Leter"
        );
      } else {
        alert("Incorrect Pin");
      }
    } else {
      alert("Incorrect card Number");
    }
  } else {
    alert("Your Do Not Have Enough Balance");
  }
}

if (bev == 6) {
  var entry5 = Number(prompt("Enter Amount of Five Alive"));
  if (entry5 <= 50000) {
    var card5 = prompt("Enter Your 15 ATM Card Nunber");
    if (card5.length == 15) {
      var pin5 = prompt("Enter Your ATM Pin Here");
      if (pin5.length == 4) {
        alert(
          "Transaction Successful Your New Balance is" +
            " " +
            (initialBalance - entry5) +
            " " +
            "Your Goods Will Be Deliverd a Week Leter"
        );
      } else {
        alert("Incorrect Pin");
      }
    } else {
      alert("Incorrect card Number");
    }
  } else {
    alert("Your Do Not Have Enough Balance");
  }
}

if (goods == 2) {
  var food = Number(
    prompt("1. Rice \n 2. Chezz \n 3. Beans \n 4. Yams \n 5. Spag \n 6. Salad")
  );
  if (food == 1) {
    var enter = Number(prompt("Enter Amount Of Rice"));
    if (enter <= initialBalance) {
      var atm = Number(prompt("Enter Your 15 ATM Card Number"));
      if (atm.length == 15) {
        var num = Number(prompt("Enter Your ATM Pin Here"));
        if (num.length == 4) {
          alert(
            "Transaction Successful Your New Balance is" +
              " " +
              (initialBalance - enter) +
              " " +
              "Your Goods Will Be Deliverd a Week Leter"
          );
        } else {
          alert("Incorrect Pin");
        }
      } else {
        alert("Incorrect Card Number");
      }
    } else {
      alert("Your do Not Have Enough Balance");
    }
  } else {
    alert("Invalid Selection");
  }
}

if (food == 2) {
  var enter1 = Number(prompt("Enter Amount Of Chezz"));
}
