$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1641264788', 
        accessToken: '1641264788.1677ed0.7d78a8b87c5d4e83993e37021b723d64',
        
        resolution: 'standard_resolution',
        useHttp: "true",
        limit: 100,
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
          
        sortBy: 'most-commented',
        after: function()
        {
            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 10,
                center: true,
                dots:false,
                nav:true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
                autoplay: true,
                autoWidth:true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
            })
          
        }
          
        });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});