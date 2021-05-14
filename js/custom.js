
$(document).ready(function() {

  /////////////////////////////


  $('#rangeend .popup.calendar .ui').click(function(e){
      $('#rangeend .popup.calendar').addClass('hide-calender');
  });
	//////////////////////////////////////

	$('.test').click(function(e){
    	$(this).parents(".d-flex").parent().toggleClass('open-options');
    });

   $('.commnet-btn-view').click(function(e){
    	$(this).parents(".settings-options").parent().toggleClass('open-comment');
    });

    $('.add-comment').click(function(e){
    	$(this).parents(".setting-box").parent().addClass('open-new-comment');
    });

    $('.custom-checkbox').click(function(e){
      $(this).parents(".settings-options").parent().toggleClass('open-search-box');
    });



     $('.card').each(function() {
        var $wrapper = $('.comment-add-box', this);
        $(".add-comment", $(this)).click(function(e) {
            $('.new-comment-box:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
        });
        $('.new-comment-box .remove-field', $wrapper).click(function() {
            if ($('.new-comment-box', $wrapper).length > 1)
                $(this).parent('.new-comment-box').remove();
        });
     });
    ////////////////////////////////////////

    $("input:checkbox").on('click', function() {
      var $box = $(this);
      if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
      } else {
        $box.prop("checked", false);
      }
    });


	///////////////////////

	$('.tab-content1').hide();
	$('#tab-1').show();

	$('#select-box').change(function () {
	   dropdown = $('#select-box').val();
	  $('.tab-content1').hide();
	  $('#' + "tab-" + dropdown).show();                                    
	});
    

    ////////////////////////

	$(".close-sidebar").click(function(){
	  $("#sidebarMenu").removeClass("show");
	});

	/////////////////////////////

	$(".view-single-invoice-card").click(function(){
		$(".invoice-card").toggleClass("close");
		$(".single-invoice-card").toggleClass("open");
	});

  $(".single-invoice-card .close-btn").click(function(){
    $(".invoice-card").removeClass("close");
    $(".single-invoice-card").removeClass("open");
  });


	///////////////////////////


(function () {
  var tagList = ['John Stones', 'John Stones'];

  var $tagList = $("#tagList");
  var $newTag = $("#newTag");

  tagList_render();
  
  function tagList_render () {
    $tagList.empty();
    tagList.map (function (_tag) {
      var temp = '<li>'+ _tag +'<span class="rmTag">&times;</span></li>';
      $tagList.append(temp);
    });
  };
  
  $newTag.on('keyup', function (e) {
    // enter keycode 13
    if (e.keyCode == 13) {
      var newTag = $("#newTag").val();
      if( newTag.replace(/\s/g, '') !== '' ){
        tagList.push(newTag);
        $newTag.val('');
        tagList_render();
      }
    }
  });
  
  $tagList.on("click", "li>span.rmTag", function(){
    var index = $(this).parent().index();
    tagList.splice(index, 1);
    tagList_render();
  });
})();

//////////////////////

(function () {
  var tagList2 = ['John Stones', 'John Stones'];

  var $tagList2 = $("#tagList2");
  var $newTag2 = $("#newTag2");

  tagList2_render();
  
  function tagList2_render () {
    $tagList2.empty();
    tagList2.map (function (_tag) {
      var temp = '<li>'+ _tag +'<span class="rmTag">&times;</span></li>';
      $tagList2.append(temp);
    });
  };
  
  $newTag2.on('keyup', function (e) {
    // enter keycode 13
    if (e.keyCode == 13) {
      var newTag2 = $("#newTag2").val();
      if( newTag2.replace(/\s/g, '') !== '' ){
        tagList2.push(newTag2);
        $newTag2.val('');
        tagList2_render();
      }
    }
  });
  
  $tagList2.on("click", "li>span.rmTag", function(){
    var index = $(this).parent().index();
    tagList2.splice(index, 1);
    tagList2_render();
  });
})();


//////////////////////

(function () {
  var tagList3 = ['John Stones', 'John Stones'];

  var $tagList3 = $("#tagList3");
  var $newTag3 = $("#newTag3");

  tagList3_render();
  
  function tagList3_render () {
    $tagList3.empty();
    tagList3.map (function (_tag) {
      var temp = '<li>'+ _tag +'<span class="rmTag">&times;</span></li>';
      $tagList3.append(temp);
    });
  };
  
  $newTag3.on('keyup', function (e) {
    // enter keycode 13
    if (e.keyCode == 13) {
      var newTag3 = $("#newTag3").val();
      if( newTag3.replace(/\s/g, '') !== '' ){
        tagList3.push(newTag3);
        $newTag3.val('');
        tagList3_render();
      }
    }
  });
  
  $tagList3.on("click", "li>span.rmTag", function(){
    var index = $(this).parent().index();
    tagList3.splice(index, 1);
    tagList3_render();
  });
})();

});



