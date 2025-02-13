import gitHubLogo from '../assets/images/github-mark-white.svg'

export default function Footer() {
  return (
    <div className="footer">
      <img className='github-logo' src={gitHubLogo} alt="github logo" />
      <a href="https://github.com/mbCeli/to-do-app">GitHub repository link</a>
    </div>
  );
}
