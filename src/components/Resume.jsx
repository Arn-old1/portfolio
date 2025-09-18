export default function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p>You can view or download my resume below:</p>
      <a 
        href="/Resume.pdf"   
        target="_blank" 
        rel="noopener noreferrer" 
        className="resume-link"
      >
        View Resume (PDF)
      </a>
    </section>
  );
}