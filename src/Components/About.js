import React, {useContext} from "react";
import { DataContext } from '../App';

export default class About extends React.Component{
    render() {
        return (
            <DataContext.Consumer>
                    {({ title, description }) => (
                        <div>
                            {title}
                            <br />
                            {description}
                        </div>
                    )}
            </DataContext.Consumer>
        );
    }
}