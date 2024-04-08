import React from "react";

class PeopleTable extends React.Component {
    render() {
        if (this.props.people.length < 1){
            return <h1 className="mt-4">No people added yet! Add some people:)</h1>;
        }
        return (
            <>
            <table className="table table-bordered table-hover table-striped mt-5">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.people.map(p => {
                        return (
                            <>
                            <tr className={parseInt(p.age) >= 65 ? "table-danger" : ""}>
                                <td>{p.firstName}</td>
                                <td>{p.lastName}</td>
                                <td>{p.age}</td>
                            </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            </>
        );
    }
}

export default PeopleTable;