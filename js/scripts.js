// Enables Tool Tip 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Nav on Scroll Add Class 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	if (scroll >= 100) {
        $(".agenda-day-nav").addClass("on-scroll-agenda");
     } else {
        $(".agenda-day-nav").removeClass("on-scroll-agenda");
    }
});

// Dynamically add the +/- icon
$(document).ready(function() {
	$('.collapse:has(.card-body)').prev('.card-header').prepend('<i class="fa fa-plus pull-right"></i> ');
	$('.card-header').click(function() {
		$(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
	});
});

// Toggle +/- icon
$(document).ready(function() {
	$('#toggle').click(function() {
		if ($('#content .collapse').hasClass('show')) {
			$('#content .collapse').removeClass('show');
			$('#toggle').html('+ Expand All Session Details');
			$('.card-header').children('i').removeClass('fa-minus').addClass('fa-plus');
 		} else {
			$('#content .collapse').addClass('show');
			$('#toggle').html('- Collapse All Session Details');
			$('.card-header').children('i').removeClass('fa-plus').addClass('fa-minus');
 		}
	});
});
 
// Sorting
$(document).ready(function() {
    $('input[type=radio][name=group1]').change(function() {

        if (this.value == 'tracktype-break-meal') {
			$('.card , h4.text-secondary').attr('hidden',true);
   			$(".card.tracktype-break-meal").attr('hidden',false);
        }
        if (this.value == 'tracktype-keynote') {
			$('.card , h4.text-secondary').attr('hidden',true);
  			$(".card.tracktype-keynote").attr('hidden',false);
        }
        if (this.value == 'tracktype-panel-discussion') {
			$('.card , h4.text-secondary').attr('hidden',true);
  			$(".card.tracktype-panel-discussion").attr('hidden',false);
        }
        if (this.value == 'tracktype-round-table') {
			$('.card , h4.text-secondary').attr('hidden',true);
  			$(".card.tracktype-round-table").attr('hidden',false);
        }
    });
});
  
// Clear Sorting
$('#clearAllButton').click(function() {
	$('input[type=radio]').prop('checked', false);
	$(".card , h4.text-secondary").attr('hidden',false);
});
 
// Filter Menu
$('.filter_button').on('click', function() {
	if ($("#filter-menu").attr("hidden")) {
    	$("#filter-menu").attr("hidden", false);
	} 
	else 
		$("#filter-menu").attr("hidden", true);
}); 
