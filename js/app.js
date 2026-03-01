// Operation Epic Fury Dashboard - Main Application (MOBILE-FIXED VERSION)

let dashboardData = null;

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

async function initializeApp() {
    // Load data from JSON file
    await loadData();
    
    if (dashboardData) {
        createParticles();
        initializeNavigation();
        initializeFindings();
        initializeTimeline();
        initializeScenarioChart();
        initializeRegionalMap();
        initializeNetworkAnalysis();
        initializeActors();
        updateStatusCards();
        startLiveUpdates();
    } else {
        console.error('Failed to load dashboard data');
        showError('Failed to load dashboard data. Please refresh the page.');
    }
}

function showError(message) {
    const main = document.querySelector('main');
    if (main) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = 'background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; padding: 20px; border-radius: 12px; margin: 20px; color: #ef4444; text-align: center;';
        errorDiv.textContent = message;
        main.prepend(errorDiv);
    }
}

async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        dashboardData = await response.json();
        console.log('Data loaded successfully:', dashboardData.lastUpdatedDisplay);
        
        // Update last updated display
        const lastUpdateEl = document.getElementById('last-update');
        if (lastUpdateEl && dashboardData.lastUpdatedDisplay) {
            lastUpdateEl.textContent = dashboardData.lastUpdatedDisplay;
        }
        
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to embedded data if fetch fails
        if (typeof window.fallbackData !== 'undefined') {
            dashboardData = window.fallbackData;
            console.log('Using fallback data');
            return true;
        }
        return false;
    }
}

function updateStatusCards() {
    if (!dashboardData || !dashboardData.statusIndicators) return;
    
    // Update cyber hours
    const cyberHoursEl = document.getElementById('cyber-hours');
    if (cyberHoursEl && dashboardData.cyberHours) {
        cyberHoursEl.textContent = dashboardData.cyberHours + '+';
    }
    
    // Update operation duration
    const durationEl = document.getElementById('operation-duration');
    if (durationEl && dashboardData.operationDuration) {
        durationEl.textContent = dashboardData.operationDuration;
    }
}

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll to section
            const target = document.getElementById(section);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < bottom) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-section') === id);
                });
            }
        });
    });
}

// ===== FINDINGS =====
function initializeFindings() {
    const tabs = document.querySelectorAll('.finding-tab');
    
    // Show first finding by default
    if (dashboardData && dashboardData.findings) {
        showFinding(1);
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const findingNum = parseInt(tab.getAttribute('data-finding'));
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show finding
            showFinding(findingNum);
        });
    });
}

function showFinding(num) {
    const content = document.getElementById('findings-content');
    if (!dashboardData || !dashboardData.findings || !content) return;
    
    const finding = dashboardData.findings[num];
    if (!finding) {
        console.error(`Finding ${num} not found`);
        return;
    }
    
    const evidenceHTML = finding.evidence.map(e => `
        <div class="evidence-item ${e.type}">
            <span class="evidence-icon">${e.type === 'confirm' ? '✓' : e.type === 'warn' ? '!' : '✗'}</span>
            <span>${e.text}</span>
        </div>
    `).join('');
    
    content.innerHTML = `
        <div class="finding-detail">
            <div class="finding-header">
                <h2 class="finding-title">${finding.title}</h2>
                <div class="finding-meta">
                    <div class="confidence-display">
                        <span class="confidence-label">Confidence:</span>
                        <span class="confidence-value">${finding.confidence}</span>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: ${finding.confidence * 100}%"></div>
                        </div>
                    </div>
                    <div class="status-badge ${finding.status}">
                        ${finding.status.toUpperCase()}
                    </div>
                </div>
            </div>
            
            <div class="finding-summary">
                <p>${finding.summary}</p>
            </div>
            
            <div class="finding-evidence">
                <h3>Evidence</h3>
                <div class="evidence-list">
                    ${evidenceHTML}
                </div>
            </div>
            
            <div class="finding-analysis">
                ${finding.analysis || '<p>Detailed analysis pending.</p>'}
            </div>
            
            <div class="finding-sources">
                <h3>Sources</h3>
                <div class="source-tags">
                    ${finding.sources.map(s => `<span class="source-tag">${s}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// ===== TIMELINE (FIXED - NOW SORTS CHRONOLOGICALLY) =====
function initializeTimeline() {
    if (!dashboardData || !dashboardData.timeline) {
        console.error('Timeline data not available');
        return;
    }
    
    renderTimeline('all');
    
    const filters = document.querySelectorAll('.timeline-filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            const filterType = filter.getAttribute('data-filter');
            renderTimeline(filterType);
        });
    });
}

// Parse timeline time string to Date object for sorting
function parseTimelineTime(timeStr) {
    // Handle formats like:
    // "Jan 23, 2026"
    // "Feb 28, ~00:00 Local"
    // "Feb 28, ~18:00 EST"
    
    try {
        // Remove tilde and timezone info for parsing
        let cleanTime = timeStr.replace('~', '').replace('Local', '').replace('EST', '').trim();
        
        // Add year if not present (assume 2026)
        if (!cleanTime.includes('2026')) {
            cleanTime = cleanTime + ', 2026';
        }
        
        // Parse the date
        const parsed = new Date(cleanTime);
        
        // If invalid, return a far future date to sort at end
        if (isNaN(parsed.getTime())) {
            console.warn('Could not parse time:', timeStr);
            return new Date('2026-12-31');
        }
        
        return parsed;
    } catch (e) {
        console.error('Error parsing time:', timeStr, e);
        return new Date('2026-12-31');
    }
}

function renderTimeline(filter) {
    const container = document.getElementById('timeline-events');
    if (!container || !dashboardData || !dashboardData.timeline) return;
    
    // Filter events
    let events = filter === 'all' 
        ? [...dashboardData.timeline] 
        : dashboardData.timeline.filter(e => e.type === filter);
    
    // Sort chronologically by time
    events.sort((a, b) => {
        const dateA = parseTimelineTime(a.time);
        const dateB = parseTimelineTime(b.time);
        return dateA - dateB; // Ascending order (oldest first)
    });
    
    console.log(`Rendering ${events.length} timeline events (${filter}), sorted chronologically`);
    
    container.innerHTML = events.map(event => `
        <div class="timeline-event" data-type="${event.type}">
            <div class="timeline-time">${event.time}</div>
            <div class="timeline-title">${event.title}</div>
            <div class="timeline-desc">${event.desc}</div>
        </div>
    `).join('');
}

// ===== SCENARIO CHART (MOBILE-RESPONSIVE) =====
function initializeScenarioChart() {
    const ctx = document.getElementById('scenarioChart');
    if (!ctx) {
        console.error('Scenario chart canvas not found');
        return;
    }
    
    if (!dashboardData || !dashboardData.scenarios) {
        console.error('Scenario data not available');
        return;
    }
    
    // Register the datalabels plugin
    if (typeof ChartDataLabels !== 'undefined') {
        Chart.register(ChartDataLabels);
    }
    
    const scenarios = dashboardData.scenarios;
    
    // Detect mobile screen
    const isMobile = window.innerWidth < 768;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: scenarios.map(s => s.name),
            datasets: [{
                label: 'Probability',
                data: scenarios.map(s => s.probability),
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(239, 68, 68, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    color: '#f0f4f8',
                    font: {
                        weight: 'bold',
                        family: 'JetBrains Mono',
                        size: isMobile ? 10 : 12
                    },
                    formatter: (value) => value + '%'
                },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const scenario = scenarios[context.dataIndex];
                            return [
                                `Probability: ${scenario.probability}%`,
                                `Confidence: ${scenario.confidence}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 40,
                    grid: {
                        color: 'rgba(45, 55, 72, 0.5)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: 'JetBrains Mono',
                            size: isMobile ? 10 : 12
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#f0f4f8',
                        font: {
                            size: isMobile ? 10 : 12
                        },
                        // Truncate long labels on mobile
                        callback: function(value, index) {
                            const label = this.getLabelForValue(value);
                            if (isMobile && label.length > 15) {
                                return label.substring(0, 12) + '...';
                            }
                            return label;
                        }
                    }
                }
            },
            // Improve mobile interaction
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
    
    // Redraw chart on resize for responsiveness
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth < 768;
        if (newIsMobile !== isMobile) {
            location.reload(); // Simple approach - reload on breakpoint change
        }
    });
    
    console.log('Scenario chart initialized (mobile-responsive)');
}

// ===== REGIONAL MAP =====
function initializeRegionalMap() {
    const container = document.getElementById('regional-map-viz');
    if (!container) {
        console.warn('Regional map container not found');
        return;
    }
    
    // Simple SVG representation
    container.innerHTML = `
        <svg viewBox="0 0 800 500" style="width: 100%; height: 400px; max-width: 100%;">
            <!-- Background -->
            <rect width="800" height="500" fill="#111827"/>
            
            <!-- Iran (target) -->
            <path d="M 400 150 Q 500 120 550 180 Q 600 250 580 320 Q 550 380 480 400 Q 400 420 340 380 Q 280 340 270 280 Q 260 220 300 170 Q 350 130 400 150" 
                  fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" stroke-width="2" class="country-target"/>
            <text x="420" y="270" fill="#ef4444" font-size="16" font-weight="bold">IRAN</text>
            <circle cx="420" cy="290" r="8" fill="#ef4444" class="pulse-target"/>
            
            <!-- Supporting countries -->
            <rect x="200" y="150" width="60" height="40" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" rx="4"/>
            <text x="230" y="175" fill="#22c55e" font-size="10" text-anchor="middle">Israel</text>
            
            <rect x="180" y="280" width="80" height="50" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" rx="4"/>
            <text x="220" y="310" fill="#22c55e" font-size="10" text-anchor="middle">Saudi</text>
            
            <rect x="280" y="350" width="60" height="40" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" rx="4"/>
            <text x="310" y="375" fill="#22c55e" font-size="10" text-anchor="middle">UAE</text>
            
            <!-- Opposing countries -->
            <rect x="50" y="200" width="100" height="60" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" rx="4"/>
            <text x="100" y="235" fill="#f59e0b" font-size="10" text-anchor="middle">Turkey</text>
            
            <!-- Neutral countries -->
            <rect x="150" y="380" width="60" height="40" fill="rgba(139, 92, 246, 0.3)" stroke="#8b5cf6" rx="4"/>
            <text x="180" y="405" fill="#8b5cf6" font-size="10" text-anchor="middle">Qatar</text>
            
            <rect x="100" y="380" width="60" height="40" fill="rgba(139, 92, 246, 0.3)" stroke="#8b5cf6" rx="4"/>
            <text x="130" y="405" fill="#8b5cf6" font-size="10" text-anchor="middle">Oman</text>
            
            <!-- Extra-regional -->
            <rect x="650" y="150" width="80" height="50" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" rx="4"/>
            <text x="690" y="180" fill="#22c55e" font-size="10" text-anchor="middle">USA</text>
            
            <rect x="650" y="250" width="80" height="50" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" rx="4"/>
            <text x="690" y="280" fill="#f59e0b" font-size="10" text-anchor="middle">Russia</text>
            
            <rect x="650" y="350" width="80" height="50" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" rx="4"/>
            <text x="690" y="380" fill="#f59e0b" font-size="10" text-anchor="middle">China</text>
            
            <!-- Hormuz -->
            <line x1="340" y1="400" x2="380" y2="420" stroke="#ef4444" stroke-width="3" stroke-dasharray="5,5"/>
            <text x="360" y="440" fill="#ef4444" font-size="10" text-anchor="middle">HORMUZ</text>
            <text x="360" y="455" fill="#ef4444" font-size="8" text-anchor="middle">CLOSED</text>
            
            <!-- Connection lines -->
            <line x1="260" y1="170" x2="350" y2="200" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
            <line x1="260" y1="300" x2="350" y2="280" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
            <line x1="650" y1="175" x2="580" y2="200" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        </svg>
    `;
    
    console.log('Regional map initialized');
}

// ===== NETWORK ANALYSIS (NEW) =====
function initializeNetworkAnalysis() {
    const container = document.getElementById('network-viz');
    const tabs = document.querySelectorAll('.network-tab');
    
    if (!container) {
        console.warn('Network visualization container not found');
        return;
    }
    
    // Show default (power structure)
    showNetwork('power');
    
    // Tab click handlers
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const networkType = tab.getAttribute('data-network');
            showNetwork(networkType);
        });
    });
    
    console.log('Network analysis initialized');
}

function showNetwork(type) {
    const container = document.getElementById('network-viz');
    if (!container) return;
    
    const visualizations = {
        power: `
            <div class="network-graph" style="padding: 40px; text-align: center;">
                <h3 style="font-size: 1.5rem; margin-bottom: 24px; color: #3b82f6;">Iranian Power Structure</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                    <div class="network-node" style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #ef4444; margin-bottom: 12px;">Supreme Leader</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: CLAIMED DEAD (0.65 confidence)</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Vacuum creates succession crisis</p>
                    </div>
                    <div class="network-node" style="background: rgba(245, 158, 11, 0.1); border: 2px solid #f59e0b; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #f59e0b; margin-bottom: 12px;">IRGC</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: INTACT but leaderless</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Controls proxy networks</p>
                    </div>
                    <div class="network-node" style="background: rgba(59, 130, 246, 0.1); border: 2px solid #3b82f6; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #3b82f6; margin-bottom: 12px;">Regular Military</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: DEGRADED by cyber</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">May declare neutrality</p>
                    </div>
                    <div class="network-node" style="background: rgba(139, 92, 246, 0.1); border: 2px solid #8b5cf6; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #8b5cf6; margin-bottom: 12px;">Religious Establishment</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: UNCERTAIN</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">May back different factions</p>
                    </div>
                </div>
            </div>
        `,
        proxies: `
            <div class="network-graph" style="padding: 40px; text-align: center;">
                <h3 style="font-size: 1.5rem; margin-bottom: 24px; color: #3b82f6;">Proxy Network Status</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
                    <div class="network-node" style="background: rgba(34, 197, 94, 0.1); border: 2px solid #22c55e; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #22c55e; margin-bottom: 12px;">Hezbollah</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: SILENT</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">100K+ rockets ready</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Cyber disruption likely</p>
                    </div>
                    <div class="network-node" style="background: rgba(245, 158, 11, 0.1); border: 2px solid #f59e0b; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #f59e0b; margin-bottom: 12px;">Houthis</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: LIMITED</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Red Sea attacks continue</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Reduced coordination</p>
                    </div>
                    <div class="network-node" style="background: rgba(34, 197, 94, 0.1); border: 2px solid #22c55e; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #22c55e; margin-bottom: 12px;">PMF (Iraq)</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: SILENT</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">US bases in range</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Awaiting orders</p>
                    </div>
                    <div class="network-node" style="background: rgba(59, 130, 246, 0.1); border: 2px solid #3b82f6; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #3b82f6; margin-bottom: 12px;">Syrian Militias</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Status: STANDBY</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Minimal capability</p>
                    </div>
                </div>
                <p style="margin-top: 30px; color: #f59e0b; font-weight: 600;">
                    ⚠️ Proxy response expected when cyber effect lifts (96% connectivity reduction)
                </p>
            </div>
        `,
        economic: `
            <div class="network-graph" style="padding: 40px; text-align: center;">
                <h3 style="font-size: 1.5rem; margin-bottom: 24px; color: #3b82f6;">Economic Flow Analysis</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                    <div class="network-node" style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #ef4444; margin-bottom: 12px;">Oil Exports</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Strait of Hormuz: CLOSED</p>
                        <p style="color: #ef4444; font-size: 1.1rem; font-weight: bold;">21M BBL/day disrupted</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">+6% oil price increase</p>
                    </div>
                    <div class="network-node" style="background: rgba(245, 158, 11, 0.1); border: 2px solid #f59e0b; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #f59e0b; margin-bottom: 12px;">Sanctions Evasion</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Shadow fleet disrupted</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Cyber tracking enhanced</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Revenue streams frozen</p>
                    </div>
                    <div class="network-node" style="background: rgba(139, 92, 246, 0.1); border: 2px solid #8b5cf6; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #8b5cf6; margin-bottom: 12px;">Domestic Economy</h4>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Banking system offline</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Rial in freefall</p>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Supply chains broken</p>
                    </div>
                </div>
                <div style="margin-top: 30px; padding: 20px; background: rgba(59, 130, 246, 0.1); border-radius: 12px;">
                    <h4 style="color: #3b82f6; margin-bottom: 12px;">Global Impact</h4>
                    <p style="color: #94a3b8; font-size: 0.9rem;">20% of world oil supply affected</p>
                    <p style="color: #94a3b8; font-size: 0.9rem;">Economic crisis emerging in importing nations</p>
                    <p style="color: #94a3b8; font-size: 0.9rem;">Strategic petroleum reserves being tapped</p>
                </div>
            </div>
        `
    };
    
    container.innerHTML = visualizations[type] || '<p>No visualization available</p>';
    console.log(`Showing network: ${type}`);
}

// ===== ACTORS (IMPROVED) =====
function initializeActors() {
    if (!dashboardData) {
        console.error('Dashboard data not available for actors');
        return;
    }
    
    const regionalContainer = document.getElementById('regional-actors');
    const extraContainer = document.getElementById('extraregional-actors');
    
    if (regionalContainer && dashboardData.regionalActors) {
        regionalContainer.innerHTML = dashboardData.regionalActors.map(actor => `
            <div class="actor-card" style="break-inside: avoid; margin-bottom: 16px;">
                <div class="actor-header">
                    <span class="actor-name" style="font-size: 1.1rem; font-weight: 600;">${actor.name}</span>
                    <span class="actor-position ${actor.position}" style="padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">${actor.position}</span>
                </div>
                <div class="actor-stance" style="margin-top: 12px; line-height: 1.6;">${actor.stance}</div>
                <div class="actor-interest" style="margin-top: 12px; font-size: 0.9rem;"><strong>Interest:</strong> ${actor.interest}</div>
            </div>
        `).join('');
        console.log(`Rendered ${dashboardData.regionalActors.length} regional actors`);
    }
    
    if (extraContainer && dashboardData.extraRegionalActors) {
        extraContainer.innerHTML = dashboardData.extraRegionalActors.map(actor => `
            <div class="actor-card" style="break-inside: avoid; margin-bottom: 16px;">
                <div class="actor-header">
                    <span class="actor-name" style="font-size: 1.1rem; font-weight: 600;">${actor.name}</span>
                    <span class="actor-position ${actor.position}" style="padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">${actor.position}</span>
                </div>
                <div class="actor-stance" style="margin-top: 12px; line-height: 1.6;">${actor.stance}</div>
                <div class="actor-interest" style="margin-top: 12px; font-size: 0.9rem;"><strong>Interest:</strong> ${actor.interest}</div>
            </div>
        `).join('');
        console.log(`Rendered ${dashboardData.extraRegionalActors.length} extra-regional actors`);
    }
}

// ===== LIVE UPDATES =====
function startLiveUpdates() {
    // Update cyber hours counter
    if (dashboardData && dashboardData.cyberHours) {
        let hours = dashboardData.cyberHours;
        setInterval(() => {
            hours += 0.01;
            const display = document.getElementById('cyber-hours');
            if (display) {
                display.textContent = hours.toFixed(1) + '+';
            }
        }, 36000); // Update every 36 seconds (0.01 hours)
    }
    
    // Update timestamp
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const updateEl = document.getElementById('last-update');
        if (updateEl) {
            updateEl.textContent = timeStr + ' EST';
        }
    }, 1000);
}

// ===== MODAL =====
function showDetail(type) {
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('modal-body');
    
    if (!modal || !body || !dashboardData) return;
    
    const content = {
        khamenei: {
            title: 'Khamenei Status Analysis',
            html: dashboardData.findings && dashboardData.findings[1] ? 
                dashboardData.findings[1].analysis : '<p>Analysis not available</p>'
        },
        cyber: {
            title: 'Cyber Attack Technical Details',
            html: dashboardData.findings && dashboardData.findings[2] ? 
                dashboardData.findings[2].analysis : '<p>Analysis not available</p>'
        },
        hormuz: {
            title: 'Strait of Hormuz Economic Impact',
            html: dashboardData.findings && dashboardData.findings[3] ? 
                dashboardData.findings[3].analysis : '<p>Analysis not available</p>'
        },
        congress: {
            title: 'Congressional War Powers Analysis',
            html: dashboardData.findings && dashboardData.findings[7] ? 
                dashboardData.findings[7].analysis : '<p>Analysis not available</p>'
        }
    };
    
    const item = content[type];
    if (!item) return;
    
    body.innerHTML = `
        <div style="padding: 40px;">
            <h2 style="font-size: 1.75rem; margin-bottom: 24px; color: #3b82f6;">${item.title}</h2>
            <div style="color: #94a3b8; line-height: 1.8;">${item.html}</div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on background click
document.addEventListener('click', (e) => {
    if (e.target.id === 'detail-modal') {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Log initialization complete
console.log('Dashboard app.js loaded (MOBILE-FIXED VERSION with network analysis)');
