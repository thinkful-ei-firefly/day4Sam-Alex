'use strict';

function decoder(num) {
  if (num%15===0) {
    return `
      <div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>
      `;
  }
  if (num%5===0) {
    return `
      <div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>
    `;
  }
  if (num%3===0) {
    return `
      <div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>
    `;
  }
  return `
    <div class="fizz-buzz-item">
      <span>${num}</span>
    </div>
  `;
}

function writer(num) {
  for (let i=1; i<=num; i++) {
    $('.js-results').append(decoder(i));
  }
}

function start() {
  $('#number-chooser').submit(function() {
    event.preventDefault();
    let numChoice = $('#number-choice');
    writer(numChoice.val());
    numChoice.val('');
    
  });
  console.log('page loaded');
}

$(start);
