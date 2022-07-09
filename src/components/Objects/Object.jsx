import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useState } from 'react';
import s from './Object.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function Object({ item }) {
  const { id, order_type, account, terminal, status, created_date } = item;
  const [stat, setStat] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (status === 'new') {
      setStat('Новое');
      setColor('rgb(196, 4, 4)');
    } else if (status === 'declined') {
      setStat('Отменено');
      setColor('rgb(61, 61, 61)');
    } else if (status === 'completed') {
      setStat('Завершенно');
      setColor('rgb(0, 151, 0)');
    } else if (status === 'started') {
      setStat('Выполняется');
      setColor('rgb(56, 58, 197)');
    } else if (status === 'assigned_to') {
      setStat('Назначено');
      setColor('rgb(236, 155, 48)');
    }
  }, []);

  return (
    <Link to={`/info/${id}`} style={{textDecoration:"none"}}>
      <div className={s.object}>
        <div className={s.object_col}>
          №{id}
          <div className={s.sub_name}>
            <Moment format="YYYY-M-D H:m:s">{created_date}</Moment>
          </div>
        </div>
        <div className={s.object_col}>
          {order_type.name}
          <div className={s.sub_name}>Админов Т.Т.</div>
        </div>
        <div className={s.object_col}>
          {account.name}
          <div className={s.sub_name}>{terminal.name}</div>
        </div>
        <div className={s.object_col}>
          <div className={s.status} style={{ background: `${color}` }}>
            {stat}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Object;
