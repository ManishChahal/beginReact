import React from 'react';

class UserCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }
    render() {
        return (
            <div id = 'card-wrapper' style = {{
                    display : "flex",
                    width : "100%",
                    height : "150px",
                }
            }>
                <div id = 'left-side-contents' style = {{
                    width : "25%",
                    backgroundColor : "grey",
                    marginLeft : "25px",
                    marginBottom : "25px"
                }}> 
                    <img style = {{
                        width : '70%',
                        height: '100%'
                    }} src = {this.props.avatar_url}/>
                </div>
                <div id = 'right-side-contents' style = {{
                    width : '75%',
                    backgroundColor : 'lightgrey',
                    marginBottom : "25px"
                }}>
                    <div id = 'card-user-name' style ={{
                        fontWeight : "bold",
                        fontSize : "2rem"
                    }}> {this.props.name}
                    </div>
                    <div id = 'company-name' style = {{
                        fontWeight : '300',
                        fontSize : '1rem'
                    }}> 
                        {this.props.company}
                     </div>
                </div>
            </div>
        )
    }
};

export default UserCard;