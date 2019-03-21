import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Warrior, Wizard, Monster} from './characters.js';
import {Item} from './items.js';
import {Battle} from "./battle.js";

function displayBattle(battle){

}

$(document).ready(function() {
  let player;
  let monster = new Monster("Shrek", 750, 2);
  let battle;
  $('#warrior').click(function() {
    player = new Warrior("", 90, 60, 1000);
    $('.pickName').show();
    $('#characterType').append(player.type);
    $('.playerSelector').hide();
  });

  $('#wizard').click(function() {
    player = new Wizard("", 60, 90, 1000);
    $('.pickName').show();
    $('#characterType').append(player.type);
    $('.playerSelector').hide();
  });

  $('#nameForm').submit(function(event){
    event.preventDefault();
    player.name = $('#inputName').val();
    $('.pickName').hide();
    $('.play').show();
    $('.playerName').append(player.name);
    $('.playerClass').append(player.type);
  });

  $('#begin').click(function() {
    $("#playArea").show();
    $("#beginQuest").hide();
  });

  $('#sword').click(function() {
    player.arm(Item.createSword());
    $("#itemChoice").hide();
    $("#fightOption").show();
    $("#inventory").append("Inventory: Sword");
  });

  $('#staff').click(function() {
    player.arm(Item.createStaff());
    $("#itemChoice").hide();
    $("#fightOption").show();
    $("#inventory").append("Inventory: Staff");
  });

  $('#none').click(function() {
    $("#itemChoice").hide();
    $("#fightOption").show();
    $("#inventory").append("Inventory: Empty!");
  });

  $('#fight').click(function() {
    $("#fightOption").hide();
    $(".battleArena").show();
    $("#combatButtons").show();
    battle = new Battle(player, monster);
  });

  $('#run').click(function() {
    $("#fightOption").hide();
    $(".youDie").show();
  });

  $('#attackPhysical').click(function() {
    $(".battleText").text(battle.executeTurn("physical"));
  });

  $('#attackMagical').click(function() {
    $(".battleText").text(battle.executeTurn("magical"));
  });


});
