import React from "react";
import PersonForm from "./person_form";
import PeopleTable from "./people_table";

class PeopleLister extends React.Component {
    state = {
        firstName: null,
        lastName: null,
        age: null,
        people: []
    }

    onTextboxChange = e => {
        if (e.target.id == "first-name") {
            this.setState({ firstName: e.target.value });
        }
        else if (e.target.id == "last-name") {
            this.setState({lastName: e.target.value});
        }
        else if(e.target.id == "age") {
            this.setState({ age: e.target.value });
        }
    }

    onButtonClick = e => {
        if (e.target.id == "add-button") {
            this.setState({people: [...this.state.people, this.currentPerson()]})
        }
        else if (e.target.id == "clear-button") {
            this.setState({people: []});
        }
        this.setState({firstName: "", lastName: "", age: ""})
    }

    currentPerson = () => {
        return {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <PersonForm 
                onTextboxChange={this.onTextboxChange}
                onButtonClick={this.onButtonClick}
                currentPerson={{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    age: this.state.age}}/>
                <PeopleTable people={this.state.people}/>    
            </div>
        )
    }
}

export default PeopleLister;