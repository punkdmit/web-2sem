(function() {
    'use strict';
    var i = 0;
    window.onscroll = function() {
        console.log(document.querySelectorAll('.active'))

        var sections = document.querySelectorAll('.sectionn');
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i of sections) {
            console.log(i)
            if (i.offsetTop-100 <= scrollPosition) {
                console.log(scrollPosition)
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i.id + ']').setAttribute('class', 'active');
            }
        }
        console.log(document.querySelector('.active').href)

    };
})();

(function () {
    window.startTime = (new Date).getTime();
    window.addEventListener('load',function () {

        document.getElementById('time').innerHTML=((new Date).getTime() - window.startTime) + 'ms';
    });
})();


// (function () {
//     console.log(1)
//     console.log(window.document.body)
//     var section = window.document.body.querySelectorAll('.sectionn');
//     console.log(window.document.body)
//     window.document.body.querySelector('a[href*=' + section.id + ']').setAttribute('class', 'active');
//
//
// })();


