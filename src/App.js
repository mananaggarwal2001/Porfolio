import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import './CSS/Responsive.css'
function App() {

  const Education = [{
    title: 'BTech Computer Science',
    subtitle: 'JIMS Greator Noida',
    description: "I am Currently Pursuing the Btech from the JIMS Greator Noida and my GPA is 9.2."
  }, {
    title: '10th CBSE BOARDS',
    subtitle: 'Universal Public School',
    description: 'I have Done by 10th from the Universal Public School Preet Vihar and Secure 7.5 CGPA'
  }, {
    title: '12th CBSE BOARDS',
    subtitle: 'Universal Public School',
    description: 'I have Done by 12th from the Universal Public School Preet Vihar and Secure 81.4%'
  }]

  const Experience = [{

  }]

  const projects = [
    {
      name: 'News App',
      githubLink: 'https://github.com/mananaggarwal2001/newsApp.git',
      applicationLink: 'https://manannewsapp.netlify.app/'
    },
    {
      name: 'TextUtils',
      githubLink: 'https://github.com/mananaggarwal2001/textUtils.git',
      applicationLink: "https://manan-textutil.netlify.app/"
    },
    {
      name: 'iNoteBook',
      githubLink: 'https://github.com/mananaggarwal2001/iNoteBook',
      applicationLink: null
    },
    {
      name: 'ChatBot Application',
      githubLink: 'https://github.com/mananaggarwal2001/ChatBot-Application',
      applicationLink: null
    },
    {
      name: 'Snake Mania',
      githubLink: 'https://github.com/mananaggarwal2001/Snake-mania',
      applicationLink: null
    },
    {
      name: 'Drum Kit',
      githubLink: 'https://github.com/mananaggarwal2001/Drum-Kit',
      applicationLink: null
    },
    {
      name: 'Tindog',
      githubLink: 'https://github.com/mananaggarwal2001/Tindog-Website',
      applicationLink: null
    },
    {
      name: 'Food Delivery',
      githubLink: 'https://github.com/mananaggarwal2001/Food_Delivery_Website',
      applicationLink: null
    },
    {
      name: 'Weather API',
      githubLink: 'https://github.com/mananaggarwal2001/Weather-Api',
      applicationLink: null
    },
  ]
  return (
    <>
      <MainBody education={Education} projects={projects} />
    </>
  );
}

export default App;
