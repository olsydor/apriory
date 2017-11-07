$(document).ready(function () {
        $('.bars').click(function () {
          if ($(this).is('.active')){
          $(this).removeClass('active')
          $('.menu').slideUp(500)
        }else{
          $(this).addClass('active')
          $('.menu').slideDown(500)
        }
        })
      })
