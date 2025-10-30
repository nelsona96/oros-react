export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <h1 className="section__title hero__title">HERO: FULL SCREEN VIDEO</h1>
      </section>
      <section id="gallery">
        <div className="container">
          <h2 className="section__title gallery__title">Some of Our Work</h2>
          <div className="gallery__content">
            <div className="gallery__photos">
              <div className="gallery__photo-card">
                <div className="gallery__photo"></div>
              </div>
              <div className="gallery__photo-card">
                <div className="gallery__photo"></div>
              </div>
            </div>
            <div className="gallery__videos">
              <div className="gallery__video-card">
                <div className="gallery__video"></div>
              </div>
              <div className="gallery__video-card">
                <div className="gallery__video"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <h2 className="section__title services__title">What We Do</h2>
          <div className="services__content">
            <ul className="services__list">
              <li className="services__item">Weddings</li>
              <li className="services__item">Engagements</li>
            </ul>
            <ul className="services__list">
              <li className="services__item">Business</li>
              <li className="services__item">Personal</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h2 className="section__title about__title">Who We Are</h2>
          <div className="about__content">
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              saepe exercitationem quam quidem consequatur quia voluptate
              dolores eligendi consectetur. Voluptates, quos ad! Aspernatur
              harum facere perferendis porro. Voluptatum, commodi ullam?
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2 className="section__title contact__title">Hire Us!</h2>
          <div className="contact__content">
            <p className="contact__text">
              Call (603) 425-4493 to book us today!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
