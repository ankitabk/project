import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import VideoList from "./Components/video_list";
import {MyNavbar} from "./Components/navbar";
import YTSearch from 'youtube-api-search';
import VideoDetail from "./Components/video_details";
import {Button} from "./Components/button";
import {Button2} from "./Components/button2";
import { Grid, Row, Col } from 'react-bootstrap';
const API_KEY = "AIzaSyD_E9jPSDOn2UuOv0xMiLhHLS1amDcC_ZU";


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            SelectedVideo:null //this.state.videos[0]
        };
       
    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term },(videos)=>{
         console.log(videos);
            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }
    
   handleDate=()=>{
       const videos=[...this.state.videos];
     videos.sort((first, second) => {
        return new Date(first.snippet.publishedAt).getTime() - new Date(second.snippet.publishedAt).getTime();
      }); 
     this.setState({videos,selectedVideo:videos[0]});
   }
   handleName=()=>{
    const videos=[...this.state.videos];
    videos.sort((first, second) => {
       return first.snippet.title >second.snippet.title;
     }); 
    this.setState({videos,selectedVideo:videos[0]});
   }

   /* videoSelect(term){
        YTSearch({key:API_KEY,term:term },(videos)=>{
            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }
*/
    render(){
        return(
            <div className="container">
                <div className="row">
                    <MyNavbar/>
                </div>
                <div className="row">
                    <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
                </div>
                <div className="row">
                    <Button handleDate={this.handleDate}/>
                </div>
                <div className="row">
                    <Button2 handleName={this.handleName}/>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-10">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-md-4 col-sm-2">
                        <VideoList videos={this.state.videos}
                            onVideoSelect={(video)=>{
                                this.setState({selectedVideo:video})
                            }}/>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/> , document.getElementById("root"));