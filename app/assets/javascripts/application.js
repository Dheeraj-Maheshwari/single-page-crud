// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery_nested_form
//= require bootstrap
//= require_tree .

//_form

function validate() {
 if( document.myform.name.value == "" ) {
  alert( "Please provide your name!" );
  document.myform.name.focus() ;
  return false;
  }
  if( document.myform.details.value == "" ) {
    alert( "Please provide your details!" );
    document.myform.details.focus() ;
    return false;
  }
  if( document.myform.price.value == "" ) {
    alert( "Please provide your price!" );
    document.myform.price.focus() ;
    return false;
  }
  if( document.myform.pic.value == "" ) {
    alert( "Please provide picture!" );
    document.myform.pic.focus() ;
    return false;
  }
}

function validateFiles(inputFile) {
  var maxExceededMessage = "This file exceeds the maximum allowed file size (5 MB)";
  var extErrorMessage = "Only image file with extension: .jpg, .jpeg, .gif or .png is allowed";
  var allowedExtension = ["jpg", "jpeg", "gif", "png"];

  var extName;
  var maxFileSize = $(inputFile).data('max-file-size');
  var sizeExceeded = false;
  var extError = false;

$.each(inputFile.files, function() {
  if (this.size && maxFileSize && this.size > parseInt(maxFileSize)) {sizeExceeded=true;};
  extName = this.name.split('.').pop();
  if ($.inArray(extName, allowedExtension) == -1) {extError=true;};
});
if (sizeExceeded) {
  window.alert(maxExceededMessage);
  $(inputFile).val('');
};

if (extError) {
  window.alert(extErrorMessage);
  $(inputFile).val('');
};
}

//_index
  $(document).ready(function() {
    $(".show_link").click(function() {
	    $(this).hide();
        });
    });

//index
$(document).ready(function(){
  $("#new_edit_product").click(function(){
    $('#add_product').toggle();
  });
});
