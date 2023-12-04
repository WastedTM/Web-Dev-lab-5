import React from "react";
import { UserContext } from '../App';

export default class Profile extends React.Component{
    render() {
        return (
            <UserContext.Consumer>
                {({ username, someText }) => (
                    <div>
                        {username}
                        <br/>
                        {someText}
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}