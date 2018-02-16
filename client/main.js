import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.cadastrar.onCreated(function cadastrarOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.cadastrar.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.cadastrar.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    alert("teste");
  },
});
