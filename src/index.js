import React, { Component } from "react";
import ReactDOM from "react-dom";



// eslint-disable-next-line 

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            modal: false,
           
            events: [
                {
                    id: 1,
                    time: "10:00",
                    title: "Breakfast with  some pep talk to go with",
                    location: "Lounge Caffe",
                    description: "Discuss Q3 targets"
                },
                {
                    id: 2,
                    time: "10:30",
                    title: "Daily Standup Meeting (recurring)",
                    location: "Warsaw Spire Office"
                },
                { id: 3, time: "11:00", title: "Call with zippy" },
                {
                    id: 4,
                    time: "11:00",
                    title: "Lunch with Tim",
                    location: "Canteen",
                    description:
                        " The project need to implement the local storage to store the data on reload"
                }
            ]
        };
    }
    addEvent = () => {
        var newArray = [...this.state.events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            time: this.state.time,
            title: this.state.title,
            location: this.state.location,
            description: this.state.description,
            value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5"
        });
        this.setState({ events: newArray });
        this.setState({
            time: "",
            title: "",
            location: "",
            description: ""
        });
    };
    handleInputChange = inputName => value => {
        const nextValue = value;

        this.setState({
            [inputName]: nextValue
            
        });
    };

    
    handleDelete = eventId => {
        const events = this.state.events.filter(e => e.id !== eventId);
        this.setState({ events });
    };

     toggleModal = () => {
                this.setState({
                    modal: !this.state.modal
                });
            };
    render() {
        return (
        <p>hey</p>


        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

