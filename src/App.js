import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import staticData from './staticData.json';
import AddGithubUser from './AddGithubUser';
import { useState } from 'react';

function App() {
  /**
   * We could have used a function scoped property to store the value but react won't re-render the component, as it only re-renders
   * when the state is changed
   */
  //const usersArray = [];
  /**
   * useState is a react hook which is used in case of functions to get reference to the local state object
   * Used destructuring syntax here whic will retrun a getter and setter
   * Getter - usersArray to get value from the state
   * setUsersArray - Setter to update usersArray value
   */
  const [usersArray, setUsersArray] = useState([]);
  /**
   * Method to be passed to the AddGithubUSer Component via props which when called will push user data in the usersArray
   * If we would have been using class component then we would have defined the usersArray on state and used setState method by
   * passing a callback which receives previous state value and used destructuring to set new state
   * Else we could have made use of class/instance property
   */
  var updateUsersList = (data) => {
    var dataArray = [...usersArray,data]
    setUsersArray(dataArray);
  }
  return (
    <div className="App">
      <header style = {{
        height: '100px',
        backgroundColor: 'teal',
        fontWeight: 700,
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem'
      }}>
      Github User cards Displaying Application!!!!!
      </header>
      <div id ='body-contents-wrapper' style = {{display : "flex"}}>
        <div id ='add-githubuser-wrapper' style = {{
          width : "25%"
        }}>
          <AddGithubUser addUser = {updateUsersList}/>
        </div>
        <div id ='cardList-wrapper' style = {{
          width : '75%'
        }}>
          <CardList usersArray = {usersArray}/>
        </div>
      </div>
    </div>
  );
}

export default App;
