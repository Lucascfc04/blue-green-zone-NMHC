const routes = {
  running: {
    key: "running",
    title: "1 km Running Loop",
    color: "#E53935",
    kicker: "Rood | volledige hardloopbaan",
    text:
      "De rode route vormt de sportieve ruggengraat van het Green Blue Challenge Park. Deze 1 km route loopt over het hele NMHC-terrein en kan gebruikt worden voor warming-up, intervaltraining, lunchruns, teamtrainingen en challenges.",
    bullets: ["Volledige ronde over NMHC", "Verbindt velden, groene randen en hub", "Niet alleen rondom de HYROX Hub"]
  },
  corridor: {
    key: "corridor",
    title: "Groene Corridor",
    color: "#1E73E8",
    kicker: "Blauw | wandelpad richting bossen",
    text:
      "Het blauwe wandelpad verbindt NMHC met de bredere Groene Corridor richting de bossen. Het pad stimuleert wandelen, ontmoeten en bewegen in het groen.",
    bullets: ["Langs de oostzijde", "Richting Heumensoord", "Rustige tegenhanger van intensieve sport"]
  },
  hub: {
    key: "hub",
    title: "HYROX-geinspireerde Hub",
    color: "#FFD23F",
    kicker: "Geel | intensief trainingspunt",
    text:
      "De gele zone is de functionele trainingshub met toestellen, workoutstations, start/finish, lunge lane, push zone, carry zone en calisthenics. De hub is een station binnen de grotere 1 km Running Loop.",
    bullets: ["Noordoostelijke hoek", "Start/finish en workoutstations", "Herkenbaar hart, niet de hele route"]
  }
};

const pillars = [
  ["Dumbbell", "Sport", "Hardlopen, functionele training, teamchallenges, outdoor fitness en hockeyvoorbereiding."],
  ["HeartPulse", "Gezondheid", "Bewegen, ontmoeten, herstel, gezonde voeding, senior fit en laagdrempelige leefstijlstimulering."],
  ["Leaf", "Groen & blauw", "Groene Corridor, biodiversiteit, schaduw, waterberging, verkoeling en een gezonde leefomgeving."]
];

const gallery = [
  ["images/huidige-situatie-1.jpg", "Open graszone"],
  ["images/huidige-situatie-2.jpg", "Route langs de velden"],
  ["images/huidige-situatie-3.jpg", "Rand langs de haag"],
  ["images/huidige-situatie-4.jpg", "Aansluiting richting Groene Corridor"],
  ["images/huidige-situatie-5.jpg", "Potentiele HYROX Hub-locatie"],
  ["images/huidige-situatie-6.jpg", "Ruimte voor vergroening en beweegstations"],
  ["images/huidige-situatie-7.jpg", "Groene rand met zicht op sport"],
  ["images/huidige-situatie-8.jpg", "Bestaande loopstrook"]
];

const desiredGallery = [
  ["images/gewenste-situatie-hyrox-hub.png", "HYROX-geinspireerde Hub als start/finish en trainingshart"],
  ["images/gewenste-situatie-opening-naar-weg.png", "Opening naar de weg met rode Running Loop en wandelpad"],
  ["images/gewenste-situatie-wandelpad-langs-tribune.png", "Wandelpad en hardlooproute langs de tribune"],
  ["images/gewenste-situatie-wandelpad-rond-huisje.png", "Wandelpad rond het huisje met groene inpassing"],
  ["images/gewenste-situatie-hek-langs-huisje.png", "Net hekwerk, beplanting en aansluiting langs het huisje"],
  ["images/gewenste-wandelpad-van-hyrox-hub.png", "Wandelpad vanaf de HYROX Hub langs de velden"],
  ["images/gewenste-pad-naar-bos.png", "Groene wandelverbinding richting de bossen"],
  ["images/gewenste-situatie-langs-gastank.png", "Running Loop en wandelpad langs de gastankzone"]
];

const observations = [
  "Veel open ruimte rond de velden",
  "Bestaande groene randen met hagen en bomen",
  "Slijtplekken en kale stukken door gebruik",
  "Kansrijke routing rondom het sportpark",
  "Goede zichtbaarheid vanaf velden en clubhuis",
  "Mogelijkheid om sport en groen sterker te verbinden"
];

const desired = [
  "Start/finish-zone",
  "Pull-up bars",
  "Dip bars",
  "Monkey bars",
  "Wall-ball wand",
  "Lunge lane",
  "Push zone",
  "Farmer carry / sandbag carry route",
  "Sprintstrook",
  "Step-up blocks",
  "Instructiebord",
  "Watertappunt",
  "Bankjes",
  "Groene beplanting rondom",
  "Waterdoorlatende ondergrond",
  "NMHC/Blue Zone bewegwijzering"
];

const scenarios = [
  ["NMHC-teams", "Warming-up, conditietraining en blessurepreventie."],
  ["Studenten en werknemers", "Lunchruns, korte beweegpauzes en vitaliteitsprogramma's."],
  ["Omwonenden", "Laagdrempelig wandelen, joggen en bewegen in het groen."],
  ["Challenges", "Teamchallenges, bedrijvenevents en sportieve community-activiteiten."]
];

const corridorBenefits = [
  "Meer verbinding met de omgeving",
  "Wandelen en bewegen in het groen",
  "Betere relatie met de bossen",
  "Gezonde leefomgeving",
  "Rustige tegenhanger van de intensieve sportzone",
  "Geschikt voor ouderen, buurtbewoners en recreanten"
];

const equipment = [
  ["Pull-up bars & monkey bars", "krachttraining met eigen lichaamsgewicht.", "robuust, onderhoudsarm en geschikt voor meerdere niveaus.", "hockeyteams, jeugd, studenten, volwassenen.", "veilige valondergrond en duidelijke instructies."],
  ["Dip bars", "bovenlichaam, core en stabiliteit.", "compact, laag onderhoud en breed inzetbaar.", "beginners tot gevorderden.", "plaatsing naast calisthenics-zone."],
  ["Wall-ball wand", "explosiviteit, kracht en conditie.", "herkenbaar onderdeel van functionele training en geschikt voor challenges.", "teams, bootcampgroepen, gevorderde sporters.", "geluid, veilige afstand en duidelijke targethoogtes."],
  ["Lunge lane", "beenkracht, stabiliteit en conditie.", "eenvoudig, betaalbaar en goed te combineren met hardlopen.", "alle niveaus.", "gripvaste, vlakke en waterdoorlatende ondergrond."],
  ["Push zone / sled push alternatief", "intensieve kracht- en conditietraining.", "sportief herkenbaar en aantrekkelijk voor teamtrainingen en challenges.", "gevorderden, teams, bedrijvenchallenges.", "slijtvaste baan en veilige looprichting."],
  ["Farmer carry / sandbag carry", "gripkracht, rompstabiliteit en conditie.", "sterk teamonderdeel en eenvoudig te programmeren.", "teams, studenten, bootcampgroepen.", "materiaalbeheer, opslag en toezicht."],
  ["Step-up blocks", "kracht, balans en laagdrempelige training.", "geschikt voor jong en oud, ook voor beginners.", "jeugd, ouderen, beginners, revalidanten.", "hoogtevariatie en antislipmateriaal."],
  ["Sprintstrook", "snelheid, explosiviteit en intervaltraining.", "past bij hockeyvoorbereiding en korte challenges.", "sportteams en recreatieve lopers.", "geen kruising met wandelroute."]
];

const reasons = [
  ["Functioneel en sportgericht", "De toestellen sluiten aan op bewegingen die relevant zijn voor hockey, algemene fitheid en functionele training: kracht, snelheid, stabiliteit, explosiviteit en uithoudingsvermogen."],
  ["Geschikt voor meerdere niveaus", "De route is niet alleen voor fanatieke sporters. Door variatie in oefeningen kunnen beginners, jongeren, ouderen, teams en recreanten allemaal meedoen."],
  ["Robuust en buitenbestendig", "De gekozen toestellen zijn geschikt voor outdoor gebruik, vragen relatief weinig onderhoud en kunnen goed worden geintegreerd in een groene omgeving."],
  ["Goed programmeerbaar", "De combinatie van lopen en stations maakt trainingen, challenges, clinics, senior-fit, bootcamps en bedrijvenactiviteiten mogelijk."],
  ["Verbindt sport met ontmoeting", "De hub is niet alleen een trainingsplek, maar ook een start-, finish- en ontmoetingspunt."],
  ["Past bij de Green Blue Zone", "De toestellen worden gecombineerd met groen, waterdoorlatende ondergrond, beplanting, schaduw en rustplekken. Daardoor ontstaat geen stenige fitnessbaan, maar een gezonde buitenruimte."]
];

const plaza = ["Start/finish-plek", "Zitbanken", "Kleine tribuneheuvel of zitplek", "Watertappunt", "Instructiebord", "Stretchplek", "Schaduw", "Mogelijke yoga/mobility-zone", "Ontmoetingsplek voor groepen"];
const garden = ["Moestuinbakken", "Kruidentuin", "Workshops gezonde voeding", "Regenwatergebruik", "Betrokkenheid van vrijwilligers", "Educatie voor jeugd en studenten", "Gezonde sportkantine of recoverymomenten"];
const blueGreen = ["Wadi's en infiltratiestroken", "Bloemrijke randen", "Schaduwbomen", "Groene buffers", "Waterdoorlatende ondergrond", "Biodiversiteit", "Verkoeling", "Natuurlijke overgang richting Groene Corridor"];

const audiences = [
  ["NMHC-teams", "1 km Running Loop en hub", "Betere voorbereiding en teamfitheid", "Teamtraining"],
  ["Jeugdleden", "Speelse stations en route", "Motorische ontwikkeling en plezier", "Kids Challenge"],
  ["Senioren", "Groene Corridor en herstelzone", "Rustig bewegen en ontmoeten", "Senior Fit Walk"],
  ["Studenten", "Running Loop en bootcamp", "Korte intensieve beweegmomenten", "Lunchrun"],
  ["Campusmedewerkers", "Route, plaza en groene rustplekken", "Vitaliteit tijdens werkdag", "Beweegpauze"],
  ["Omwonenden", "Wandelpad en groene randen", "Toegankelijke gezonde leefomgeving", "Wandelgroep"],
  ["Niet-leden", "Open route en community events", "Publieke waarde van het sportpark", "Green Blue Bootcamp"],
  ["Bedrijven", "Challenges en plaza", "Teamvorming en vitaliteit", "Bedrijvenchallenge"],
  ["Zorg/welzijnspartners", "Laagdrempelige programma's", "Preventie en sociale verbinding", "Leefstijlworkshop"],
  ["Onderwijs en onderzoek", "Monitoring en living lab", "Gezondheid, sport en klimaat leren meten", "Studentenproject"]
];

const phases = [
  ["Fase 1", "Pilot", "Tijdelijke route, pop-up training, eerste testevents, gebruik meten."],
  ["Fase 2", "Basisaanleg", "1 km route markeren, eerste stations plaatsen, bewegwijzering, veilige ondergrond."],
  ["Fase 3", "Uitbreiding", "HYROX Hub, Green Blue Plaza, herstelzone, community garden en extra vergroening."],
  ["Fase 4", "Volledige Health Hub", "Vaste programmering, partners, monitoring, events, beheer en doorontwikkeling."]
];

const value = [
  "Stimuleert laagdrempelig bewegen",
  "Verbindt sportpark, wijk, campus en natuur",
  "Maakt de Groene Corridor zichtbaar",
  "Versterkt gezondheid en preventie",
  "Zorgt voor sociale ontmoeting",
  "Vergroot publieke waarde van het sportpark",
  "Biedt kansen voor onderwijs en onderzoek",
  "Draagt bij aan biodiversiteit en klimaatadaptatie",
  "Maakt NMHC een herkenbare Health Hub"
];

const partners = ["NMHC", "Gemeente Nijmegen", "HAN", "Radboud Universiteit", "Hortus Nijmegen", "SVAN", "Stichting Blue Zone d'Almarasweg", "Sportclubs omgeving", "GGD / welzijnspartners", "Bedrijven en sponsors"];

const nav = [
  ["#idee", "Idee"],
  ["#terreinplan", "Terreinplan"],
  ["#situatie", "Situatie"],
  ["#running-loop", "Running Loop"],
  ["#corridor", "Groene Corridor"],
  ["#hub", "Hub"],
  ["#waarde", "Waarde"],
  ["#contact", "Contact"]
];

let activeRoute = "running";

function icon(name) {
  const icons = {
    Dumbbell: "M7 7h10M7 17h10M5 5v14M19 5v14M3 9v6M21 9v6",
    HeartPulse: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l2.8-2.8M8 13h2l1.5-4 2 8 1.5-4h2",
    Leaf: "M5 21c8-1 14-7 16-18C10 3 3 8 5 21Zm0 0c4-5 8-8 14-10",
    MapPin: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    Users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
    Leaf2: "M11 20A7 7 0 0 1 4 13c0-5 6-9 16-9 0 10-4 16-9 16Zm0 0 7-7",
    Droplets: "M7 16a4 4 0 0 0 8 0c0-3-4-8-4-8s-4 5-4 8ZM17 12a3 3 0 0 0 6 0c0-2-3-6-3-6s-3 4-3 6Z",
    Handshake: "M11 17 8 14l-4 4M13 17l3-3 4 4M4 12l4-4 5 5 3-3 4 4M2 10l4-4M22 10l-4-4",
    Calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z",
    Tree: "M12 22V12M8 17H5l4-5H6l4-5h4l4 5h-3l4 5h-3",
    Building: "M4 21V5a2 2 0 0 1 2-2h9v18M8 7h3M8 11h3M8 15h3M15 9h3a2 2 0 0 1 2 2v10M14 21h8"
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${icons[name] || icons.Leaf}"/></svg>`;
}

function cardGrid(items, className = "") {
  return `<div class="grid cards ${className}">${items.map((item) => `<article class="card reveal"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("")}</div>`;
}

function routePanel() {
  const route = routes[activeRoute];
  return `
    <div class="route-panel" style="--route:${route.color}">
      <p class="eyebrow">${route.kicker}</p>
      <h3>${route.title}</h3>
      <p>${route.text}</p>
      <ul>${route.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    </div>`;
}

function terrainMap(extraClass = "") {
  return `
    <div class="map-shell ${extraClass}" data-active="${activeRoute}">
      <div class="map-stage desired-map-stage">
        <img src="images/gewenste-situatie-map.png" alt="Gewenste situatie kaart van NMHC met rode 1 km hardloopbaan, blauwe Groene Corridor en gele HYROX Hub" />
      </div>
      <div class="legend">
        <button data-route="running"><span class="swatch red"></span> Rood = 1 km hardlooproute over heel NMHC</button>
        <button data-route="corridor"><span class="swatch blue"></span> Blauw = Groene Corridor wandelpad</button>
        <button data-route="hub"><span class="swatch yellow"></span> Geel = HYROX-geinspireerde Hub</button>
      </div>
    </div>`;
}

function app() {
  return `
    <header class="nav">
      <a class="brand" href="#top"><span>GB</span> Challenge Park NMHC</a>
      <nav>${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</nav>
    </header>

    <main id="top">
      <section class="hero">
        <img src="images/gewenste-situatie-hyrox-hub.png" alt="Gewenste situatie van de HYROX-geinspireerde Hub op het NMHC-terrein" />
        <div class="hero-shade"></div>
        <div class="hero-content reveal">
          <p class="eyebrow">Blue Zone d'Almarasweg | Nijmegen</p>
          <h1>Green Blue Challenge Park NMHC</h1>
          <p class="hero-sub">Een groene Health Hub waar hardlopen, functionele training, wandelen, ontmoeten en natuur samenkomen.</p>
          <div class="badges">
            <span>1 km hardlooproute</span><span>Groene Corridor</span><span>HYROX-geinspireerde hub</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="#terreinplan">Bekijk het terreinplan</a>
            <a class="btn light" href="#hub">Ontdek de HYROX Hub</a>
            <a class="btn ghost" href="#waarde">Waarom dit project?</a>
          </div>
        </div>
      </section>

      <section class="section" id="idee">
        <div class="section-head reveal">
          <p class="eyebrow">Het idee in een oogopslag</p>
          <h2>Geen losse outdoor gym, maar een compleet groen sport-, gezondheids- en ontmoetingsgebied.</h2>
        </div>
        <div class="grid pillars">
          ${pillars.map(([ic, title, text]) => `<article class="card pillar reveal"><div class="icon">${icon(ic)}</div><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="section map-section" id="terreinplan">
        <div class="section-head reveal">
          <p class="eyebrow">Centrale terreinlogica</p>
          <h2>Drie lijnen maken het park direct leesbaar.</h2>
          <p>De kaart zelf toont de volledige uitleg: rood is de 1 km hardloopbaan over heel NMHC, blauw is de Groene Corridor richting het bos en geel is de HYROX-geinspireerde Hub als station binnen de grotere route.</p>
        </div>
        <div class="map-layout reveal">
          ${terrainMap()}
          <aside id="routePanel">${routePanel()}</aside>
        </div>
      </section>

      <section class="section" id="situatie">
        <div class="section-head reveal">
          <p class="eyebrow">Huidige situatie</p>
          <h2>Het terrein heeft al de ruimte, randen en zichtlijnen om sport en groen sterker te verbinden.</h2>
        </div>
        <div class="gallery current-gallery">${gallery.map(([src, label]) => `<figure class="reveal"><img src="${src}" alt="${label} op het NMHC-terrein" /></figure>`).join("")}</div>
        <div class="observation-grid">${observations.map((o) => `<div class="mini-card reveal">${icon("Leaf2")}<span>${o}</span></div>`).join("")}</div>
      </section>

      <section class="section split-section" id="gewenst">
        <div class="section-head reveal">
          <p class="eyebrow">Gewenste situatie</p>
          <h2>De HYROX-geinspireerde Hub als actief hart binnen de grotere 1 km Running Loop.</h2>
          <p>De HYROX Hub is een intensief trainingspunt binnen de grotere 1 km Running Loop. Hier starten en eindigen challenges, maar de hardlooproute zelf loopt verder over het hele NMHC-terrein.</p>
        </div>
        <div class="before-after reveal">
          <figure><span>Huidige situatie</span><img src="images/hyrox-hub-before.jpg" alt="Huidige open graszone op beoogde hub-locatie" /></figure>
          <figure><span>Gewenste situatie</span><img src="images/gewenste-situatie-hyrox-hub.png" alt="Visualisatie van een groene functionele trainingshub met start/finish, toestellen en beplanting" /></figure>
        </div>
        <div class="feature-cloud">${desired.map((d) => `<span>${d}</span>`).join("")}</div>
        <div class="desired-gallery">${desiredGallery.map(([src, label]) => `<figure class="reveal"><img src="${src}" alt="${label}" /><figcaption>${label}</figcaption></figure>`).join("")}</div>
      </section>

      <section class="section band" id="running-loop">
        <div class="section-head reveal">
          <p class="eyebrow">Rood | volledige sportieve hoofdroute</p>
          <h2>1 km hardlooproute over het hele NMHC-terrein</h2>
          <p>De rode route is ontworpen als een volledige 1 km Running Loop over het NMHC-terrein. De route verbindt de verschillende velden, groene randen, de HYROX Hub en de aansluiting op de Groene Corridor. Daardoor ontstaat geen geisoleerde fitnessplek, maar een complete beweegroute door het sportpark.</p>
        </div>
        ${cardGrid(scenarios, "four")}
        <div class="route-timeline reveal">
          ${["Start bij HYROX Hub", "Langs veldranden", "Door groene zones", "Langs clubgebied", "Terug naar start/finish"].map((step, index) => `<div><strong>${index + 1}</strong><span>${step}</span></div>`).join("")}
        </div>
      </section>

      <section class="section corridor-section" id="corridor">
        <div class="section-head reveal">
          <p class="eyebrow">Blauw | groene wandelverbinding</p>
          <h2>Groene Corridor richting de bossen</h2>
          <p>Het blauwe wandelpad sluit aan op de Groene Corridor en maakt van NMHC een herkenbaar schakelpunt tussen sportpark, wijk, campus en natuur. De route nodigt uit tot wandelen, ontmoeten, herstellen en bewegen in een groene omgeving.</p>
        </div>
        <div class="two-col">
          <div class="benefits">${corridorBenefits.map((b) => `<div class="mini-card reveal">${icon("Droplets")}<span>${b}</span></div>`).join("")}</div>
          <div class="corridor-map reveal">${terrainMap("blue-focus")}</div>
        </div>
      </section>

      <section class="section" id="hub">
        <div class="section-head reveal">
          <p class="eyebrow">Geel | functionele trainingszone</p>
          <h2>HYROX-geinspireerde Hub</h2>
          <p>De HYROX-geinspireerde Hub is het intensieve trainingspunt binnen het Green Blue Challenge Park. De hub combineert hardlopen met functionele oefeningen zoals duwen, dragen, springen, lunges, wall balls en bodyweight-training.</p>
        </div>
        <div class="equipment-grid">
          ${equipment.map(([name, f, why, target, note]) => `
            <article class="equipment-card reveal">
              <h3>${name}</h3>
              <p><strong>Functie:</strong> ${f}</p>
              <p><strong>Waarom gekozen:</strong> ${why}</p>
              <p><strong>Doelgroep:</strong> ${target}</p>
              <p><strong>Aandachtspunt:</strong> ${note}</p>
            </article>`).join("")}
        </div>
      </section>

      <section class="section band">
        <div class="section-head reveal"><p class="eyebrow">Onderbouwing</p><h2>Waarom kiezen we voor deze toestellen?</h2></div>
        <div class="reason-grid">${reasons.map(([title, text], i) => `<article class="reason reveal"><span>${i + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
      </section>

      <section class="section plaza">
        <div class="section-head reveal">
          <p class="eyebrow">Ontmoeten en herstellen</p>
          <h2>Green Blue Plaza & herstelzone</h2>
          <p>Het Green Blue Challenge Park draait niet alleen om prestatie. De Green Blue Plaza en herstelzone zorgen voor ontmoeting, rust, stretching, sociale verbinding en toegankelijkheid voor een bredere doelgroep.</p>
        </div>
        <div class="feature-cloud">${plaza.map((d) => `<span>${d}</span>`).join("")}</div>
      </section>

      <section class="section garden-section">
        <div class="visual-copy reveal">
          <img src="images/gewenste-pad-naar-bos.png" alt="Gewenste groene wandelverbinding richting de bossen" />
          <div>
            <p class="eyebrow">Gezonde leefstijl</p>
            <h2>Community garden & gezonde voeding</h2>
            <p>Een community garden maakt het Blue Zone-verhaal zichtbaar. Gezonde voeding wordt onderdeel van de plek door moestuinbakken, kruiden, educatie, workshops en samenwerking met partners zoals Hortus Nijmegen.</p>
            <div class="check-list">${garden.map((g) => `<span>${icon("Leaf2")}${g}</span>`).join("")}</div>
          </div>
        </div>
      </section>

      <section class="section" id="groen-blauw">
        <div class="section-head reveal">
          <p class="eyebrow">Klimaat, biodiversiteit en landschap</p>
          <h2>Meer dan sport: een groen-blauwe leefomgeving</h2>
          <p>De groene en blauwe elementen zijn geen decoratie, maar een belangrijk onderdeel van het ontwerp. Ze dragen bij aan verkoeling, waterberging, biodiversiteit en verblijfskwaliteit.</p>
        </div>
        <div class="tile-grid">${blueGreen.map((b) => `<article class="tile reveal">${icon("Tree")}<h3>${b}</h3></article>`).join("")}</div>
      </section>

      <section class="section band" id="doelgroepen">
        <div class="section-head reveal"><p class="eyebrow">Voor wie</p><h2>Een Health Hub voor leden, niet-leden, buurt, campus en partners.</h2></div>
        <div class="audience-grid">
          ${audiences.map(([name, use, why, activity]) => `<article class="audience reveal"><h3>${name}</h3><p><strong>Gebruik:</strong> ${use}</p><p><strong>Relevant:</strong> ${why}</p><span>${activity}</span></article>`).join("")}
        </div>
      </section>

      <section class="section" id="fasering">
        <div class="section-head reveal"><p class="eyebrow">Van pilot naar vaste Health Hub</p><h2>Fasering</h2></div>
        <div class="phase-line">${phases.map(([phase, title, text]) => `<article class="phase reveal"><span>${phase}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
      </section>

      <section class="section value-section" id="waarde">
        <div class="section-head reveal">
          <p class="eyebrow">Maatschappelijke waarde</p>
          <h2>Waarde voor NMHC, wijk, campus en stad</h2>
        </div>
        <div class="value-layout">
          <div class="check-list">${value.map((v) => `<span>${icon("Handshake")}${v}</span>`).join("")}</div>
          <blockquote class="reveal">"De kracht van het plan zit in de combinatie: een sportieve 1 km route, een groene wandelverbinding en een functionele trainingshub als herkenbaar hart."</blockquote>
        </div>
      </section>

      <section class="section" id="partners">
        <div class="section-head reveal"><p class="eyebrow">Samenwerking</p><h2>Partners</h2></div>
        <div class="partner-grid">${partners.map((p) => `<div class="partner reveal"><span>${p.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span><strong>${p}</strong></div>`).join("")}</div>
      </section>

      <section class="section contact" id="contact">
        <div class="contact-card reveal">
          <p class="eyebrow">Volgende fase</p>
          <h2>Samen maken we van NMHC een groene beweegplek voor iedereen</h2>
          <p>Het Green Blue Challenge Park verbindt sport, gezondheid, natuur en ontmoeting. Wil je meedenken, partner worden of bijdragen aan de volgende fase?</p>
          <div class="actions">
            <a class="btn primary" href="mailto:info@bluezone-dalmarasweg.nl?subject=Partner worden Green Blue Challenge Park">Word partner</a>
            <a class="btn light" href="mailto:info@bluezone-dalmarasweg.nl">Neem contact op</a>
            <a class="btn ghost" href="#terreinplan">Bekijk terreinplan</a>
            <a class="btn ghost" href="downloads/projectvoorstel-placeholder.pdf">Download projectvoorstel</a>
          </div>
          <a class="mail" href="mailto:info@bluezone-dalmarasweg.nl">info@bluezone-dalmarasweg.nl</a>
        </div>
      </section>
    </main>
  `;
}

function bindRouteButtons() {
  document.querySelectorAll("[data-route]").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.getAttribute("data-route");
      if (!routes[key]) return;
      activeRoute = key;
      document.querySelectorAll(".map-shell").forEach((shell) => shell.setAttribute("data-active", activeRoute));
      document.getElementById("routePanel").innerHTML = routePanel();
    });
  });
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

document.getElementById("root").innerHTML = app();
bindRouteButtons();
observeReveals();
