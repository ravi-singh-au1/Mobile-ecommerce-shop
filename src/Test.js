import React, { Component } from "react";
import Child from '../src/child'
class Test extends Component {
  userData;
  constructor(props) {
    super(props);
    // this.state = {
    //   monster: []
    // };
    // this.backRef = null;
    // this.setBackRef = element => {
    //   this.backRef = element;
    // };
    this.state = {
      name: '',


      email: '',
      phone: '',
      password: ''

    }

  }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     // fetch(
  //     //   "https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i60l3j69i65l3j69i60.5838j0j7&sourceid=chrome&ie=UTF-8"
  //     // )
  //     .then(response => response.json())
  //     .then(user => this.setState({ monster: user }));
  // }
  // componentDidMount() {
  //   if (this.backRef) {
  //     this.backRef.focus();
  //   }
  // }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })

  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value })
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  // componentDidMount() {
  //   this.userData = JSON.parse(localStorage.getItem('user'));
  //   if (localStorage.getItem('user')) {
  //     this.setState({
  //       name: this.userData.name,
  //       email: this.userData.email,
  //       phone: this.userData.phone
  //     })
  //   } else {
  //     this.setState({
  //       name: '',
  //       email: '',
  //       phone: ' '
  //     })
  //   }
  // }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
  }
  render() {
    return (
      <div className="app">
        {/* {this.state.monster.map(monster => (
          <h1 key={monster.id}>
            {monster.name}
            {monster.email}
            {/* <p>{monster.address}</p> */}
        {/* </h1> */}
        {/* // ))} */}
        {/* <h1>hello</h1> */}
        <form onSubmit={this.handleSubmit}>
          name:<input type="text" value={this.state.name} onChange={this.handleNameChange}></input><br />
        email:<input type="text" placeholder="" ref={this.setBackRef} value={this.state.email} onChange={this.handleEmailChange}></input><br />
       password:<input type="text" value={this.state.password} onChange={this.handlePasswordChange}></input>
        address:<input type="text" ref={this.setBackRef} value={this.state.phone} onChange={this.handlePhoneChange}></input>
          <button type="submit" >submit</button>
        </form>
        <Child />
      </div>
    );
  }
}
export default Test;
