import React from 'react';
import './index.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="about-section">
        <p>
          Welcome to <strong>Delish Dishes</strong> — your go-to kitchen companion for tried-and-true recipes,
          cooking inspiration, and a love for good food shared around the table.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Easy-to-follow recipes with clear instructions</li>
          <li>Step-by-step photos or videos to guide you</li>
          <li>A mix of global flavors and comfort classics</li>
          <li>Diet-friendly options: vegetarian, vegan, gluten-free, and more</li>
          <li>Weekly meal inspiration to keep your menus fresh</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          <strong>Jane Doe</strong> started <strong>Delish Dishes</strong> out of a passion for cooking and sharing
          homemade meals with friends and family. What began as a small food blog has now grown into a
          community of food lovers from around the world.
        </p>
        <p>
          Every recipe is tested in our own kitchen, ensuring it works in yours. We focus on real food with real
          ingredients — no fluff, no fake stuff.
        </p>
      </section>

      <section className="about-section">
        <h2>Join the Community</h2>
        <p>
          Thousands of home cooks trust us to help them create meals that taste amazing and bring people together.
          Subscribe to our newsletter, follow us on social media, and share your creations with us — we’d love to
          feature you!
        </p>
      </section>

      <footer className="about-footer">
        <p>🧑‍🍳 Let’s cook something delicious together.</p>
        <p>From our kitchen to yours,</p>
        <p><strong>The Delish Dishes Team</strong></p>
      </footer>
    </div>
  );
};

export default About;
