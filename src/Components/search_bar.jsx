import React, {Component} from 'react';
// import YTSearch from 'youtube-api-search'; //Always return jsons in api

//const API_KEY = "AIzaSyD_E9jPSDOn2UuOv0xMiLhHLS1amDcC_ZU";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {    // this of constructor is same as this of class
            term: '',
            newTerm: 'yo'
        };
        props.onSearchTermChange(this.state.term);

        //this.onInputChange=this.onInputChange.bind(this);   // by assigning the bound func to this.onInputChange, we update the reference to it
        // we can also write :
        //this.abc=this.onInputChange.bind(this);  // it works . basically it makes a new func altogether

       /* YTSearch({key: API_KEY, term: 'gangnam style'}, (videos) => {
            console.log(videos);
        });*/
    }

    onInputChange(term) {
        console.log(term);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="col-12" style={{marginBottom:20,backgroundColor:'#10A8F3'}}>
                <nav style={{backgroundColor:'#10A8F3', padding:10}}
                     className="navbar navbar-light bg-faded justify-content-between">
                    <form className="form-inline" >
                        <a>Search here : &nbsp;</a>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"
                               value={this.state.term} onChange={(event) =>
                            this.onInputChange(event.target.value)}/>
                        {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                    </form>
                </nav>



            </div>
        );
    }
}

export default SearchBar;