import { Link } from 'react-router-dom';
import cyberhackImg from '../assets/hacks/MadnessProgram.webp';
import vehicleImg from '../assets/vehicles/architecture.jpg';
import weaponImg from '../assets/Shard_Icon_CP2077.webp';
import './HomePage.css';

const HomePage = () => {
  const sections = [
    {
      title: 'Cyberhacks',
      description: 'Explore the latest cybernetic enhancements and software for your neural interface.',
      path: '/cyberhacks',
      image: cyberhackImg,
      color: '#00f0ff',
    },
    {
      title: 'Vehicles',
      description: 'Browse through high-performance vehicles for all your urban and off-road needs.',
      path: '/vehicles',
      image: vehicleImg,
      color: '#ff2a6d',
    },
    {
      title: 'Weapons',
      description: 'Discover cutting-edge weaponry for personal defense and offensive operations.',
      path: '/weapons',
      image: weaponImg,
      color: '#7f2bff',
    },
  ];

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>NIGHT CITY DATABASE</h1>
        <p className="subtitle">Your comprehensive guide to the dark future</p>
      </div>
      
      <div className="sections-grid">
        {sections.map((section) => (
          <Link 
            to={section.path} 
            key={section.title}
            className="section-card"
            style={{ '--accent-color': section.color } as React.CSSProperties}
          >
            <div className="card-image" style={{ backgroundImage: `url(${section.image})` }} />
            <div className="card-content">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <div className="card-hover">
                <span>ENTER</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
