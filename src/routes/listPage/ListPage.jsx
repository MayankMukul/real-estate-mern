import React from 'react'
import './listPage.scss';
import { listData } from '../../lib/dummydata.js'
import Filter from '../../components/filter/Filter.jsx';
import Card from '../../components/Card/Card.jsx';

export default function ListPage() {
  let data = listData;
  return (
    <div className='listPage'>listPage
    <div className="listContainer">list
      <div className="wrapper">
        <Filter/>
        {
          data.map((item) => {
            return <Card item={item} key={item.id}></Card>
          })
        }
      </div>
    </div>
    <div className="mapContainer">map</div>
    </div>
  )
}
