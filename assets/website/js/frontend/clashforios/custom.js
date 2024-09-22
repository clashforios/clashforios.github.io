$(document).ready(function(){
    "use strict";
    // Sticky Header Init
    if ( $('.sticky-header').length ){
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(function() {
          var header = $(".sticky-header");
          $(".sticky-header").closest('header').height( $("header").height() );
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();
              if (scroll >= 150) {
                  header.removeClass('affix-top').addClass("affix");
              } else {
                  header.removeClass("affix").addClass('affix-top');
              }
          });
        });
      }
    }
    // Search Popup Init
    if ( $('.control').length ){
      $('.control').click( function(){
        $('body').addClass('search-active');
        $('.input-search').focus();
      });
    }
    if ( $('.icon-close').length ){
      $('.icon-close').click( function(){
        $('body').removeClass('search-active');
      });
    }
    // About Us Section Init
    if ( $('.main-content .about-us-2:first-child').length ){
      // body...
      $('.main-content .about-us-2:first-child').each(function(){
         $(this).parent('.main-content').addClass('about-us-2-outer');
         $('.about-us-2-outer').siblings('.main-banner').addClass('main-banner-about-2');
      });
    }

    // Isotop Filter Init
    if ( $('.masonry-grid').length ){
        var fselector = 0,
        itemsGrid = $(".masonry-grid");
        (function($) {
            "use strict";
            var isotopeMode;
            if (itemsGrid.hasClass("masonry")) {
                isotopeMode = "masonry";
            } else {
                isotopeMode = "fitRows"
            }
            itemsGrid.imagesLoaded(function() {
                itemsGrid.isotope({
                    itemSelector: '.port-item',
                    layoutMode: isotopeMode,
                    filter: fselector
                });
            });
        })(jQuery);
    }
    // Masonry Init
    if ( $('.masonry').length ){
      $(".masonry").imagesLoaded(function() {
        $(".masonry").masonry();
      });
    }
    // Main Menu Navigation Init
    if ( $('.main-menu nav').length ){
      $('.main-menu nav').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
      });
    }
    // Main Slider Init
    if ( $('.main-slider').length ){
      $(".main-slider").slick({
            arrows: false,
            fade: false,
            dots: true,
            fade:true,
        });
    }
    // Testimonial Slider Insti
    if ( $('.testimonial-slider').length ){
      $('.testimonial-slider').slick({
          slidesToShow: 2,
          arrows: false,
          fade: false,
          dots: false,
          fade:false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }, {
              breakpoint: 481,
              settings: {
                  slidesToShow: 1
              }
          }]
      });
    }
    // Brand Slider Init
    if ( $('.brand-slider').length ){
      $('.brand-slider').slick({
          slidesToShow: 6,
          arrows: false,
          fade: false,
          dots: false,
          fade:false,
          responsive: [{
              breakpoint: 992,
              settings: {
                  slidesToShow: 5
              }
          }, {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3
              }
          }, {
              breakpoint: 481,
              settings: {
                  slidesToShow: 1
              }
          }]
      });
    }
    if ( $('#map-canvas').length ){
      initMap();
    };
  });
  // Brand Slider Init
  function initMap(){
    var gmMapDiv = $("#map-canvas");
    (function($){

        var gmCenterAddress = gmMapDiv.attr("data-address");
        var gmMarkerAddress = gmMapDiv.attr("data-address");
        var gmstreetViewControl = gmMapDiv.attr("data-view");
        
        gmMapDiv.gmap3({
            action: "init",
            marker: {
                address: gmMarkerAddress,
                options: {
                    icon: "images/loc-marker.png" /* Location marker */
                }
            },
            map: {
                options: {
                    zoom: 17,
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    mapTypeControl: false, /* hide/show (false/true) mapTypeControl*/
                    scaleControl: false, /*hide/show (false/true) scaleControl */
                    scrollwheel: false, /*hide/show (false/true) scrollwheel*/
                    streetViewControl: gmstreetViewControl, /*hide/show (false/true) streetViewControl*/
                    draggable: true,
                    styles:[ 
                      {
                          "featureType": "administrative.country",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "visibility": "simplified"
                              },
                              {
                                  "hue": "#ff0000"
                              }
                          ]
                      }
                    ] /*CHANGE STYLE (colors and etc.) */
                }
            }
        });

    })(jQuery);
  }