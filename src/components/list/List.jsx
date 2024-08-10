import React from 'react'
import './list.scss';
import { listData } from '../../lib/dummydata';
import Card from '../Card/Card';

export default function List() {
  return (
    <div className="list">
        {
            listData.map((item)=>{
                return <Card key={item.id} item={item}></Card>
            })
        }
    </div>
  )
}
