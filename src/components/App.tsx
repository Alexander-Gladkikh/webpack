import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/calendar.svg';

export const App = () => {

  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  return (
    <div>
      <div>
        <img width={100} height={100} src={avatarPng}/>
        <img width={100} height={100} src={avatarJpg}/>
      </div>

      <div>
        <Calendar color={'red'} width={100} height={100}  />
      </div>

      <Link to={'/about'}>about</Link>
      <br/>
      <Link to={'/shop'}>shop</Link>
      {count}
      <button className={classes.button} onClick={increment}><span>increment</span></button>
      <Outlet/>
    </div>
  );
};
