import React from "react";
import PropTypes from "prop-types";

//https://kids.nationalgeographic.com/
//https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 
// https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react 

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="570"
      height="350"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;