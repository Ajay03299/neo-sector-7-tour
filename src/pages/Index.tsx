import { useEffect } from "react";
import zenithCore from "@/assets/zenith-core.jpg";
import gridironMarket from "@/assets/gridiron-market.jpg";
import rustDocks from "@/assets/rust-docks.jpg";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Status Bar */}
      <header className="fixed top-0 left-0 right-0 h-12 bg-card border-b border-primary z-50 flex items-center justify-between px-6 text-xs font-mono">
        <div className="flex gap-6">
          <span className="text-foreground">[ STATUS: CONNECTED ]</span>
          <span className="text-muted-foreground">// SECURE_CHANNEL_v4.2</span>
        </div>
        <div className="flex gap-6">
          <span className="text-warning animate-pulse">[ GRID_LOAD: 98% (ALERT) ]</span>
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

          <div className="mt-12 pt-6 border-t border-border">
            <a href="#secret" className="block text-[8px] text-accent opacity-30 hover:opacity-100 transition-opacity animate-pulse">
              [ access_root ]
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8 pb-16">
          {/* Welcome Node */}
          <section id="welcome" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 glitch-hover">
              [ //WELCOME_NODE: OFFICIAL VISITOR'S PORTAL ]
            </h2>
            <div className="terminal-box pl-8 text-foreground leading-relaxed">
              <p className="mb-4">
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
            <h2 className="text-3xl font-bold mb-6 glitch-hover">
              [ //DISTRICT_DATA: KNOW YOUR SECTOR ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Zenith Core */}
              <div className="terminal-box pl-8">
                <img 
                  src={zenithCore} 
                  alt="Zenith Core - Elite corporate district with towering skyscrapers"
                  className="w-full h-48 object-cover mb-4 border border-primary"
                />
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
                <img 
                  src={gridironMarket} 
                  alt="The Gridiron Market - Chaotic street market with noodle stalls and cyber mod shops"
                  className="w-full h-48 object-cover mb-4 border border-primary"
                />
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
                <img 
                  src={rustDocks} 
                  alt="The Rust Docks - Industrial port with shipping containers and toxic smog"
                  className="w-full h-48 object-cover mb-4 border border-primary"
                />
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

          {/* Secret Panel */}
          <section id="secret" className="mb-16 scroll-mt-20">
            <div className="secret-panel p-8">
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
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-64 right-0 h-10 bg-secondary border-t border-border flex items-center justify-center text-xs font-mono text-muted-foreground">
        &gt; Neo-Sector 7: A Wholly-Owned Subsidiary of Cyb-Tech Solutions. All rights reserved. [v.1.1.3]
      </footer>
    </div>
  );
};

export default Index;
