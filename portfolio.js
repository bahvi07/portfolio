import React, { useEffect, useState } from 'react';
import './portfolio.css';

function Portfolio() {
  const txt = "Welcome to My Portfolio\nThis is Butcher's Home💀";
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let char = 1; // Start with 1 character
    const animateText = () => {
      const timer = setInterval(() => {
        setVisibleText(txt.slice(0, char)); // Update visibleText with sliced text

        char += 1; // Increment character count

        // If we've displayed all characters, reset after a delay
        if (char > txt.length) {
          clearInterval(timer); // Clear the interval
          setTimeout(() => {
            char = 0; // Reset the counter
            animateText(); // Restart the animation
          }, 800); // Delay before restarting
        }
      }, 200); // Speed of the animation (200ms per character)

      return timer;
    };

    // Start the animation
    const timer = animateText();

    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, [txt]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">BUTCHER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <i className="fas fa-user"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <i className="fas fa-cogs"></i> Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <i className="fas fa-project-diagram"></i> Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <div id="home" className="section home-section">
        <h1 className="fade-in-text">
          {visibleText.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
      </div>

      {/* Other Sections */}
      <div id="about" className="section about-section">
  <h2>About Me</h2>
  <div className="about-content">
    <p>
      Hi, I'm Bhavishya, a passionate BCA student from Sri Karanpur, Rajasthan. 
      I have also completed an ITI in COPA (Computer Operator and Programming Assistant). 
      My dream is to become a Full Stack Developer, and I'm continuously working towards enhancing my skills in web development and programming.

      I'm proficient in technologies like HTML, Bootstrap, jQuery, PHP, and have a foundational understanding of React. 
      I also have experience in programming languages like Java, C++, C#, and Python.

      In my free time, I enjoy playing cricket and following WWE. 
      I'm an avid e-sports gamer, with BGMI/PUBG being my go-to games. 
      I have a passion for music, both listening to and singing songs, and I find joy in drawing and writing stories.

      Let's build something amazing together!
    </p>
    <img src="me.jpg" alt="About me" className="me" />
  </div>
</div>

<div id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <ul>
              <li><strong>Web Development:</strong> HTML, CSS, JavaScript, Bootstrap, jQuery</li>
              <li><strong>Programming Languages:</strong> Java, C++, C#, Python, PHP</li>
              <li><strong>Frameworks:</strong> React</li>
              <li><strong>Database Management:</strong> MySQL</li>
              <li><strong>Version Control:</strong> Git, GitHub</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="current-learning-goals">
            <h3>Current Learning Goals</h3>
            <p>I am currently enhancing my skills in:</p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>PHP, Node.js</li>
              <li>Cloud Computing (AWS)</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects" className="section">
  <h2>Projects</h2>
  <div className="projects-grid">
    <div className="project-item">
      <img src="weather.png" alt="Project 1" />
      <h3>Weather App</h3>
      <p>A simple weather application that provides current weather information for any city using an API.</p>
    </div>
    <div className="project-item">
      <img src="calculator.png" alt="Project 2" />
      <h3>Calculator</h3>
      <p>A basic calculator built using JavaScript to perform common arithmetic operations.</p>
    </div>
    <div className="project-item">
      <img src="movie_search.png" alt="Project 3" />
      <h3>Movie Search</h3>
      <p>A web app to search for movies, displaying movie details like title, year, and ratings.</p>
    </div>
    <div className="project-item">
      <img src="fullstack_form.png" alt="Project 4" />
      <h3>Full Stack Form</h3>
      <p>A full-stack form with client-side validation and data submission to a server using Node.js and Express.</p>
    </div>
    <div className="project-item">
      <img src="ecom.png" alt="Project 5" />
      <h3>E-commerce Website</h3>
      <p>An e-commerce website with product listings, shopping cart, and checkout functionality.</p>
    </div>
  </div>
</div>

<div id="contact" className="section">
  <h2>Contact Me</h2>
  <div className="contact-container">
    <div className="contact-info ">
      <p>If you would like to get in touch, feel free to contact me via the following methods:</p>
      <ul>
        <li><strong>Email:</strong> bhavi123@gmail.com</li>
        <li><strong>Phone:</strong> +91-1234567890</li>
        <li><strong>Location:</strong> Sri Karanpur, Rajasthan, India</li>
      </ul>
    </div>

    <div className="social-links">
      <p>Connect with me on social media:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/bhavishya-kushwha-21a987324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
        <li><a href="#" target="" onClick={()=>{alert("Nhi hai bhai 😢 😭")}}><i className="fab fa-github"></i> GitHub</a></li>
        <li><a href="https://x.com/BhavishyaK91751?t=YVFtmR2ATUb6uLNjIoG5nw&s=09" target="_blank"><i className="fab fa-twitter"></i> Twitter</a></li>
        <li><a href="https://www.instagram.com/iluyes_you?igsh=dG11NDU3Y21keWM1" target="_blank"><i className="fab fa-instagram"></i> Instagram</a></li>
      </ul>
    </div>
  </div>

  <div className="contact-form">
    <h3>Send me a message</h3>
    <form action="submit_form.php" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
  <footer>
        <p>&copy; 2024 Bhavishya Kushwha. All rights reserved.</p>
    </footer>
</div>


    </div>
  );
}

export default Portfolio;
