$(document).ready(function () {

  let itemsLocal;

  function display() {
    if (localStorage.getItem("items")) {
      let listOfItems = JSON.parse(localStorage.getItem("items"));
      itemsLocal = listOfItems;
      for (let itemLocal in listOfItems) {
        $("#itemAdder").before(
          '<div class="item">' +
            '<input type="checkbox">' +
            "<p>" +
            listOfItems[itemLocal] +
            "</p>" +
            '<span class="material-icons md-18">delete</span>' +
            "</div>"
        );
      }
    } else {
      itemsLocal = [];
    }
  }

  display();

  // Add

  $("#newItem").click(function () {
    var text = $("#itemAdder > input").val();
    itemsLocal.push(text);
    localStorage.setItem("items", JSON.stringify(itemsLocal));

    $("#itemAdder").before(
      '<div class="item">' +
        '<input type="checkbox">' +
        "<p>" +
        text +
        "</p>" +
        '<span class="material-icons md-18">delete</span>' +
        "</div>"
    );

    $("#itemAdder > input").val("");
  });

  // Delete

  $(document).on("click", "span", function () {
    var value = $(this).siblings("p").text();
    $(this).parent().remove();
    let listOfItems = JSON.parse(localStorage.getItem("items"));
    for (let item = 0; item < listOfItems.length; item++) {
      if (listOfItems[item] === value) {
        listOfItems.splice(item, 1);
        itemsLocal.splice(item, 1);
      }
      localStorage.setItem("items", JSON.stringify(listOfItems));
    }
  });
});

var date = document.querySelector("#heading > h1");

var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

var day = today.toLocaleDateString("en-IN", options);

date.innerHTML = day;
