$(document).ready(function() {

  // bind event listener to form submit
  $("#cat-form").on("submit", function(e) {

    e.preventDefault();

    // package up form data for req.body purposes
    const catData = {
      name: $("#name-input").val().trim()
    }

    $.ajax({
      url: "/api/cats",
      method: "POST",
      data: catData // req.body
    })
    .then(function() {
      // reload the page
      location.reload();
    })
    .catch(err => console.log(err));

  });

  // update cat
  $(".update-cat").on("click", function() {
    // read back cat's id and sleepy status
    const catId = $(this).attr("data-id");
    const sleepy = $(this).attr("data-sleepy")

    $.ajax({
      url: `/api/cats/${catId}`,
      method: "PUT",
      data: {
        sleepy: sleepy
      } // req.body
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  $(".delete-cat").on("click", function() {
    // get cat's id
    const catId = $(this).attr("data-id");

    $.ajax({
      url: `/api/cats/${catId}`,
      method: "DELETE"
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

});