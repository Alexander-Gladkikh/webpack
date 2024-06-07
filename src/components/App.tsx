import React, {useState} from 'react';
import classes from './App.module.scss'

export const App = () => {

  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  return (
    <div>
      {count}
      <button className={classes.button} onClick={increment}><span>increment</span></button>
    </div>
  );
};
