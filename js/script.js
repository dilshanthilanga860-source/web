/**
 * AETHERIA: REALM OF VALOR
 * Official Website Interactive Script (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. HERO ROSTER DATA MODEL
     ========================================================================== */
  const heroesData = [
    {
      id: 'kahlii',
      name: 'KAHLII',
      role: 'MAGE',
      difficulty: 'MEDIUM',
      quote: '"I will pay back what you have done to me, ten-fold!"',
      bio: 'The Sovereign of Retribution floating between astral dimensions. Kahlii commands ethereal souls and dark radiance, raining barrages of spectral blades down upon anyone who dares challenge her reign.',
      image: 'assets/heroes/hero-kahlii.jpg',
      portrait: 'assets/heroes/portraits/kahlii.jpg',
      damage: 95,
      defense: 45,
      mobility: 70,
      abilitiesTitle: "KAHLII'S TALENTS",
      abilities: [
        { code: 'P', name: 'Astral Curse', desc: 'Basic attacks pierce enemies and inflict magic stacks.' },
        { code: '1', name: 'Soul Ward', desc: 'Conjures a mystic shield that increases movement speed.' },
        { code: 'ULT', name: 'Grievous Fury', desc: 'Fires a continuous barrage of 55 spectral missiles.' }
      ]
    },
    {
      id: 'valhein',
      name: 'VALHEIN',
      role: 'ARCHER / HUNTER',
      difficulty: 'EASY',
      quote: '"Be cautious, my friend. I\'m huntin\' demons."',
      bio: 'A relentless slayer of the supernatural armed with enchanted firearms and argent crossbow bolts. Valhein infuses his shots with randomized magic, locking down foes with stuns and piercing bursts.',
      image: 'assets/heroes/hero-valhein.jpg',
      portrait: 'assets/heroes/portraits/valhein.jpg',
      damage: 90,
      defense: 40,
      mobility: 75,
      abilitiesTitle: "VALHEIN'S ARSENAL",
      abilities: [
        { code: 'P', name: 'Pocket Glaive', desc: 'Every 3rd basic attack tosses a random silver, red, or blue dart.' },
        { code: '1', name: 'Silver Dart', desc: 'Hurls a silver dart dealing magic damage and boosting movement speed.' },
        { code: 'ULT', name: 'Bullet Storm', desc: 'Discharges 6 silver bullets in a devastating shotgun cone.' }
      ]
    },
    {
      id: 'diaochan',
      name: 'DIAOCHAN',
      role: 'FROST MAGE',
      difficulty: 'MEDIUM',
      quote: '"How do you do the freeze again...?"',
      bio: 'A legendary maiden blessed with crystalline frost enchantments. Diaochan encases enemy formations in perpetual blizzard zones, immobilizing threats and creating game-winning teamfight combos.',
      image: 'assets/heroes/hero-diaochan.jpg',
      portrait: 'assets/heroes/portraits/diaochan.jpg',
      damage: 88,
      defense: 35,
      mobility: 55,
      abilitiesTitle: "DIAOCHAN'S FROST",
      abilities: [
        { code: 'P', name: 'Ice Veil', desc: 'Gains an icy barrier that grants immunity to the next crowd control effect.' },
        { code: '1', name: 'Diamond Dust', desc: 'Freezes all enemies in the target area after a brief delay.' },
        { code: 'ULT', name: 'Blizzard', desc: 'Chants a massive ice storm dealing continuous blizzard damage with armor buff.' }
      ]
    },
    {
      id: 'shadow',
      name: 'SHADOW VIPER',
      role: 'ASSASSIN',
      difficulty: 'HARD',
      quote: '"Darkness is not my cloak. It is my blade."',
      bio: 'A lethal shadow-weaver capable of traversing walls and vanishing from perception. She isolates out-of-position targets, striking vital points with terrifying precision before dissolving into mist.',
      image: 'assets/heroes/hero-shadow.jpg',
      portrait: 'assets/heroes/portraits/shadow.jpg',
      damage: 98,
      defense: 30,
      mobility: 95,
      abilitiesTitle: "VIPER'S STEALTH",
      abilities: [
        { code: 'P', name: 'Shadow Dance', desc: 'Moving through brush grants camouflage and bonus critical chance.' },
        { code: '1', name: 'Twin Slices', desc: 'Dashes forward, slashing enemies with spectral violet daggers.' },
        { code: 'ULT', name: 'Shadow Void', desc: 'Teleports directly behind an enemy champion, dealing execute damage.' }
      ]
    },
    {
      id: 'tank',
      name: 'GOLIATH',
      role: 'TANK / JUGGERNAUT',
      difficulty: 'EASY',
      quote: '"None shall breach the Golden Citadel."',
      bio: 'An indestructible colossus fashioned from ancient runic granite and enchanted iron. He anchors the frontline with an impenetrable tower shield, redirecting damage away from his fragile allies.',
      image: 'assets/heroes/hero-tank.jpg',
      portrait: 'assets/heroes/portraits/tank.jpg',
      damage: 40,
      defense: 100,
      mobility: 40,
      abilitiesTitle: "GOLIATH'S DEFENSE",
      abilities: [
        { code: 'P', name: 'Runic Fortress', desc: 'Generates a massive stone shield upon entering combat.' },
        { code: '1', name: 'Earth Tremor', desc: 'Slams his tower shield, slowing all surrounding enemies by 60%.' },
        { code: 'ULT', name: 'Bulwark of Kings', desc: 'Plants his shield into the earth, granting 40% damage reduction to allies.' }
      ]
    },
    {
      id: 'arthur',
      name: 'ARTHUR',
      role: 'WARRIOR / PALADIN',
      difficulty: 'MEDIUM',
      quote: '"My sword shines with righteous justice!"',
      bio: 'The vanguard commander clad in consecrated plate. Arthur wields his massive broadsword with unyielding valor, silencing sorcerers and leading fearless charges into enemy territory.',
      image: 'assets/backgrounds/warrior-banner.jpg',
      portrait: 'assets/heroes/portraits/archmage.jpg',
      damage: 75,
      defense: 85,
      mobility: 65,
      abilitiesTitle: "ARTHUR'S VALOR",
      abilities: [
        { code: 'P', name: 'Paragon', desc: 'Grants permanent bonus physical armor based on hero level.' },
        { code: '1', name: 'Righteous Charge', desc: 'Increases movement speed and silences the next struck target.' },
        { code: 'ULT', name: 'Deep Impact', desc: 'Leaps high into the air and slams down, knocking up enemy champions.' }
      ]
    }
  ];

  let currentHeroIndex = 0;

  /* ==========================================================================
     2. HERO SELECTOR LOGIC
     ========================================================================== */
  const portraitTrack = document.getElementById('portraitTrack');
  const heroNameEl = document.getElementById('heroName');
  const heroRoleTagEl = document.getElementById('heroRoleTag');
  const heroDiffTagEl = document.getElementById('heroDiffTag');
  const heroQuoteEl = document.getElementById('heroQuote');
  const heroBioEl = document.getElementById('heroBio');
  const heroStageImg = document.getElementById('heroStageImg');
  const abilityHeroTitleEl = document.getElementById('abilityHeroTitle');
  const abilitiesListEl = document.getElementById('abilitiesList');
  const stageCounterEl = document.getElementById('stageCounter');
  const prevHeroBtn = document.getElementById('prevHeroBtn');
  const nextHeroBtn = document.getElementById('nextHeroBtn');

  const statDamageEl = document.getElementById('statDamage');
  const statDamageNumEl = document.getElementById('statDamageNum');
  const statDefenseEl = document.getElementById('statDefense');
  const statDefenseNumEl = document.getElementById('statDefenseNum');
  const statMobilityEl = document.getElementById('statMobility');
  const statMobilityNumEl = document.getElementById('statMobilityNum');

  // Initialize portraits in track
  function renderPortraits() {
    if (!portraitTrack) return;
    const existing = portraitTrack.querySelectorAll('.portrait-item');
    if (existing.length > 0) {
      existing.forEach((item, idx) => {
        item.addEventListener('click', () => {
          if (currentHeroIndex !== idx) switchHero(idx);
        });
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            switchHero(idx);
          }
        });
      });
      return;
    }

    portraitTrack.innerHTML = '';
    heroesData.forEach((hero, idx) => {
      const item = document.createElement('div');
      item.className = `portrait-item ${idx === currentHeroIndex ? 'active' : ''}`;
      item.setAttribute('role', 'tab');
      item.setAttribute('aria-selected', idx === currentHeroIndex ? 'true' : 'false');
      item.setAttribute('tabindex', '0');
      item.setAttribute('title', `${hero.name} (${hero.role})`);

      item.innerHTML = `
        <img src="${hero.portrait}" alt="${hero.name}" class="portrait-thumb" loading="lazy">
      `;

      item.addEventListener('click', () => {
        if (currentHeroIndex !== idx) {
          switchHero(idx);
        }
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          switchHero(idx);
        }
      });

      portraitTrack.appendChild(item);
    });
  }

  // Switch Hero with smooth scale & fade transition
  function switchHero(index) {
    if (index < 0) index = heroesData.length - 1;
    if (index >= heroesData.length) index = 0;

    currentHeroIndex = index;
    const hero = heroesData[currentHeroIndex];

    // Trigger audio chime if enabled
    playSoftChime(440 + index * 40);

    // Update active portrait
    const items = portraitTrack.querySelectorAll('.portrait-item');
    items.forEach((it, i) => {
      if (i === currentHeroIndex) {
        it.classList.add('active');
        it.setAttribute('aria-selected', 'true');
        it.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        it.classList.remove('active');
        it.setAttribute('aria-selected', 'false');
      }
    });

    // Animate stage artwork
    heroStageImg.classList.add('hero-switching-out');

    setTimeout(() => {
      // Update text details
      heroNameEl.textContent = hero.name;
      heroRoleTagEl.textContent = hero.role;
      heroDiffTagEl.textContent = `DIFFICULTY: ${hero.difficulty}`;
      heroQuoteEl.textContent = hero.quote;
      heroBioEl.textContent = hero.bio;
      abilityHeroTitleEl.textContent = hero.abilitiesTitle;
      stageCounterEl.textContent = `0${currentHeroIndex + 1} / 0${heroesData.length}`;

      // Update stat bars
      statDamageEl.style.width = `${hero.damage}%`;
      statDamageNumEl.textContent = `${hero.damage}%`;
      statDefenseEl.style.width = `${hero.defense}%`;
      statDefenseNumEl.textContent = `${hero.defense}%`;
      statMobilityEl.style.width = `${hero.mobility}%`;
      statMobilityNumEl.textContent = `${hero.mobility}%`;

      // Update abilities list
      abilitiesListEl.innerHTML = hero.abilities.map(ab => `
        <div class="ability-row">
          <div class="ability-icon-circle">
            <span>${ab.code}</span>
          </div>
          <div class="ability-desc">
            <strong>${ab.name}</strong>
            <p>${ab.desc}</p>
          </div>
        </div>
      `).join('');

      // Update image
      heroStageImg.src = hero.image;
      heroStageImg.alt = hero.name;

      heroStageImg.classList.remove('hero-switching-out');
      heroStageImg.classList.add('hero-switching-in');

      setTimeout(() => {
        heroStageImg.classList.remove('hero-switching-in');
      }, 400);
    }, 180);
  }

  // Next / Previous buttons
  if (prevHeroBtn) {
    prevHeroBtn.addEventListener('click', () => {
      switchHero(currentHeroIndex - 1);
    });
  }

  if (nextHeroBtn) {
    nextHeroBtn.addEventListener('click', () => {
      switchHero(currentHeroIndex + 1);
    });
  }

  renderPortraits();

  /* ==========================================================================
     3. STICKY NAVBAR & SCROLL DETECTOR
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Header sticky styling
    if (scrollY > 60) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }

    // Back to top visibility
    if (scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     4. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function toggleDrawer() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  function openDrawer() {
    mobileDrawer.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ==========================================================================
     5. HERO CANVAS PARTICLE EFFECT (EMBERS & ENERGY)
     ========================================================================== */
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let width, height;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.size = Math.random() * 2.5 + 1;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.fadeSpeed = Math.random() * 0.003 + 0.002;
        
        // Gold or crimson ember
        const isGold = Math.random() > 0.4;
        this.color = isGold 
          ? `rgba(212, 175, 55, ${this.opacity})` 
          : `rgba(220, 75, 45, ${this.opacity})`;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= this.fadeSpeed;

        if (this.opacity <= 0 || this.y < -10) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.fill();
      }
    }

    // Spawn 45 ambient particles
    for (let i = 0; i < 45; i++) {
      const p = new Particle();
      p.y = Math.random() * height; // initial scatter
      particles.push(p);
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    // Only run when hero is visible
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationFrameId) animateParticles();
        } else {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      });
    }, { threshold: 0.1 });

    heroObserver.observe(canvas.parentElement);
  }

  /* ==========================================================================
     6. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     7. MODAL COMPONENT (NEWS & TRAILERS)
     ========================================================================== */
  const siteModal = document.getElementById('siteModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const watchTrailerBtn = document.getElementById('watchTrailerBtn');
  const viewAllNewsBtn = document.getElementById('viewAllNewsBtn');
  const tournamentScheduleBtn = document.getElementById('tournamentScheduleBtn');
  const heroDetailsBtn = document.getElementById('heroDetailsBtn');

  function openModal(contentHtml) {
    if (!siteModal || !modalContent) return;
    modalContent.innerHTML = contentHtml;
    siteModal.classList.add('active');
    siteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!siteModal) return;
    siteModal.classList.remove('active');
    siteModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (siteModal) {
    siteModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop-blur')) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // News click triggers
  document.querySelectorAll('.news-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const title = trigger.dataset.title;
      const date = trigger.dataset.date;
      const img = trigger.dataset.img;
      const body = trigger.dataset.body;

      openModal(`
        <img src="${img}" alt="${title}" class="modal-img-banner">
        <span class="modal-date">${date}</span>
        <h3 class="modal-title">${title}</h3>
        <p class="modal-body-text">${body}</p>
        <button class="btn btn-primary-gold btn-block" onclick="document.getElementById('siteModal').classList.remove('active'); document.body.style.overflow='';">
          RETURN TO ARENA
        </button>
      `);
    });
  });

  // Watch Trailer Button
  if (watchTrailerBtn) {
    watchTrailerBtn.addEventListener('click', () => {
      openModal(`
        <div style="position:relative; width:100%; height:320px; background:#0c0a12; border-radius:6px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:1.5rem; border:1px solid var(--accent-gold);">
          <div style="width:70px; height:70px; border-radius:50%; background:var(--accent-gold); display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; box-shadow:0 0 25px rgba(212,175,55,0.6);">
            <svg viewBox="0 0 24 24" fill="#09090c" style="width:28px; height:28px; margin-left:3px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <h3 style="font-family:var(--font-heading); font-size:1.4rem; letter-spacing:0.1em; color:#fff; margin-bottom:0.5rem;">OFFICIAL CINEMATIC TRAILER</h3>
          <p style="font-size:0.85rem; color:#8e909e; max-width:440px; margin-bottom:1.5rem;">Experience high fidelity graphics, dynamic particle spell effects, and 120 FPS high-refresh MOBA competition.</p>
          <a href="#download" class="btn btn-primary-gold" onclick="document.getElementById('siteModal').classList.remove('active'); document.body.style.overflow='';">DOWNLOAD & PLAY TODAY</a>
        </div>
      `);
    });
  }

  // View All News button
  if (viewAllNewsBtn) {
    viewAllNewsBtn.addEventListener('click', () => {
      openModal(`
        <h3 class="modal-title" style="margin-top:0.5rem;">AETHERIA DISPATCH ARCHIVES</h3>
        <p class="modal-body-text">
          Browse through past patch notes, champion design logs, tournament balance updates, and developer insights directly on our community forums.
        </p>
        <ul style="display:flex; flex-direction:column; gap:1rem; margin-bottom:2rem; font-size:0.88rem;">
          <li style="border-bottom:1px solid #232029; padding-bottom:0.75rem;"><strong style="color:var(--accent-gold-bright);">Patch 1.4:</strong> Celestial Sovereign rework & mid-lane tower armor adjustments.</li>
          <li style="border-bottom:1px solid #232029; padding-bottom:0.75rem;"><strong style="color:var(--accent-gold-bright);">Patch 1.3:</strong> Jungle monster respawn timers and rank protection stars.</li>
          <li style="border-bottom:1px solid #232029; padding-bottom:0.75rem;"><strong style="color:var(--accent-gold-bright);">Patch 1.2:</strong> Mobile 120 FPS support added for flagship Snapdragon & Apple silicon.</li>
        </ul>
        <button class="btn btn-primary-gold btn-block" onclick="document.getElementById('siteModal').classList.remove('active'); document.body.style.overflow='';">
          BACK TO HOME
        </button>
      `);
    });
  }

  // Tournament Details button
  if (tournamentScheduleBtn) {
    tournamentScheduleBtn.addEventListener('click', () => {
      openModal(`
        <img src="assets/backgrounds/esports-arena.jpg" alt="Tournament Finals" class="modal-img-banner">
        <span class="modal-date">OCTOBER 15 - 20, 2026</span>
        <h3 class="modal-title">AETHERIA WORLD CHAMPIONSHIP FINALS</h3>
        <p class="modal-body-text">
          16 elite teams from North America, Europe, Southeast Asia, and East Asia battle in a double-elimination tournament for the lion's share of the <strong>$1,000,000 USD prize pool</strong>.
        </p>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary-gold btn-block">
          OPEN STREAMING HUB
        </a>
      `);
    });
  }

  // View Abilities Button on Meet The Heroes
  if (heroDetailsBtn) {
    heroDetailsBtn.addEventListener('click', () => {
      const hero = heroesData[currentHeroIndex];
      openModal(`
        <span class="modal-date">${hero.role} • ${hero.difficulty} DIFFICULTY</span>
        <h3 class="modal-title">${hero.name} COMPLETE ABILITIES</h3>
        <p class="stage-hero-quote" style="color:var(--accent-gold-bright); margin-bottom:1.5rem;">${hero.quote}</p>
        <div style="display:flex; flex-direction:column; gap:1.25rem; margin-bottom:2rem;">
          ${hero.abilities.map(ab => `
            <div style="display:flex; gap:1rem; align-items:flex-start; background:rgba(255,255,255,0.04); padding:1rem; border-radius:6px; border-left:3px solid var(--accent-gold);">
              <span style="font-weight:900; color:var(--accent-gold-bright);">${ab.code}</span>
              <div>
                <strong style="display:block; font-size:0.95rem; margin-bottom:0.25rem;">${ab.name}</strong>
                <p style="font-size:0.85rem; color:#b0b2c0;">${ab.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-primary-gold btn-block" onclick="document.getElementById('siteModal').classList.remove('active'); document.body.style.overflow='';">
          CLOSE DETAILS
        </button>
      `);
    });
  }

  /* ==========================================================================
     8. WEB AUDIO API AMBIENCE & CHIME SYNTHESIZER
     ========================================================================== */
  const soundToggle = document.getElementById('soundToggle');
  let audioCtx = null;
  let isSoundActive = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
  }

  function playSoftChime(freq = 520) {
    if (!isSoundActive || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch(e) {
      // Audio autoplay policy
    }
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      initAudio();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      isSoundActive = !isSoundActive;
      const offIcon = soundToggle.querySelector('.sound-icon-off');
      const onIcon = soundToggle.querySelector('.sound-icon-on');

      if (isSoundActive) {
        offIcon.style.display = 'none';
        onIcon.style.display = 'block';
        playSoftChime(660);
      } else {
        offIcon.style.display = 'block';
        onIcon.style.display = 'none';
      }
    });
  }

  /* ==========================================================================
     9. HERO SECTION PARALLAX TILT ON MOUSEMOVE
     ========================================================================== */
  const heroSection = document.getElementById('hero');
  const heroBg = document.getElementById('heroBg');

  if (heroSection && heroBg && window.innerWidth > 900) {
    heroSection.addEventListener('mousemove', (e) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 16;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 16;
      heroBg.style.transform = `scale(1.04) translate(${xPercent * -1}px, ${yPercent * -1}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroBg.style.transform = 'scale(1.02) translate(0px, 0px)';
    });
  }

});
