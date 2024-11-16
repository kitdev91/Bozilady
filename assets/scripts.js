// const agreeCheckbox = document.querySelector("#agree");
// const agreeButton = document.querySelector("#agreeButton");

// agreeButton.href = "";
// agreeButton.innerHTML = "Cancel";

// agreeCheckbox.addEventListener("change", () => {
//     if (agreeCheckbox.checked) {
//         agreeButton.href = "https://squareup.com/appointments/book/ujdxbo54uafruw/L4NWXG0218M8G/start";
//         agreeButton.innerHTML = "Book Now";
//     } else {
//         agreeButton.href = "";
//         agreeButton.innerHTML = "Cancel";
//     }
//   });

var count = 0;

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(
        document).offset().top + $(document).
            outerHeight() - window.innerHeight && count <= 0 ) {

         $("#noticeModal").modal('show');
         count++;
    }
}); 