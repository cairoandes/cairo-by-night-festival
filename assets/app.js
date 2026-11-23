const page = document.body.dataset.page;

const navItems = [
  ['home', 'HOME', '/'],
  ['team', 'TEAM', '/team24/'],
  ['prices', 'PRICES', '/prices/'],
  ['rules', 'COMPETITION RULES', '/competition-rules/'],
  ['schedule', 'SCHEDULE', '/schedule/'],
  ['registration', 'REGISTRATION', '/registration/'],
  ['contact', 'CONTACT', '/contact-us/']
];

const header = document.querySelector('#site-header');
header.innerHTML = `
  <header class="site-header" aria-label="Main navigation">
    <div class="nav-shell">
      <a class="brand" href="/" aria-label="Cairo By Night home">
        <span class="brand-copy">Cairo By Night<small>Oriental Festival · Greece</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      <ul class="nav-links">
        ${navItems.map(([id, label, href]) => `<li><a href="${href}" ${page === id ? 'aria-current="page"' : ''}>${label}</a></li>`).join('')}
      </ul>
      <a class="nav-cta" href="/registration/">Book Now <span class="link-arrow" aria-hidden="true"></span></a>
    </div>
  </header>`;

document.querySelector('#site-footer').innerHTML = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div><div class="footer-title">Cairo By Night</div><p class="footer-copy">The Ultimate Oriental Festival.</p></div>
      <div><div class="footer-label">Explore</div><ul class="footer-links">${navItems.map(([, label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></div>
      <div><div class="footer-label">Connect</div><ul class="footer-links"><li><a href="https://www.facebook.com/profile.php?id=100064596523501" target="_blank" rel="noopener">Facebook <span class="link-arrow" aria-hidden="true"></span></a></li><li><a href="https://www.instagram.com/cairo_by_night_festival_greece/" target="_blank" rel="noopener">Instagram <span class="link-arrow" aria-hidden="true"></span></a></li><li><a href="/registration/">Book Now</a></li></ul></div>
    </div>
    <div class="footer-bottom"><span>Copyright © 2027 CBN. All Rights Reserved.</span><span>Serres, Greece</span></div>
  </footer>`;

const main = document.querySelector('#main');
const egyptianLogoMark = (compact = false) => `<span class="official-vector-logo${compact ? ' official-vector-logo-compact' : ''}" role="img" aria-label="Cairo By Night Festival${compact ? '' : ', Greece and Serres. Presented by Stella Zahir. The Ultimate Festival of Egyptian and Arab Arts and Dances.'}">
  <svg class="official-vector-svg" viewBox="0 0 900 ${compact ? 700 : 1200}" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="official-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#78420d"/><stop offset=".18" stop-color="#fff0a9"/><stop offset=".38" stop-color="#bd7418"/><stop offset=".56" stop-color="#ffd56b"/><stop offset=".76" stop-color="#8b4b0a"/><stop offset="1" stop-color="#f6cf6b"/></linearGradient>
      <linearGradient id="official-gold-bright" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4bc"/><stop offset=".25" stop-color="#e4a63f"/><stop offset=".56" stop-color="#9a570e"/><stop offset=".82" stop-color="#f2c45d"/><stop offset="1" stop-color="#6c3506"/></linearGradient>
      <linearGradient id="official-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#051849"/><stop offset=".3" stop-color="#2d82df"/><stop offset=".58" stop-color="#052b79"/><stop offset=".82" stop-color="#0c54ae"/><stop offset="1" stop-color="#020c2d"/></linearGradient>
      <radialGradient id="official-jewel"><stop offset="0" stop-color="#5dc7ff"/><stop offset=".45" stop-color="#126bc7"/><stop offset="1" stop-color="#041542"/></radialGradient>
      <filter id="official-gold-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" result="b"/><feColorMatrix in="b" values="1 0 0 0 .55 0 1 0 0 .3 0 0 1 0 .03 0 0 0 .55 0"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="official-soft-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#000" flood-opacity=".62"/></filter>
      <clipPath id="official-eye-crop"><rect x="280" y="25" width="340" height="285"/></clipPath>
      <clipPath id="official-signature-crop"><rect x="205" y="810" width="490" height="190"/></clipPath>
    </defs>

    <g class="official-dancer" filter="url(#official-soft-shadow)">
      <path d="M30 620C82 576 98 526 86 470C73 407 95 356 143 326C106 383 119 437 154 472C185 503 193 549 171 600C147 656 91 691 30 704C77 671 101 641 104 611C79 631 54 635 30 620Z" fill="none" stroke="#f9e7bd" stroke-opacity=".64" stroke-width="19" stroke-linecap="round"/>
      <path d="M38 699C100 667 128 625 122 569C116 513 142 476 188 457C155 493 158 538 185 568C214 600 215 646 191 693C166 741 111 768 49 768C91 747 117 723 126 697C92 713 62 714 38 699Z" fill="none" stroke="#f5dba7" stroke-opacity=".48" stroke-width="16" stroke-linecap="round"/>
      <path d="M97 756C151 728 181 690 181 642C181 607 194 582 220 564C204 598 212 631 235 654C262 682 258 722 232 760C204 800 156 817 112 808C145 793 161 777 164 760C140 770 117 769 97 756Z" fill="none" stroke="#fff2d0" stroke-opacity=".36" stroke-width="12" stroke-linecap="round"/>
      <path d="M184 250C157 249 141 267 142 292C143 313 158 325 179 327C158 343 153 370 165 391C177 412 199 419 222 411C206 432 210 456 226 471C248 491 283 479 292 449C297 421 281 403 254 399C280 388 288 362 278 342C267 319 244 311 219 320C238 304 239 281 225 265C214 253 200 249 184 250Z" fill="#4f2607" stroke="url(#official-gold)" stroke-width="5"/>
      <circle cx="220" cy="268" r="24" fill="url(#official-gold-bright)" stroke="#6f3507" stroke-width="4"/>
      <path d="M237 266L252 273L237 278M211 254Q220 248 230 254" fill="none" stroke="#713b0b" stroke-width="3" stroke-linecap="round"/>
      <path d="M194 320C204 301 230 297 244 316C254 330 257 346 250 363C244 380 248 403 265 437C251 455 229 463 207 453C187 444 184 425 193 399C201 377 201 360 192 344C188 336 189 327 194 320Z" fill="url(#official-gold-bright)" stroke="#6b3407" stroke-width="5"/>
      <path d="M193 328Q217 306 248 326M191 350Q218 374 254 349M204 376Q224 389 249 375M201 421Q229 438 259 416" fill="none" stroke="#6f390b" stroke-width="3" opacity=".78"/>
      <path d="M194 328C164 332 139 349 120 376M244 322C273 312 305 315 334 330" fill="none" stroke="url(#official-gold-bright)" stroke-width="18" stroke-linecap="round"/>
      <path d="M120 376C99 354 86 323 84 286C83 252 91 220 106 192M334 330C365 319 390 298 408 266" fill="none" stroke="url(#official-gold-bright)" stroke-width="14" stroke-linecap="round"/>
      <path d="M106 192L97 165M106 192L116 163M106 192L129 171M408 266L420 238M408 266L436 249M408 266L434 270" fill="none" stroke="url(#official-gold-bright)" stroke-width="7" stroke-linecap="round"/>
      <path d="M205 447C189 484 158 534 140 607C132 641 128 670 128 692C160 718 199 731 240 725C287 718 322 692 343 652C327 582 293 507 252 451C239 465 218 464 205 447Z" fill="url(#official-gold)" stroke="#6c3507" stroke-width="5"/>
      <path d="M209 466C184 526 171 604 169 698M236 465C241 537 263 617 307 676M181 516Q235 547 292 511M157 583Q234 619 323 574" fill="none" stroke="#6e3708" stroke-width="4" opacity=".66"/>
      <path d="M175 454Q226 483 276 450" fill="none" stroke="#fff0ad" stroke-width="7" stroke-dasharray="2 12" stroke-linecap="round"/>
      <path d="M143 694C180 721 228 731 282 712C254 766 208 797 142 804Z" fill="#a76416" opacity=".78"/>
      <g fill="none" stroke="#f8d77f" stroke-linecap="round"><path d="M196 332Q208 316 220 333Q232 314 246 329" stroke-width="5"/><path d="M195 349Q219 369 252 347" stroke-width="4"/><path d="M183 450Q221 470 270 445" stroke-width="7" stroke-dasharray="2 11"/></g>
    </g>

    <g class="official-eye" filter="url(#official-gold-glow)">
      <g stroke="url(#official-gold)" stroke-width="7" stroke-linecap="round"><path d="M556 79V44M524 84L512 52M493 97L470 71M588 84L600 52M619 97L642 71M466 117L433 105M646 117L679 105"/></g>
      <path d="M447 141Q556 67 665 141Q556 221 447 141Z" fill="none" stroke="url(#official-gold-bright)" stroke-width="11"/>
      <ellipse cx="556" cy="141" rx="42" ry="43" fill="none" stroke="url(#official-gold)" stroke-width="9"/>
      <circle cx="556" cy="141" r="19" fill="url(#official-gold-bright)"/>
      <circle cx="548" cy="132" r="5" fill="#fff5c7"/>
      <path d="M423 184Q469 210 514 182Q501 214 468 223Q441 216 423 184Z" fill="url(#official-blue)"/>
      <path d="M456 210Q481 229 509 205Q500 239 475 246Q459 235 456 210Z" fill="url(#official-blue)"/>
      <path d="M493 219Q516 236 539 207Q536 242 516 257Q497 247 493 219Z" fill="url(#official-blue)"/>
      <path d="M689 184Q643 210 598 182Q611 214 644 223Q671 216 689 184Z" fill="url(#official-blue)"/>
      <path d="M656 210Q631 229 603 205Q612 239 637 246Q653 235 656 210Z" fill="url(#official-blue)"/>
      <path d="M619 219Q596 236 573 207Q576 242 596 257Q615 247 619 219Z" fill="url(#official-blue)"/>
      <path d="M544 205L556 268L569 205Q556 226 544 205Z" fill="url(#official-jewel)" stroke="#dca94a" stroke-width="3"/>
    </g>
    <g class="official-eye-original" clip-path="url(#official-eye-crop)" aria-hidden="true">
      <image href="/assets/images/home/cairo-by-night-official-logo.png" x="-104.35" y="5" width="1008.93" height="1152" preserveAspectRatio="none"/>
    </g>

    <g class="official-logo-type" text-anchor="middle" filter="url(#official-soft-shadow)">
      <text class="official-cairo" x="574" y="455">CAIRO</text>
      <path d="M398 414Q435 384 470 405Q490 417 513 397" fill="none" stroke="url(#official-blue)" stroke-width="16" stroke-linecap="round"/>
      <path d="M399 410Q435 380 470 401Q490 412 513 393" fill="none" stroke="#42a7ef" stroke-opacity=".68" stroke-width="3" stroke-linecap="round"/>
      <text class="official-night" x="585" y="538">BY NIGHT</text>
      <text class="official-festival" x="584" y="650">Festival</text>
    </g>

    <g class="official-place" text-anchor="middle">
      <path d="M265 785H420M718 785H846" stroke="url(#official-gold)" stroke-width="3"/>
      <path d="M420 785l10-10 10 10-10 10ZM718 785l10-10 10 10-10 10Z" fill="url(#official-gold)"/>
      <text x="579" y="797">GREECE / SERRES</text>
    </g>

    <g class="official-presenter" text-anchor="middle">
      <text class="official-presented" x="575" y="862">PRESENTED BY</text>
      <text class="official-stella" x="575" y="938">Stella Zahir</text>
      <path class="official-signature-swash" d="M441 947Q505 961 575 946Q643 932 710 946Q675 948 643 960"/>
      <g class="official-signature-leaves" fill="url(#official-gold)">
        <path class="official-signature-stem" d="M350 942Q383 905 430 918M800 942Q767 905 720 918"/>
        <ellipse cx="370" cy="925" rx="15" ry="6" transform="rotate(-42 370 925)"/><ellipse cx="393" cy="911" rx="14" ry="6" transform="rotate(-24 393 911)"/><ellipse cx="415" cy="916" rx="14" ry="6" transform="rotate(20 415 916)"/>
        <ellipse cx="780" cy="925" rx="15" ry="6" transform="rotate(42 780 925)"/><ellipse cx="757" cy="911" rx="14" ry="6" transform="rotate(24 757 911)"/><ellipse cx="735" cy="916" rx="14" ry="6" transform="rotate(-20 735 916)"/>
      </g>
    </g>
    <g class="official-signature-original" clip-path="url(#official-signature-crop)" aria-hidden="true">
      <image href="/assets/images/home/cairo-by-night-official-logo.png" x="-80.83" y="-1.35" width="1045.33" height="1183.14" preserveAspectRatio="none"/>
    </g>

    <g class="official-tagline" text-anchor="middle">
      <text x="575" y="1028">THE ULTIMATE FESTIVAL OF</text>
      <text class="official-tagline-gold" x="575" y="1075">EGYPTIAN AND ARAB ARTS &amp; DANCES</text>
      <path d="M335 1122H520M630 1122H815" stroke="url(#official-gold)" stroke-width="3"/>
      <path d="M555 1122l20-20 20 20-20 20Z" fill="url(#official-jewel)" stroke="#e1aa42" stroke-width="5"/>
      <path d="M528 1122l10-10 10 10-10 10ZM602 1122l10-10 10 10-10 10Z" fill="url(#official-gold)"/>
    </g>
  </svg>
</span>`;
const pageHero = (kicker, title, lead = '', edition = '2027') => `<section class="page-hero page-hero-premium" data-title="${title}">
  <div class="page-hero-atmosphere" aria-hidden="true"></div>
  <div class="page-hero-stars" aria-hidden="true">${Array.from({ length: 22 }, (_, index) => `<i style="--i:${index};--x:${((index * 41) % 92) + 4}%;--y:${((index * 29) % 76) + 12}%"></i>`).join('')}</div>
  <div class="page-hero-inner">
    <div class="page-hero-layout">
      <div class="page-hero-copy">
        <div class="page-hero-kicker"><span></span>${kicker}</div>
        <h1 class="page-title">${title}</h1>
        ${lead ? `<p class="page-lead">${lead}</p>` : ''}
        <div class="page-hero-meta"><span>Cairo By Night</span><i>✦</i><span>Serres · Greece</span></div>
      </div>
      <div class="page-hero-logo hero-wordmark-egyptian" aria-label="Cairo By Night Festival">${egyptianLogoMark(true)}</div>
    </div>
  </div>
  <div class="page-hero-edition">Oriental Festival · ${edition}</div>
</section>`;

const scheduleDays = [
  { day: 'Tuesday', date: '4 August', events: [
    { time: 'All day', title: 'Registration' },
    { time: '12:00 – 20:00', title: 'Workshops' },
    { time: '22:00', title: 'International Opening Gala Show', note: 'and Greek Night', feature: true }
  ] },
  { day: 'Wednesday', date: '5 August', events: [
    { time: '9:45 – 20:00', title: 'Workshops' },
    { time: '22:00', title: 'International Gala Show', feature: true }
  ] },
  { day: 'Thursday', date: '6 August', events: [
    { time: '9:45 – 20:00', title: 'Workshops' },
    { time: '22:00', title: 'International Gala Show', feature: true }
  ] },
  { day: 'Friday', date: '7 August', events: [
    { time: '9:45 – 20:00', title: 'Workshops' },
    { time: '22:00', title: 'International Gala Show', note: 'Red Night', feature: true, accent: true }
  ] },
  { day: 'Saturday', date: '8 August', events: [
    { time: '9:45 – 20:00', title: 'Workshops' },
    { time: '22:00', title: 'Instructors Gala Show', feature: true }
  ] },
  { day: 'Sunday', date: '9 August', events: [
    { time: '', title: 'Competition', feature: true }
  ] }
];

const scheduleColumn = (scheduleDay, index) => `<article class="schedule-day-column ${index === 0 ? 'selected' : ''}" tabindex="0" data-day="${index}" aria-label="${scheduleDay.day}, ${scheduleDay.date}">
  <header><span>${scheduleDay.day}</span><strong>${scheduleDay.date.split(' ')[0]}</strong><small>${scheduleDay.date.split(' ')[1]}</small></header>
  <div class="schedule-column-events">${scheduleDay.events.map(event => `<div class="schedule-column-event ${event.feature ? 'featured' : ''} ${event.accent ? 'accent' : ''}">${event.time ? `<time>${event.time}</time>` : ''}<h3>${event.title}</h3>${event.note ? `<p>${event.note}</p>` : ''}</div>`).join('')}</div>
</article>`;

const artists = [
  { name: 'Dina', role: '', location: 'Egypt', image: 'dina' },
  { name: 'Randa Kamel', role: 'Master Teacher', location: 'Egypt', image: 'randa-kamel' },
  { name: 'Kazafy', role: 'Master Teacher', location: 'Egypt', image: 'kazafy' },
  { name: 'Mohanned Hawaz', role: 'Master Teacher', location: 'Iraq', image: 'mohanned-hawaz' },
  { name: 'Dr. Thawra Yousif Yaqoub', role: 'Master Teacher', location: 'Basra / Iraq', image: 'dr-thawra-yousif-yaqoub' },
  { name: 'Vaagn Tadevosyan', role: 'Master Teacher', location: 'Armenia / Russia', image: 'vaagn-tadevosyan' },
  { name: 'David Abraham', role: 'Master Teacher', location: 'Argentina', image: 'david-abraham' },
  { name: 'Aida Bogomolova', role: 'Master Teacher', location: 'Italy', image: 'atida-bogomolova' },
  { name: 'Laura Zaray', role: 'Master Teacher', location: 'Finland', image: 'laura-zaray', extension: 'png', crop: true },
  { name: 'Leandro Ferreyra', role: 'Master Teacher', location: 'Argentina / Germany', image: 'leandro-ferreyra', extension: 'jpg', cropClass: 'roster-thumb-leandro' }
];

const heroLaurel = side => {
  const id = `hero-laurel-${side}`;
  return `<svg class="hero-laurel hero-laurel-${side}" viewBox="0 0 180 520" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#65400f"/><stop offset=".16" stop-color="#b87521"/><stop offset=".33" stop-color="#fff1b2"/><stop offset=".47" stop-color="#c48125"/><stop offset=".64" stop-color="#f6d782"/><stop offset=".8" stop-color="#8f5817"/><stop offset="1" stop-color="#e5b95d"/></linearGradient>
      <linearGradient id="${id}-silver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#57534b"/><stop offset=".2" stop-color="#a9a28d"/><stop offset=".42" stop-color="#fff8da"/><stop offset=".58" stop-color="#8f8878"/><stop offset=".78" stop-color="#d8cba4"/><stop offset="1" stop-color="#716242"/></linearGradient>
      <filter id="${id}-glow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="2.4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="${id}-metal" x="-25%" y="-25%" width="150%" height="150%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".025 .16" numOctaves="3" seed="8" result="grain"/>
        <feColorMatrix in="grain" type="saturate" values="0" result="mono-grain"/>
        <feComponentTransfer in="mono-grain" result="soft-grain"><feFuncA type="table" tableValues="0 .38"/></feComponentTransfer>
        <feComposite in="soft-grain" in2="SourceAlpha" operator="in" result="metal-texture"/>
        <feBlend in="SourceGraphic" in2="metal-texture" mode="soft-light" result="textured-metal"/>
        <feSpecularLighting in="mono-grain" surfaceScale="2.4" specularConstant=".82" specularExponent="22" lighting-color="#fff1bf" result="specular"><feDistantLight azimuth="225" elevation="54"/></feSpecularLighting>
        <feComposite in="specular" in2="SourceAlpha" operator="in" result="metal-shine"/>
        <feBlend in="textured-metal" in2="metal-shine" mode="screen"/>
      </filter>
      <g id="${id}-leaf"><path d="M0 0C13-27 42-39 68-25C58 3 27 18 0 0Z"/><path d="M5-1C24-8 42-16 61-24" fill="none" stroke="rgba(80,48,12,.58)" stroke-width="1.15" stroke-linecap="round"/><path d="M24-8L17-21M36-13L33-28M47-18L49-29" fill="none" stroke="rgba(255,238,183,.34)" stroke-width=".7" stroke-linecap="round"/></g>
    </defs>
    <path class="hero-laurel-stem" d="M159 505C91 466 42 402 31 328C18 239 56 143 151 28"/>
    <g class="hero-laurel-leaves" fill="url(#${id}-gold)" filter="url(#${id}-metal)">
      <use href="#${id}-leaf" transform="translate(140 473) rotate(-148) scale(.62)"/><use href="#${id}-leaf" transform="translate(113 446) rotate(-162) scale(.72)"/>
      <use href="#${id}-leaf" transform="translate(82 410) rotate(-168) scale(.78)"/><use href="#${id}-leaf" transform="translate(58 367) rotate(-174) scale(.82)"/>
      <use href="#${id}-leaf" transform="translate(42 320) rotate(178) scale(.83)"/><use href="#${id}-leaf" transform="translate(39 271) rotate(167) scale(.8)"/>
      <use href="#${id}-leaf" transform="translate(48 220) rotate(153) scale(.76)"/><use href="#${id}-leaf" transform="translate(67 171) rotate(142) scale(.71)"/>
      <use href="#${id}-leaf" transform="translate(94 124) rotate(132) scale(.64)"/><use href="#${id}-leaf" transform="translate(125 78) rotate(123) scale(.56)"/>
    </g>
    <g class="hero-laurel-leaves hero-laurel-leaves-inner" fill="url(#${id}-gold)" filter="url(#${id}-metal)">
      <use href="#${id}-leaf" transform="translate(124 462) rotate(-38) scale(.48)"/><use href="#${id}-leaf" transform="translate(91 426) rotate(-25) scale(.58)"/>
      <use href="#${id}-leaf" transform="translate(62 383) rotate(-12) scale(.65)"/><use href="#${id}-leaf" transform="translate(44 335) rotate(2) scale(.67)"/>
      <use href="#${id}-leaf" transform="translate(40 285) rotate(15) scale(.66)"/><use href="#${id}-leaf" transform="translate(47 235) rotate(27) scale(.63)"/>
      <use href="#${id}-leaf" transform="translate(64 187) rotate(37) scale(.58)"/><use href="#${id}-leaf" transform="translate(88 142) rotate(47) scale(.52)"/>
      <use href="#${id}-leaf" transform="translate(116 99) rotate(56) scale(.46)"/>
    </g>
    <g class="hero-laurel-sparks" filter="url(#${id}-glow)"><circle cx="38" cy="346" r="2.2"/><circle cx="58" cy="206" r="1.7"/><circle cx="105" cy="111" r="1.4"/><path d="M24 285h12M30 279v12"/><path d="M79 161h9M83.5 156.5v9"/></g>
  </svg>`;
};

const soloDanceCategories = ['Raks Sharki', 'Folklore / Baladi / Shaabi', 'Show Dance / CD Drum Solo', 'Pop / Modern Oriental'];
const professionalDanceCategories = [...soloDanceCategories, 'Live Drum Solo · By Carlos'];
const groupDanceCategories = ['Egyptian Dances', 'Other Oriental Dances (Khaleej, Pop lyrical, Iraqi, Drum, Show dance…)'];

const liveBandRepertoire = [
  { artist: 'Abdel Halim', songs: ['Sawah', 'Gana El Hawa', 'Say El Hawal', 'Ala Hesb Wedad', 'El Toba'] },
  { artist: 'Abdel Wahab', songs: ['Aziza', 'El Fan', 'Yam Safer', 'Fi Youm We Leila'] },
  { artist: 'Adaweya', songs: ['Seto Basbesetlo Basbousa', 'Bint El Sultan', 'Sahma Ya Donia', 'Salamat Om Hassan'] },
  { artist: 'Amr Diab', songs: ['Yatalemo'] },
  { artist: 'Hakim', songs: ['Walah Waheb Wala Meia', 'Halawet Roh', 'Rakasomi', 'Seto Ana'] },
  { artist: 'Mejanse', songs: ['Nelly', 'Yasmina', 'Mashael', 'Set El Hosn', 'Om El Donia'] },
  { artist: 'Eleithy', songs: ['Bonbonaia', 'Am Ya Saiad'] },
  { artist: 'Ahmed Sheba', songs: ['Ah Law Leabt Ya Zahir'] },
  { artist: 'Warda', songs: ['Akdeb Alek', 'Tab Wana Mali', 'Al Eh Bissalouni', 'Batwaness Beek'] },
  { artist: 'Majat Al Saghira', songs: ['Ama Barawa', 'Ana Bastanak'] },
  { artist: 'Sabah', songs: ['Zay Al Azal', 'Ashga Waghalbana'] },
  { artist: 'Baha Sultan', songs: ['Tala Adlak Baha'] },
  { artist: 'Oum Kalthoum', songs: ['1001', 'Inta Omri', 'Ana Fi Intizarak', 'Sirat El Hob', 'Baed Anak'] },
  { artist: 'Ragheb Alama', songs: ['Elli Baana', 'Alby Ashehka'] },
  { artist: 'Mustafa Hagag', songs: ['Ya Mnana', 'Khatwa'] },
  { artist: 'Fadel Shaker', songs: ['Ya Ghayeb'] },
  { artist: 'Hamo Bika', songs: ['Ya Ghayeb'] },
  { artist: 'Rayka', songs: [] },
  { artist: 'Wael Jassar', songs: ['Albey Fe Bahr Maleh', 'Elgazala Rayka', 'Galban Asola', 'Tala Adalak', 'Bonbonaya', 'Ento Mean'] },
  { artist: 'Hussin Elgasmey', songs: ['El Taptapa'] },
  { artist: 'Mohamed Andil', songs: ['Ya Helwa Sabah'] },
  { artist: 'Other Songs', songs: ['Ah Law Leabet Ya Zahr', 'Ala Rimsh Ouyhna', 'Oym Baheya', 'Ya Mdal3', 'Lama Reh', 'Khatwah', 'Ana La Mastol — Hamada Helal', 'Ala Babey Wakef Amarein', 'Eh Elyoum Elheliw Dah', 'Am Ya Sayad', 'Wahastiny'] }
];

const competitionRuleCard = ({ title, subtitle, age, time, categories, price = '', accent = 'gold' }) => `<article class="competition-rule-card reveal" data-accent="${accent}">
  <header><div><span>${subtitle}</span><h3>${title}</h3></div>${age ? `<strong>${age}</strong>` : ''}</header>
  <ol>${categories.map(category => `<li>${category}</li>`).join('')}</ol>
  <footer><span><i aria-hidden="true">◷</i> ${time}</span>${price ? `<strong>${price}</strong>` : ''}</footer>
</article>`;

const registrationOption = (type, name, value, label, required = false) => `<label class="registration-option"><input type="${type}" name="${name}" value="${value}" ${required ? 'required' : ''}><span aria-hidden="true"></span><em>${label}</em></label>`;

const registrationStayOption = (nights, label, required = false) => `<label class="registration-option registration-stay-option"><input type="radio" name="Package length" value="${nights === 'other' ? 'Other' : `${nights} nights`}" data-stay-nights="${nights}" ${required ? 'required' : ''}><span aria-hidden="true"></span><em><strong>${label}</strong><small data-stay-price="${nights}">Select a room to see price</small></em></label>`;

const registrationForm = () => `<section class="content-section registration-form-section">
  <div class="registration-form-shell">
    <header class="registration-form-intro reveal"><div><span>Registration form · 2027</span><h2>Join the<br><em>festival.</em></h2></div><p>Complete the form using the name shown on your travel document. Accommodation, room and participation requests are subject to availability and confirmation.</p></header>
    <div class="registration-success" data-registration-success hidden tabindex="-1"><strong>Registration received.</strong><p>Thank you. Your form was sent to the Cairo By Night team.</p></div>
    <form class="festival-registration-form" action="https://script.google.com/macros/s/AKfycbyPgVvCWraNhjQHDM7oR7_CbOd7b95f8IZfmd8wS5xbmYlOPxVCEwPGC4SrzTqtdVmd/exec" method="POST" data-registration-form>
      <input type="hidden" name="_subject" value="New Cairo By Night Festival 2027 registration">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_next" value="https://cairoandes.github.io/cairo-by-night-festival/registration/?submitted=true">
      <input type="hidden" name="_autoresponse" value="Thank you for registering for Cairo By Night Festival 2027. The festival team has received your form and will contact you after reviewing availability and your selections.">
      <input class="registration-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">

      <fieldset class="registration-step"><legend><span>01</span><strong>Participant details</strong></legend>
        <div class="registration-fields two-columns"><label><span>First name(s) <i>as on travel document</i></span><input type="text" name="First name(s)" autocomplete="given-name" required></label><label><span>Family name / surname <i>as on travel document</i></span><input type="text" name="Family name / surname" autocomplete="family-name" required></label></div>
        <div class="registration-fields two-columns"><label><span>Stage name</span><input type="text" name="Stage name"></label><label><span>Country</span><input type="text" name="Country" autocomplete="country-name" required></label></div>
        <div class="registration-fields"><label><span>Group / school</span><input type="text" name="Group or school"></label></div>
        <div class="registration-fields two-columns"><label><span>Email address</span><input type="email" name="email" autocomplete="email" required></label><label><span>Mobile number <i>include country code</i></span><input type="tel" name="Mobile number" autocomplete="tel" required></label></div>
      </fieldset>

      <fieldset class="registration-step"><legend><span>02</span><strong>Accommodation request</strong></legend>
        <p class="registration-step-note">Enter the dates you personally require. All stays are subject to hotel availability and confirmation.</p>
        <div class="registration-fields two-columns"><label><span>Check-in date</span><input type="date" name="Check-in date" required></label><label><span>Check-out date</span><input type="date" name="Check-out date" required></label></div>
        <div class="registration-choice-group"><span>Requested accommodation duration</span><div class="registration-options registration-stay-options">${registrationStayOption(5, '5 nights', true)}${registrationStayOption(6, '6 nights')}${registrationStayOption(7, '7 nights')}${registrationStayOption(8, '8 nights')}${registrationStayOption('other', 'Other duration')}</div></div>
        <div class="registration-fields" data-other-nights hidden><label><span>Number of nights requested</span><input type="number" name="Other number of nights" min="1" max="30"></label></div>
        <div class="registration-choice-group"><span>Room type</span><div class="registration-options four-options">${registrationOption('radio', 'Room type', 'Single', 'Single', true)}${registrationOption('radio', 'Room type', 'Double', 'Double')}${registrationOption('radio', 'Room type', 'Triple room', 'Triple room')}${registrationOption('radio', 'Room type', 'Junior suite', 'Junior suite')}</div></div>
      </fieldset>

      <fieldset class="registration-step"><legend><span>03</span><strong>Room sharing details</strong></legend>
        <div class="registration-choice-group"><span>Room sharing</span><div class="registration-options">${registrationOption('radio', 'Room sharing', 'I will share with a person of my choice', 'I will share with a person of my choice', true)}${registrationOption('radio', 'Room sharing', 'Please try to match me with a roommate', 'Please try to match me with a roommate')}${registrationOption('radio', 'Room sharing', 'I am not sharing a room', 'I am not sharing a room')}</div></div>
        <div class="registration-fields"><label><span>Roommate name <i>if known</i></span><input type="text" name="Roommate name"></label></div>
        <div class="registration-fields two-columns"><label><span>Roommate check-in date <i>if known</i></span><input type="date" name="Roommate check-in date"></label><label><span>Roommate check-out date <i>if known</i></span><input type="date" name="Roommate check-out date"></label></div>
        <aside class="registration-policy"><strong>Accommodation and hotel responsibility</strong><p>The festival is not the owner or operator of either hotel. The festival may assist with room requests and coordination. Any accommodation deposit is paid directly to the hotel; the hotel confirms the reservation and provides accommodation under its own terms. The hotel is responsible for its rooms, facilities, services, policies and charges. Please confirm booking details and direct accommodation questions to the hotel.</p>${registrationOption('checkbox', 'Hotel responsibility acknowledgement', 'Accepted', 'I understand that the festival is not the hotel owner or operator, and that I pay any accommodation deposit directly to the hotel; the hotel confirms and provides my accommodation.', true)}</aside>
      </fieldset>

      <fieldset class="registration-step"><legend><span>04</span><strong>Gala performances</strong></legend>
        <div class="registration-choice-group"><span>Gala participation</span><div class="registration-options">${registrationOption('radio', 'Gala participation', 'I would like to perform in a gala show', 'I would like to perform in a gala show', true)}${registrationOption('radio', 'Gala participation', 'I do not plan to perform', 'I do not plan to perform')}</div></div>
        <div class="registration-choice-group"><span>First gala show format</span><div class="registration-options">${registrationOption('checkbox', 'Performance format', 'Live band', 'Live band <small class="registration-option-price">€45</small>')}${registrationOption('checkbox', 'Performance format', 'CD / recorded music', 'CD / recorded music <small class="registration-option-price">€0</small>')}</div></div>
        <div class="registration-choice-group"><span>For the first performance, I will start</span><div class="registration-options">${registrationOption('radio', 'First performance start', 'On stage', 'On stage — I am on stage when the music starts')}${registrationOption('radio', 'First performance start', 'Off stage', 'Off stage — music starts before I enter')}</div></div>
        <div class="registration-choice-group"><span>Second gala show <i>if available</i></span><div class="registration-options">${registrationOption('checkbox', 'Additional performance', 'Additional live band performance', 'Live band <small class="registration-option-price">€45</small>')}${registrationOption('checkbox', 'Additional performance', 'Additional CD performance', 'CD / recorded music <small class="registration-option-price">€45</small>')}</div></div>
        <div class="registration-choice-group"><span>For the additional performance, I will start</span><div class="registration-options">${registrationOption('radio', 'Additional performance start', 'On stage', 'On stage')}${registrationOption('radio', 'Additional performance start', 'Off stage', 'Off stage')}</div></div>
      </fieldset>

      <fieldset class="registration-step"><legend><span>05</span><strong>Competition</strong></legend>
        <div class="registration-choice-group"><span>Competition participation</span><div class="registration-options">${registrationOption('radio', 'Competition participation', 'I would like to take part', 'I would like to take part in the competition', true)}${registrationOption('radio', 'Competition participation', 'I do not plan to take part', 'I do not plan to take part')}</div></div>
        <div class="registration-choice-group"><span>Competition level</span><div class="registration-options four-options">${['Teens', 'Ladies', 'Semi-professional', 'Professional', 'Group'].map(value => registrationOption('checkbox', 'Competition level', value, value)).join('')}</div></div>
        <div class="registration-choice-group"><span>Competition category or categories</span><div class="registration-options four-options">${['Raqs Sharqi', 'Folklore / Baladi / Shaabi', 'Pop / Modern Oriental', 'Drum Solo / Fusion', 'Live Band'].map(value => registrationOption('checkbox', 'Competition categories', value, `${value} <small class="registration-option-price">€45</small>`)).join('')}<label class="registration-option" data-professional-category hidden><input type="checkbox" name="Competition categories" value="Live Drum Solo — By Carlos"><span aria-hidden="true"></span><em>Live Drum Solo <small class="registration-option-by">By Carlos · Professionals only</small><small class="registration-option-price">€45</small></em></label></div></div>
        <p class="registration-step-note">Competition fee: €45 per selected category. Select up to 5 categories, or all 6 in the Professional level. Category eligibility is listed in the 2027 festival information.</p>
        <p class="registration-selection-status" data-category-status aria-live="polite">0 of 5 categories selected · €0</p>
        <aside class="registration-policy contaste-policy"><strong>One more required step for competitors</strong><p>Submitting this festival form does not complete competition registration. After sending it, visit Contaste.pro to register for the competition and upload your music file.</p><a class="registration-external-action" href="https://contaste.pro/participants.php" target="_blank" rel="noopener">Continue to Contaste.pro <span class="link-arrow link-arrow-forward" aria-hidden="true"></span></a>${registrationOption('checkbox', 'Contaste registration acknowledgement', 'Accepted', 'I understand that, if I compete, I must also register and upload my music on Contaste.pro.')}</aside>
      </fieldset>

      <fieldset class="registration-step"><legend><span>06</span><strong>Getting from Thessaloniki Airport to Serres</strong></legend>
        <div class="registration-choice-group"><span>Choose and arrange the option that suits you best</span><div class="registration-options travel-options">${registrationOption('radio', 'Travel option', 'Private travel agency', '<strong>Melikidis Travel — recommended / easiest</strong> Shared van: €40 per person, one way. Private car: €80 for 1 passenger or €100 for 2 passengers, one way. An assistant will wait at Meeting Point 5 in the parking area outside Thessaloniki Airport.', true)}${registrationOption('radio', 'Travel option', 'Taxi', '<strong>Taxi</strong> Direct from the airport to your hotel in Serres; approximately €150–€200. Agree the total fare with the driver before the journey.')}${registrationOption('radio', 'Travel option', 'Public transport', '<strong>Public transport</strong> Allow approximately 3–4 hours because the route involves changes and local connections. Check current fares and schedules before travelling.')}</div></div>
        <aside class="registration-transfer-contact"><span>Independent transfer provider</span><h3>Melikidis Travel</h3><p>Arrange airport pickup and return directly with the agency. Confirm availability, vehicle, total price and payment terms with the provider.</p><div><a href="mailto:melikidistravel@gmail.com">melikidistravel@gmail.com</a><a href="https://www.rentcarserres.gr/" target="_blank" rel="noopener">rentcarserres.gr</a></div></aside>
        <div class="registration-choice-group compact-choice">${registrationOption('checkbox', 'Private transfer contact request', 'Yes', 'I wish to book a private transfer and will contact the agency directly. I understand this is not a booking.')}</div>
        <aside class="registration-policy"><strong>Important transport responsibility notice</strong><p>The festival may share general route information or contact details of independent providers solely as a voluntary courtesy. It does not provide, operate, sell, book, supervise or guarantee transport; collect transport payments; or have an ownership, employment, agency, partnership or contractual relationship with any provider. Every enquiry, selection, booking, payment and transport contract is made directly by the participant with the chosen provider. Participants must independently verify the provider, price, itinerary, pickup point, insurance and service terms.</p>${registrationOption('checkbox', 'Transport responsibility acknowledgement', 'Accepted', 'Required — I have read and understood this notice. I accept that I am solely responsible for choosing, booking and paying for my transport, and that the festival is not a party to any agreement between me and a transport provider.', true)}</aside>
        <aside class="registration-policy social-policy"><strong>Follow the official updates</strong><p><a href="https://t.me/cairoByNight" target="_blank" rel="noopener">Telegram: t.me/cairoByNight</a> · <a href="https://www.instagram.com/cairo_by_night_festival_greece/" target="_blank" rel="noopener">Instagram: @cairo_by_night_festival_greece</a></p>${registrationOption('checkbox', 'Official updates acknowledgement', 'Accepted', 'I understand that I should follow and regularly check the festival Telegram channel and Instagram page for important updates.', true)}</aside>
      </fieldset>

      <fieldset class="registration-step"><legend><span>07</span><strong>Emergency contact <i>optional</i></strong></legend>
        <div class="registration-fields two-columns"><label><span>Name</span><input type="text" name="Emergency contact name"></label><label><span>Relationship</span><input type="text" name="Emergency contact relationship"></label></div>
        <div class="registration-fields"><label><span>Mobile number <i>include country code</i></span><input type="tel" name="Emergency contact mobile" autocomplete="tel"></label></div>
      </fieldset>

      <fieldset class="registration-step registration-confirmation"><legend><span>08</span><strong>Participant confirmation</strong></legend>
        <p>I confirm that the information in this form is accurate. I understand that package, room and participation requests are subject to availability and confirmation, and that separate hotel or transport provider terms apply to services provided by them.</p>
        ${registrationOption('checkbox', 'Participant confirmation', 'Confirmed', 'I confirm and accept the statement above.', true)}
        <div class="registration-fields three-columns"><label><span>Participant full name</span><input type="text" name="Participant full name" autocomplete="name" required></label><label><span>Signature <i>type full name</i></span><input type="text" name="Signature" required></label><label><span>Date</span><input type="date" name="Confirmation date" required></label></div>
        <section class="registration-cost-summary" data-cost-summary aria-live="polite"><header><div><span>Estimated booking total</span><h3>Your selections</h3></div><strong data-cost-total>€0</strong></header><div data-cost-lines><p>Select accommodation and participation options to calculate the current published costs.</p></div><small>Accommodation includes the €400 non-refundable deposit. Transfers are booked and paid directly to the provider and are not included. All requests remain subject to availability and festival confirmation.</small></section>
        <input type="hidden" name="Estimated booking total" data-cost-total-input value="€0">
        <input type="hidden" name="Estimated cost breakdown" data-cost-breakdown-input value="No priced selections">
      </fieldset>

      <footer class="registration-submit"><div><span>Festival contact</span><a href="mailto:cairobynight27@gmail.com">cairobynight27@gmail.com</a><small>Stella: +30 697 298 6504 · Eva: +30 697 041 2326</small></div><button class="hero-action primary" type="submit" data-registration-submit>Send registration <span class="link-arrow" aria-hidden="true"></span></button></footer>
    </form>
  </div>
</section>`;

const renderers = {
  home: () => `
    <section class="hero hero-premium">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="hero-light hero-light-left" aria-hidden="true"></div><div class="hero-light hero-light-right" aria-hidden="true"></div>
      <div class="hero-stars" aria-hidden="true">${Array.from({ length: 36 }, (_, index) => `<i style="--star:${index + 1};--x:${((index * 37) % 94) + 3}%;--y:${((index * 53) % 90) + 5}%"></i>`).join('')}</div>
      <div class="hero-content hero-logo-stage">
        <h1 class="hero-wordmark hero-wordmark-egyptian">${egyptianLogoMark()}</h1>
        <div class="hero-meta"><span>2027 Edition</span><i></i><span>Serres, Greece</span></div>
        <div class="hero-actions"><a class="hero-action primary" href="/registration/">Book Now <span class="link-arrow" aria-hidden="true"></span></a><a class="hero-action" href="/team24/">Discover the team <span class="link-arrow link-arrow-forward" aria-hidden="true"></span></a></div>
      </div><div class="hero-index">Cairo By Night · Greece</div><div class="scroll-cue" aria-hidden="true"></div>
    </section>
    <section class="section announcement-section"><div class="section-shell announcement-shell">
      <article class="festival-announcement reveal" aria-labelledby="festival-announcement-title">
        <div class="announcement-aura" aria-hidden="true"></div>
        <div class="announcement-topline"><span>Festival</span><small>Presented by</small><strong>Stella Zahir</strong></div>
        <p class="announcement-manifesto">The ultimate festival of<br>Egyptian and Arab arts &amp; dances</p>
        <div class="announcement-date">
          <span>Save the dates</span>
          <div class="date-range"><strong>3</strong><i>—</i><strong>8</strong></div>
          <h2 id="festival-announcement-title">August</h2>
          <b>2027</b>
        </div>
        <div class="announcement-place"><span>Greece</span><i>✦</i><span>Serres</span></div>
        <div class="announcement-footer"><span>Dance</span><i></i><span>Culture</span><i></i><span>Connection</span></div>
        <div class="announcement-contact"><span>www.cairobynight.com</span><span>@cairobynightfestival</span></div>
      </article>
    </div></section>
    <section class="section discover-greece-section" aria-labelledby="discover-greece-title"><div class="section-shell">
      <header class="discover-greece-heading reveal"><div><span>Beyond the stage</span><h2 id="discover-greece-title">Dance &amp;<br>Discover Greece</h2></div><p>A festival journey shaped by movement, culture and connection in Serres, Greece.</p></header>
      <div class="discover-greece-experience reveal" data-discover-active="dance">
        <div class="discover-greece-visual" aria-hidden="true">
          <img class="discover-photo discover-photo-dance" src="/assets/images/home/festival-dance.jpg" alt="" loading="lazy">
          <img class="discover-photo discover-photo-culture" src="/assets/images/home/serres-landscape.jpg" alt="" loading="lazy">
          <img class="discover-photo discover-photo-connect" src="/assets/images/home/festival-connect.jpg" alt="" loading="lazy">
          <div class="discover-photo-vignette"></div>
          <div class="discover-photo-caption discover-caption-dance"><small>Real festival moment</small><span>Cairo By Night</span><strong>Dance</strong></div>
          <div class="discover-photo-caption discover-caption-culture"><small>Discover the destination</small><span>Serres</span><strong>Greece</strong></div>
          <div class="discover-photo-caption discover-caption-connect"><small>One international community</small><span>Meet. Share.</span><strong>Connect.</strong></div>
        </div>
        <div class="discover-greece-content">
          <div class="discover-tabs" role="tablist" aria-label="Discover the festival experience">
            <button class="active" type="button" role="tab" aria-selected="true" aria-controls="discover-panel-dance" id="discover-tab-dance" data-discover-tab="dance"><span>01</span>Dance</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="discover-panel-culture" id="discover-tab-culture" data-discover-tab="culture"><span>02</span>Culture</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="discover-panel-connect" id="discover-tab-connect" data-discover-tab="connect"><span>03</span>Connect</button>
          </div>
          <div class="discover-panels">
            <article id="discover-panel-dance" role="tabpanel" aria-labelledby="discover-tab-dance" data-discover-panel="dance"><span>Movement</span><h3>Dance from day<br>into night.</h3><p>Workshops, performances and gala moments come together in one immersive festival experience.</p><a href="/schedule/">Explore the schedule <i class="link-arrow" aria-hidden="true"></i></a></article>
            <article id="discover-panel-culture" role="tabpanel" aria-labelledby="discover-tab-culture" data-discover-panel="culture" hidden><span>Place</span><h3>Discover the<br>festival city.</h3><p>Experience Cairo By Night in Serres, Greece, where the festival extends beyond the stage.</p><a href="/contact-us/">Find the festival <i class="link-arrow" aria-hidden="true"></i></a></article>
            <article id="discover-panel-connect" role="tabpanel" aria-labelledby="discover-tab-connect" data-discover-panel="connect" hidden><span>Community</span><h3>Meet artists from<br>around the world.</h3><p>Share the floor, the stage and unforgettable festival nights with an international dance community.</p><a href="/team24/">Meet the team <i class="link-arrow" aria-hidden="true"></i></a></article>
          </div>
        </div>
      </div>
    </div></section>
    <section class="festival-film-section" aria-labelledby="festival-film-title"><div class="festival-film-shell">
      <div class="festival-film-copy reveal"><span>Festival film · Cairo By Night</span><h2 id="festival-film-title">Feel the<br><em>night.</em></h2><p>A glimpse of the movement, artistry and stage energy that define Cairo By Night Festival.</p><a href="https://www.youtube.com/@cairobynightfest" target="_blank" rel="noopener">Visit the festival channel <i class="link-arrow" aria-hidden="true"></i></a></div>
      <div class="festival-film-frame reveal"><iframe src="https://www.youtube-nocookie.com/embed/Gb3GaBL7s58?rel=0&amp;modestbranding=1" title="Cairo By Night Festival performance film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="festival-film-label"><span>Watch</span><strong>Cairo By Night</strong></div></div>
    </div></section>
    <section class="section home-registration-section" aria-labelledby="home-registration-title"><div class="section-shell home-registration-shell reveal">
      <div class="registration-orbit" aria-hidden="true"></div><span class="registration-index">2027 · Serres, Greece</span>
      <div class="home-registration-copy"><div class="eyebrow">Cairo By Night</div><h2 id="home-registration-title">Registration<br><em>open.</em></h2><p>3—8 August 2027 · The Ultimate Oriental Festival</p></div>
      <div class="home-registration-actions"><a class="hero-action primary" href="/registration/">Registration details <span class="link-arrow" aria-hidden="true"></span></a><a class="feature-link" href="https://drive.google.com/drive/folders/1-7z5vOrJZgiurhji9NpLeCVCcikGB3rI?usp=sharing" target="_blank" rel="noopener"><span>CBN 2027 Competition Results</span><span class="link-arrow" aria-hidden="true"></span></a></div>
    </div></section>
    <section class="section arrival-section" aria-labelledby="arrival-title"><div class="section-shell">
      <div class="section-heading arrival-heading reveal"><div><div class="section-kicker">Arrival information</div><span class="arrival-code">AIR / P5 / CBN</span></div><h2 class="section-title" id="arrival-title">Meeting point<br>& transfer</h2></div>
      <div class="arrival-experience reveal" data-active="1">
        <div class="arrival-map" aria-label="Illustrated route from the airport terminal to the Parking 5 meeting point">
          <div class="map-topline"><span>Airport route</span><span>Follow the illuminated path</span></div>
          <svg class="route-map" viewBox="0 0 900 620" role="img" aria-labelledby="route-map-title route-map-description">
            <title id="route-map-title">Route to Parking Number 5</title>
            <desc id="route-map-description">Walk straight from the terminal, turn right, pass Grigoris Café and the car rental area, and reach the meeting point near the coach buses.</desc>
            <defs>
              <linearGradient id="terminal-fill" x1="0" x2="1"><stop stop-color="#171825"/><stop offset="1" stop-color="#0b0d16"/></linearGradient>
              <linearGradient id="route-glow" x1="0" x2="1"><stop stop-color="#65d8ff"/><stop offset=".55" stop-color="#9a73ff"/><stop offset="1" stop-color="#ffba61"/></linearGradient>
              <filter id="route-blur"><feGaussianBlur stdDeviation="7"/></filter>
              <pattern id="map-grid" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M38 0H0V38" fill="none" stroke="#fff" stroke-opacity=".045"/></pattern>
            </defs>
            <rect width="900" height="620" fill="url(#map-grid)"/>
            <path class="map-road" d="M112 344H426V474H744"/>
            <path class="map-route-glow" d="M112 344H426V474H744"/>
            <path class="map-route" d="M112 344H426V474H744"/>
            <g class="map-terminal">
              <path d="M58 140H292L330 184V344H58Z" fill="url(#terminal-fill)" stroke="#65d8ff" stroke-opacity=".45"/>
              <path d="M82 178H278M82 216H300M82 254H300" stroke="#fff" stroke-opacity=".08"/>
              <path d="M108 294H196V344H108Z" fill="#65d8ff" fill-opacity=".12" stroke="#65d8ff" stroke-opacity=".55"/>
              <text x="58" y="116" class="map-label-small">AIRPORT</text><text x="58" y="91" class="map-label-large">TERMINAL</text>
            </g>
            <g class="map-landmark cafe"><circle cx="426" cy="262" r="48"/><path d="M408 250h31v18c0 13-8 22-16 22s-15-9-15-22zm31 4h8c9 0 9 14 0 14h-8"/><text x="426" y="208" text-anchor="middle">GRIGORIS CAFÉ</text></g>
            <g class="map-landmark rental"><rect x="536" y="356" width="120" height="54" rx="8"/><path d="M558 387h74l-10-18h-45zM568 387a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm54 0a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"/><text x="596" y="338" text-anchor="middle">CAR RENTAL</text></g>
            <g class="map-parking"><path d="M684 250h132v142H684z"/><text x="750" y="305" text-anchor="middle" class="parking-p">P</text><text x="750" y="355" text-anchor="middle" class="parking-five">5</text></g>
            <g class="map-buses"><rect x="672" y="508" width="84" height="35" rx="7"/><path d="M686 518h24v13h-24zm30 0h24v13h-24z"/><circle cx="690" cy="546" r="7"/><circle cx="738" cy="546" r="7"/><text x="714" y="575" text-anchor="middle">COACH BUSES</text></g>
            <g class="map-stage" data-map-stage="1"><circle cx="112" cy="344" r="21"/><text x="112" y="350" text-anchor="middle">1</text></g>
            <g class="map-stage" data-map-stage="2"><circle cx="426" cy="474" r="21"/><text x="426" y="480" text-anchor="middle">2</text></g>
            <g class="map-stage" data-map-stage="3"><circle cx="744" cy="474" r="21"/><text x="744" y="480" text-anchor="middle">3</text><circle class="meeting-pulse" cx="744" cy="474" r="42"/></g>
            <g class="map-you"><path d="M744 424l-9-17h18z"/><text x="744" y="397" text-anchor="middle">MEETING POINT</text></g>
          </svg>
          <div class="map-legend"><span><i class="legend-route"></i>Walking route</span><span><i class="legend-point"></i>Meeting point</span></div>
        </div>
        <div class="arrival-guide">
          <div class="guide-intro"><span>Dear artist</span><p>Instructions to reach Parking Number 5 and the meeting point.</p></div>
          <div class="stage-tabs" role="tablist" aria-label="Arrival stages">
            <button type="button" class="stage-tab active" role="tab" aria-selected="true" aria-controls="arrival-stage-1" id="arrival-tab-1" data-stage="1"><span>01</span>Arrival</button>
            <button type="button" class="stage-tab" role="tab" aria-selected="false" aria-controls="arrival-stage-2" id="arrival-tab-2" data-stage="2"><span>02</span>Parking 5</button>
            <button type="button" class="stage-tab" role="tab" aria-selected="false" aria-controls="arrival-stage-3" id="arrival-tab-3" data-stage="3"><span>03</span>Meeting</button>
          </div>
          <div class="stage-panels" aria-live="polite">
            <article class="stage-panel" id="arrival-stage-1" role="tabpanel" aria-labelledby="arrival-tab-1"><span>Stage 1</span><h3>Arrival and Initial Directions</h3><div class="stage-panel-body"><p>As soon as you arrive at the airport, follow the signs for Parking Number 5. These signs will direct you to the area where the coach buses are parked.</p><button class="arrival-photo-button" type="button" data-photo="photo-stage-1" data-caption="Follow the airport signs for Parking Number 5" aria-label="Enlarge photo of the airport signs"><span class="arrival-photo-preview photo-stage-1" aria-hidden="true"></span><small>View photo <i class="link-arrow" aria-hidden="true"></i></small></button></div></article>
            <article class="stage-panel" id="arrival-stage-2" role="tabpanel" aria-labelledby="arrival-tab-2" hidden><span>Stage 2</span><h3>Navigating to Parking Number 5</h3><div class="stage-panel-body"><p>Parking Number 5 is located towards the end of the airport complex. As you walk out of the terminal, proceed straight and then take a right. You should see Parking Number 5 on your right-hand side at the end of the airport.</p><button class="arrival-photo-button" type="button" data-photo="photo-stage-2" data-caption="Proceed straight and then turn right towards Parking Number 5" aria-label="Enlarge photo of the route outside the terminal"><span class="arrival-photo-preview photo-stage-2" aria-hidden="true"></span><small>View photo <i class="link-arrow" aria-hidden="true"></i></small></button></div></article>
            <article class="stage-panel" id="arrival-stage-3" role="tabpanel" aria-labelledby="arrival-tab-3" hidden><span>Stage 3</span><h3>Landmarks and Final Steps</h3><div class="stage-panel-body"><p>While walking towards Parking Number 5, you will pass Grigoris Café. Continue past the café, and you will see a car rental area next to Parking Number 5. Look for the label marked “Meeting Point” near the coach buses.</p><button class="arrival-photo-button" type="button" data-photo="photo-stage-3" data-caption="Parking 5 meeting point near the coach buses" aria-label="Enlarge photo of the Parking 5 meeting point"><span class="arrival-photo-preview photo-stage-3" aria-hidden="true"></span><small>View photo <i class="link-arrow" aria-hidden="true"></i></small></button></div></article>
          </div>
          <div class="assistant-beacon"><button class="arrival-photo-button assistant-photo" type="button" data-photo="photo-assistant" data-caption="The CBN assistant waiting spot at Parking 5" aria-label="Enlarge photo of the CBN assistant waiting spot"><span class="arrival-photo-preview photo-assistant" aria-hidden="true"></span><small>Waiting spot <i class="link-arrow" aria-hidden="true"></i></small></button><div><span>Look for the CBN assistant</span><strong>Dear artists, an assistant will wait for you at Parking 5 on Meeting Point.</strong></div></div>
        </div>
      </div>
      <section class="transfer-service reveal" aria-labelledby="transfer-service-title">
        <header class="transfer-service-head"><div><span>Thessaloniki Airport (SKG) ↔ Serres hotels</span><h3 id="transfer-service-title">Choose your<br>route to Serres.</h3></div><p>Current transfer guidance for Cairo By Night participants. All prices shown are estimates or provider rates for one-way travel.</p></header>
        <div class="transfer-methods">
          <article class="transfer-method transfer-method-primary"><span class="transfer-number">01</span><div><small>Most selected</small><h4>Shared van</h4><strong>40 € <em>per person / one way</em></strong><p>A representative from Melikidis Travel will wait for you at Meeting Point 5 at Thessaloniki Airport.</p><div class="transfer-links"><a href="mailto:melikidistravel@gmail.com">melikidistravel@gmail.com</a><a href="https://www.rentcarserres.gr/" target="_blank" rel="noopener">rentcarserres.gr</a></div></div></article>
          <article class="transfer-method"><span class="transfer-number">02</span><div><small>Maximum 2 passengers</small><h4>Private car</h4><div class="transfer-rates"><span>1 passenger <strong>80 €</strong></span><span>2 passengers <strong>100 €</strong></span></div><p>Capacity is limited to two passengers because of luggage space. Confirm availability directly with the provider.</p></div></article>
          <article class="transfer-method"><span class="transfer-number">03</span><div><small>Independent options</small><h4>Public transport or taxi</h4><p><strong>Public transport:</strong> approximately 3–4 hours. Check current fares and schedules before travelling.</p><p><strong>Taxi:</strong> approximately 150–200 €, depending on the provider and arrangements.</p></div></article>
        </div>
        <aside class="transfer-disclaimer"><strong>Important</strong><p>Cairo By Night Festival shares the transfer provider’s contact details as a courtesy to participants. The festival does not arrange, book, operate, or collect payment for any transfer service. All arrangements, costs, and payments must be confirmed directly between the participant and the provider. Participants are also welcome to make their own travel arrangements.</p></aside>
      </section>
      <dialog class="arrival-photo-dialog" id="arrival-photo-dialog" aria-labelledby="arrival-photo-title"><div class="arrival-photo-dialog-inner"><div class="dialog-topline"><span id="arrival-photo-title">Arrival reference photo</span><button type="button" class="dialog-close" aria-label="Close enlarged photo">Close <i aria-hidden="true">×</i></button></div><div class="arrival-photo-expanded" role="img"></div><p class="arrival-photo-caption"></p></div></dialog>
    </div></section>`,
  team: () => `${pageHero('Artists & instructors', 'The Team', 'Meet the confirmed artists and master teachers of Cairo By Night Festival 2027. Dance, culture and connection come together in Serres, Greece.', '2027')}<section class="content-section team-roster-section"><div class="roster-header reveal"><span>CBN 2027 · Confirmed team</span><strong>${artists.length} artists & instructors</strong></div><div class="roster-list">${artists.map((artist, index) => `<article class="roster-row reveal"><span class="roster-index">${String(index + 1).padStart(2, '0')}</span><figure class="roster-thumb${artist.crop ? ' roster-thumb-crop' : ''}${artist.cropClass ? ` ${artist.cropClass}` : ''}"><img src="/assets/images/team-2027/${artist.image}.${artist.extension || 'webp'}" alt="${artist.name}, ${artist.location}" width="720" height="900" loading="lazy"></figure><div class="roster-identity"><h2 class="roster-name">${artist.name}</h2><div class="roster-details">${artist.role ? `<span>${artist.role}</span>` : ''}<strong>${artist.location}</strong></div></div><span class="roster-mark" aria-hidden="true">✦</span></article>`).join('')}</div></section>`,
  prices: () => `${pageHero('Festival Packages · 2027', 'Prices', 'Check in 3 August · 5-night check out 8 August · 6-night check out 9 August')}
    <section class="content-section pricing-section">
      <div class="pricing-shell">
        <div class="pricing-heading reveal">
          <div><span class="pricing-overline">August 3—9 · Serres, Greece</span><h2>Festival<br>Packages</h2></div>
          <p>Accommodation, three meals per day, workshops, parties and performance access—organized in two clear festival stays. Prices are per person.</p>
        </div>
        <div class="package-grid">
          <article class="package-card reveal">
            <header class="package-head"><div><span>Check in 3 August · Check out 8 August</span><h3>Basic Package</h3><small>5 nights · per person</small></div><strong>05</strong></header>
            <p class="package-note">The 6th day competition is not included.</p>
            <ul class="package-includes"><li>5 nights at Resort &amp; Spa Hotel — accommodation fee included</li><li>3 meals per day — breakfast, lunch and dinner</li><li>All workshops — with more than 20 teachers</li><li>Entrance to parties — festival gift</li><li>Performance fee (CD)</li></ul>
            <div class="room-prices"><div><span>Single room</span><strong>975 €</strong></div><div><span>Double room</span><strong>830 €</strong></div><div><span>Triple room</span><strong>785 €</strong></div><div><span>Junior suite <small>4 people</small></span><strong>780 €</strong></div></div>
          </article>
          <article class="package-card featured reveal">
            <div class="package-ribbon">All festival days</div>
            <header class="package-head"><div><span>Check in 3 August · Check out 9 August</span><h3>Full Package</h3><small>6 nights · per person</small></div><strong>06</strong></header>
            <p class="package-note">All festival days are included.</p>
            <ul class="package-includes"><li>6 nights at Resort &amp; Spa Hotel — accommodation fee included</li><li>3 meals per day — breakfast, lunch and dinner</li><li>All workshops — with more than 20 teachers</li><li>Entrance to parties — festival gift</li><li>Performance fee (CD)</li></ul>
            <div class="room-prices"><div><span>Single room</span><strong>1075 €</strong></div><div><span>Double room</span><strong>905 €</strong></div><div><span>Triple room</span><strong>850 €</strong></div><div><span>Junior suite <small>4 people</small></span><strong>845 €</strong></div></div>
          </article>
        </div>
        <div class="deposit-banner reveal"><span>Deposit</span><strong>400 € · Non-refundable and non-transferable</strong></div>
        <p class="deposit-policy reveal">The deposit cannot be transferred to another individual or applied to future events. Once made, it is final and applies only to the specific event and participant for which it was intended.</p>

        <section class="guest-packages" aria-labelledby="guest-packages-title">
          <div class="pricing-heading guest-heading reveal"><div><span class="pricing-overline">Hotel only · Check in 3 August</span><h2 id="guest-packages-title">Guest<br>Packages</h2></div><p>For family members, friends or companions of festival participants. Guests share rooms with registered participants.</p></div>
          <div class="package-grid guest-package-grid">
            <article class="package-card guest-package reveal"><header class="package-head"><div><span>Check out 8 August</span><h3>5 Nights</h3><small>Guest package</small></div><strong>05</strong></header><ul class="package-includes"><li>Accommodation fee included</li><li>3 meals per day — breakfast, lunch and dinner</li><li>Entrance to parties</li></ul><div class="room-prices"><div><span>Double room</span><strong>550 €</strong></div><div><span>Triple room</span><strong>505 €</strong></div><div><span>Junior suite <small>4 people</small></span><strong>500 €</strong></div></div></article>
            <article class="package-card guest-package reveal"><header class="package-head"><div><span>Check out 9 August</span><h3>6 Nights</h3><small>Guest package</small></div><strong>06</strong></header><ul class="package-includes"><li>Accommodation fee included</li><li>3 meals per day — breakfast, lunch and dinner</li><li>Entrance to parties</li></ul><div class="room-prices"><div><span>Double room</span><strong>625 €</strong></div><div><span>Triple room</span><strong>570 €</strong></div><div><span>Junior suite <small>4 people</small></span><strong>565 €</strong></div></div></article>
          </div>
          <div class="guest-conditions reveal"><span>Guest package conditions</span><ul><li>The guest package is for family members, friends or companions of festival participants.</li><li>Rooms must be shared with registered participants.</li><li>Guests may not occupy a room alone without a registered participant.</li></ul></div>
        </section>

        <div class="travel-extras reveal">
          <article><span class="extra-index">01</span><div><h3>Airport transfer</h3><p>Shared van: <strong>40 €</strong> per person, one way.</p><p>Private car: <strong>80 €</strong> for 1 passenger or <strong>100 €</strong> for 2 passengers, one way.</p></div></article>
          <article><span class="extra-index">02</span><div><h3>Extra nights</h3><p>Breakfast included.</p><p><strong>75 €</strong> triple or junior room<br><strong>85 €</strong> double room<br><strong>110 €</strong> single room</p></div></article>
        </div>
        <div class="price-contact reveal"><span>Info &amp; registrations</span><a href="mailto:cairobynight27@gmail.com">cairobynight27@gmail.com <span class="link-arrow" aria-hidden="true"></span></a></div>
        <div class="pricing-social reveal"><span>Official updates</span><a href="https://t.me/cairoByNight" target="_blank" rel="noopener">Telegram · t.me/cairoByNight</a></div>
      </div>
    </section>`,
  rules: () => `${pageHero('Competition', 'Categories & Rules', 'Choose your format and compare every level, category, age requirement, music limit and fee.')}<section class="content-section competition-rules-section"><div class="competition-rules-shell">
    <header class="competition-rules-heading reveal"><div><span>Competition guide · 2027</span><h2>Find your<br>category</h2></div><p>All information from the official competition documents, rebuilt as an accessible and easy-to-compare guide.</p></header>
    <div class="competition-mode-switch reveal" role="tablist" aria-label="Competition format"><button class="active" id="rules-solo-tab" type="button" role="tab" aria-selected="true" aria-controls="rules-solo-panel" data-rules-panel="solo"><span>01</span>Solo Competition</button><button id="rules-group-tab" type="button" role="tab" aria-selected="false" aria-controls="rules-group-panel" data-rules-panel="group"><span>02</span>Group Competition</button></div>
    <section class="competition-rules-panel" id="rules-solo-panel" role="tabpanel" aria-labelledby="rules-solo-tab" data-rules-content="solo">
      <div class="rules-panel-intro reveal"><span>Solo format</span><h2>Six paths.<br>One stage.</h2><p>Choose the level and age category that matches your competition profile.</p></div>
      <div class="competition-rule-grid competition-rule-grid-primary">
        ${competitionRuleCard({ title: 'Professional', subtitle: 'For Cairo By Night Queen / King', age: '+18', time: 'Music maximum 4 min', categories: professionalDanceCategories, price: '45 € per category', accent: 'blue' })}
        ${competitionRuleCard({ title: 'Semi-Professional', subtitle: 'For Cairo By Night Princess', age: '+16', time: 'Music maximum 3 min', categories: soloDanceCategories, price: '45 € per category', accent: 'red' })}
        ${competitionRuleCard({ title: "Lady’s Category", subtitle: 'Open Level', age: '+35', time: 'Music maximum 4 min', categories: soloDanceCategories, price: '45 € per category', accent: 'violet' })}
      </div>
      <aside class="competition-policy choreography-policy reveal"><span>Queen category requirement</span><h3>Original choreography</h3><p>At the Cairo By Night Queen Category: At least one of four choreographies presented in must be created and choreographed by the performer. Choreographies created by another choreographer may be included for the remaining routines.</p></aside>
      <div class="competition-rule-grid competition-rule-grid-secondary">
        ${competitionRuleCard({ title: 'Teens', subtitle: 'Youth category', age: '+11', time: 'Music maximum 3 min', categories: soloDanceCategories, price: '45 € per category', accent: 'red' })}
        ${competitionRuleCard({ title: 'Children', subtitle: 'Youth category', age: '+6', time: 'Music maximum 3 min', categories: soloDanceCategories, price: '45 € per category', accent: 'blue' })}
        ${competitionRuleCard({ title: 'Live Band Competition', subtitle: 'All ages', age: 'All ages', time: 'Music from 2 to 3 min', categories: ['Professionals', 'Semi-Professionals', 'Teens / Pre-Professionals'], accent: 'gold' })}
      </div>
      <aside class="competition-policy safeguarding-policy reveal"><span>Safeguarding note</span><h3>Teens and Children categories</h3><p>For the Teens and Children Categories, all performances must be strictly age appropriate. Costumes, choreography, music selection, makeup, styling, and stage presentation must not sexualize or portray minors in an adult manner. Parents or legal guardians and coaches are fully responsible for ensuring each participant’s overall presentation is appropriate for a youth competition, and by registering they confirm their acceptance of this responsibility.</p></aside>
      <div class="competition-fee reveal"><span>Solo competition fee</span><strong>45 € per category</strong></div>
    </section>
    <section class="competition-rules-panel" id="rules-group-panel" role="tabpanel" aria-labelledby="rules-group-tab" data-rules-content="group" hidden>
      <div class="rules-panel-intro reveal"><span>Group format</span><h2>Dance<br>together.</h2><p>Three group divisions with the same category structure and a fee calculated per participant.</p></div>
      <div class="competition-rule-grid competition-rule-grid-primary">
        ${competitionRuleCard({ title: 'Professional', subtitle: 'For Cairo By Night Queen', time: 'Music maximum 4 min', categories: groupDanceCategories, price: '15 € per person', accent: 'blue' })}
        ${competitionRuleCard({ title: 'Semi-Professional', subtitle: 'For Cairo By Night Princess', time: 'Music maximum 3 min', categories: groupDanceCategories, price: '15 € per person', accent: 'red' })}
        ${competitionRuleCard({ title: 'Teens + Children', subtitle: 'For Cairo By Night Prince', time: 'Music maximum 3 min', categories: groupDanceCategories, price: '15 € per person', accent: 'violet' })}
      </div>
      <div class="group-competition-banner reveal"><div><span>Stella Zahir Presents</span><h3>Cairo By Night</h3><p>The Ultimate Bellydance &amp; Arabic Culture Festival</p></div><strong>4—9<small>August 2027</small></strong></div>
    </section>
    <section class="live-band-library reveal" aria-labelledby="live-band-title">
      <header class="live-band-heading"><div><span>Live band · Serres, Greece</span><h2 id="live-band-title">Choose your<br>song.</h2></div><p>Search the official 2027 live-band repertoire by singer or song title.</p></header>
      <div class="song-search"><label for="song-search-input">Search repertoire</label><div><input id="song-search-input" type="search" placeholder="Type an artist or song…" autocomplete="off"><span data-song-count>${liveBandRepertoire.length} artists &amp; collections</span></div></div>
      <div class="song-library" aria-live="polite">${liveBandRepertoire.map(item => `<article class="song-artist" data-song-card data-search="${[item.artist, ...item.songs].join(' ').toLowerCase()}"><span>${String(liveBandRepertoire.indexOf(item) + 1).padStart(2, '0')}</span><h3>${item.artist}</h3>${item.songs.length ? `<ul>${item.songs.map(song => `<li>${song}</li>`).join('')}</ul>` : '<p>Contact the band for available songs.</p>'}</article>`).join('')}</div>
      <p class="song-empty" data-song-empty hidden>No songs match this search.</p>
      <aside class="live-band-contact"><div><span>Song not listed or rehearsal needed?</span><strong>Contact Mr. Mohamed Reda directly on WhatsApp.</strong></div><a href="https://wa.me/201002568180" target="_blank" rel="noopener">+20 100 2568180 <i class="link-arrow" aria-hidden="true"></i></a></aside>
    </section>
    <footer class="competition-rules-contact reveal"><div><span>Info &amp; registrations only</span><a href="https://www.cairobynight.gr/">www.cairobynight.gr</a></div><a href="mailto:cairobynight27@gmail.com">cairobynight27@gmail.com <i class="link-arrow" aria-hidden="true"></i></a></footer>
  </div></section>`,
  schedule: () => `${pageHero('Cairo By Night 2027', 'Schedule')}<section class="content-section schedule-section"><div class="schedule-shell">
    <header class="schedule-heading reveal"><div><span>Stella Zahir Presents</span><h2>The Ultimate Bellydance<br>&amp; Arabic Culture Festival</h2></div><strong>4—9<br><small>August · Greece</small></strong></header>
    <div class="schedule-zoom-bar reveal" aria-label="Schedule view controls">
      <button class="schedule-fit-button active" type="button" data-schedule-fit>All days</button>
      <div class="schedule-day-jumps" aria-label="Zoom into one day">${scheduleDays.map((scheduleDay, index) => `<button type="button" data-schedule-focus="${index}"><span>${scheduleDay.day.slice(0, 3)}</span>${scheduleDay.date.split(' ')[0]}</button>`).join('')}</div>
      <div class="schedule-zoom-buttons"><button type="button" data-schedule-zoom="out" aria-label="Zoom out">−</button><span data-schedule-zoom-level aria-live="polite">Fit</span><button type="button" data-schedule-zoom="in" aria-label="Zoom in">+</button></div>
    </div>
    <div class="schedule-board-frame reveal" aria-label="Cairo By Night schedule, 4 to 9 August" tabindex="0">
      <div class="schedule-board-stage">
      <div class="schedule-board">
        <div class="schedule-board-brand"><span>Cairo By Night</span><strong>Festival Schedule</strong><small>Greece · 2027</small></div>
        <div class="schedule-columns">${scheduleDays.map(scheduleColumn).join('')}</div>
      </div>
      </div>
    </div>
  </div></section>`,
  contact: () => `${pageHero('We are here', 'Contact')}<section class="content-section"><div class="contact-grid"><div class="contact-panel reveal"><div class="eyebrow">Festival desk</div><a class="contact-item" href="tel:%2000306972986504"><span>Telephone</span><strong>+306972986504 (Stella Zahir)</strong></a><a class="contact-item" href="mailto:cairobynight27@gmail.com"><span>Email</span><strong>cairobynight27@gmail.com</strong></a><div class="contact-item"><span>Venue</span><strong>Elpida Resort & Spa - Serres</strong></div></div><div class="map-wrap reveal"><iframe title="Elpida Resort Serres" src="https://maps.google.com/maps?q=Elpida%20Resort%20Serres&t=m&z=13&output=embed&iwloc=near" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="section-shell" style="margin-top:2rem"><h2 class="section-title reveal">Cairo By Night Bellydance Festival Event Map</h2></div></section>`,
  registration: () => `${pageHero('Cairo By Night 2027', 'Registration', 'Complete your festival, accommodation, performance, competition and travel requests in one secure form.')} ${registrationForm()}`
};

main.innerHTML = (renderers[page] || renderers.home)();

const siteHeader = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
const mobileQuery = window.matchMedia('(max-width: 1050px)');

const syncMenuAccessibility = () => {
  menu.inert = mobileQuery.matches && !menu.classList.contains('open');
};

const setHeader = () => siteHeader.classList.toggle('scrolled', window.scrollY > 24);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  siteHeader.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : '';
  syncMenuAccessibility();
});

menu.addEventListener('click', event => {
  if (event.target.closest('a')) {
    menu.classList.remove('open');
    siteHeader.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    syncMenuAccessibility();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    menu.classList.remove('open');
    siteHeader.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    syncMenuAccessibility();
    menuButton.focus();
  }
});

mobileQuery.addEventListener('change', () => {
  if (!mobileQuery.matches) {
    menu.classList.remove('open');
    siteHeader.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }
  syncMenuAccessibility();
});
syncMenuAccessibility();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}

if (!reducedMotion && page === 'home' && window.matchMedia('(pointer:fine)').matches) {
  const media = document.querySelector('.hero-media');
  window.addEventListener('pointermove', event => {
    const x = (event.clientX / window.innerWidth - .5) * 8;
    const y = (event.clientY / window.innerHeight - .5) * 8;
    media.style.transform = `translate3d(${x}px,${y}px,0) scale(1.015)`;
  }, { passive: true });
}

if (page === 'home') {
  const arrivalExperience = document.querySelector('.arrival-experience');
  const stageTabs = [...document.querySelectorAll('.stage-tab')];
  const stagePanels = [...document.querySelectorAll('.stage-panel')];
  const photoDialog = document.querySelector('#arrival-photo-dialog');
  const expandedPhoto = photoDialog.querySelector('.arrival-photo-expanded');
  const photoCaption = photoDialog.querySelector('.arrival-photo-caption');
  const closePhoto = photoDialog.querySelector('.dialog-close');

  stageTabs.forEach(tab => tab.addEventListener('click', () => {
    const activeStage = tab.dataset.stage;
    arrivalExperience.dataset.active = activeStage;
    stageTabs.forEach(item => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
    stagePanels.forEach(panel => {
      panel.hidden = panel.id !== `arrival-stage-${activeStage}`;
    });
  }));

  document.querySelectorAll('.arrival-photo-button').forEach(button => button.addEventListener('click', () => {
    expandedPhoto.className = `arrival-photo-expanded ${button.dataset.photo}`;
    expandedPhoto.setAttribute('aria-label', button.dataset.caption);
    photoCaption.textContent = button.dataset.caption;
    photoDialog.showModal();
  }));

  closePhoto.addEventListener('click', () => photoDialog.close());
  photoDialog.addEventListener('click', event => {
    if (event.target === photoDialog) photoDialog.close();
  });
}

if (page === 'schedule') {
  const scheduleColumns = [...document.querySelectorAll('.schedule-day-column')];
  const scheduleFrame = document.querySelector('.schedule-board-frame');
  const scheduleStage = document.querySelector('.schedule-board-stage');
  const scheduleBoard = document.querySelector('.schedule-board');
  const scheduleFitButton = document.querySelector('[data-schedule-fit]');
  const scheduleZoomLevel = document.querySelector('[data-schedule-zoom-level]');
  const scheduleFocusButtons = [...document.querySelectorAll('[data-schedule-focus]')];
  const scheduleZoomButtons = [...document.querySelectorAll('[data-schedule-zoom]')];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let scheduleScale = 1;
  let scheduleView = 'fit';

  const getFitScale = () => Math.min(1, (scheduleFrame.clientWidth - 2) / scheduleBoard.offsetWidth);
  const updateScheduleScale = (nextScale, focusIndex = null) => {
    scheduleScale = Math.max(getFitScale(), Math.min(1.4, nextScale));
    scheduleBoard.style.transform = `scale(${scheduleScale})`;
    scheduleStage.style.width = `${scheduleBoard.offsetWidth * scheduleScale}px`;
    scheduleStage.style.height = `${scheduleBoard.offsetHeight * scheduleScale}px`;
    scheduleZoomLevel.textContent = scheduleView === 'fit' ? 'Fit' : `${Math.round(scheduleScale * 100)}%`;
    scheduleFitButton.classList.toggle('active', scheduleView === 'fit');
    if (focusIndex !== null) {
      const activeColumn = scheduleColumns[focusIndex];
      const targetLeft = (activeColumn.offsetLeft + activeColumn.offsetWidth / 2) * scheduleScale - scheduleFrame.clientWidth / 2;
      scheduleFrame.scrollTo({ left: Math.max(0, targetLeft), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };
  const fitSchedule = () => {
    scheduleView = 'fit';
    updateScheduleScale(getFitScale());
    scheduleFrame.scrollTo({ left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };
  const focusScheduleDay = index => {
    scheduleView = 'focus';
    selectScheduleColumn(scheduleColumns[index]);
    scheduleFocusButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
    updateScheduleScale(Math.max(getFitScale(), Math.min(1.25, scheduleFrame.clientWidth / (scheduleColumns[index].offsetWidth * 1.25))), index);
  };
  const selectScheduleColumn = activeColumn => {
    scheduleColumns.forEach(column => column.classList.toggle('selected', column === activeColumn));
  };
  scheduleColumns.forEach((column, index) => {
    column.addEventListener('click', () => focusScheduleDay(index));
    column.addEventListener('focus', () => selectScheduleColumn(column));
    column.addEventListener('pointerenter', () => selectScheduleColumn(column));
  });
  scheduleFocusButtons.forEach((button, index) => button.addEventListener('click', () => focusScheduleDay(index)));
  scheduleFitButton.addEventListener('click', () => {
    scheduleFocusButtons.forEach(button => button.classList.remove('active'));
    fitSchedule();
  });
  scheduleZoomButtons.forEach(button => button.addEventListener('click', () => {
    scheduleView = 'manual';
    scheduleFocusButtons.forEach(focusButton => focusButton.classList.remove('active'));
    updateScheduleScale(scheduleScale + (button.dataset.scheduleZoom === 'in' ? .15 : -.15));
  }));
  window.addEventListener('resize', () => {
    if (scheduleView === 'fit') fitSchedule();
  });
  requestAnimationFrame(fitSchedule);
}

if (page === 'home') {
  const discoverTabs = [...document.querySelectorAll('[data-discover-tab]')];
  const discoverPanels = [...document.querySelectorAll('[data-discover-panel]')];
  const discoverExperience = document.querySelector('.discover-greece-experience');
  const selectDiscoverPanel = activeTab => {
    const activePanel = activeTab.dataset.discoverTab;
    discoverExperience.dataset.discoverActive = activePanel;
    discoverTabs.forEach(tab => {
      const selected = tab === activeTab;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    discoverPanels.forEach(panel => panel.hidden = panel.dataset.discoverPanel !== activePanel);
  };
  discoverTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectDiscoverPanel(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextTab = discoverTabs[(index + direction + discoverTabs.length) % discoverTabs.length];
      selectDiscoverPanel(nextTab);
      nextTab.focus();
    });
  });
}

if (page === 'registration') {
  const registrationFormElement = document.querySelector('[data-registration-form]');
  const registrationSubmit = document.querySelector('[data-registration-submit]');
  const otherNights = document.querySelector('[data-other-nights]');
  const otherNightsInput = otherNights?.querySelector('input');
  const packageOptions = [...document.querySelectorAll('input[name="Package length"]')];
  const roomOptions = [...document.querySelectorAll('input[name="Room type"]')];
  const competitionParticipation = [...document.querySelectorAll('input[name="Competition participation"]')];
  const competitionLevels = [...document.querySelectorAll('input[name="Competition level"]')];
  const competitionCategories = [...document.querySelectorAll('input[name="Competition categories"]')];
  const professionalCategory = document.querySelector('[data-professional-category]');
  const categoryStatus = document.querySelector('[data-category-status]');
  const galaParticipation = [...document.querySelectorAll('input[name="Gala participation"]')];
  const performanceFormats = [...document.querySelectorAll('input[name="Performance format"]')];
  const additionalPerformances = [...document.querySelectorAll('input[name="Additional performance"]')];
  const costTotal = document.querySelector('[data-cost-total]');
  const costLines = document.querySelector('[data-cost-lines]');
  const costTotalInput = document.querySelector('[data-cost-total-input]');
  const costBreakdownInput = document.querySelector('[data-cost-breakdown-input]');
  const packagePrices = {
    5: { Single: 975, Double: 830, 'Triple room': 785, 'Junior suite': 780 },
    6: { Single: 1075, Double: 905, 'Triple room': 850, 'Junior suite': 845 }
  };
  const extraNightPrices = { Single: 110, Double: 85, 'Triple room': 75, 'Junior suite': 75 };
  const selectedValue = options => options.find(option => option.checked)?.value;
  const getRequestedNights = () => {
    const selectedPackage = packageOptions.find(option => option.checked);
    if (!selectedPackage) return null;
    return selectedPackage.dataset.stayNights === 'other' ? Number(otherNightsInput.value) || null : Number(selectedPackage.dataset.stayNights);
  };
  const accommodationPrice = (nights, room) => {
    if (!nights || !room) return null;
    if (packagePrices[nights]) return packagePrices[nights][room];
    if (nights > 6) return packagePrices[6][room] + ((nights - 6) * extraNightPrices[room]);
    return null;
  };
  const formatEuro = amount => `${new Intl.NumberFormat('en-GB').format(amount)} €`;
  const updateStayPrices = () => {
    const room = selectedValue(roomOptions);
    document.querySelectorAll('[data-stay-price]').forEach(label => {
      const nights = label.dataset.stayPrice;
      if (!room) {
        const minimumPrices = { 5: 780, 6: 845, 7: 920, 8: 995 };
        label.textContent = nights === 'other' ? 'From 75 € per extra night' : `From ${formatEuro(minimumPrices[nights])} · select room for exact price`;
        return;
      }
      if (nights === 'other') {
        label.textContent = `${formatEuro(extraNightPrices[room])} per extra night after 6 nights`;
        return;
      }
      label.textContent = formatEuro(accommodationPrice(Number(nights), room));
    });
  };
  const updateCostSummary = () => {
    const room = selectedValue(roomOptions);
    const nights = getRequestedNights();
    const lines = [];
    let total = 0;
    const stayPrice = accommodationPrice(nights, room);
    if (stayPrice) {
      lines.push([`${nights}-night festival package · ${room}`, stayPrice]);
      total += stayPrice;
    } else if (nights || room) {
      lines.push(['Accommodation', 'Price requires confirmation']);
    }
    if (selectedValue(galaParticipation) === 'I would like to perform in a gala show') {
      const selectedFormats = performanceFormats.filter(option => option.checked).map(option => option.value);
      const selectedAdditional = additionalPerformances.filter(option => option.checked).map(option => option.value);
      if (selectedFormats.includes('CD / recorded music')) lines.push(['1st gala show · CD / recorded music', 0]);
      if (selectedFormats.includes('Live band')) {
        lines.push(['1st gala show · Live band', 45]);
        total += 45;
      }
      selectedAdditional.forEach(performance => {
        lines.push([`2nd gala show · ${performance.includes('live band') ? 'Live band' : 'CD / recorded music'}`, 45]);
        total += 45;
      });
      if (!selectedFormats.length && !selectedAdditional.length) lines.push(['Gala performance', 'Select CD or live band']);
    }
    if (selectedValue(competitionParticipation) === 'I would like to take part') {
      const selectedLevels = competitionLevels.filter(option => option.checked).map(option => option.value);
      const selectedCategoryCount = competitionCategories.filter(option => option.checked).length;
      if (!selectedLevels.length) lines.push(['Competition level', 'Select at least one level']);
      if (selectedCategoryCount) {
        const competitionTotal = selectedCategoryCount * 45;
        lines.push([`Competition categories · ${selectedCategoryCount} × €45`, competitionTotal]);
        total += competitionTotal;
      } else {
        lines.push(['Competition categories', 'Select at least one category']);
      }
    }
    costTotal.textContent = formatEuro(total);
    costLines.innerHTML = lines.length ? lines.map(([label, value]) => `<p><span>${label}</span><strong>${typeof value === 'number' ? formatEuro(value) : value}</strong></p>`).join('') : '<p>Select accommodation and participation options to calculate the current published costs.</p>';
    const breakdown = lines.length ? lines.map(([label, value]) => `${label}: ${typeof value === 'number' ? formatEuro(value) : value}`).join(' | ') : 'No priced selections';
    costTotalInput.value = formatEuro(total);
    costBreakdownInput.value = breakdown;
  };
  const syncCompetitionCategories = () => {
    const isProfessional = competitionLevels.some(option => option.checked && option.value === 'Professional');
    professionalCategory.hidden = !isProfessional;
    const professionalInput = professionalCategory.querySelector('input');
    if (!isProfessional) professionalInput.checked = false;
    const limit = isProfessional ? 6 : 5;
    const selectedCount = competitionCategories.filter(option => option.checked).length;
    competitionCategories.forEach(option => {
      option.disabled = !option.checked && selectedCount >= limit;
    });
    categoryStatus.textContent = `${selectedCount} of ${limit} categories selected · ${formatEuro(selectedCount * 45)}`;
    updateCostSummary();
  };
  const syncOtherNights = () => {
    const showOtherNights = packageOptions.some(option => option.checked && option.value === 'Other');
    otherNights.hidden = !showOtherNights;
    otherNightsInput.required = showOtherNights;
    if (!showOtherNights) otherNightsInput.value = '';
    updateCostSummary();
  };
  packageOptions.forEach(option => option.addEventListener('change', syncOtherNights));
  roomOptions.forEach(option => option.addEventListener('change', () => {
    updateStayPrices();
    updateCostSummary();
  }));
  competitionParticipation.forEach(option => option.addEventListener('change', updateCostSummary));
  competitionLevels.forEach(option => option.addEventListener('change', syncCompetitionCategories));
  competitionCategories.forEach(option => option.addEventListener('change', syncCompetitionCategories));
  galaParticipation.forEach(option => option.addEventListener('change', updateCostSummary));
  performanceFormats.forEach(option => option.addEventListener('change', updateCostSummary));
  additionalPerformances.forEach(option => option.addEventListener('change', updateCostSummary));
  otherNightsInput.addEventListener('input', updateCostSummary);
  syncOtherNights();
  updateStayPrices();
  syncCompetitionCategories();
  updateCostSummary();

  const submitted = new URLSearchParams(window.location.search).get('submitted') === 'true';
  if (submitted) {
    const successMessage = document.querySelector('[data-registration-success]');
    successMessage.hidden = false;
    successMessage.focus();
  }

  registrationFormElement?.addEventListener('submit', () => {
    registrationSubmit.disabled = true;
    registrationSubmit.firstChild.textContent = 'Sending registration ';
  });
}

if (page === 'rules') {
  const ruleTabs = [...document.querySelectorAll('[data-rules-panel]')];
  const rulePanels = [...document.querySelectorAll('[data-rules-content]')];
  const selectRulesPanel = activeTab => {
    const activePanel = activeTab.dataset.rulesPanel;
    ruleTabs.forEach(tab => {
      const selected = tab === activeTab;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    rulePanels.forEach(panel => {
      panel.hidden = panel.dataset.rulesContent !== activePanel;
      if (!panel.hidden) panel.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
    });
  };
  ruleTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectRulesPanel(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextTab = ruleTabs[(index + direction + ruleTabs.length) % ruleTabs.length];
      selectRulesPanel(nextTab);
      nextTab.focus();
    });
  });

  const songSearch = document.querySelector('#song-search-input');
  const songCards = [...document.querySelectorAll('[data-song-card]')];
  const songCount = document.querySelector('[data-song-count]');
  const songEmpty = document.querySelector('[data-song-empty]');
  songSearch?.addEventListener('input', () => {
    const query = songSearch.value.trim().toLowerCase();
    let visibleCards = 0;
    songCards.forEach(card => {
      const matches = !query || card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visibleCards += 1;
    });
    songCount.textContent = `${visibleCards} ${visibleCards === 1 ? 'artist or collection' : 'artists & collections'}`;
    songEmpty.hidden = visibleCards !== 0;
  });
}
