import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import "../styles/App.css"


class SearchResults extends Component {
    state = {
        sortOrder: "",
        results: [],
        search: ""
    };
    
    componentDidMount() {
    API.Apisearch()
    .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
        }).catch(err => console.log(err))
    }


    filterByFName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });

        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
            this.setState({ results: sortedEmployees })
    }


    filterByLName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });

        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
            this.setState({ results: sortedEmployees })
    }

    handleInputChange = event => {
        event.preventDefault();
        if (event.target.name === "search") {
            const searchTerm = event.target.value.toLowerCase();
            this.setState({
                search: searchTerm
            });
        }
    };

    render() {
        return (
            <div>
                <SearchForm handleInputChange={this.handleInputChange}
                    search={this.state.search} />
    
                <div className="table-responsive">
                <table className="table table-striped table-resposive text-center table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                            <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
    
                {this.state.results && this.state.results.map(item =>
                    item.name.first.toLowerCase().includes(this.state.search) ?
                        <tbody key={item.login.uuid}>
                            <tr>
                                <td ><img src={item.picture.large} className="rounded-circle" alt="thumbnail" /></td>
                                <td >{item.name.first}</td>
                                <td >{item.name.last}</td>
                                <td >{item.phone}</td>
                                <td >{item.email}</td>  
                            </tr>
                        </tbody>
                        :
                    item.name.last.toLowerCase().includes(this.state.search) ?
                        <tbody key={item.login.uuid}>
                            <tr>
                                <td ><img src={item.picture.large} className="rounded-circle" alt="thumbnail" /></td>
                                <td >{item.name.first}</td>
                                <td >{item.name.last}</td>
                                <td >{item.phone} </td>
                                <td >{item.email}</td>
                            </tr>
                        </tbody>
                        :
                        null
                    )}
                </table>
                </div>
            </div>
        )
    }
}

export default SearchResults;