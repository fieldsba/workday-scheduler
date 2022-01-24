var now = document.querySelector("#currentDay");
now.textContent = new Date();

$(".block").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("block")
        .val(text);

    $(this).replaceWith(textInput);

     $(".save").on("click", "p", function() {
        var input = document.getElementById('taskContent');
        localStorage.setItem('input', textInput);
    });
  });

 
