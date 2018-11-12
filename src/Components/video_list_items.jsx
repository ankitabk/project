import React,{Component} from 'react';

const VideoListItem = (props) => {

    return (
        <div>
            <div className="card" style={{width: '20rem'}}>
                <ul className="list-group list-group-flush">
                    <li onClick={()=>{props.onVideoSelect(props.video)}}
                        style={{ padding:20,listStyleType:'none',color:'black'}}
                        className="list-group-item">

                            <span className="row">
                                <div className="col-6">
                                    <img src={props.video.snippet.thumbnails.default.url}/>
                                </div>
                                <div className="col-6">
                                    {props.video.snippet.title}
                                </div>
                            </span>

                    </li>
                </ul>
            </div>
        </div>
    );
};
export default VideoListItem;
