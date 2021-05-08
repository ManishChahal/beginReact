import React from 'react';
import UserCard from './UserCard';
//import staticData from './staticData.json';

export default class CardList extends React.Component {
    // constructor(props){
    //     super(props);
    //     console.log(props);
    // }
    render() {
        return (
            /**
             * For displaying a single card using the value from json file
             * {...staticData.usersArray[0]} - Destructuring the object and passing it as props from CardList to User Card
             * It will create the properties that exists on the usersArray[0] on the props object
             */
            //<UserCard {...staticData.usersArray[0]}/>
            /**
             * Parent should be responsible for sending data into the CardList
             */
            // staticData.usersArray.map((userObject) => {
            //     return (<UserCard {...userObject}/>)
            // })
            this.props.usersArray.map((userObject) => {
                return <UserCard {...userObject}/>
            })
        )
    }
}