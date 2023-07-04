import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import Button from './components/Button';
import picOfMe from './images/pic_of_me_low_quality.jpg';
import me from './images/mic.jpeg';
import Bio from './components/Bio';
import Certificate from './components/Certificate';
import Card from './components/Card';
import Project from './components/Project';
import Contact from './components/Contact';
import { FaPhoneAlt, FaLinkedin, FaGithub, FaKaggle, FaMicrosoft } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { BsStackOverflow } from 'react-icons/bs'
import { SiCodeforces } from 'react-icons/si'
import Skill from './components/Skill';

const handleDownload = () =>
{
  const fileUrl = '././Salwa-Mekni.pdf';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.download = 'CV-Salwa-Mekni.pdf';
  link.click();
};

function App()
{
  return (
    <div className="App">
      <header className="App-header" id="home">
        <Navbar home="#home" about="#bio" cert="#certificates" skill="#skills" proj="#projects" />
        <div className='home'>
          <div>
            <About />
            <Button content="Download CV" class="cv" func={handleDownload} />
            <Contact email="mailto:salwamekni8@gmail.com" linkedin="https://www.linkedin.com/in/salwa-mekni/" github="https://github.com/SalwaMK"
              kaggle="https://www.kaggle.com/bluesirius" stack="https://stackoverflow.com/users/22150710/sirius" code="https://codeforces.com/profile/BlueSirius"
              mic="https://learn.microsoft.com/en-us/users/salwamekni/" />
          </div>
          <Photo src={picOfMe} name="Salwa" class="image" />
        </div>

      </header>
      <main>
        <section className='sectionOne' id="bio">
          <div className="bio-container">
            <div className="rectangle"></div>
            <Photo src={me} class="photo" name="Salwa" />
          </div>
          <Card title="Who am I?" description="I am an enthusiastic software engineering stundent with a strong passion for artificial intelligence and new technologies. I am a hard working person who is avid for knowledge and dedicated to achieve my goals." />
        </section>
        <section className='sectionTwo' id="certificates">
          <h4>Certificates</h4>
          <Certificate c1="Machine Learning Specialization" c2="Build a computer vision app with Azure Cognitive Services"
            c3="Visualizing Filters of a CNN using TensorFlow" c4="Tweet Emotion Recognition with TensorFlow"
            c5="DeepLearning.AI TensorFlow Certification" link1="https://www.coursera.org/account/accomplishments/specialization/5BA3GKW88HEJ"
            link2="https://www.coursera.org/account/accomplishments/verify/NJ6NXQUVWTDX" link3="https://www.coursera.org/account/accomplishments/verify/U8J2DQNYL8ZH"
            link4="https://www.coursera.org/account/accomplishments/verify/BQ65JJSDX6UD" link5="" />
        </section>

        <section className='sectionFour' id="skills">
          <h4>Skills</h4>
          <div className='skills'>
            <div className='firstTen'>
              <Skill name="C/C++" />
              <Skill name="Java" />
              <Skill name="Python" />
              <Skill name="HTML5" />
              <Skill name="CSS3" />
              <Skill name="Javascript" />
              <Skill name="React" />
              <Skill name="Apache" />
              <Skill name="Oracle" />
              <Skill name="MySQL" />
            </div>
            <div className='secondTen'><Skill name="Scikit-learn" />
              <Skill name="TensorFlow" />
              <Skill name="Keras" />
              <Skill name="Numpy" />
              <Skill name="Pandas" />
              <Skill name="Scipy" />
              <Skill name="Aanaconda" />
              <Skill name="Figma" />
              <Skill name="Canva" />
              <Skill name="Linux" />
            </div>
          </div>
        </section>
        <section className='sectionThree' id="projects">
          <h4>Projects</h4>
          <div className='tout'>
            <div className='firstTwo'>
              <Project title="JavaFX Project" para="This project is created using the software platform javafx with MVC model and socket" link="https://github.com/SalwaMK/JavaFX-Project-with-Socket" />
              <Project title="Prediction Model" para="ML Model predicting the creditworthiness of a client for a loan from a financial institution" link="https://github.com/SalwaMK/AI-Night-Challenge" />
            </div>
            <div className='secondTwo'>
              <Project title="Book Recommender System" para="ML Model recommeding books based on some preferences " link="https://github.com/SalwaMK/Book-Recommender-System" />
              <Project title="Titanic Survive Prediction" para="Prediction of survive using Scikit-learn and gradio libraries" link="https://github.com/SalwaMK/Titanic-prediction" />
            </div>
          </div>
        </section>
        Salwa Mekni
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
