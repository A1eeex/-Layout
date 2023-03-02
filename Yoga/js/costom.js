$(".about_classes_info_all").slick({
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: !0,
            dots: !0
        }
    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0
        }
    }]
}), $(".section_special_teacher_all").slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: !0,
            dots: !0
        }
    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
})
const modal = document.getElementById("modal");
const btn = document.getElementById("open-modal-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function SendMail() {
    const serviceID = 'service_2y2mail';
    const templateID = 'template_xzzkf2h';
    const params = {
        form_name: document.getElementById('full_name').value,
        email_form: document.getElementById('email_form').value,
        select_option_form: document.getElementById('select_option_form').value,
        message_form: document.getElementById('message_form').value
    }
    //service ID, template ID
    emailjs.send(serviceID, templateID, params).then(function (res) {
        document.getElementById('full_name').value=''
        document.getElementById('email_form').value=''
        document.getElementById('select_option_form').value=''
        document.getElementById('message_form').value=''
        console.log('success!' + res.status)
    })
        .catch((err) =>console.log(err));
}