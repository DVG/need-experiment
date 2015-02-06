import Ember from 'ember';

export default Ember.Mixin.create({
  needs: ['application'],
  hello: Ember.computed.alias("controllers.application.hello")
});
