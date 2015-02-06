import Ember from 'ember';
import HiMixin from 'needs/mixins/hi';

module('HiMixin');

// Replace this with your real tests.
test('it works', function() {
  var HiObject = Ember.Object.extend(HiMixin);
  var subject = HiObject.create();
  ok(subject);
});
