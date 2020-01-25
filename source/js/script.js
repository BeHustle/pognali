$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 200) {
    $('.page-header').addClass('page-header--scrolled');
  } else {
    $('.page-header').removeClass('page-header--scrolled');
  }
});

$('.page-header').addClass('page-header--js')
$('.page-header__toggle-menu').click(function (evt) {
  evt.preventDefault()
  $('.page-header--js').toggleClass('page-header--opened')
});

$('.rates__modal-show').click(function (evt) {
  evt.preventDefault()
  $('.modal').removeClass('d-none')
});

$('.modal__close-btn').click(function (evt) {
  evt.preventDefault()
  $('.modal').addClass('d-none')
});

$('.travel-filter__fieldset').removeClass('travel-filter__fieldset--opened');

$('.travel-filter__show-btn').click(function (evt) {
  evt.preventDefault()
  $(this).parent().toggleClass('travel-filter__fieldset--opened')
});

$('.travel-filter__slider').removeClass('d-none');
$('.travel-filter__slider').slider({
  min: 0,
  max: 100,
  values: [30, 100],
  range: true,
});

$('#alphabet-catalog').addClass('d-none');
$('.countries-filter__countries-container').addClass('d-none');
$('.countries-filter__hide-btn').addClass('d-none');
$('#continents-catalog').addClass('d-none');

enquire.register('screen and (min-width: 728px)', {
  match: function () {
    $('#continents-catalog').removeClass('d-none');
  }
});

function toggleFilterCatalog(className) {
  enquire.register('screen and (max-width: 727px)', {
    match: function () {
      $('#continents-catalog').toggleClass(className);
    }
  });
  $('#alphabet-catalog').toggleClass('d-none');
  $('.countries-filter__countries-container').toggleClass('d-none');
  $('.countries-filter__hide-btn').toggleClass('d-none');
  $('.countries-filter__toggle-desc').toggleClass('d-none');
}

$('.countries-filter__toggle-btn').click(function (evt) {
  evt.preventDefault();
  toggleFilterCatalog('d-none')
});

$('.countries-filter__hide-btn').click(function (evt) {
  evt.preventDefault();
  toggleFilterCatalog('d-none')
});

$('.country-select__button').click(function (evt) {
  evt.preventDefault();
  $('.alphabet-modal').removeClass('d-none');
});

$('.alphabet-modal__close').click(function (evt) {
  evt.preventDefault();
  $('.alphabet-modal').addClass('d-none');
});

$('.country-select__del-btn').click(function (evt) {
  evt.preventDefault();
  $(this).parent().remove();
});

$('.input-numbers__btn--reduce').click(function (evt) {
  evt.preventDefault();
  $(this).siblings('.input-numbers__input').get(0).value--;
});

$('.input-numbers__btn--increase').click(function (evt) {
  evt.preventDefault();
  $(this).siblings('.input-numbers__input').get(0).value++;
});

$('.transport__button').click(function (evt) {
  evt.preventDefault();
  $(this).toggleClass('transport__button--active');
});

$('.companion-catalog__likes').click(function (evt) {
  evt.preventDefault();
  $(this).toggleClass('companion-catalog__likes--favourite');
});
