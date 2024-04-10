import { useSelector, useDispatch, connect } from 'react-redux'
import './App.css'
import { counterActions } from './store/store'
import Auth from './Auth';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const handleToggleCounter = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <div className='h-screen py-1 flex flex-col justify-center'>
      <Auth />
      <div>
        <h2>Counter</h2>
        <hr />
        {showCounter && (<p>{counter}</p>)}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          &nbsp;
          <button onClick={increaseHandler}>Increase By 10</button>
          &nbsp;
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <hr />
        <button onClick={handleToggleCounter}>
          Toggle Counter
        </button>
      </div>
    </div>
  )
}

export default App;
