import React from 'react'
import './listPage.scss';
import { listData } from '../../lib/dummydata.js'

export default function ListPage() {
  let data = listData;
  return (
    <div className='listPage'>listPage
    <div className="listContainer">list
      <div className="wrapper"></div>
    </div>
    <div className="mapContainer">map</div>
    </div>
  )
}
