import ReactDOM from "react-dom/client";

export default function MainContent() {
  return (
    <main class="main-content">
      <div class="general-info">
        <h1 class="person-name">Carlia Hawk</h1>
        <h4 class="person-role">A Developer </h4>
        <h6 class="person-website"></h6>
      </div>
      <div class="social-buttons">
        <button class="social-btn">
          <a href="mailto:KitBryanw@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button class="social-btn">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
      <section class="about-section">
        <h3>About</h3>
        <p>
          As a developer, I am particularly interested in simplifying and
          automating repetitive processes. I make an effort to keep up with
          security and best practises, and I am always eager to learn something
          new.
        </p>
      </section>
      <section class="interests-section">
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Travel
          geek. Coffee fanatic. Internet fanatic. Proactive gamer
        </p>
      </section>
    </main>
  );
}
