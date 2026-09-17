export default function About() {
  return (
    <>
      {/* ─── HOMEPAGE STYLE MAIN WRAPPER (for JS to attach correctly if needed) ─── */}
      <div className="main">
        <div data-barba="container" className="page-wrapper">

          {/* ── DESKTOP NAV (Reusing from homepage) ── */}
          <div text-split="" letters-slide-up="" className="nav">
            <a href="/" className="link nav_left w-inline-block">
              <img src="/images/67d9bf33d28af893fb808325_E.svg" loading="eager" alt="" className="logo e" />
              <img src="/images/67d9bf334cace4fac68c5a73_X.svg" loading="eager" alt="" className="logo x" />
              <img src="/images/67d9bf330a0ae83fba8a1735_A.svg" loading="eager" alt="" className="logo a" />
              <img src="/images/67d9bf334c1faf7e677ec2d8_M.svg" loading="eager" alt="" className="logo m" />
              <img src="/images/67d9bf33b548e787de206b32_P.svg" loading="eager" alt="" className="logo p" />
              <img src="/images/67d9bf33c1fda4b1ca0eda2b_L.svg" loading="eager" alt="" className="logo l" />
              <img src="/images/67d9bf3321b12e69bca2f8f2_E2.svg" loading="eager" alt="" className="logo e2" />
            </a>
            <div className="nav_links">
              <a href="/" className="nav_link underline-link">Hi, </a>
              <a href="/about" className="nav_link underline-link">About, </a>
              <a id="what-we-do-menu" href="#" className="nav_link underline-link">What We Do</a>
            </div>
            <a href="mailto:hello@weareexample.com?subject=Hi!" className="link nav_right underline-link">hello@weareexample.com</a>
            <a href="#" className="hamburger w-inline-block">
              <div className="burger_line"></div>
              <div className="burger_line"></div>
            </a>
          </div>

          <div className="page" style={{ paddingTop: '150px' }}>

            {/* 1. HERO SECTION */}
            <section style={{ padding: '0 5%', textAlign: 'center', marginBottom: '80px' }}>
              <h1 style={{
                fontFamily: '"American Grotesk Compressed", sans-serif',
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                lineHeight: '0.85',
                textTransform: 'uppercase',
                margin: '0 auto 40px',
                maxWidth: '1200px'
              }}>
                We are the<br />agency that<br />makes you<br />famous.
              </h1>

              <div style={{ width: '100%', height: '60vh', position: 'relative', overflow: 'hidden', marginBottom: '40px' }}>
                {/* Placeholder for the party/drinks image */}
                <img
                  src="https://images.unsplash.com/photo-1575037614876-c38556f65d39?q=80&w=2000&auto=format&fit=crop"
                  alt="People celebrating"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{
                fontFamily: '"American Grotesk Compressed", sans-serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '0.9',
                textTransform: 'uppercase',
                maxWidth: '800px',
                margin: '0',
                textAlign: 'left'
              }}>
                PROUDLY BEHIND THE MOST<br />RENOWNED LUXURY AND LIFESTYLE<br />BRANDS AND PLACES
              </h3>
            </section>

            {/* 2. SUB-NAV / TICKER */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              padding: '20px 0',
              borderTop: '1px solid #ccc',
              borderBottom: '1px solid #ccc',
              textTransform: 'uppercase',
              fontSize: '12px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              marginBottom: '0'
            }}>
              <a href="#create" style={{ textDecoration: 'none', color: '#000' }}>Create</a>
              <a href="#design" style={{ textDecoration: 'none', color: '#000' }}>Design</a>
              <a href="#shape" style={{ textDecoration: 'none', color: '#000' }}>Shape</a>
              <a href="#amplify" style={{ textDecoration: 'none', color: '#000' }}>Amplify</a>
              <a href="#team" style={{ textDecoration: 'none', color: '#000' }}>Team</a>
              <a href="#careers" style={{ textDecoration: 'none', color: '#000' }}>Careers</a>
            </div>

            {/* 3. CAPABILITIES (DARK BLOCKS) */}
            <section style={{ backgroundColor: '#111', color: '#fff', padding: '0' }}>

              {/* Block 1: Create */}
              <div id="create" style={{ display: 'flex', flexWrap: 'wrap', borderBottom: '1px solid #333' }}>
                <div style={{ flex: '1 1 400px', padding: '80px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '0.85', margin: '0 0 20px', textTransform: 'uppercase', color: '#fff' }}>
                    WE CREATE
                  </h2>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.3', marginBottom: '60px', maxWidth: '500px' }}>
                    COMPELLING PLACES, PEOPLE AND BRAND STORIES THAT STAND OUT.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.9rem', color: '#aaa', textTransform: 'uppercase' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Brand Strategy</li>
                      <li style={{ marginBottom: '10px' }}>Place Strategy</li>
                      <li style={{ marginBottom: '10px' }}>Brand Architecture</li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Naming</li>
                      <li style={{ marginBottom: '10px' }}>Brand Messaging</li>
                    </ul>
                  </div>
                </div>
                <div style={{ flex: '1 1 400px', minHeight: '600px', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop" alt="People at a cafe" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Block 2: Design */}
              <div id="design" style={{ display: 'flex', flexWrap: 'wrap', borderBottom: '1px solid #333' }}>
                <div style={{ flex: '1 1 400px', padding: '80px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '0.85', margin: '0 0 20px', textTransform: 'uppercase', color: '#fff' }}>
                    WE DESIGN
                  </h2>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.3', marginBottom: '60px', maxWidth: '500px' }}>
                    PLACES PEOPLE WANT TO SPEND THEIR TIME (AND MONEY) IN.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.9rem', color: '#aaa', textTransform: 'uppercase' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Visual Identity</li>
                      <li style={{ marginBottom: '10px' }}>Art Direction</li>
                      <li style={{ marginBottom: '10px' }}>Spatial Design</li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Brand Guidelines</li>
                      <li style={{ marginBottom: '10px' }}>Packaging</li>
                      <li style={{ marginBottom: '10px' }}>Digital</li>
                    </ul>
                  </div>
                </div>
                <div style={{ flex: '1 1 400px', minHeight: '600px', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1542314831-c6a4d1429d6d?q=80&w=1000&auto=format&fit=crop" alt="Building exterior" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Block 3: Shape */}
              <div id="shape" style={{ display: 'flex', flexWrap: 'wrap', borderBottom: '1px solid #333' }}>
                <div style={{ flex: '1 1 400px', padding: '80px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '0.85', margin: '0 0 20px', textTransform: 'uppercase', color: '#fff' }}>
                    WE SHAPE
                  </h2>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.3', marginBottom: '60px', maxWidth: '500px' }}>
                    THE CULTURE THAT MAKES A PLACE WORTH BELONGING TO.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.9rem', color: '#aaa', textTransform: 'uppercase' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Content Creation</li>
                      <li style={{ marginBottom: '10px' }}>Copywriting</li>
                      <li style={{ marginBottom: '10px' }}>Social Media</li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Creative Campaigns</li>
                      <li style={{ marginBottom: '10px' }}>Cultural Programming</li>
                    </ul>
                  </div>
                </div>
                <div style={{ flex: '1 1 400px', minHeight: '600px', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" alt="Bartender" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Block 4: Amplify */}
              <div id="amplify" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px', padding: '80px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '0.85', margin: '0 0 20px', textTransform: 'uppercase', color: '#fff' }}>
                    WE AMPLIFY
                  </h2>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.3', marginBottom: '60px', maxWidth: '500px' }}>
                    THE MESSAGES TO ENSURE THEY REACH THE RIGHT PEOPLE, AT THE RIGHT TIME.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.9rem', color: '#aaa', textTransform: 'uppercase' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Public Relations</li>
                      <li style={{ marginBottom: '10px' }}>Media Relations</li>
                      <li style={{ marginBottom: '10px' }}>Earned Media</li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ marginBottom: '10px' }}>Talent & Influencers</li>
                      <li style={{ marginBottom: '10px' }}>Events & Activations</li>
                      <li style={{ marginBottom: '10px' }}>Partnerships</li>
                    </ul>
                  </div>
                </div>
                <div style={{ flex: '1 1 400px', minHeight: '600px', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop" alt="Chef with food" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </section>

            {/* 4. CLIENT LOGOS (Reused from home) */}
            <div className="client_logos_holder" style={{ backgroundColor: '#111', paddingTop: '40px', paddingBottom: '40px', borderTop: '1px solid #333' }}>
              <div className="client_slider group2 clientflips aos">
                <div className="client_slider_logo_list aos w-dyn-list">
                  <div role="list" className="client_slider_logo_items w-dyn-items">
                    {[
                      "/images/67dd24ea9701d4abc3450f13_standard-logo.svg",
                      "/images/67e0fc492397d08370fd367b_diageo-logo.svg",
                      "/images/67e0fc6265253484b20e528a_qt-logo.svg",
                      "/images/67e0fc76719e4f764e3fdabf_etymon-logo.svg",
                      "/images/67ea34f5cb5c87586b6421c8_new-asahi-logo.svg",
                    ].map((src, i) => (
                      <div key={i} role="listitem" className="client_slider_logo_item w-dyn-item">
                        <img src={src} loading="lazy" alt="" className="client_logo" style={{ filter: 'invert(1)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. FOUNDERS */}
            <section style={{ display: 'flex', flexWrap: 'wrap', padding: '80px 5%' }}>
              <div style={{ flex: '1 1 400px', paddingRight: '40px', marginBottom: '40px' }}>
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop" alt="Founders" style={{ width: '100%', borderRadius: '4px' }} />
              </div>
              <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '0.85', textTransform: 'uppercase', marginBottom: '40px' }}>
                  MEET THE FOUNDERS<br />YOU&apos;LL ACTUALLY<br />WORK WITH
                </h2>

                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>AMANDA SWIFT</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px', textTransform: 'uppercase' }}>CEO / CO-FOUNDER</p>
                  <a href="#" style={{ color: '#000', textDecoration: 'underline', fontSize: '0.9rem' }}>Read Bio</a>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>REBECCA JARVIE-GIBBS</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px', textTransform: 'uppercase' }}>COO / CO-FOUNDER</p>
                  <a href="#" style={{ color: '#000', textDecoration: 'underline', fontSize: '0.9rem' }}>Read Bio</a>
                </div>
              </div>
            </section>

            {/* 6. OUR TEAM */}
            <section id="team" style={{ padding: '80px 5%', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
              <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(5rem, 10vw, 8rem)', lineHeight: '0.85', textTransform: 'uppercase', marginBottom: '60px' }}>
                OUR TEAM
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                  <div key={i} style={{ aspectRatio: '3/4', backgroundColor: '#ddd', position: 'relative' }}>
                    <img
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&sig=${i}`}
                      alt={`Team Member ${i}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* 7. CAREERS */}
            <section id="careers" style={{ padding: '120px 5%', textAlign: 'center' }}>
              <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '0.85', textTransform: 'uppercase', marginBottom: '20px' }}>
                CAREERS
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>We&apos;re always looking for good people to do great things with.</p>
              <a href="#" style={{ textDecoration: 'underline', fontWeight: 'bold', textTransform: 'uppercase' }}>VIEW OPEN ROLES</a>
            </section>

            {/* 8. OFFICE / CONTACT */}
            <section style={{ position: 'relative', width: '100%', height: '80vh', backgroundColor: '#111', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '5%' }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                alt="Office space"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, zIndex: 0 }}
              />
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <h2 style={{ fontFamily: '"American Grotesk Compressed", sans-serif', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '0.85', textTransform: 'uppercase', marginBottom: '40px' }}>
                  THE BEST CLIENT<br />RELATIONSHIPS START WITH<br />A GOOD CONVERSATION.
                </h2>
                <div style={{ display: 'flex', gap: '40px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>NEW BUSINESS / GENERAL</p>
                    <a href="mailto:hello@weareexample.com" style={{ color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '5px' }}>hello@weareexample.com</a>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>SYDNEY</p>
                    <p>+61 2 8322 4600</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>DUBAI</p>
                    <p>+971 800 0311 0209</p>
                  </div>
                </div>
              </div>
            </section>

          </div>{/* end page */}
        </div>{/* end page-wrapper */}
      </div>{/* end .main */}
    </>
  );
}
