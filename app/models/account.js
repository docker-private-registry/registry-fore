import DS from 'ember-data';

export default DS.Model.extend({
  username  : DS.attr('string', { defaultValue: '' }),
  nickname  : DS.attr('string', { defaultValue: '' }),

  password  : DS.attr('string', { defaultValue: '' }),

  activeState : DS.attr('string', { defaultValue: '' })
});

