import { FaGithub, FaInstagram, FaFacebook, FaUserCircle } from "react-icons/fa";

const Card = ({ profileImage, firstName, lastName, email, socialLinks }) => {
  const { github, instagram, facebook } = socialLinks;

  return (
    <div className="card">
      {profileImage ? (<img src={profileImage} alt="Person"/>) : (
        <div className="default-icon">
          <FaUserCircle size={100} style={{marginTop:"1vh", color:"gray"}} />
        </div>
      )}

      <h2>{firstName} {lastName}</h2>
      {/* Sends you to gmail website and then already has the email on there */}
      <p>Email: <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer">{email}</a></p>

      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: "purple" }}><FaGithub size={24} /></a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ color: "pink" }}><FaInstagram size={24} /></a>
        <a href={facebook} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}><FaFacebook size={24} /></a>
      </div>
    </div>
  );
};

export default Card;
