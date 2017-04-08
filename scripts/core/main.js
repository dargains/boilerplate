var ST = ST || {};

ST.MAIN = (function() {

  return {
    init: () => {
      $('[data-control]').each(function(index, elem) {
        var data = $(elem).data(),
            control = data.control;

        if (!ST[control])
          return;

        if (typeof ST[control] === 'function') {
          var obj = new ST[control];
          obj.init(elem, data);
        } else if (typeof ST[control] === 'object') {
          ST[control].init(elem, data);
        }
      });
    }
  }
})();

$(document).ready(() => {
  ST.MAIN.init();
});
