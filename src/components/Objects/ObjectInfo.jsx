import React, { useState } from 'react';
import Object from './Object';

import s from './ObjectInfo.module.scss';

function ObjectInfo( { currentObject } ) {
  return (
    <>
      <div className={s.name_col}>
        <div>Номер / Дата</div>
        <div>Тип задания / Автор</div>
        <div>Аккаунт / Терминал</div>
        <div>Статус</div>
      </div>
      <div className={s.item}>
        {currentObject.map((item) => {
          return <Object key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default ObjectInfo;
