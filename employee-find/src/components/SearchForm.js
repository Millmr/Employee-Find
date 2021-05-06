import React from "react";

function SearchForm(props) {
    return (
        <form className="form-group">
            <div className="container">
                <div className="container jumbotron-fluid" id="jumboTron">
                    <div className="container">
                        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>Employee Find</b></h1>
                        <p className="lead">Who are you looking for?</p>
                    </div>
                </div>
            </div>
            <div className="form-group">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control input"
                        placeholder='find employee'
                        id="search"
                    />
                
            </div>
        </form>
    );
}

export default SearchForm;