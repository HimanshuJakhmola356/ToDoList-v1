// nodejs/Docs/modules/ThemoduleObject

//Wapp this function , Do-> carry out all code and return result in root route
exports.getDate = function () {
//  generated the current date
 let today = new Date();

 let options = {
  weekday:'long',
  day:'numeric',
  month:'long'
};

return  today.toLocaleDateString('en-US', options);
};


exports.getDay = function() {
//  generated the current date
 let today = new Date();

 let options = {
  weekday:'long'
};

  return today.toLocaleDateString('en-US', options);


}
