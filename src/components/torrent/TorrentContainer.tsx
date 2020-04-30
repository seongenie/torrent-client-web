import React, { useState, useEffect } from 'react';
import { Itorrent } from './torrentSlice';
import Download from './download/Download';
import TorrentMenuBar from './TorrentMenuBar';

const TorrentContainer: React.FC = () => {
  const [fileList, setFileList] = useState(Array<Itorrent>());
  useEffect(() => {
    console.log(1233);
  }, [fileList.length]);
  return (
    <div className='torrent-container'>
      <TorrentMenuBar/>
      <Download>
      </Download>
    </div>
  );
};

export default TorrentContainer;