import React,{Component} from 'react';
import VideoListItem from "./video_list_items";

const VideoList =(props) =>{
    console.log("props:" +props.videos);
    const videoListItem=props.videos.map((video)=>{
       return(
           <VideoListItem
               key={video.etag}
               onVideoSelect={props.onVideoSelect}
               video ={video}
           />
       )
    });
    return(
        <div>
            <ul>
                {videoListItem}
            </ul>
        </div>
    )
}

export default VideoList;


