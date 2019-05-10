import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Smurf from './Smurf';

class Smurfs extends Component {



deleteSmurf = (smurf) =>{
this.props.deleteSmurf(smurf)
}



  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {

            return (
              <div>
             <Link to={"/smurfs"}><Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                /></Link>
                <button onClick={()=> this.deleteSmurf(smurf)}>delete</button>
                </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
