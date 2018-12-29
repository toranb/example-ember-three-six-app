import Component from '@ember/component';
import { connect } from 'ember-redux';
import { get } from '@ember/object';
import { action, computed } from '@ember-decorators/object';

const stateToComputed = function(state, attrs) {
  return {
    number: state.fooz,
    greeting: `Hello ${attrs.name}!`
  };
};

const dispatchToActions = (dispatch) => {
  return {
    up: () => dispatch({type: 'UP'})
  };
};

class MyClazz extends Component {
  @computed('greeting')
  get bar() {
    const someKey = get(this, 'greeting');
    return `${someKey} - bazbaz style`;
  }

  @action
  go() {
    window.console.log('clicked baz baz yo!');
    this.actions.up();
  }

  init() {
    super.init(...arguments);
    this.color = 'green';
  }
}

export default connect(stateToComputed, dispatchToActions)(MyClazz);
