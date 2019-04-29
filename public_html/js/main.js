/* 
    Created on : 31/01/2019, 11:08:00 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

var vue = new Vue({ 
    el: '#components-demo' 
});

var vue2 = new Vue({ 
    el: '#components-demo2' 
});
