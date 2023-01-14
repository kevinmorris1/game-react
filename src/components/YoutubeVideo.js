import React from "react";
import PropTypes from "prop-types";
import "./YoutubeVideo.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?controls=0&disablekb=1&fs=0&showinfo=0`}
      frameBorder="0"
      controls="0"
    />
    <div className="block"></div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
