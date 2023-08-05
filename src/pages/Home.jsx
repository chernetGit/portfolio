import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Chernet</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Flutter, Bootstrap, MaterialUI,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB,SQL, Firebase</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Java, Python, C#, C++, Typescript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
