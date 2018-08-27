//BACKEND
function city (continent, season, climate, transportation, activity){
  this.continent
  this.season
  this.climate
  this.transportation
  this.activity
}

city.prototype.plan = function(){
  return this.continent
}

//FRONTEND
$(document).ready(function(){

$("form#surveyQuestions").submit(function(event){
  event.preventDefault();


});

});
