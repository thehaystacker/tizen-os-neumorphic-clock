(function ($) {
  $(function () {
    var initClock = function () {
      var deg = 6;
      var _elHr = document.getElementById("hr");
      var _elMn = document.getElementById("mn");
      var _elSc = document.getElementById("sc");

      var updateTime = function () {
        var day = new Date();
        var hh = day.getHours() * 30;
        var mm = day.getMinutes() * deg;
        var ss = day.getSeconds() * deg;

        _elHr.style.transform = "rotateZ(" + (hh + mm / 12) + "deg)";
        _elMn.style.transform = "rotateZ(" + mm + "deg)";
        _elSc.style.transform = "rotateZ(" + ss + "deg)";
      };

      setInterval(updateTime, 1000);
    };

    $.caph.focus.activate(function (
      nearestFocusableFinderProvider,
      controllerProvider
    ) {
      controllerProvider.onFocused(function (event, originalEvent) {
        $(event.currentTarget).css({
          border: "3px solid red",
        });
      });

      controllerProvider.onBlurred(function (event, originalEvent) {
        $(event.currentTarget).css({
          border: "3px solid transparent",
        });
      });

      controllerProvider.onSelected(function (event, originalEvent) {
        $(event.currentTarget).toggleClass("selected");
      });
    });

    initClock();
  });
})(jQuery);

// //Initialize function
// var init = function () {
//     // TODO:: Do your initialization job
//     console.log('init() called');

//     document.addEventListener('visibilitychange', function() {
//         if(document.hidden){
//             // Something you want to do when hide or exit.
//         } else {
//             // Something you want to do when resume.
//         }
//     });

//     // add eventListener for keydown
//     document.addEventListener('keydown', function(e) {
//     	switch(e.keyCode){
//     	case 37: //LEFT arrow
//     		break;
//     	case 38: //UP arrow
//     		break;
//     	case 39: //RIGHT arrow
//     		break;
//     	case 40: //DOWN arrow
//     		break;
//     	case 13: //OK button
//     		break;
//     	case 10009: //RETURN button
// 		tizen.application.getCurrentApplication().exit();
//     		break;
//     	default:
//     		console.log('Key code : ' + e.keyCode);
//     		break;
//     	}
//     });
// };
// // window.onload can work without <body onload="">
// window.onload = init;

// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('divbutton1').innerHTML='Current time: ' + h + ':' + m + ':' + s;
//     setTimeout(startTime, 10);
// }

// function checkTime(i) {
//     if (i < 10) {
//         i='0' + i;
//     }
//     return i;
// }
