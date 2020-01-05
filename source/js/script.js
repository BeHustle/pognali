$('.travel-filter__slider').removeClass('d-none');
$('.travel-filter__slider').slider({
  min: 0,
  max: 100,
  values: [30,100],
  range: true,
  stop: function(event, ui) {
    $(".travel-filter__level-number--min").val($(".travel-filter__slider").slider("values",0));
    $(".travel-filter__level-number--max").val($(".travel-filter__slider").slider("values",1));
  },
  slide: function(event, ui){
    $(".travel-filter__level-number--min").val($(".travel-filter__slider").slider("values",0));
    $(".travel-filter__level-number--max").val($(".travel-filter__slider").slider("values",1));
  }
});
