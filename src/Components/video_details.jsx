
import React from 'react';

const VideoDetail =(props) =>{

    if(!props.video){
        return(
            <p>Loading...</p>
        );
    }
    //const url="https://youtube.com/embed/"+props.video.id.videoId;
    const url=`https://youtube.com/embed/${props.video.id.videoId}`;
    //we used tick "`" // we r using string interpolation



    return(
        //iframe src= https://youtube.com/embed/{videoId}
        <div className="video-detail col-md-8 col-sm-12" >
            <div className="card embed-responsive embed-responsive-16by9" style={{width: '44rem',height:'25rem',marginTop:20}}>
                <iframe className="embed-responsive-item " allowFullScreen={true} src={url}> </iframe>
            </div>
            <p>{props.video.snippet.publishedDate}</p>
            <div className="card" style={{width: '44rem',marginTop:20}}>
                <div className="card-block">
                    <h4 className="card-title">{props.video.snippet.title}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item card-text">{props.video.snippet.description}</li>
                </ul>
            </div>
        </div>
    );


};
export default VideoDetail;