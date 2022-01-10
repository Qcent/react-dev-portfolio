import React from 'react';

function AboutMe() {
  return (
    <section id='AboutMe'>
      <div className='section-title'>
        <h2>A<span className="spinner-effect">b</span>out <span className="spinner-effect spin-3d delay">Me</span></h2>
      </div>
      <div className='section-content'>
        <p>
          Highly versatile Full Stack developer with a flair for front end design.
          Enthusiastic about evolving web applications, databases, and creating engaging user experiences.
          I enjoy programming challenges and developing algorithms that tackle complex problems.
          I have been coding as a self-taught hobbyist for many years.
          Creating web pages, games and applications is my <span className="love">passion</span>,
          and I am excited to take my skills to the professional level.
        </p>
        <p>
          I recently earned a certificate in full stack development from the University of Toronto,
          with newly honed skills in Javascript, Node, React, and responsive web design.
          Recently completed 2 collaborative projects where I took a lead role in managing team output
          using an agile workflow. My familiarity with HTML, CSS, JavaScript/jQuery, Node.js, Express.js,
          MySQL, NoSQL, MongoDB and React make me an excellent addition to any development team.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;