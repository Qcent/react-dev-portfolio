import React from 'react';

function Resume() {
  return (
    <section id='Resume'>
      <div className='section-title'>
        <h2><span className="spinner-effect">R</span>esu<span className="spinner-effect spin-3d delay">m</span>e</h2>
      </div>
      <div className='section-content'>
        <h3>
          Download my <a href='resume.pdf'>Resume</a> in .pdf format.
        </h3><br />
        <h3>Proficiencies</h3>
        <p>
          <ul className='proficiencies'>
            <li>This</li>
            <li>That</li>
            <li>Tech</li>
            <li>Code</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default Resume;