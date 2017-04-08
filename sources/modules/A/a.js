var ST = ST || {};

ST.CONTROL_A = (function() {

  return {

    init: function(element, data) {
      var view = this;
      view.el = $(element);
      view.variables();
    },

    variables: function() {
      var view = this;
      console.log(view)
    }
  }

});
