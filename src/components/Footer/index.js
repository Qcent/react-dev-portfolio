import React from 'react';

function Footer(props) {

  return (
    <footer>
      <div className="contact-links">
        <ul>
          <li>
            <a href="tel:+1-226-886-012">Phone</a>
          </li>
          <li>
            <a href="mailto:dquinn8@cogeco.ca" >Email</a>
          </li>
          <li>
            <a href="https://github.com/Qcent" rel="noreferrer" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dave-quinn-526356218/" rel="noreferrer" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;