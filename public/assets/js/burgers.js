$(document).ready(function () {

  // bind event listener to form submit
  $("#burger-form").on("submit", function (e) {

    e.preventDefault();

    // package up form data for req.body purposes
    const burgerData = {
      name: $("#name-input").val().trim()
    }

    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: burgerData // req.body
      })
      .then(function () {
        // reload the page
        location.reload();
      })
      .catch(err => console.log(err));

  });

  // update burger
  $(".update-burger").on("click", function () {
    const burgerID = $(this).attr("data-id");
    const eaten = $(this).attr("data-eaten");

    $.ajax({
        url: `/api/burger/${burgerID}`,
        method: "PUT",
        data: {
          eaten: true
        } // req.body
      })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });
});