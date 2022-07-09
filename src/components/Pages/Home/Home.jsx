import React from 'react';
import ObjectInfo from '../../Objects/ObjectInfo';
import Paginations from '../../../constant/Paginations';

import { useDispatch, useSelector } from 'react-redux';
import { infoObjects } from '../../../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [objectPerPage] = useState(5);
  const dispatch = useDispatch();
  const info = useSelector((state) => {
    const { getInfoReducer } = state;
    return getInfoReducer.data;
  });
  useEffect(() => {
    dispatch(infoObjects());
  }, []);

  const lastIndex = currentPage * objectPerPage;
  const firstIndex = lastIndex - objectPerPage;
  const currentObject = info.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return <div>
    <ObjectInfo currentObject={currentObject} />
      <div className="paginations">
        <Paginations 
        objectPerPage={objectPerPage} 
        info={info.length} 
        paginate={paginate} />
      </div>
  </div>;
}

export default Home;
