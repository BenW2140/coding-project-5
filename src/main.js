import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from './../src/planet-age-calculator.js';
import { numberOfMayflies } from './../src/planet-age-calculator.js'

$(document).ready(function() {
  $('#user-info').submit(function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const age = parseInt($('#age').val());
    const sunAge = 4603000000;
    const planet = $('#planet').val();
    const gender = $('#gender').val();
    const nationality = $('#nationality').val();
    const user = new User(name, age, planet, gender, nationality);
    $('.planet-input').text(planet);
    $('.planet-age').text(user.calculatePlanetAge(age, planet));
    const lifeExpectancy = user.calculateLifeExpectancy(gender, nationality);
    $('.space-years').text(user.calculatePlanetLifeExpectancy(lifeExpectancy, age, planet));
    $('#over').show();
    $('#under').show();
    if (age < lifeExpectancy) {
      $('#over').hide();
    } else {
      $('#under').hide();
    }
    $('#mayflies-user').text(numberOfMayflies(age));
    $('#mayflies-sun').text(numberOfMayflies(sunAge));
    $('#output').show();
  });
});