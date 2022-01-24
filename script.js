var now = document.querySelector("#currentDay");
now.textContent = moment().format('LLL');

$(".block").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass(".block")
        .val(text);

    $(this).replaceWith(textInput);

     $(".save").on("click", "p", function() {
        var input;
        localStorage.setItem('input', textInput.val());
    });
  });

 
