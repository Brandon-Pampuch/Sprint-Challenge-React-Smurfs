import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3333/smurfs").then(res => {
      const smurfs = res;
      this.setState({ smurfs: smurfs.data });
    });

  }

    addNewSmurf = (smurfs) =>{
      axios
      
    .post("http://localhost:3333/smurfs", smurfs)
    .then(res => {
      const smurfs = res.data;
      this.setState({ smurfs: smurfs });
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
    }
    deleteSmurf = (smurf) =>{
      axios
      
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
      const smurfs = res.data;
      this.setState({ smurfs: smurfs });
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
    }
  
  render() {
    return (
      <div>
      <header>
        <nav>
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/smurfs"}>form</NavLink>
        </nav>
      </header>
      <div className="App">
         <Route exact path={"/"} render={(props)=> <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} />
         <Route path={"/smurfs"} render={(props)=> <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />} />
      </div>
      </div>
    );
  }
}

export default App;
