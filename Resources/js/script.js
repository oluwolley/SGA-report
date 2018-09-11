$(function(){
   $('.js-section-features').waypoint(function(direction){
       if (direction =="down"){
           $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
           
       }
       
   },{offset:'60px'
   });
   
    $('.btn-full').click(function(){
    $('html, body').animate({scrollTop: $('.section-plan').offset().top}, 1000);    
    });
    
    $('.btn-ghost').click(function(){
    $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);    
    });
    
    $(function(){
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    
});
    
    $('.js-wp-1').waypoint(function(direction){
      $('.js-wp-1').addClass('animated fadeIn');  
                          
},
{offset:'50%'
 });
    $('.js-wp-2').waypoint(function(direction){
      $('.js-wp-2').addClass('animated fadeIn');  
                          
},
{offset:'50%'
 });
    
    
     $('.js-wp-3').waypoint(function(direction){
      $('.js-wp-3').addClass('animated fadeInUp');  
                          
},
{offset:'50%'
 });
    ('.js-wp-4').waypoint(function(direction){
      $('.js-wp-4').addClass('animated pulse');  
                          
},
{offset:'50%'
 });
    
});
/* MOBile nav */
$('.js-nav-icon').click(function(){
    var nav = $('.main-nav');
    var icon = $('.js-nav-icon i');
    
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round'))
{
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');

}else{
     icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
    
}})


// Modal 

$('.tab-list').each(function(){                   // Find lists of tabs
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.active');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
        id = this.hash;                           // Get href of clicked tab 

    if (id && !$link.is('.active')) {             // If not currently active
      $panel.removeClass('active');               // Make panel inactive
      $tab.removeClass('active');                 // Make tab inactive

      $panel = $(id).addClass('active');          // Make new panel active
      $tab = $link.parent().addClass('active');   // Make new tab active 
    }
  });
});