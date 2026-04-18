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


function hideBanner() {
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

if (localStorage.getItem('consentMode') === null) {

    document.getElementById('btn-accept-all').addEventListener('click', function() {
        setConsent({
            necessary: true,
            analytics: true
        });
        hideBanner();
    });
    document.getElementById('btn-accept-some').addEventListener('click', function() {
        setConsent({
            necessary: true,
            analytics: document.getElementById('consent-analytics').checked
        });
        hideBanner();
    });
    document.getElementById('btn-reject-all').addEventListener('click', function() {
        setConsent({
            necessary: false,
            analytics: false
        });
        hideBanner();
    });
    document.getElementById('btn-hide-banner').addEventListener('click', function() {
        hideBanner();
    });
    document.getElementById('cookie-consent-banner').style.display = 'block';
}

else {
    hideBanner();
}

function setConsent(consent) {
    const consentMode = {
        'functionality_storage': consent.necessary ? 'granted' : 'denied',
        'security_storage': consent.necessary ? 'granted' : 'denied',
        'analytics_storage': consent.analytics ? 'granted' : 'denied',
        
    };
    gtag('consent', 'update', consentMode);
    localStorage.setItem('consentMode', JSON.stringify(consentMode));
}
      