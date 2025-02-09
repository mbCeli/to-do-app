import linkedInLogo from '../assets/images/linkedin.svg'
import gitHubLogo from '../assets/images/github-light.svg'

export default function AboutPage() {
    return (
      <div>
        <h1>To-Do App</h1>
        <p>The To-do app is a React App that allows users to create and manage tasks, as well as check off the existing tasks when completed.</p>
        <div className="team-members">
          <div>
            <img src="../src/assets/images/profile-icon.png" alt="default profile icon" />
            <h3>Celina</h3>
            <a className="social-link" href=''><img className='linkedin-logo' src={linkedInLogo} alt="linkedin logo" />LinkedIn</a>
            <a className="social-link" href=''><img className='github-logo' src={gitHubLogo} alt="github logo" />GitHub</a>
          </div>
          <div>
            <img src="../src/assets/images/profile-icon.png" alt="default profile icon" />
            <h3>Johana</h3>
            <a className="social-link" href=''><img className='linkedin-logo' src={linkedInLogo} alt="linkedin logo" />LinkedIn</a>
            <a className="social-link" href=''><img className='github-logo' src={gitHubLogo} alt="github logo" />GitHub</a>
          </div>
        </div>
      </div>
    )
}