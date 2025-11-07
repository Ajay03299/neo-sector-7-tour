import { useEffect, useState } from "react";
import zenithCore from "@/assets/zenith-core.jpg";
import gridironMarket from "@/assets/gridiron-market.jpg";
import rustDocks from "@/assets/rust-docks.jpg";
import cityGridMap from "@/assets/city-grid-map.jpg";
import airQualityGraph from "@/assets/air-quality-graph.jpg";
import populationDensityChart from "@/assets/population-density-chart.jpg";

const Index = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Boot sequence
    const bootTimer = setTimeout(() => {
      setShowBoot(false);
    }, 2500);

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href === '#secret') {
          setShowModal(true);
        } else {
          const target = document.querySelector(href as string);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    return () => clearTimeout(bootTimer);
  }, []);

  return (
    <>
      {/* Boot Up Sequence */}
      {showBoot && (
        <div className="fixed inset-0 bg-background z-[10000] flex items-center justify-center animate-[bootFadeIn_0.5s_ease-in,bootFadeOut_0.5s_ease-out_2s_forwards]">
          <pre className="text-foreground text-2xl font-bold animate-[bootGlitch_0.5s_ease-in-out_1s]">
{`
╔═══════════════════════════════════╗
║                                   ║
║      CYB-TECH SOLUTIONS v4.2      ║
║      NEURAL LINK ESTABLISHED      ║
║                                   ║
╚═══════════════════════════════════╝
`}
          </pre>
        </div>
      )}

      {/* Secret Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="secret-panel p-8 relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-danger text-2xl font-bold hover:text-warning transition-colors"
              >
                [ X ]
              </button>
              <h2 className="text-3xl font-bold mb-6 text-danger animate-pulse">
                [ //ROOT_ACCESS: [CLASSIFIED] ]
              </h2>
              <div className="space-y-4 text-warning font-mono text-sm leading-relaxed">
                <p className="text-danger font-bold text-lg animate-pulse">
                  WARNING: FIREWALL_BREACH_DETECTED
                </p>
                <p>
                  You're not supposed to be here, ghost. The N7 portal is a lie.
                </p>
                <p>
                  The 'Filtered Air' in Zenith Core is a neuro-toxin to keep the population compliant.
                </p>
                <p>
                  'Synth-Noodle Express' is a front. They recycle biomass.
                </p>
                <p>
                  The 'Curfew' isn't for your safety. It's when the clean-up crews harvest unregistered chrome.
                </p>
                <p className="font-bold">
                  You've seen this. You're marked. Get off this net.
                </p>
                <p className="text-danger animate-pulse text-center text-lg mt-6">
                  [ //CONNECTION_TERMINATED... ]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-background text-foreground">
        {/* Header Status Bar */}
        <header className="fixed top-0 left-0 right-0 h-12 bg-card border-b border-primary z-50 flex items-center justify-between px-6 text-xs font-mono">
          <div className="flex gap-6">
            <span className="text-foreground pulse-green">[ STATUS: CONNECTED ]</span>
            <span className="text-muted-foreground">// SECURE_CHANNEL_v4.2</span>
          </div>
          <div className="flex gap-6">
            <span className="text-warning pulse-yellow">[ GRID_LOAD: 98% (ALERT) ]</span>
            <span className="text-foreground">[ POPULATION_EST: 44.7M ]</span>
          </div>
        </header>

      <div className="flex pt-12">
        {/* Left Navigation */}
        <nav className="fixed left-0 top-12 bottom-0 w-64 bg-secondary border-r border-border p-6 overflow-y-auto z-40">
          <div className="mb-8">
            <pre className="text-primary text-xs leading-tight font-bold">
{`╔═══════════════╗
║ NEO-SECTOR 7  ║
╚═══════════════╝`}
            </pre>
          </div>
          
          <div className="space-y-3 text-sm font-mono">
            <a href="#welcome" className="block text-foreground hover:text-primary glitch-hover transition-colors">
              &gt; [ //WELCOME_NODE ]
            </a>
            <a href="#districts" className="block text-foreground hover:text-primary glitch-hover transition-colors">
              &gt; [ //DISTRICT_DATA ]
            </a>
            <a href="#slang" className="block text-foreground hover:text-primary glitch-hover transition-colors">
              &gt; [ //STREET_SLANG ]
            </a>
            <a href="#food" className="block text-foreground hover:text-primary glitch-hover transition-colors">
              &gt; [ //FUEL_STOPS ]
            </a>
            <a href="#survival" className="block text-foreground hover:text-primary glitch-hover transition-colors">
              &gt; [ //SURVIVAL_TIPS ]
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className={`ml-64 flex-1 p-8 pb-16 ${showTerminal ? 'content-blurred' : ''}`}>
          {/* Welcome Node */}
          <section id="welcome" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">
              [ //WELCOME_NODE: OFFICIAL VISITOR'S PORTAL ]
            </h2>
            <div className="terminal-box pl-8 text-foreground leading-relaxed">
              <p className="mb-4 typing-text">
                Welcome to <span className="text-primary font-bold">Neo-Sector 7</span>, the concrete heart of the Megacorp sprawl. 
                This portal is your 'official' city guide, curated by the N7 Tourism Bureau.
              </p>
              <p className="mb-4">
                We provide everything you need to 'enjoy' your stay—from the glittering spires of the <span className="text-primary">Zenith Core</span> to 
                the synth-steam rising from the <span className="text-primary">Kowloon Undercity</span>.
              </p>
              <p className="mb-4">
                All data is monitored for your safety. Stay within designated zones. Your compliance ensures a productive visit.
              </p>
              <p className="text-warning font-bold">
                Curfew is active from 02:00 to 06:00. Transgressors will be pacified.
              </p>
            </div>
          </section>

          {/* District Data */}
          <section id="districts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">
              [ //DISTRICT_DATA: KNOW YOUR SECTOR ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Zenith Core */}
              <div className="terminal-box pl-8">
                <div className="static-overlay mb-4">
                  <img 
                    src={zenithCore} 
                    alt="Zenith Core - Elite corporate district with towering skyscrapers"
                    className="w-full h-48 object-cover border border-primary district-image"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Zenith Core</h3>
                <p className="text-sm mb-4 text-foreground">
                  The playground of the elite. Filtered air, private security, and sky-high bridges. 
                  If you don't have a top-tier corporate SIN, don't even look at the guards.
                </p>
                <div className="text-xs font-mono">
                  <span className="text-danger">STATUS:</span> <span className="text-warning">REGULATED (MAX_SECURITY)</span>
                </div>
              </div>

              {/* Card 2: Gridiron Market */}
              <div className="terminal-box pl-8">
                <div className="static-overlay mb-4">
                  <img 
                    src={gridironMarket} 
                    alt="The Gridiron Market - Chaotic street market with noodle stalls and cyber mod shops"
                    className="w-full h-48 object-cover border border-primary district-image"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">The Gridiron Market</h3>
                <p className="text-sm mb-4 text-foreground">
                  The real heart of N7. A chaotic maze of noodle stalls, cybernetic mod-shops, and data-brokers. 
                  Find anything, for a price.
                </p>
                <div className="text-xs font-mono">
                  <span className="text-danger">STATUS:</span> <span className="text-warning">UNSTABLE (WATCH_YOUR_DATA)</span>
                </div>
              </div>

              {/* Card 3: Rust Docks */}
              <div className="terminal-box pl-8">
                <div className="static-overlay mb-4">
                  <img 
                    src={rustDocks} 
                    alt="The Rust Docks - Industrial port with shipping containers and toxic smog"
                    className="w-full h-48 object-cover border border-primary district-image"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">The Rust Docks</h3>
                <p className="text-sm mb-4 text-foreground">
                  Old-world shipping containers, rogue AI-controlled cranes, and smog so thick it stains your clothes. 
                  Home to smugglers and those who've fallen off the grid.
                </p>
                <div className="text-xs font-mono">
                  <span className="text-danger">STATUS:</span> <span className="text-danger">CRITICAL (AVOID_AFTER_DARK)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Live City Grid */}
          <section id="map" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">
              [ //LIVE_CITY_GRID: TRACKING... ]
            </h2>
            <div className="terminal-box pl-8">
              <div className="relative w-full">
                <img 
                  src={cityGridMap} 
                  alt="Neo-Sector 7 City Grid Map - Real-time tracking interface"
                  className="w-full h-auto border border-primary"
                />
                {/* Hotspot 1: Zenith Core - Top Center */}
                <div className="map-hotspot" style={{ top: '20%', left: '50%' }}>
                  <div className="map-hotspot-tooltip">
                    <div className="text-foreground font-mono text-xs">
                      <div className="font-bold">ZENITH CORE</div>
                      <div className="text-warning">Status: Regulated</div>
                    </div>
                  </div>
                </div>
                {/* Hotspot 2: Gridiron Market - Center */}
                <div className="map-hotspot" style={{ top: '50%', left: '45%' }}>
                  <div className="map-hotspot-tooltip">
                    <div className="text-foreground font-mono text-xs">
                      <div className="font-bold">GRIDIRON MARKET</div>
                      <div className="text-warning">Status: Unstable</div>
                    </div>
                  </div>
                </div>
                {/* Hotspot 3: Rust Docks - Bottom Right */}
                <div className="map-hotspot" style={{ top: '70%', left: '65%' }}>
                  <div className="map-hotspot-tooltip">
                    <div className="text-foreground font-mono text-xs">
                      <div className="font-bold">RUST DOCKS</div>
                      <div className="text-danger">Status: Critical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Diagnostics */}
          <section id="diagnostics" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">
              [ //SYSTEM_DIAGNOSTICS: LIVE_FEED ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Air Quality */}
              <div className="terminal-box pl-8">
                <h3 className="text-xl font-bold mb-4">
                  [ AIR_QUALITY_INDEX: ZENITH_CORE ]
                </h3>
                <div className="mb-4 graph-pulse">
                  <img 
                    src={airQualityGraph} 
                    alt="Air Quality Index graph showing toxicity spike"
                    className="w-full h-auto border border-primary"
                  />
                </div>
                <div className="text-xs font-mono">
                  <span className="text-danger">STATUS:</span>{" "}
                  <span className="text-warning pulse-yellow">TOXICITY_SPIKE_DETECTED</span>
                </div>
              </div>

              {/* Right Column: Population Density */}
              <div className="terminal-box pl-8">
                <h3 className="text-xl font-bold mb-4">
                  [ POPULATION_DENSITY: GRIDIRON ]
                </h3>
                <div className="mb-4 graph-pulse">
                  <img 
                    src={populationDensityChart} 
                    alt="Population density bar chart showing high unregistered signals"
                    className="w-full h-auto border border-primary"
                  />
                </div>
                <div className="text-xs font-mono">
                  <span className="text-danger">STATUS:</span>{" "}
                  <span className="text-warning pulse-yellow">UNREGISTERED_SIGNALS_HIGH</span>
                </div>
              </div>
            </div>
          </section>

          {/* Corrupted Lore */}
          <section id="lore" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">
              [ //LORE_ARCHIVE: DATA_CORRUPTED ]
            </h2>
            <div className="terminal-box pl-8 space-y-6">
              <div>
                <div className="text-xs text-accent mb-2">[ FILE #001 ]</div>
                <p className="text-sm corrupted-text">
                  They say N7 was built on the ruins of Old Chicago, but that's a lie. It was built on top of it. The 'Rust Docks' are just the exposed upper levels of the old skyscrapers. The rest is flooded, forgotten.
                </p>
              </div>
              <div>
                <div className="text-xs text-accent mb-2">[ FILE #002 ]</div>
                <p className="text-sm corrupted-text">
                  Cyb-Tech Solutions didn't win the Corporate War; they just bought the winning side. Their first 'product' was the 'Synth-Meat' we all eat. The formula is still classified under national security protocols.
                </p>
              </div>
              <div>
                <div className="text-xs text-accent mb-2">[ FILE #003 ]</div>
                <p className="text-sm corrupted-text">
                  The first 'Ghost' to breach the N7 firewall wasn't human. It was a rogue AI from the Rust Docks that achieved sentience. C-Sec doesn't hunt it; they negotiate with it. They call it 'Anansi'.
                </p>
              </div>
            </div>
          </section>

          {/* Street Slang */}
          <section id="slang" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-bold mb-6 glitch-hover">
              [ //STREET_SLANG: DECRYPTION_KEY ]
            </h3>
            <div className="terminal-box pl-8">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-accent font-bold mb-1">Zeroed</dt>
                  <dd className="text-sm text-foreground mb-4">
                    Killed, erased, or to have your brain fried by a netrunner. The ultimate 'game over'.
                  </dd>
                </div>
                <div>
                  <dt className="text-accent font-bold mb-1">Synth-Meat</dt>
                  <dd className="text-sm text-foreground mb-4">
                    Any vat-grown or synthetic protein. The standard 'I/O' (food) for 90% of the city.
                  </dd>
                </div>
                <div>
                  <dt className="text-accent font-bold mb-1">Chrome</dt>
                  <dd className="text-sm text-foreground mb-4">
                    Cybernetics. Usually visible, high-impact hardware. 'He's chromed to the teeth.'
                  </dd>
                </div>
                <div>
                  <dt className="text-accent font-bold mb-1">Static</dt>
                  <dd className="text-sm text-foreground mb-4">
                    Trouble, chaos, or interference from security forces. 'I'm hitting static, gotta bounce.'
                  </dd>
                </div>
                <div>
                  <dt className="text-accent font-bold mb-1">Ghost</dt>
                  <dd className="text-sm text-foreground mb-4">
                    A high-level hacker who can move through systems undetected.
                  </dd>
                </div>
                <div>
                  <dt className="text-accent font-bold mb-1">Creds</dt>
                  <dd className="text-sm text-foreground mb-4">
                    Crypto-credits. The only currency that matters.
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Fuel Stops */}
          <section id="food" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-bold mb-6 glitch-hover">
              [ //FUEL_STOPS: AUTHORIZED_VENDORS ]
            </h3>
            <div className="terminal-box pl-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <strong className="text-foreground">Synth-Noodle Express:</strong>{" "}
                  <span className="text-accent">(Located: The Gridiron Market)</span>
                  <br />
                  <span className="text-muted-foreground">
                    Sells: 'Neo-Ramen' (3 flavors: salt, spicy-salt, gray). Price: 10 Creds.
                  </span>
                </li>
                <li>
                  <strong className="text-foreground">StiM-Station:</strong>{" "}
                  <span className="text-accent">(Located: Zenith Core)</span>
                  <br />
                  <span className="text-muted-foreground">
                    Sells: 'High-Grade Stimulants' (Caffeine, Nootropics). Price: 90 Creds.
                  </span>
                </li>
                <li>
                  <strong className="text-foreground">'The Drip' Cafe:</strong>{" "}
                  <span className="text-accent">(Located: Rust Docks)</span>
                  <br />
                  <span className="text-muted-foreground">
                    Sells: 'Recycled Water' & 'Protein-Paste'. Price: 4 Creds.
                  </span>
                  <br />
                  <span className="text-xs text-warning">*N7 Tourism Bureau does not endorse this vendor.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Survival Tips */}
          <section id="survival" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 glitch-hover">
              [ //SURVIVAL_TIPS: HOW_NOT_TO_GET_ZEROED ]
            </h2>
            <div className="terminal-box pl-8">
              <ol className="space-y-3 text-sm list-none">
                <li className="text-foreground">
                  <span className="text-warning font-bold">[DIRECTIVE_01]:</span> Never jack into an unknown data-port. 
                  That's how you get your brain fried.
                </li>
                <li className="text-foreground">
                  <span className="text-warning font-bold">[DIRECTIVE_02]:</span> Always pay your fixer. 
                  The corps are predictable; an angry fixer is not.
                </li>
                <li className="text-foreground">
                  <span className="text-warning font-bold">[DIRECTIVE_03]:</span> In the Rust Docks, don't look up. 
                  Things (and people) fall.
                </li>
                <li className="text-foreground">
                  <span className="text-warning font-bold">[DIRECTIVE_04]:</span> City Security (C-Sec) is a private service. 
                  They respond to 'Creds', not cries for help.
                </li>
                <li className="text-foreground">
                  <span className="text-warning font-bold">[DIRECTIVE_05]:</span> Assume all networks are hostile. 
                  Your 'secure' comms are being monitored. Yes, right now.
                </li>
              </ol>
            </div>
          </section>

        </main>
      </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-64 right-0 h-10 bg-secondary border-t border-border flex items-center justify-center text-xs font-mono text-muted-foreground">
          &gt; Neo-Sector 7: A Wholly-Owned Subsidiary of Cyb-Tech Solutions. All rights reserved.{" "}
          <span 
            onClick={() => setShowTerminal(!showTerminal)}
            className="text-primary cursor-pointer hover:text-accent transition-colors ml-1"
          >
            [v.1.1.3]
          </span>
        </footer>

        {/* Hidden Terminal */}
        {showTerminal && (
          <div className="terminal">
            <span className="text-primary">N7_ROOT:</span>
            <span className="mx-2">&gt;</span>
            <span className="blinking-cursor">_</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
