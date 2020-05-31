'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BORDER_GAP = 5;
var GAP = 10;
var FONT_GAP = 15;
var COLUMN_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 20;
var titles = ['Ура вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (elements) {
  var maxElement = elements[0];

  for (var i = 0; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }

  return maxElement;
};

function renderTitle(ctx, elements) {
  var titleHeight = 0;
  ctx.font = '16px PT Mono';
  for (var i = 0; i < elements.length; i++) {
    ctx.fillText(elements[i], CLOUD_X + BORDER_GAP + GAP, CLOUD_Y + BORDER_GAP + (GAP + FONT_GAP) * (i + 1));
    titleHeight += (GAP + FONT_GAP) * (i + 1);
  }
  return titleHeight;
}

var getRandomNumber = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  var titleHeight = renderTitle(ctx, titles);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    var currentColumnHeight = BAR_HEIGHT * times[i] / maxTime;
    var barPositionX = CLOUD_X + BORDER_GAP + GAP * 3 + (BAR_WIDTH + COLUMN_GAP) * i;
    var barPositionY = CLOUD_Y + BORDER_GAP + titleHeight + GAP + BAR_HEIGHT;

    ctx.fillText(
        Math.floor(times[i]),
        barPositionX,
        barPositionY - currentColumnHeight
    );

    ctx.fillText(
        players[i],
        barPositionX,
        barPositionY + FONT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomNumber(100) + '%, 50%)';
    }

    ctx.fillRect(
        barPositionX,
        barPositionY + FONT_GAP - currentColumnHeight,
        BAR_WIDTH,
        currentColumnHeight - TEXT_HEIGHT - GAP
    );
  }
};
