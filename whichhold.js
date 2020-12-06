const regex = /property-(\d+)/;


function set_leashold_background(house){

   var house_div_id = house.id;
   var match = house_div_id.match(regex);
   var house_id = match[1];
   var link = `https://www.rightmove.co.uk/properties/${house_id}#/`
	$.get(link, function(data){
   		  data = data.toLowerCase();
    		  var isLeaseHold = data.includes('leasehold');
    		  if (isLeaseHold == true) {
    		    var t = `#${house_div_id}`;
    		    $(t).find('.propertyCard-moreInfo').css('background', '#ff0000');
    		    $(t).css('background','red');
    		    console.log(t + 'is leassehold');
    		  }
    		});
}

var houses = document.getElementsByClassName('l-searchResult');
for (var i = 0, l = houses.length; i < l; i++) {
   set_leashold_background(houses[i]);

    }
 

