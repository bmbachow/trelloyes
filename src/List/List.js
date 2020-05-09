import STORE from '../store.js';
import React from '../react';
import Card from '../card';

function List(props){
  const listNumber = props.allCards.map((i, key) => {
  return (
    <Card 
    key = {key}
    id = {props.allCards[i].id}
    title = {props.allCards[i].title}
    content = {props.allCards[i].content}
    />
  )})
}


export default List;

