import NumberButton from './NumberButton';
import ClickMeButton from './ClickMeButton';

const NUMBERS = [1, 2, 3, 4, 5];

const Counter = ({ count, clickHandler }) => (
  <>
    <h1>Counter</h1>
    <ClickMeButton count={count} clickHandler={() => clickHandler(1)} />
    <div>
      {NUMBERS.map((number) => (
        <NumberButton
          key={number}
          number={number}
          clickHandler={() => clickHandler(number)}
        />
      ))}
    </div>
  </>
);

export default Counter;
