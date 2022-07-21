import React from "react";



const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://twitter.com/Andrew321180"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/nelsonAndres1"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
  {/*       <a
          href="https://codepen.io/yagoestevez"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-codepen" />
        </a> */}
      </div>
    );
  };
  export default SocialLinks;