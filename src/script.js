document.addEventListener("DOMContentLoaded", function () {
  var clickCount = 0;
  var dotIndex = 1;
  var lineIndex = 0;

  var logos = document.getElementById("logos");
  var logosWidth = 80;

  var titles = document.getElementById("titles");
  var titlesWidth = 509;

  var texts = document.getElementById("texts");
  var textsWidth = 420;

  var dates = document.getElementById("dates");
  var datesWidth = 532;

  var posters = document.getElementById("posters");
  var postersWidth = 430;

  document.getElementById("arrow-right").addEventListener("click", function () {
    clickCount++;

    var logoDistance = clickCount * logosWidth;
    var posterDistance = clickCount * postersWidth;
    var titleDistance = clickCount * titlesWidth;
    var textDistance = clickCount * textsWidth;
    var dateDistance = clickCount * datesWidth;

    var dot = document.getElementById("dot" + (dotIndex + 1));
    var line = document.getElementById("line" + (lineIndex + 1));

    logos.style.transform = `translateX(-${logoDistance}px)`;
    posters.style.transform = `translateX(-${posterDistance}px)`;
    titles.style.transform = `translateX(-${titleDistance}px)`;
    texts.style.transform = `translateX(-${textDistance}px)`;
    dates.style.transform = `translateX(-${dateDistance}px)`;

    dot.style.backgroundColor = `#fff38a`;
    line.style.backgroundColor = `#fff38a`;

    dotIndex = (dotIndex + 1) % 6 === 0 ? 6 : (dotIndex + 1) % 6;
    lineIndex = (lineIndex + 1) % 6 === 0 ? 6 : (lineIndex + 1) % 6;
  });

  document.getElementById("arrow-left").addEventListener("click", function () {
    clickCount--;

    var logoDistance = clickCount * logosWidth;
    var posterDistance = clickCount * postersWidth;
    var titleDistance = clickCount * titlesWidth;
    var textDistance = clickCount * textsWidth;
    var dateDistance = clickCount * datesWidth;

    dot = document.getElementById("dot" + dotIndex);
    line = document.getElementById("line" + lineIndex);

    logos.style.transform = `translateX(-${logoDistance}px)`;
    posters.style.transform = `translateX(-${posterDistance}px)`;
    titles.style.transform = `translateX(-${titleDistance}px)`;
    texts.style.transform = `translateX(-${textDistance}px)`;
    dates.style.transform = `translateX(-${dateDistance}px)`;

    dot.style.backgroundColor = `#827b68`;
    line.style.backgroundColor = `#827b68`;

    dotIndex = dotIndex - 1;
    lineIndex = lineIndex - 1;
  });
});
