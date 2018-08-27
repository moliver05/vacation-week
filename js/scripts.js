//BACKEND
function city (continent, season, climate, transportation, activity){
  this.continent= continent;
  this.season= season;
  this.climate= climate;
  this.transportation= transportation;
  this.activity= activity;
}

var vancouver = {continent:"North America", season:"Any", climate:"Mild", transportation:"Rental", activity:"Outdoors"};
var newyork = {continent:"North America", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
var jacksonhole = {continent:"North America", season:"Any", climate:"Ranges", transportation:"Public", activity:"Outdoors"};
var breckenridge = {continent:"North America", season:"Any", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
var yosemite = {continent:"North America", season:"Summer", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
var honolulu = {continent:"North America", season:"Summer", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
var bali = {continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var manila = {continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var phuket = {continent:"Asia", season:"Winter", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var sansebastian = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var barcelona = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var porto = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var santorini = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Getaway"};
var prague = {continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Outdoors"};
var paris = {continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Indoors"};
var london = {continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
var florence = {continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Outdoors"};
var dubai = {continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
var stlucia = {continent:"Surprise Me", season:"Any", climate:"Hot", Transportation:"Public", Activity:"Getaway"};
var sydney = {continent:"Surprise Me", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
//FRONTEND
$(document).ready(function(){

$("form#surveyQuestions").submit(function(event){
  event.preventDefault();
  var continent = $("input:radio[name=continent]:checked").val();
  var season = $("input:radio[name=season]:checked").val();
  var climate = $("input:radio[name=climate]:checked").val();
  var transportation = $("input:radio[name=transportation]:checked").val();
  var activity = $("input:radio[name=activity]:checked").val();


});

});
