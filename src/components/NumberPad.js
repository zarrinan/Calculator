import React, { Component }from 'react';
import Tile from './Tile';
import data from '../data';

class NumberPad extends Component{

 renderTiles() {
   return data.map((tile,i) => {
     console.log(typeof(tile.symbol))
     return (
      <Tile key={i} size={tile.size ? tile.size : ''} symbol={tile.symbol} show={this.props.show}/>
     )
   });
 }

 render() {
  return (
    <div className="number_pad">
      { this.renderTiles() }
    </div>
  )
 }
}

export default NumberPad;
