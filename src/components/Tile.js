import React from 'react';

//has no class stateless component
const Tile = (props) => {
  const double = props.size === 2 ? '200px' : '';
  return (
    <div
      onClick={props.show}
      style={{width: double}}
      className='tile'
    >
      <h5>
        { props.symbol }
      </h5>
    </div>
  );
}

export default Tile;
