Number.prototype.padLeft = function(n,str){
    return Array(n-String(this).length+1).join(str||'0')+this;
}

$(document).ready(function(){

  $('null').css('background-color','red');

  //$.ajax('http://giss.tv:8000/poney.ogg', {
  //$.ajax('http://ovh.legeox.net:8000/poney.ogg', {
  //  error: function() {
  //$('.media').show();
  //$('video').hide();
  //  }
  //});

  $.getJSON('jcdecaux.json')
  .done(function(data) {
    var items = [];
    $.each(data, function(key, val) {
      if(val) {
        if(val.number == 14126) {
          var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
          d.setUTCSeconds(0,val.last_update)


          $('#lastBikeUpdate').html(d.getDate().padLeft(2,0)+"/"+(d.getMonth()+1).padLeft(2,0)+"/"+d.getUTCFullYear()
              + ' ' + d.getHours().padLeft(2,0) + ':' + d.getMinutes().padLeft(2,0) + ':'  + d.getSeconds().padLeft(2,0));


          var availableBikes = val.available_bikes;
          $('#availableBike').html(availableBikes);
          $('#availableBike').css('color', availableBikes == 0 ? 'red' : 'black');

          var availableBikesStands = val.available_bike_stands;
          $('#availableBikeStands').html(availableBikesStands);
          $('#availableBikeStands').css('color', availableBikesStands == 0 ? 'red' : 'black');

          $('#totalBikeStands').html(val.bike_stands);
        }
      }
    });
  });
});
