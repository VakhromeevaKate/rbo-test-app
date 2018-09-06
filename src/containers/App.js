import { connect } from 'react-redux';
import Component from '../components/App';
import * as actionCreators from '../actions';
import { autosSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: autosSelector(state),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;