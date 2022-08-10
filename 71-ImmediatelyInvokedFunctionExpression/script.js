//"use strict"

(function () {
  console.log("This will neber run again!");
})();

(() => console.log("This will also never run again!"))();