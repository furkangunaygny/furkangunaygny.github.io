
$(document).ready(function() {
  $("#playButton").click(function() {
      var music = $("#myMusic")[0];
      if (music.paused) {
          music.play();
      } else {
          music.pause();
      }
  });
  $("#playButton").mouseenter(function() {
    $(this).addClass("hovered");
}).mouseleave(function() {
    $(this).removeClass("hovered");
});
});
$(document).ready(function() {
            var maxChar = 200;

            $.each(cities, function(index, city) {
                $("#city").append(new Option(city, city.toLowerCase()));
            });

            $("#message").on('input', function() {
                var currentLength = $(this).val().length;
                $("#charCount").text(currentLength + "/" + maxChar);
                
                if (currentLength > maxChar) {
                    $("#charWarning").show();
                    $("#charCount").css("color", "red");
                } else {
                    $("#charWarning").hide();
                    $("#charCount").css("color", "black");
                }
            });

        $("#phone").on('input', function() {
            var phoneValue = $(this).val();
            if (!/^\d*$/.test(phoneValue)) {
                $("#phoneWarning").show();
            } else {
            $("#phoneWarning").hide();
        }
    });
    $("#contactForm").on('mouseenter', function() {
        $("#additionalInfo").slideDown();
    });

    $("#contactForm").on('mouseleave', function() {
        $("#additionalInfo").slideUp();
    });

    $("#contactForm").on('submit', function(event) {
      var phoneValue = $("#phone").val();
      if ($("#message").val().length > maxChar) {
          event.preventDefault();
          alert("Mesajınız karakter sınırını aşıyor! " + maxChar + " karakter.");
      }
      if (!/^\d*$/.test(phoneValue)) {
        event.preventDefault();
        alert("Telefon numaranızı rakamla giriniz.");
      }
  });
});
$(document).ready(function() {
    var cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"];
    var maxChar = 200;

    $.each(cities, function(index, city) {
        $("#city").append(new Option(city, city.toLowerCase()));
    });

    $("#message").on('input', function() {
        var currentLength = $(this).val().length;
        $("#charCount").text(currentLength + "/" + maxChar);
        
        if (currentLength > maxChar) {
            $("#charWarning").show();
            $("#charCount").css("color", "red");
        } else {
            $("#charWarning").hide();
            $("#charCount").css("color", "black");
        }
    });
    $("#phone").on('input', function() {
        var phoneValue = $(this).val();
        if (!/^\d*$/.test(phoneValue)) {
            $("#phoneWarning").show();
        } else {
            $("#phoneWarning").hide();
        }
    });
    $("#contactForm").on('mouseenter', function() {
        $("#additionalInfo").slideDown();
    });

    $("#contactForm").on('mouseleave', function() {
        $("#additionalInfo").slideUp();
    });

    $("#contactForm").on('submit', function(event) {
        var valid = true;
        if ($("#name").val().trim() === "") {
            $("#nameWarning").show();
            valid = false;
        } else {
            $("#nameWarning").hide();
        }
        if ($("#email").val().trim() === "") {
            $("#emailWarning").show();
            valid = false;
        } else {
            $("#emailWarning").hide();
        }
        var phoneValue = $("#phone").val().trim();
        if (phoneValue === "") {
            $("#phoneRequiredWarning").show();
            valid = false;
        } else {
            $("#phoneRequiredWarning").hide();
            if (!/^\d*$/.test(phoneValue)) {
                $("#phoneWarning").show();
                valid = false;
            } else {
                $("#phoneWarning").hide();
            }
        }
        if ($("#city").val() === "") {
            $("#cityWarning").show();
            valid = false;
        } else {
            $("#cityWarning").hide();
        }
        if ($("#message").val().trim().length > maxChar) {
            $("#charWarning").show();
            valid = false;
        } else {
            $("#charWarning").hide();
            if ($("#message").val().trim() === "") {
                $("#messageWarning").show();
                valid = false;
            } else {
                $("#messageWarning").hide();
            }
        }
        if (!valid) {
            event.preventDefault();
        }
    });
});
$("#backButton").click(function() {
    window.history.back();
});
$("#closeButton").click(function() {
    window.open('', '_self', '');
    window.close();
});
$("#contactTitle").hover(
    function() {
        $(this).addClass("shake");
    },
    function() {
        $(this).removeClass("shake");
    }
);
$(document).ready(function() {
    $(".star").hover(function() {
        var rating = $(this).data("value");
        $(".star").each(function() {
            if ($(this).data("value") <= rating) {
                $(this).addClass("hovered");
            } else {
                $(this).removeClass("hovered");
            }
        });
    }, function() {
        $(".star").removeClass("hovered");
    });

    $(".star").click(function() {
        var rating = $(this).data("value");
        $("#ratingValue").text("Puan: " + rating);
        $(".star").each(function() {
            if ($(this).data("value") <= rating) {
                $(this).addClass("selected");
            } else {
                $(this).removeClass("selected");
            }
        });
    });
});
$(document).ready(function() {
        $("#popupMessage").fadeIn();
        $("#closePopupButton").click(function() {
            $("#popupMessage").fadeOut();
        });
    });