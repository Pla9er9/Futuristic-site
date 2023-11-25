import './About.css';

export default function About() {
  return (
    <div className="about hidden">
      <div style={{ zIndex: '2' }}>
        <h2>
          What is <span>Next auth</span>?
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took
        </p>
      </div>
      <div className="lock">
        <img src="src/assets/lock.svg" alt="" />
      </div>
    </div>
  );
}