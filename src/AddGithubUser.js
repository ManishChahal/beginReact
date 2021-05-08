import React from 'react';

class AddGithubUser extends React.Component {
    /**
     * While defining the constructor of your own we need to call the super, if props are coming in then by passing props else 
     * non-parameterized
     */
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
    }
    gitHubAPIURL = 'https://api.github.com/users/';
    /**
     * Creating a ref class level property which in turn would become instance property
     * When ref attribute is used on the HTML element and a instance of component class is created then the instance property 
     * which is created as ref receives the DOM element reference as current property
     * When we use ref it doesn't become a controlled component
     */
    //userName = React.createRef();
    onButtonClick = async function() {
        /**
         * Making real API calls and working with the real data
         * .json() also return a promise object hence using await on it
         * Here we are getting real data but our App component is responsible for maintaing the list of github users
         * So we need to pass this data to our App component which would be passed to CardList and we get the user added
         * In order to make it happen we can do it by calling a method passed in as reference using props by App component to
         * the AddGithubUser component, as that method will have access to instance/local state or class/instance properties of
         * the App component
         */
        var result = await fetch(`${this.gitHubAPIURL}${this.state.userName}`);
        var data = await result.json();
        this.props.addUser(data);
        this.setState({userName : ''});
    };
    /**
     * Whenever the on change event will occur we need to again reset the state value else it will show us ''. In order to do that
     * we make use of local state method setState
     * @param {*} event 
     */
    onInputValueChange = function(event) {
        //console.log(event.target.value);
        /**
         * Updating the state property using setState method
         */
        this.setState({userName: event.target.value});
    }
    render() {
        return(
            <div>
                <div>
                    <input 
                    value = {this.state.userName}
                    placeholder = 'Github User Name'
                    /**
                     * Passing the instance method as reference using dynamic property syntax, which would be executed as a callback 
                     * when the onChange event occurs and will pass the event object as an argument using which the value can be 
                     * extracted
                     * If you don't want to explicitly bind the context then use arrow fucntions while declaring functions rather
                     * than using function keyword
                     * Another way to extract the input value is by using the DOM selection API. Give iinput an Id and use the
                     * document.getElementById method wherever you want to grab its value
                     */
                    onChange = {this.onInputValueChange.bind(this)}
                    //ref={this.userName} 
                    style = {{ 
                        width: '100%',
                        marginTop: '25px',
                        marginBottom: '25px'
                    }}/>
                </div>
                <button 
                onClick = {this.onButtonClick.bind(this)}
                style = {{
                    width: '100%',
                    height: '50px',
                    color: '#ffffff',
                    backgroundColor: 'teal',
                    border: 'none',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}>
                    Add Github User
                </button>
            </div>
        )
    }
}

export default AddGithubUser;