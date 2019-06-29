import React, { Component } from 'react';
import PropTypes from 'prop-types';

const profiles = [
  { name: "Taro", age: 10},
  { name: "Hanako", age: 5},
  { name: "NoName", age: 3}
]

class App extends Component {

  render() {
    return (
      <div>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
      </div>
    )
  }
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

User.defaultProps = {
  age: 1
}

export default App;
