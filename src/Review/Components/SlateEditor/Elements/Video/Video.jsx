import React from 'react'
import "./Video.css";

const Video = ({ attributes, element, children }) => {

    const {url, width, height} = element;
    console.log(url)
  return (
    <div
      {...attributes}
      className='element-video'
      style={{display:'flex', justifyContent:'center'}}
    >
      <div contentEditable={false} style={{width: width,height: height}}>
        <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      {children}
    </div>
  );
};
export default Video;