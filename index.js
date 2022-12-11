// const express = require('express');
// const app = express();

// app.listen(3000, ()=> console.log("port listening on 3000!"))

console.log("Helloooooooooooo!");

$(document).ready(function () {
    $(".owl_content").owlCarousel({

        addClassActive: true, //important
        items: 5,
        nav: true,
        loop: true,
        autoPlay: 2500,
        touchDrag: false,
        mouseDrag: false,
        afterAction: function add_mid_class(el) {
            $('.owl-item')
                .removeClass('middle')
                .removeClass('middle_besideleft')
                .removeClass('middle_besideright')
                .removeClass('next_to_mid')
                .removeClass('prev_to_mid');
            var middle_item = Math.floor($('.active').length / 2);
            middle_item--;
            $('.active').eq(middle_item - 1).addClass('middle_besideleft');
            $('.active').eq(middle_item).addClass('middle');
            $('.active').eq(middle_item + 1).addClass('middle_besideright');
            $('.active').eq(middle_item + 1).nextAll().addClass('next_to_mid');
            $('.active').eq(middle_item - 1).prevAll().addClass('prev_to_mid');
        }
    });

    var owl = $(".owl_content").data('owlCarousel');
    $('.owl_wrapper .next').click(function () { owl.next(); });
    $('.owl_wrapper .prev').click(function () { owl.prev(); });


    var rotation = 0;

    jQuery.fn.rotate = function (degrees) {
        $(".wheel").css({ 'transform': 'rotate(' + degrees + 'deg)' });
        return $(".wheel");
    };

    $('.next').click(function () {
        rotation += 36;
        $(".wheel").rotate(rotation);
    });
    $('.prev').click(function () {
        rotation += -36;
        $(".wheel").rotate(rotation);
    });
    const myTimeout = setTimeout(myGreeting, 2500);

    function myGreeting() {
        rotation += 36;
        $(".wheel").rotate(rotation);
        setTimeout(myGreeting, 2500);
    }

});