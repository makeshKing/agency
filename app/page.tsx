import { getHomeContent } from "@/lib/content";
import AdaptiveMedia from "@/components/AdaptiveMedia";
import WorkCardWrapper from "@/components/WorkCardWrapper";

export default async function Home() {
  const { hero, navLinks, settings, works, journal, podcast, slides, logos } = await getHomeContent();

  const whoWeHelpLinks = (navLinks || []).filter((l) => l.group === "who-we-help");
  const whatWeDoLinks = (navLinks || []).filter((l) => l.group === "what-we-do");
  const desktopTopLinks = (navLinks || []).filter((l) => l.group === "desktop-top");
  const mobileMenuLinks = (navLinks || []).filter((l) => l.group === "mobile-menu");
  const floatingHelpLinks = (navLinks || []).filter((l) => l.group === "floating-wwd");
  const footerQuicklinks = (navLinks || []).filter((l) => l.group === "footer-quicklinks");
  const footerSocialLinks = (navLinks || []).filter((l) => l.group === "footer-social");
  const footerCreditsLinks = (navLinks || []).filter((l) => l.group === "footer-credits");

  const logosGroup1 = (logos || []).filter((l) => l.group === 1);
  const logosGroup2 = (logos || []).filter((l) => l.group === 2);
  const logosGroup3 = (logos || []).filter((l) => l.group === 3);
  const featuredWorks = (works || []).filter((w) => w.isFeatured);

  const heroSlidesList = slides && slides.length > 0 ? slides : [];

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor">
        <p className="cursor-paragraph">{settings?.cursorText || "Learn more"}</p>
      </div>

      {/* WebGL background */}
      <div id="webgl_holder" className="webgl_holder">
        <div className="gradient top"></div>
        <div className="webgl w-embed">
          <canvas className="webgl"></canvas>
          <style>{`.webgl{pointer-events:none}`}</style>
        </div>
        <div className="gradient bottom"></div>
      </div>

      {/* ─── DROPDOWN MEGA MENU ─── */}
      <div className="menu">
        <div className="drop_downmenu_group">
          {/* WHO WE HELP column */}
          <div
            text-split=""
            letters-slide-up=""
            id="w-node-_186d1036-25d5-1133-515b-530728fa2848-28fa2846"
            className="dropdownmenu_block"
          >
            <h6 className="h6">{settings?.navWhoWeHelpHeading || "WHO WE HELP"}</h6>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                {whoWeHelpLinks.map((item) => (
                  <div role="listitem" className="w-dyn-item" key={item.id}>
                    <a href={item.url} className="nav_link cm w-inline-block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={settings?.arrowIcon || "/images/67c3bc53b872a81fe6f8968a_LinkArrow.svg"}
                        loading="lazy"
                        alt={settings?.arrowIconAlt || "Link arrow icon"}
                        className="link_btn_arrow"
                      />
                      <div className="nav_link">{item.label}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHAT WE DO column */}
          <div
            text-split=""
            letters-slide-up=""
            id="w-node-_186d1036-25d5-1133-515b-530728fa2852-28fa2846"
            className="dropdownmenu_block"
          >
            <h6 className="h6">{settings?.navWhatWeDoHeading || "what we do"}</h6>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                {whatWeDoLinks.map((item) => (
                  <div role="listitem" className="w-dyn-item" key={item.id}>
                    <a href={item.url} className="nav_link cm w-inline-block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={settings?.arrowIcon || "/images/67c3bc53b872a81fe6f8968a_LinkArrow.svg"}
                        loading="lazy"
                        alt={settings?.arrowIconAlt || "Link arrow icon"}
                        className="link_btn_arrow"
                      />
                      <div className="nav_link">{item.label}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Close + View All */}
          <div id="w-node-_186d1036-25d5-1133-515b-530728fa285c-28fa2846" className="dropdownmenu_block right fade">
            <a id="close-menu" href="#" className="h6 link underlined cm">
              {settings?.navMenuCloseText || "Close"}
            </a>
          </div>
          <div id="w-node-_186d1036-25d5-1133-515b-530728fa285f-28fa2846" className="menu_footer">
            <a href={settings?.navMenuViewAllUrl || "/what-we-do"} className="link_button cm fade w-button">
              {settings?.navMenuViewAllText || "VIEW ALL WORK"}
            </a>
          </div>
        </div>
        <div className="menu_underlay"></div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="main">
        <div data-barba="container" className="page-wrapper">

          {/* ── DESKTOP NAV ── */}
          <div text-split="" letters-slide-up="" className="nav">
            <a href="/" aria-current="page" className="link nav_left w-inline-block w--current">
              {settings?.logoCustomImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.logoCustomImage}
                  alt={settings.logoCustomImageAlt || settings?.logoText || "Logo"}
                  style={{ maxHeight: "28px", width: "auto" }}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf33d28af893fb808325_E.svg" loading="eager" alt="E" className="logo e" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf334cace4fac68c5a73_X.svg" loading="eager" alt="X" className="logo x" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf330a0ae83fba8a1735_A.svg" loading="eager" alt="A" className="logo a" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf334c1faf7e677ec2d8_M.svg" loading="eager" alt="M" className="logo m" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf33b548e787de206b32_P.svg" loading="eager" alt="P" className="logo p" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf33c1fda4b1ca0eda2b_L.svg" loading="eager" alt="L" className="logo l" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/67d9bf3321b12e69bca2f8f2_E2.svg" loading="eager" alt="E" className="logo e2" />
                </>
              )}
            </a>
            <div className="nav_links">
              {desktopTopLinks.map((item, idx) => (
                <a
                  key={item.id}
                  id={item.label.toLowerCase().includes("what we do") ? "what-we-do-menu" : undefined}
                  href={item.url}
                  className="nav_link underline-link"
                >
                  {item.label}
                  {idx < desktopTopLinks.length - 1 ? ", " : ""}
                </a>
              ))}
            </div>
            <a
              href={settings?.navEmailUrlDesktop || `mailto:${settings?.contactEmail || "hello@weareexample.com"}?subject=${settings?.contactEmailSubject || "Hi!"}`}
              className="link nav_right underline-link"
            >
              {settings?.navEmailLabelDesktop || settings?.contactEmail || "hello@weareexample.com"}
            </a>
            <a href="#" className="hamburger w-inline-block">
              <div className="burger_line"></div>
              <div className="burger_line"></div>
            </a>
          </div>

          {/* ── MOBILE NAV ── */}
          <div className="nav mob">
            <a href="/" aria-current="page" className="link nav_left w-inline-block w--current">
              {settings?.logoCustomImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.logoCustomImage}
                  alt={settings.logoCustomImageAlt || settings?.logoText || "Logo"}
                  style={{ maxHeight: "24px", width: "auto" }}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf33d28af893fb808325_E.svg" alt="E" className="logo e" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf334cace4fac68c5a73_X.svg" alt="X" className="logo x" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf330a0ae83fba8a1735_A.svg" alt="A" className="logo a" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf334c1faf7e677ec2d8_M.svg" alt="M" className="logo m" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf33b548e787de206b32_P.svg" alt="P" className="logo p" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf33c1fda4b1ca0eda2b_L.svg" alt="L" className="logo l" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src="/images/67d9bf3321b12e69bca2f8f2_E2.svg" alt="E" className="logo e2" />
                </>
              )}
            </a>
            <a
              href={settings?.navEmailUrlMob || `mailto:${settings?.contactEmail || "info@example.com.au"}?subject=${settings?.contactEmailSubject || "Hi!"}`}
              className="link nav_right"
            >
              {settings?.navEmailLabelMob || settings?.contactEmail || "info@example.com.au"}
            </a>
            <a id="open_mobile" href="#" className="hamburger fade w-inline-block">
              <div className="burger_line"></div>
              <div className="burger_line"></div>
            </a>
            {/* Mobile menu overlay */}
            <div className="mobile_menu">
              <div className="menu_block">
                {mobileMenuLinks.map((item) => (
                  <a key={item.id} split-text="" href={item.url} className="mobmenu_link">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="menu_block spaced">
                <a
                  split-text=""
                  href={settings?.navEmailUrlDesktop || `mailto:${settings?.contactEmail}?subject=Hi!`}
                  className="mobmenu_link small"
                >
                  {settings?.contactEmail || "hello@weareexample.com"}
                </a>
                <div className="menu_small_links">
                  {footerSocialLinks.map((item) => (
                    <a key={item.id} split-text="" href={item.url} target="_blank" className="h6 link">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              {/* Mobile menu nav bar (inside menu overlay) */}
              <div className="nav mob mob_menu">
                <a href="/" aria-current="page" className="link nav_left light w-inline-block w--current">
                  {settings?.logoCustomImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings.logoCustomImage}
                      alt={settings.logoCustomImageAlt || settings?.logoText || "Logo"}
                      style={{ maxHeight: "28px", width: "auto" }}
                    />
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf33d28af893fb808325_E.svg" alt="E" className="logo e" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf334cace4fac68c5a73_X.svg" alt="X" className="logo x" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf330a0ae83fba8a1735_A.svg" alt="A" className="logo a" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf334c1faf7e677ec2d8_M.svg" alt="M" className="logo m" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf33b548e787de206b32_P.svg" alt="P" className="logo p" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf33c1fda4b1ca0eda2b_L.svg" alt="L" className="logo l" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" src="/images/67d9bf3321b12e69bca2f8f2_E2.svg" alt="E" className="logo e2" />
                    </>
                  )}
                </a>
                <a id="close_mobile" href="#" className="hamburger light fade w-inline-block">
                  <div className="burger_line light"></div>
                  <div className="burger_line light"></div>
                </a>
              </div>
            </div>
          </div>

          {/* ─── HOMEPAGE ─── */}
          <div id="homepage" className="page">
            <div id="trigger_200" className="_200vh"></div>

            {/* HERO */}
            <div className="home_hero_heading w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  {/* Desktop Hero */}
                  <section className="home_hero">
                    <div letters-slide-up="" text-split="" className="home-hero-sub">
                      <h2 className="body-large is-hero is-styled">{hero?.subheading}</h2>
                      <a href={hero?.ctaLink} className="link_button fade underline-link w-button">
                        {hero?.ctaText}
                      </a>
                    </div>
                    <div className="polaroid-mask left fade_extra">
                      <div className="pol_holder">
                        <div className="clip-up-pol">
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidLeft1 || "/images/69c665efc772d742875d88e4_67e100cf88cd84eacfe17596_polaroid-image-opt4.avif"}
                              loading="lazy"
                              alt={hero?.polaroidLeft1Alt || "Example agency polaroid 1"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidLeft2 || "/images/69c66610a0f830c3a1f52f64_67e100d80a74e90f9a9c0103_polaroid-image-opt3.avif"}
                              loading="lazy"
                              alt={hero?.polaroidLeft2Alt || "Example agency polaroid 2"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask start-visible">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidLeft3 || "/images/69c6662f79641a0bf1404eb1_67e100de71d37c15ef4f7c84_polaroid-image-opt2.avif"}
                              loading="eager"
                              alt={hero?.polaroidLeft3Alt || "Example Agency Sydney & Dubai"}
                              className="polaroid-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="polaroid-mask right fade_extra">
                      <div className="pol_holder">
                        <div className="clip-up-pol">
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidRight1 || "/images/67e0fe4b4f15832fc4651b28_unnamed (5).avif"}
                              loading="lazy"
                              alt={hero?.polaroidRight1Alt || "Example agency polaroid 4"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidRight2 || "/images/69c66649e541e29ba22d23dc_67f3abf7bfe7a69e94a2eeba_67e1c681df188e044a67e311_Screenshot 2025-03-25 at 7.54.17 am.avif"}
                              loading="lazy"
                              alt={hero?.polaroidRight2Alt || "Example agency polaroid 5"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask start-visible">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidRight3 || "/images/67e0fe5e8e81037e9e91b71a_unnamed (6).avif"}
                              loading="eager"
                              alt={hero?.polaroidRight3Alt || "Example Agency Sydney & Dubai"}
                              className="polaroid-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1 letters-slide-up="" text-split="" className="hero_display">
                      {hero?.headlineLine1} <span className="h_word2">{hero?.headlineLine2}</span>{" "}
                      <span className="h_word3">{hero?.headlineLine3}</span>{" "}
                      <span className="h_word4">{hero?.headlineLine4}</span>
                    </h1>
                  </section>

                  {/* Mobile Hero */}
                  <section className="home_hero mob">
                    <div className="polaroid-mask right fade_extra">
                      <div className="pol_holder">
                        <div className="clip-up-pol">
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidRight1 || "/images/67e0fe4b4f15832fc4651b28_unnamed (5).avif"}
                              loading="lazy"
                              alt={hero?.polaroidRight1Alt || "Example agency polaroid"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidRight2 || "/images/69c66649e541e29ba22d23dc_67f3abf7bfe7a69e94a2eeba_67e1c681df188e044a67e311_Screenshot 2025-03-25 at 7.54.17 am.avif"}
                              loading="lazy"
                              alt={hero?.polaroidRight2Alt || "Example agency polaroid"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask start-visible">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidRight3 || "/images/67e0fe5e8e81037e9e91b71a_unnamed (6).avif"}
                              loading="eager"
                              alt={hero?.polaroidRight3Alt || "Example Agency Sydney & Dubai"}
                              className="polaroid-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 letters-slide-up="" text-split="" className="hero_display">
                      <span className="h_word1">{hero?.headlineLine1}</span>{" "}
                      <span className="h_word2">{hero?.headlineLine2}</span>{" "}
                      <span className="h_word4">
                        {hero?.headlineLine3}&nbsp;<br />
                        {hero?.headlineLine4}
                      </span>
                    </h2>
                    <div className="home-hero-sub">
                      <h2 className="body-large is-hero is-styled">{hero?.subheading}</h2>
                      <a href={hero?.ctaLink} className="link_button fade underline-link w-button">
                        {hero?.ctaText}
                      </a>
                    </div>
                    <div className="polaroid-mask left fade_extra">
                      <div className="pol_holder">
                        <div className="clip-up-pol">
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidLeft1 || "/images/69c665efc772d742875d88e4_67e100cf88cd84eacfe17596_polaroid-image-opt4.avif"}
                              loading="lazy"
                              alt={hero?.polaroidLeft1Alt || "Example agency polaroid"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidLeft2 || "/images/69c66610a0f830c3a1f52f64_67e100d80a74e90f9a9c0103_polaroid-image-opt3.avif"}
                              loading="lazy"
                              alt={hero?.polaroidLeft2Alt || "Example agency polaroid"}
                              className="polaroid-image"
                            />
                          </div>
                          <div className="pol-mask start-visible">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={hero?.polaroidLeft3 || "/images/69c6662f79641a0bf1404eb1_67e100de71d37c15ef4f7c84_polaroid-image-opt2.avif"}
                              loading="eager"
                              alt={hero?.polaroidLeft3Alt || "Example Agency Sydney & Dubai"}
                              className="polaroid-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* HERO SLIDER */}
            <section className="hero_slider">
              <div letters-slide-up="" text-split="" className="hero-slide-progress">
                <div className="slide_progress_bar"></div>
              </div>
              {/* Desktop slider */}
              <div className="full-width-image w-dyn-list">
                <div role="list" className="full-width-image-mask w-dyn-items">
                  {heroSlidesList.map((slide, i) => {
                    const slideNum = slide.numberLabel || (i + 1).toString().padStart(2, "0");
                    const totalNum = heroSlidesList.length.toString().padStart(2, "0");
                    return (
                      <div key={slide.id} data-order={String(i + 1)} role="listitem" className="hero_slide w-dyn-item">
                        <div className="image-hero-slide1 fade">
                          <h5 letters-slide-up="" text-split="" className="h5 medium light leftmob">
                            {slide.description}
                          </h5>
                          <div className="slidernumber fade">
                            <div className="italics light">{slideNum.charAt(0) || "0"}</div>
                            <div className="italics light">{slideNum.charAt(1) || String(i + 1)}</div>
                            <div className="italics light">/{totalNum}</div>
                          </div>
                        </div>
                        <div text-split="" letters-slide-up="" className="slide-title-holder">
                          <div className="slide-title-holder-outer">
                            {[...Array(6)].map((_, idx) => (
                              <div key={idx} className="slide-title-hodler-inner">
                                <h2 className="slide_heading">{slide.heading}</h2>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="clip-up">
                          <div className="pimage">
                            <AdaptiveMedia
                              media={slide.media ? JSON.parse(slide.media) : { type: "image", url: "", altText: slide.heading }}
                              className="image"
                              loading="eager"
                            />
                          </div>
                        </div>
                        <div className="spacer"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile slider */}
              <div className="full-width-image slider_mob w-dyn-list">
                <div role="list" className="full-width-image-mask w-dyn-items">
                  {heroSlidesList.map((slide, i) => {
                    const slideNum = slide.numberLabel || (i + 1).toString().padStart(2, "0");
                    const totalNum = heroSlidesList.length.toString().padStart(2, "0");
                    return (
                      <div key={slide.id} data-order={String(i + 1)} role="listitem" className="hero_slide w-dyn-item">
                        <div className="image-hero-slide1 fade">
                          <h5 className="h5 medium light leftmob">{slide.description}</h5>
                          <div className="slidernumber fade">
                            <div className="italics light fade">{slideNum.charAt(0) || "0"}</div>
                            <div className="italics light fade">{slideNum.charAt(1) || String(i + 1)}</div>
                            <div className="italics light fade">/{totalNum}</div>
                          </div>
                        </div>
                        <div className="slide-title-holder mob fade">
                          <div className="slide-title-holder-outer">
                            {[...Array(6)].map((_, idx) => (
                              <div key={idx} className="slide-title-hodler-inner">
                                <h2 className="slide_heading">{slide.heading}</h2>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="clip-up fade">
                          <AdaptiveMedia
                            media={slide.media ? JSON.parse(slide.media) : { type: "image", url: "", altText: slide.heading }}
                            className="image"
                            loading="eager"
                          />
                        </div>
                        <div className="spacer"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* WORK SECTION */}
            <div id="webgl_trigger" className="feature_group">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <section className="section">
                      <section className="work-block">
                        <div id="home" className="section_group mob">
                          <div className="text-group-small fade">
                            <h6 className="h6">{settings?.workEyebrowTitle || "We are Example"}</h6>
                            <div className="italics">{settings?.workEyebrowSubtitle || "We Make Brands and Places Famous"}</div>
                          </div>
                          <div letters-slide-up="" text-split="" className="text-group-small narrow">
                            <div className="rich_text centred w-richtext">
                              <h5>{settings?.workCalloutLine1 || "The things that earn attention are always"}</h5>
                              <h1>{settings?.workCalloutHighlight || "more valuable"}</h1>
                              <h5>{settings?.workCalloutLine2 || "than the things that buy it"}</h5>
                            </div>
                          </div>
                          <div className="text-group-small narrow mob">
                            <div className="rich_text centred fade w-richtext">
                              <h5>{settings?.workCalloutLine1 || "The things that earn attention are always"}</h5>
                              <h1>{settings?.workCalloutHighlight || "more valuable"}</h1>
                              <h5>{settings?.workCalloutLine2 || "than the things that buy it"}</h5>
                            </div>
                          </div>
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>

              {/* FEATURED WORK GRID (Fully data-driven) */}
              {/* Grid IDs map to CSS grid-area rules in the shared Webflow stylesheet */}
              {/* Position 1 → w-node-d4483892...ea23 (Area-slot-4), 2 → w-node-_24d8775c...4c8c (row1/col1-3) */}
              {/* Position 3 → w-node-d4483892...ea25 (row1/col6-12), 4 → w-node-d4483892...ea27 (Area-slot-3) */}
              {/* Position 5 → w-node-d4483892...ea29 (Area-4), 6 → w-node-_82831d45...4aa  (Area-3) */}
              {(() => {
                const gridIds = [
                  "w-node-d4483892-dba6-9d8a-98b2-d3930d31ea23-60a103ad",
                  "w-node-_24d8775c-c0cf-bee4-1d52-40a6b7724c8c-60a103ad",
                  "w-node-d4483892-dba6-9d8a-98b2-d3930d31ea25-60a103ad",
                  "w-node-d4483892-dba6-9d8a-98b2-d3930d31ea27-60a103ad",
                  "w-node-d4483892-dba6-9d8a-98b2-d3930d31ea29-60a103ad",
                  "w-node-_82831d45-338b-1161-f061-985af17344aa-60a103ad",
                ];
                const holderClasses = [
                  "feature_work_holder slot-4-n",
                  "feature_work_holder",
                  "feature_work_holder is-landscape",
                  "feature_work_holder",
                  "feature_work_holder",
                  "feature_work_holder",
                ];
                return (
                  <div className="w-layout-grid featured_work_grid">
                    {featuredWorks.slice(0, 6).map((work, idx) => {
                      const nodeId = gridIds[idx];
                      const holderClass = holderClasses[idx] || "feature_work_holder";
                      const maskClass = `featured_work_mask ${work.slot || "slot1"} w-inline-block`;
                      return (
                        <div key={work.id} id={nodeId} className={holderClass}>
                          <WorkCardWrapper
                            media={work.media ? JSON.parse(work.media) : { type: "image", url: "", altText: `${work.title} by EXAMPLE Agency` }}
                            title={work.title}
                          >
                          <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                              <div role="listitem" className="feature_work_home w-dyn-item">
                                <div data-cursor={work.cursorText || "View Work"} className={maskClass}>
                                  <AdaptiveMedia
                                    media={work.media ? JSON.parse(work.media) : { type: "image", url: "", altText: `${work.title} by EXAMPLE Agency` }}
                                    className="work-img pimage"
                                    id="reflect"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="work_titles home fade w-inline-block">
                                  <h5 className="h5 dark work_titles">{work.title}</h5>
                                  <div className="italics work_features">{work.description}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </WorkCardWrapper>
                        </div>
                      );
                    })}

                    {/* AUS/NZ/UAE stats tile */}
                    <div id="w-node-de78f247-c5d9-8e5c-0ac8-e3f76e62e88b-60a103ad" className="feature_work_holder fade s">
                      <div className="anzac_top">
                        <h6 className="h6">{settings?.workStatsTagTopLeft || "AUS"}</h6>
                        <h6 className="h6">{settings?.workStatsTagTopRight || "NZ"}</h6>
                      </div>
                      <div className="featured_work_mask slot4 empty">
                        <h6 className="h6">{settings?.workStatsTagBottomLeft || "UAE"}</h6>
                        <h6 className="h6">{settings?.workStatsTagBottomRight || "26"}</h6>
                      </div>
                      <div className="work_titles home"></div>
                    </div>

                    {/* "All Work" button tile — no fixed grid ID needed, falls into auto-placement */}
                    <div className="feature_work_holder">
                      <a href={settings?.workAllWorkUrl || "/what-we-do"} className="link_button fade underline-link w-button">
                        {settings?.workAllWorkText || "All Work"}
                      </a>
                    </div>
                  </div>
                );
              })()}

              {/* MOBILE WORK LIST */}
              <section className="section featured_work_mob">
                <div className="featured_work_mobile_holder fade w-dyn-list">
                  <div role="list" className="featuredwork_list_mob w-dyn-items">
                    {(works || []).map((item) => (
                      <div key={item.id} role="listitem" className="mobile_work_item fade w-dyn-item">
                        <WorkCardWrapper
                          media={item.media ? JSON.parse(item.media) : { type: "image", url: "", altText: `${item.title} by EXAMPLE Agency` }}
                          title={item.title}
                        >
                        <div className="featured_work_mask w-inline-block">
                          <AdaptiveMedia
                            media={item.media ? JSON.parse(item.media) : { type: "image", url: "", altText: `${item.title} by EXAMPLE Agency` }}
                            className="work-img"
                            id="reflect"
                            loading="lazy"
                          />
                        </div>
                        <div className="work_mobile_titles w-inline-block">
                          <h5 className="h5 medium mob">{item.title}</h5>
                          <p className="work_snippet mob">{item.description}</p>
                        </div>
                        </WorkCardWrapper>
                      </div>
                    ))}
                  </div>
                </div>
                <a href={settings?.workAllWorkUrl || "/what-we-do"} className="link_button fade underline-link w-button">
                  {settings?.workAllWorkText || "All Work"}
                </a>
                <div className="line mob fade"></div>
              </section>

              {/* ─── WE_MAKE_THAT_HAPPEN (desktop) — "Most brands get noticed once..." dark section with bg image ─── */}
              <section className="we_make_that_happen">
                <div className="wmih_intro">
                  <div className="text-group-small fade_extra left">
                    <h6 className="h6">Capturing attention is hard.</h6>
                    <div className="italics">Keeping it is even harder.</div>
                  </div>
                  <div className="text-group-small left extra-narrow is-update">
                    <h5 letters-slide-up="" text-split="" className="image-heading">Most brands get noticed once. We build the ones people keep coming back to.</h5>
                    <p text-split="letters-slide-up" className="large_body is-image">We build the thinking, the story, and the communications that make brands and destinations the ones people choose first, return to, and recommend without being asked. <br /><br />Our clients include hotel groups, consumer brands, mixed-use destinations and property developers at the point where their businesses becomes something worth talking about.</p>
                  </div>
                </div>
                <div className="wmth_display fade_extra"></div>
                <div className="overlay light fade"></div>
                <div className="pimage">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/69c6695915898ef8e7dd88e3_692067ef2e73d20bd99209f9_67d6e0a442fc281ac05ffe86_wmih (1).avif"
                    loading="lazy"
                    alt=""
                    className="full_image"
                  />
                </div>
              </section>

              {/* ─── WE_MAKE_THAT_HAPPEN mobile version ─── */}
              <section className="we_make_that_happen mob">
                <div className="wmih_intro mob">
                  <div className="text-group-small left fade">
                    <h6 className="h6">Capturing attention is hard.</h6>
                    <div className="italics">Keeping it is even harder.</div>
                  </div>
                  <div className="text-group-small left extra-narrow mob fade">
                    <h5>Most brands get noticed once. We build the ones people keep coming back to.</h5>
                    <p className="large_body">We build the thinking, the story, and the communications that make brands and destinations the ones people choose first, return to, and recommend without being asked. <br /><br />Our clients include hotel groups, consumer brands, mixed-use destinations and property developers at the point where their businesses becomes something worth talking about.</p>
                  </div>
                  <div className="line low_op fade"></div>
                </div>
              </section>

              {/* WHO WE HELP floating list */}
              <div className="we_make_that_happen_holder">
                <div className="what_we_do_floating_list">
                  <div className="text-group-small fade_extra left">
                    <div className="col">
                      <h6 className="h6">{settings?.floatingHelpHeading || "WHO WE HELP"}</h6>
                      <div className="w-dyn-list">
                        <div role="list" className="floating_wwdlist w-dyn-items">
                          {floatingHelpLinks.map((item) => (
                            <div key={item.id} role="listitem" className="w-dyn-item">
                              <a href={item.url} className="nav_link w-inline-block">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={settings?.floatingArrowIcon || "/images/67d6f507937bee50f39cb6a3_GreatWhiteArrow.svg"}
                                  loading="lazy"
                                  alt={settings?.floatingArrowIconAlt || "Arrow icon"}
                                  className="link_btn_arrow invert"
                                />
                                <p className="large_body">{item.label}</p>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── WE WORK WITH THE BIGGEST BRANDS client logo section ─── */}
              <section className="section">
                <div className="section_group left_mob">
                  <div className="text-group-small left_mob fade">
                    <h6 className="h6">we work with the biggest brands</h6>
                    <div className="italics">From Around the World</div>
                  </div>
                  <div className="text-group-small clients">
                    {/* Group 3 logos */}
                    <div className="client_slider group3 clientflips aos">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner tl" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner br" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner bl" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner tr" />
                      <div className="client_slider_logo_list w-dyn-list">
                        <div role="list" className="client_slider_logo_items w-dyn-items">
                          {logosGroup3.map((logo) => (
                            <div key={logo.id} role="listitem" className="client_slider_logo_item w-dyn-item">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logo.image} loading="lazy" alt={logo.imageAlt || `${logo.name} logo`} className="client_logo" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Group 2 logos */}
                    <div className="client_slider group2 clientflips aos">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner tl" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner br" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner bl" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner tr" />
                      <div className="client_slider_logo_list w-dyn-list">
                        <div role="list" className="client_slider_logo_items w-dyn-items">
                          {logosGroup2.map((logo) => (
                            <div key={logo.id} role="listitem" className="client_slider_logo_item w-dyn-item">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logo.image} loading="lazy" alt={logo.imageAlt || `${logo.name} logo`} className="client_logo" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Group 1 logos */}
                    <div className="client_slider group1 clientflips aos">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner tl" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner br" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner bl" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={settings?.clientCornerIcon || "/images/67d7189a82f3dab39365b588_ClientCorner.svg"} loading="lazy" alt="" className="corner tr" />
                      <div className="client_slider_logo_list aos w-dyn-list">
                        <div role="list" className="client_slider_logo_items w-dyn-items">
                          {logosGroup1.map((logo) => (
                            <div key={logo.id} role="listitem" className="client_slider_logo_item w-dyn-item">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logo.image} loading="lazy" alt={logo.imageAlt || `${logo.name} logo`} className="client_logo" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Client feature text — desktop */}
                    <div className="client-flex is-desktop">
                      <div className="div-block-3">
                        <div className="client_feature is-desk">{settings?.clientFeatureHelp || "We help"}</div>
                        <div className="logo-space"></div>
                        <div className="client_feature is-desk">{settings?.clientFeatureName || "earn their name,"}</div>
                      </div>
                      <div className="div-block-3">
                        <div className="logo-space"></div>
                        <div className="client_feature is-desk">{settings?.clientFeaturePlace || "Earn their place,"}</div>
                      </div>
                      <div className="div-block-3">
                        <div className="client_feature is-desk">{settings?.clientFeatureAnd || "and"}</div>
                        <div className="logo-space"></div>
                        <div className="client_feature is-desk">{settings?.clientFeatureMoment || "earn their moment"}</div>
                      </div>
                    </div>
                    {/* Client feature text — mobile */}
                    <div className="client-flex is-mobile">
                      <div className="div-block-3">
                        <div className="client_feature is-mob">{settings?.clientFeatureHelp || "We help"}</div>
                        <div className="logo-space"></div>
                      </div>
                      <div className="div-block-3">
                        <div className="client_feature is-mob">Earn their</div>
                      </div>
                      <div className="div-block-3">
                        <div className="client_feature is-mob">{settings?.clientFeatureName || "name,"}</div>
                        <div className="logo-space"></div>
                        <div className="client_feature is-mob">earn</div>
                      </div>
                      <div className="div-block-3">
                        <div className="client_feature is-mob">their place,</div>
                      </div>
                      <div className="div-block-3">
                        <div className="client_feature is-mob">{settings?.clientFeatureAnd || "and"}</div>
                        <div className="logo-space"></div>
                        <div className="client_feature is-mob">earn</div>
                      </div>
                      <div className="div-block-3">
                        <div className="client_feature is-mob">their moment</div>
                      </div>
                    </div>
                    <div className="italics large fade">{settings?.clientTagline || "And we stay until the work is done"}</div>
                  </div>
                </div>
              </section>
            </div>

            {/* NEWSLETTER / BLOG SECTION */}
            <section className="section blog">
              <div className="blog_left_half_group w-dyn-list">
                <div role="list" className="blog_holder w-dyn-items">
                  <div role="listitem" className="blog_left_half fade w-dyn-item">
                    <div className="blog_half_top">
                      <div className="line aos"></div>
                      <div className="blog_titles">
                        <div className="text-group-small right fade">
                          <h6 className="h6">{settings?.newsletterHeading || "FOR EXAMPLE"}</h6>
                          <div className="italics">{settings?.newsletterBadge || "Join 15,000+ Readers"}</div>
                        </div>
                        <h3 text-split="">{settings?.newsletterTitle || "FOR EXAMPLE"}</h3>
                      </div>
                      <p letters-slide-up="" text-split="" className="blog_intro top side">
                        {settings?.newsletterSubtext || "Every week the design, culture, and brand stories worth knowing about, before everyone else does."}
                      </p>
                    </div>
                    <div className="blog_form fade w-form">
                      <div className="italics">{settings?.newsletterDisclaimer || "Always Free. Unsubscribe Anytime."}</div>
                      <form id="wf-form-Newsletter-Sign-Up-home" name="wf-form-Newsletter-Sign-Up-home" data-name="Newsletter Sign Up (home)" method="get" className="mini_signup">
                        <input
                          className="field dark w-input"
                          maxLength={256}
                          name="newsletter-sign-up"
                          placeholder={settings?.newsletterPlaceholder || "Your email address..."}
                          type="email"
                          id="newsletter-home"
                          required
                        />
                        <input
                          type="submit"
                          className="link_button dark submit w-button"
                          value={settings?.newsletterButtonText || "SIGN ME UP"}
                        />
                      </form>
                      <div className="w-form-done">
                        <div>{settings?.newsletterSuccessMessage || "Thank you! Your submission has been received!"}</div>
                      </div>
                      <div className="w-form-fail">
                        <div>{settings?.newsletterErrorMessage || "Oops! Something went wrong while submitting the form."}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_right">
                <div className="w-dyn-list">
                  <div role="list" className="beehive_list w-dyn-items">
                    {(journal || []).map((post) => (
                      <div key={post.id} role="listitem" className="beehive_post fade w-dyn-item">
                        <div className="beehive_image_holder">
                          <AdaptiveMedia
                            media={post.media ? JSON.parse(post.media) : { type: "image", url: "", altText: post.title }}
                            className="post_image pimage"
                            loading="lazy"
                          />
                        </div>
                        <div className="beehive_post_copy">
                          <h5>{post.title}</h5>
                          <p className="blog_intro">{post.excerpt}</p>
                          <a href={post.link} target="_blank" className="link_button beehive_link fade underline-link w-button">
                            {post.buttonLabel || "Read"}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FINE FORM PODCAST */}
            <section className="podcast-section">
              <div className="w-layout-grid grid">
                <div id="w-node-e984cdfd-2cc1-7d7b-96b6-07eb165d7bd1-60a103ad" className="podcast-content">
                  <h2>{podcast?.title || "Fine Form Podcast"}</h2>
                  <div className="div-block">
                    <p className="large_body">
                      {podcast?.description1 || "Example is proud to present Fine Form, a podcast reimagining the rules of success, created and hosted by our Co-Founder and COO, Rebecca Jarvie-Gibbs."}
                    </p>
                    <p className="rich_text">
                      {podcast?.description2 || "Each week, Rebecca sits down with women shaping food, design, business and culture to uncover the big changes, small shifts and defining habits that have changed the way they work and live."}
                    </p>
                  </div>
                  <a href={podcast?.ctaLink || "#"} target="_blank" className="link_button light fade w-button">
                    {podcast?.ctaText || "View on Apple"}
                  </a>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={podcast?.imageDesktop || "/images/68dd4df38fa090fd4ec78632_fineform1.avif"}
                loading="lazy"
                sizes="100vw"
                alt={podcast?.imageDesktopAlt || `${podcast?.title || "Fine Form"} podcast campaign by Example Agency`}
                className="form-parallax is-desktop"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={podcast?.imageMobile || "/images/68dd56a4c34c85d6fe69b1ed_fineform-mobile.avif"}
                loading="lazy"
                sizes="100vw"
                alt={podcast?.imageMobileAlt || `${podcast?.title || "Fine Form"} podcast brand content on mobile`}
                className="form-parallax is-mobile"
              />
            </section>

            {/* FOOTER */}
            <section className="footer">
              <div className="footer_content">
                <div className="footer_top">
                  <div className="footer_top_top_holder">
                    <div className="text-group-small hoz">
                      {footerSocialLinks.length > 0 ? (
                        footerSocialLinks.map((item) => (
                          <a key={item.id} href={item.url} target="_blank" className="h6 link">
                            {item.label}
                          </a>
                        ))
                      ) : (
                        <>
                          <a href={settings?.instagramUrl || "https://www.instagram.com/weareexample"} className="h6 link">Instagram</a>
                          <a href={settings?.linkedinUrl || "https://au.linkedin.com/company/we-are-example"} className="h6 link">Linkedin</a>
                        </>
                      )}
                    </div>
                    <div className="text-group-small hoz mob">
                      <h6>{settings?.logoText || "EXAMPLE"}</h6>
                      <div className="italics alligned">{settings?.footerSloganMob || "Independent agency for brands and destinations"}</div>
                    </div>
                  </div>
                  <div className="text-group-small big mob">
                    {/* footer_mob is display:none on desktop (CSS), shown only on mobile */}
                    <h2 className="h1 footer_mob">{settings?.footerHeadline}</h2>
                    {/* is-footer is the desktop version — no duplicate br to avoid extra spacing */}
                    <h2 text-split="" letters-slide-up="" className="h1 is-footer">
                      {settings?.footerHeadline}
                    </h2>
                    <div className="w-layout-grid footer-columns">
                      <div className="contact_block_holder mob_footer fade">
                        <div className="contact_block is-foot">
                          <h5 className="locations-text">{settings?.footerLocationsText || "Australia / New Zealand / Middle East"}</h5>
                          <div className="text-group-small left spaced fade">
                            <a
                              href={`mailto:${settings?.contactEmail || "hello@weareexample.com"}?subject=${settings?.contactEmailSubject || "Hi"}`}
                              className="link_button light fade w-button"
                            >
                              {settings?.contactEmail || "hello@weareexample.com"}
                            </a>
                            <div className="footer-flex">
                              <a href={`tel:${settings?.phoneSydney}`} className="small_link">{settings?.phoneSydney}</a>
                              <a href={`tel:${settings?.phoneDubai}`} className="small_link">{settings?.phoneDubai}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-links">
                        <h5 className="locations-text">{settings?.footerQuicklinksTitle || "Quicklinks"}</h5>
                        <div className="footer-flex">
                          {footerQuicklinks.map((item) => (
                            <a key={item.id} href={item.url} className="small_link">
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer_bottom_holder">
                  <div className="small_text light low_opacity narrow is-legal">
                    {settings?.footerLandAcknowledgement || "We acknowledge the Traditional Custodians of the land on which we work and live, and pay our respects to Elders past and present. We recognise their continuing connection to land, waters and culture."}
                  </div>
                  <div className="footer_bottom form">
                    <div id="w-node-_8d7a6ffd-abe6-b743-df40-d902018ead17-7a658717" className="text-group-small hoz top">
                      <div className="small_text">
                        <strong className="bold-text">{settings?.footerNewsletterTitle || "Subscribe to our Newsletter"}</strong>
                        <br />
                        <span className="small_light">{settings?.footerNewsletterSubtext || "Always Free. Unsubscribe Anytime."}</span>
                      </div>
                    </div>
                    <div id="Footer-Newsletter" className="form-block w-node-_9f034570-82ed-1cb9-a93f-cc7372358767-7a658717 w-form">
                      <form id="newsletter_footer" name="wf-form-Newsletter-Sign-Up" data-name="Newsletter Sign Up" method="get" className="mini_signup">
                        <input
                          className="field w-input"
                          maxLength={256}
                          name="email"
                          placeholder={settings?.footerNewsletterPlaceholder || "Your email address..."}
                          type="email"
                          id="newsletter_footer_input"
                          required
                        />
                        <input
                          type="submit"
                          className="link_button light submit w-button"
                          value={settings?.footerNewsletterButtonText || "SIGN ME UP"}
                        />
                      </form>
                      <div className="form_success w-form-done">
                        <div className="form_messages">{settings?.footerNewsletterSuccess || "Thank you! Your submission has been received!"}</div>
                      </div>
                      <div className="form_error w-form-fail">
                        <div className="text-block">{settings?.footerNewsletterError || "Oops! Something went wrong while submitting the form."}</div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_bottom top_line">
                    <div id="w-node-_31f55131-8289-afd6-c315-bf24bf2553a1-7a658717" className="text-group-small hoz">
                      <h6>{settings?.copyrightText || "©2026 Example"}</h6>
                      <div className="small_text light">{settings?.footerRightsText || "All Rights Reserved."}</div>
                    </div>
                    <a id="w-node-_1c9c8262-0978-2653-49bd-5c693f818878-7a658717" href={settings?.footerPrivacyUrl || "#"} className="small_link mob_off">
                      {settings?.footerPrivacyText || "Privacy Policy"}
                    </a>
                    <div id="w-node-b7a6cc5e-ecce-185f-010f-1f2edbd97258-7a658717" className="footer_bottom_mob">
                      <a href={settings?.footerPrivacyUrl || "#"} className="small_link is-off">
                        {settings?.footerPrivacyText || "Privacy Policy"}
                      </a>
                      <div className="text-group-small hoz right">
                        <div className="credit-flex">
                          <div className="credit-link is-light">{settings?.footerCreditsPrefix || "Made by"}</div>
                          {footerCreditsLinks.map((item) => (
                            <a key={item.id} href={item.url} target="_blank" className="credit-link">
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer atmospheric image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={settings?.footerImage || "/images/67d76cd49b9cdd619b9f3ffa_Footer_image.avif"}
                  loading="eager"
                  alt={settings?.footerImageAlt || "Example Agency brand and team imagery"}
                  className="footer_image"
                />
              </div>
            </section>

          </div>{/* end #homepage */}
        </div>{/* end page-wrapper */}
      </div>{/* end .main */}
    </>
  );
}
