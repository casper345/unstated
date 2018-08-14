// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider, Subscribe, Carrier } from '../src/unstated';

type CounterState = {
  count: number
};

class CounterCarrier extends Carrier<CounterState> {
  state = { count: 0 };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}

function Counter() {
  return (
    <Subscribe to={[CounterCarrier]}>
      {counter => (
        <div>
          <button onClick={() => counter.decrement()}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  );
}

render(
  <Provider>
    <Counter />
  </Provider>,
  window.simple
);
