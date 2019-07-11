function changeCatPicture() {
  $('.thumbnail').on('click', e => {
    console.log(e.target);
    const selectPicture = $(event.currentTarget).html()
    $('.hero').html(selectPicture);  
  });
}
$(changeCatPicture);