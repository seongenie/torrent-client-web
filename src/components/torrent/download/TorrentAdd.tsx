import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, TabPanel } from '@material-ui/core';


enum DownloadType {
  magnet,
  file
}



const TorrentAdd: React.FC = () => {
  const [downloadType, setDownloadType] = useState(DownloadType.magnet);




  setDownloadType(DownloadType.magnet);


  return </>;
}

export default TorrentAdd;