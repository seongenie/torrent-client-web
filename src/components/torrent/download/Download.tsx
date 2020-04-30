import React, { useState, useEffect } from 'react';
import { Itorrent } from './torrentSlice';


const Download: React.FC = () => {
  const [fileList, setFileList] = useState(Array<Itorrent>());
  useEffect(() => {
    console.log(1233);
  }, [fileList.length]);
  return (
    <>
    </>
  );
};

export default Download;