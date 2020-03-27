$(document).ready(function(){
  $("#questions").submit(function(event){
    event.preventDefault();
    console.log($('input:checkbox:checked'))
    var checkedNum = $('input:checkbox:checked').length
    var result1 = "You are a professional nerd!"
    var result2 = "There is quite a chance that you would be a nerd, practice more."
    var result3 = "Yea yea yea, you are so cool."
    // console.log(checkedNum);    
    if (checkedNum > 6){
      $('#result').show();
      $('p').text(result1);
    } else if (checkedNum <= 6 && checkedNum >= 4){
      $('#result').show();
      $('p').text(result2);
    } else {
      $('#result').show();
      $('p').text(result3);
    }

   });
});