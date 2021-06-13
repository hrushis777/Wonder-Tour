/* Author: Hrushi Sawant

*/
// Banner Slider Functionality Starts
$(document).ready(function () {
  $('.banner-slickslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    vertical: true,
  });
});
// Banner Slider Functionality Ends

// Blogs Slider Functionality starts
$(document).ready(function () {
  $('.blogs-slickslider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// Blogs Slider Functionality ends

// Gallery Slider Functionality starts
$(document).ready(function () {
  $('.gallery-slickslider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// Gallery Slider Functionality ends

// Scroll To Top Functionality starts
$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrolltotop').fadeIn();
    } else {
      $('.scrolltotop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrolltotop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
// Scroll To Top Functionality ends

// Hamburger Functionality
var html = document.getElementsByTagName('html')[0];
console.log(html);
var btn = document.getElementsByClassName('nav-btn')[0];
console.log(btn);
var nav = document.getElementsByTagName('nav')[0];
console.log(nav);
var ul = nav.getElementsByTagName('ul');
console.log(ul);

btn.addEventListener('click', function (event) {
  if (nav.className == '' || nav.className == 'navclose') {
    nav.className = 'navdiv';
    btn.classList.add('btncross');
    html.classList.add('scroll-lock');
  } else {
    nav.className = 'navclose';
    btn.classList.remove('btncross');
    html.classList.remove('scroll-lock');
  }
});

var html = document.getElementsByTagName('html')[0];
var timingbtn = document.getElementsByClassName('timing-button')[0];
var timinglist = document.getElementsByClassName('timing-list')[0];
var timinglistitem = timinglist.getElementsByTagName('li');

timingbtn.addEventListener('click', function (event) {
  if (timinglist.className == '' || timinglist.className == 'timingdiv') {
    timinglist.className = 'timingclose';
    // html.classList.add("scroll-lock");
  } else {
    timinglist.className = 'timingdiv';
    // html.classList.remove("scroll-lock");
  }
});

var fun = (function () {
  // Tabs Functionality starts
  var element = document.getElementById('nav-tab');
  var list = element.querySelectorAll('li');

  for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', onTabClick, false);
  }

  function onTabClick(e) {
    e.preventDefault();
    var activeTabs = document.querySelectorAll('.active');
    e.target.parentElement.className += 'active';
    document.getElementById(e.target.href.split('#')[1]).className += ' active';
    for (i = 0; i < activeTabs.length; i++) {
      activeTabs[i].className = activeTabs[i].className.replace('active', '');
    }
  }
})();

// counter functionality starts here
$(document).ready(function ($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom;
  }
  //Count up code
  function countUp() {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
        ended = $this.attr('ended');

      if (ended != 'true' && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr('ended', 'true');
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView('.counter')) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView('.counter')) {
      countUp();
    }
  });
});
// counter functionality ends here
