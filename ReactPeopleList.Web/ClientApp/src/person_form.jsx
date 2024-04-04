import React from "react";

class PersonForm extends React.Component {
    render() {
        return (
            <div className="card bg-light p-2">
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" id="first-name" placeholder="first name"
                        value={this.props.currentPerson.firstName} onChange={this.props.onTextboxChange}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" id="last-name" placeholder="last name"
                        value={this.props.currentPerson.lastName} onChange={this.props.onTextboxChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" className="form-control" id="age" placeholder="age" 
                        value={this.props.currentPerson.age} onChange={this.props.onTextboxChange}/>
                    </div>
                    <div className="col-md-2">
                        <button id="add-button" className="btn btn-primary w-100" onClick={this.props.onButtonClick}>Add</button>
                    </div>
                    <div className="col-md-2">
                        <button id="clear-button" className="btn btn-info w-100" onClick={this.props.onButtonClick}>Clear All</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonForm;