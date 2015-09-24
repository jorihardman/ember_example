import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: '1', name: 'foo', isCompleted: 'false'},
      {id: '2', name: 'bar', isCompleted: 'false'}
    ];
  },

  actions: {
    addTask(new_task) {
      var tasks = this.modelFor('tasks');
      tasks.addObject({id: '3', name: new_task});
    }
  }
});
