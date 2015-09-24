import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var tasks = this.modelFor('tasks');
    return tasks.findBy('id', params.id);
  },

  actions: {
    deleteTask(task) {
      var tasks = this.modelFor('tasks');
      tasks.removeObject(task);
      this.transitionTo('tasks');
    }
  }
});
