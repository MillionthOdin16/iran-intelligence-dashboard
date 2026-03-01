// Data for the dashboard
const dashboardData = {
    findings: {
        1: {
            title: "Khamenei Death Claim Escalates to Presidential Confirmation",
            confidence: 0.65,
            status: "critical",
            summary: "President Trump confirmed Khamenei's death. Iran denies. No video evidence has emerged for 15+ hours.",
            evidence: [
                { type: "confirm", text: "President Trump: 'Khamenei is dead' (18:00 EST)" },
                { type: "confirm", text: "Netanyahu: 'Signs point to Khamenei being dead'" },
                { type: "confirm", text: "Israeli officials confirmed to AP" },
                { type: "warn", text: "No video for 15+ hours" },
                { type: "deny", text: "Iran denies claim" }
            ],
            analysis: `
                <h3>What Changed</h3>
                <p>At 14:00 EST, Israeli sources were using cautious language ("presumed dead," "signs point to"). By 18:30 EST, the President of the United States was stating it definitively.</p>
                
                <h3>Analytical Significance</h3>
                <p>If confirmed, this represents the most significant decapitation strike against a head of state since Gaddafi in 2011. Unlike Gaddafi, Khamenei is both head of state and supreme religious authority.</p>
                
                <h3>Counter-Argument</h3>
                <p>Iranian denial could indicate:</p>
                <ul>
                    <li>Khamenei survived but is injured</li>
                    <li>Khamenei is dead but regime is managing succession</li>
                    <li>Khamenei is alive and waiting for strategic moment</li>
                    <li>Information warfare to embarrass US/Israel</li>
                </ul>
                
                <h3>What to Watch</h3>
                <ul>
                    <li>Video appearance by Khamenei (would devastate US/Israel credibility)</li>
                    <li>Announcement from Assembly of Experts</li>
                    <li>Succession statements from Mojtaba or competitors</li>
                    <li>IRGC leadership changes</li>
                </ul>
            `,
            sources: ["NBC", "CNN", "Washington Post", "New York Times", "Fox News", "NPR", "Al Jazeera"]
        },
        2: {
            title: "Largest Cyberattack in History Paralyzed Iranian C2",
            confidence: 0.90,
            status: "active",
            summary: "Nationwide cyberattack has reduced Iranian internet connectivity to 4%. Largest in history. Duration: 15+ hours and ongoing.",
            evidence: [
                { type: "confirm", text: "Jerusalem Post: 'Largest cyberattack in history'" },
                { type: "confirm", text: "NetBlocks: 4% connectivity" },
                { type: "confirm", text: "RFE/RL: 'Digital darkness'" },
                { type: "confirm", text: "96% reduction nationwide" }
            ],
            analysis: `
                <h3>What This Means</h3>
                <p>This is not a conventional military operation. The cyber component achieved strategic paralysis:</p>
                <ul>
                    <li><strong>Proxy Coordination Disabled:</strong> Hezbollah, Houthis, PMF cannot coordinate</li>
                    <li><strong>Command and Control Severed:</strong> IRGC units cannot communicate</li>
                    <li><strong>Media Blackout:</strong> Regime cannot broadcast</li>
                    <li><strong>Economic Disruption:</strong> Banking, commerce affected</li>
                </ul>
                
                <h3>Historical Context</h3>
                <p>Previous significant operations:</p>
                <ul>
                    <li>Stuxnet (2010): Targeted centrifuges, limited scope</li>
                    <li>Russian attacks on Ukraine (2022): Grid disruption, recovered in days</li>
                    <li><strong>This operation:</strong> Nationwide, multi-sector, sustained</li>
                </ul>
                
                <h3>When Internet Returns</h3>
                <p>Expect immediate coordinated proxy response:</p>
                <ul>
                    <li>Hezbollah launches major rocket campaign</li>
                    <li>Houthis attack all shipping</li>
                    <li>PMF attempts to overrun US bases</li>
                </ul>
            `,
            sources: ["Jerusalem Post", "NetBlocks", "Radio Free Europe", "Technical monitoring"]
        },
        3: {
            title: "Hormuz Closure Confirmed, Global Oil Crisis Emerging",
            confidence: 0.95,
            status: "active",
            summary: "Strait of Hormuz closed. 21M barrels/day at risk. Oil prices +6%. Global economic crisis emerging.",
            evidence: [
                { type: "confirm", text: "IRGC: Passage 'not allowed'" },
                { type: "confirm", text: "EU naval mission confirmation" },
                { type: "confirm", text: "Major oil traders suspended shipments" },
                { type: "confirm", text: "Crude oil futures +6%" }
            ],
            analysis: `
                <h3>The Strategic Equation</h3>
                <ul>
                    <li>Strait of Hormuz: 20% of world oil consumption</li>
                    <li>21 million barrels per day at stake</li>
                    <li>Alternative routes: Minimal</li>
                    <li>Global strategic reserves: ~90 days</li>
                </ul>
                
                <h3>Economic Impact Timeline</h3>
                <ul>
                    <li><strong>Immediate (0-7 days):</strong> Price spikes, market panic</li>
                    <li><strong>Short-term (1-4 weeks):</strong> Supply disruptions, rationing</li>
                    <li><strong>Medium-term (1-3 months):</strong> Global recession risk</li>
                    <li><strong>Long-term (3+ months):</strong> Structural shifts</li>
                </ul>
                
                <h3>Why Iran Closed It</h3>
                <ul>
                    <li>Leverage: Forces global pressure on US/Israel</li>
                    <li>Economic warfare: Hurts Western economies</li>
                    <li>Asymmetric response: Can't win militarily, can impose economic pain</li>
                </ul>
            `,
            sources: ["Reuters", "EU Naval Mission", "Bloomberg", "Market reports"]
        },
        4: {
            title: "Kurdish Opposition Did NOT Endorse Operation",
            confidence: 0.90,
            status: "stable",
            summary: "Major ethnic minorities have not endorsed the operation. No evidence of coordinated uprisings. This is regime replacement, not liberation.",
            evidence: [
                { type: "warn", text: "No statement from Kurdish parties (KDP, PUK, Gorran)" },
                { type: "warn", text: "Kurdish sources: 'Not asking for liberation'" },
                { type: "warn", text: "No uprisings in Kurdish regions" },
                { type: "confirm", text: "Historical pattern: US abandonment (1991, 2017)" }
            ],
            analysis: `
                <h3>The Difference</h3>
                <table style="width:100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #2d3748;">
                        <th style="padding: 8px; text-align: left;">Type</th>
                        <th style="padding: 8px; text-align: left;">Objective</th>
                        <th style="padding: 8px; text-align: left;">Domestic Role</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #2d3748;">
                        <td style="padding: 8px;"><strong>Liberation</strong></td>
                        <td style="padding: 8px;">Free people from tyranny</td>
                        <td style="padding: 8px;">Central</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Regime Replacement</strong></td>
                        <td style="padding: 8px;">Install friendly government</td>
                        <td style="padding: 8px;">Marginal</td>
                    </tr>
                </table>
                
                <h3>Kurdish Calculation</h3>
                <p>Kurds have been betrayed before:</p>
                <ul>
                    <li><strong>1991:</strong> US encouraged uprising, then allowed helicopter attacks</li>
                    <li><strong>2017:</strong> Kurds declared independence, US did not support</li>
                </ul>
                <p>Result: Kurds don't trust US promises. They're sitting this out.</p>
            `,
            sources: ["Kurdish parties", "Regional sources", "Historical record"]
        },
        5: {
            title: "Ethnic Fragmentation Risk Elevated",
            confidence: 0.85,
            status: "warning",
            summary: "Iran is not homogeneous. If central government collapses, ethnic groups may declare autonomy. Nuclear facilities could become contested.",
            evidence: [
                { type: "warn", text: "Persians: 60% | Azeris: 16-25% | Kurds: 10%" },
                { type: "warn", text: "Historical precedent: Yugoslavia 1991-2001" },
                { type: "warn", text: "Regional actors have interests in fragmentation" },
                { type: "critical", text: "Nuclear weapons could become contested" }
            ],
            analysis: `
                <h3>Risk Matrix</h3>
                <table style="width:100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #2d3748;">
                        <th style="padding: 8px; text-align: left;">Group</th>
                        <th style="padding: 8px; text-align: left;">% of Iran</th>
                        <th style="padding: 8px; text-align: left;">Separatist Risk</th>
                        <th style="padding: 8px; text-align: left;">Regional Patron</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #2d3748;">
                        <td style="padding: 8px;">Azeris</td>
                        <td style="padding: 8px;">16-25%</td>
                        <td style="padding: 8px;">Medium</td>
                        <td style="padding: 8px;">Azerbaijan, Turkey</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #2d3748;">
                        <td style="padding: 8px;">Kurds</td>
                        <td style="padding: 8px;">10%</td>
                        <td style="padding: 8px;">High</td>
                        <td style="padding: 8px;">None (abandoned)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #2d3748;">
                        <td style="padding: 8px;">Arabs</td>
                        <td style="padding: 8px;">2-3%</td>
                        <td style="padding: 8px;">Medium</td>
                        <td style="padding: 8px;">Gulf states</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Baluchis</td>
                        <td style="padding: 8px;">2%</td>
                        <td style="padding: 8px;">High</td>
                        <td style="padding: 8px;">Pakistan</td>
                    </tr>
                </table>
                
                <h3>The Worst Case</h3>
                <p>If fragmentation occurs:</p>
                <ul>
                    <li>Who controls Fordow? (Central Iran)</li>
                    <li>Who controls Natanz? (Central Iran)</li>
                    <li>Who controls Bushehr? (Persian Gulf)</li>
                    <li>Who controls the uranium stockpile?</li>
                </ul>
            `,
            sources: ["Ethnic demographic data", "Regional analysis", "Historical precedent"]
        },
        6: {
            title: "Leadership Decapitation at Multiple Levels",
            confidence: 0.75,
            status: "critical",
            summary: "Systematic targeting of Iranian leadership. Khamenei, IRGC commanders, nuclear scientists, military leadership all struck.",
            evidence: [
                { type: "confirm", text: "Khamenei compound struck" },
                { type: "confirm", text: "IRGC commanders killed" },
                { type: "confirm", text: "Nuclear scientists targeted" },
                { type: "confirm", text: "Command centers struck" }
            ],
            analysis: `
                <h3>The Decapitation Strategy</h3>
                <p>This is not collateral damage. Leadership targeting was intentional:</p>
                <ul>
                    <li>Disrupts command and control</li>
                    <li>Creates succession crisis</li>
                    <li>Prevents coordinated response</li>
                    <li>Sows confusion and paralysis</li>
                </ul>
                
                <h3>Succession Mechanism</h3>
                <ol>
                    <li>Assembly of Experts (86 clerics) chooses new Supreme Leader</li>
                    <li>Must be mujtahid (senior cleric)</li>
                    <li>Must have "political perspicacity"</li>
                    <li>Candidates: Mojtaba Khamenei, various ayatollahs</li>
                </ol>
                
                <h3>The Problem</h3>
                <p>If Assembly of Experts is disrupted (cyber, strikes), who chooses?</p>
            `,
            sources: ["Israeli sources", "Strike assessments", "Iranian government structure"]
        },
        7: {
            title: "Congressional War Powers Challenge Imminent",
            confidence: 0.90,
            status: "warning",
            summary: "War powers resolution vote expected within days. Bipartisan concern. Constitutional crisis possible.",
            evidence: [
                { type: "confirm", text: "CNN: 'Congress to vote on war powers'" },
                { type: "confirm", text: "PBS: 'Members demand swift vote'" },
                { type: "confirm", text: "Guardian: 'Acts of war unauthorized'" },
                { type: "warn", text: "Bipartisan concern growing" }
            ],
            analysis: `
                <h3>The Constitutional Crisis</h3>
                <ul>
                    <li>War Powers Resolution (1973): President must notify Congress within 48 hours</li>
                    <li>No declaration of war exists</li>
                    <li>No specific AUMF for Iran</li>
                </ul>
                
                <h3>Likely Timeline</h3>
                <ul>
                    <li><strong>Feb 28-Mar 1:</strong> Resolution introduced (95%)</li>
                    <li><strong>Mar 2-4:</strong> Committee debate (90%)</li>
                    <li><strong>Mar 5-7:</strong> Floor vote (85%)</li>
                    <li><strong>Mar 7-10:</strong> Presidential veto (80%)</li>
                    <li><strong>Mar 10-14:</strong> Override attempt (40%)</li>
                </ul>
                
                <h3>Strategic Impact</h3>
                <p>Domestic political constraint on operation duration. Could force early termination.</p>
            `,
            sources: ["CNN", "PBS", "Washington Post", "Politico", "Guardian"]
        },
        8: {
            title: "Turkey's Complex Position",
            confidence: 0.80,
            status: "warning",
            summary: "Turkey condemned strikes publicly but privately pragmatic. Red line: Kurdish autonomy. Would intervene if Kurds declare independence.",
            evidence: [
                { type: "confirm", text: "Turkey condemned strikes" },
                { type: "confirm", text: "NATO member with US bases" },
                { type: "warn", text: "Red line: Kurdish autonomy" },
                { type: "warn", text: "Historical precedent: Syria interventions (2016, 2018, 2019)" }
            ],
            analysis: `
                <h3>Turkey's Strategic Dilemma</h3>
                <p><strong>Factors pushing Turkey to oppose:</strong></p>
                <ul>
                    <li>Ideological: Anti-Israel, anti-US imperialism</li>
                    <li>Historical: Ottoman legacy, regional leadership</li>
                    <li>Domestic: Public opinion anti-Israel</li>
                </ul>
                
                <p><strong>Factors pushing Turkey to accept:</strong></p>
                <ul>
                    <li>NATO: Alliance obligations</li>
                    <li>Economic: Need Western investment</li>
                    <li>Regional: Iran is rival for influence</li>
                    <li>Kurdish: Concern about autonomy (red line)</li>
                </ul>
                
                <h3>The Red Line</h3>
                <p>Turkey will not accept Kurdish autonomy in Iran. If Kurds declare independence, Turkey will intervene militarily.</p>
            `,
            sources: ["Turkish government statements", "Regional analysis", "Historical record"]
        }
    },
    
    timeline: [
        { time: "Jan 23, 2026", title: "Carrier Deployment", desc: "USS Carl Vinson deploys to Persian Gulf", type: "military" },
        { time: "Feb 27, ~20:00 EST", title: "IAEA Finding", desc: "IAEA announces Iran has enough material for 3-4 nuclear weapons", type: "political" },
        { time: "Feb 28, ~00:00 Local", title: "Cyberattack Begins", desc: "Largest cyberattack in history launched against Iranian infrastructure", type: "cyber" },
        { time: "Feb 28, ~00:30 Local", title: "Kinetic Strikes Begin", desc: "US and Israeli aircraft strike nuclear facilities, military bases, leadership compounds", type: "kinetic" },
        { time: "Feb 28, ~02:00 Local", title: "Fordow Struck", desc: "Deep underground enrichment facility targeted with bunker busters", type: "kinetic" },
        { time: "Feb 28, ~02:30 Local", title: "Natanz Destroyed", desc: "Primary enrichment facility severely damaged", type: "kinetic" },
        { time: "Feb 28, ~03:00 Local", title: "Leadership Strikes", desc: "Khamenei compound, IRGC headquarters targeted", type: "kinetic" },
        { time: "Feb 28, ~04:00 Local", title: "Air Defense Degraded", desc: "Iranian air defense systems disabled", type: "kinetic" },
        { time: "Feb 28, ~05:00 Local", title: "Hormuz Closure Announced", desc: "IRGC declares Strait of Hormuz closed", type: "economic" },
        { time: "Feb 28, ~06:00 Local", title: "Iranian Counterattack", desc: "Ballistic missiles launched at Israel, Gulf states", type: "kinetic" },
        { time: "Feb 28, ~07:00 Local", title: "Israeli Casualties", desc: "3 killed in Rishon LeZion, Holon, Tel Aviv", type: "kinetic" },
        { time: "Feb 28, ~08:00 Local", title: "Gulf States Hit", desc: "UAE: 1 killed, 4 injured. Saudi Arabia, Kuwait, Bahrain struck", type: "regional" },
        { time: "Feb 28, ~10:00 EST", title: "Oil Prices Spike", desc: "Crude oil futures jump 6% on Hormuz closure news", type: "economic" },
        { time: "Feb 28, ~14:00 EST", title: "Israeli Sources", desc: "Israeli officials: 'Khamenei presumed dead'", type: "political" },
        { time: "Feb 28, ~16:00 EST", title: "Netanyahu Statement", desc: "'Signs point to Khamenei being dead'", type: "political" },
        { time: "Feb 28, ~18:00 EST", title: "Trump Confirms", desc: "President Trump: 'Iranian Supreme Leader Ali Khamenei is dead'", type: "political" },
        { time: "Feb 28, ~18:30 EST", title: "Iran Denies", desc: "Iranian state media denies Khamenei death claim", type: "political" },
        { time: "Feb 28, ~19:00 EST", title: "Congress Reacts", desc: "Members of Congress demand war powers vote", type: "political" }
    ],
    
    regionalActors: [
        { name: "Saudi Arabia", position: "support", stance: "De facto support, silent publicly", interest: "Countering Iranian influence" },
        { name: "UAE", position: "support", stance: "De facto support, Abraham Accords partner", interest: "Countering Iran, economic stability" },
        { name: "Bahrain", position: "support", stance: "Supportive", interest: "Regime survival (Shia majority)" },
        { name: "Kuwait", position: "neutral", stance: "Cautious, caught between", interest: "Stability, neutrality" },
        { name: "Qatar", position: "neutral", stance: "Mediator, maintains Iran ties", interest: "Regional mediation role" },
        { name: "Oman", position: "neutral", stance: "Neutral mediator", interest: "Stability, mediation" },
        { name: "Turkey", position: "oppose", stance: "Publicly opposed, red lines on Kurds", interest: "No Kurdish state, regional influence" },
        { name: "Iraq", position: "neutral", stance: "Divided (government vs. PMF)", interest: "Sovereignty, avoiding conflict" },
        { name: "Syria", position: "oppose", stance: "Hostile to US/Israel", interest: "Regime survival (Assad)" },
        { name: "Lebanon", position: "neutral", stance: "Divided (Hezbollah vs. government)", interest: "Avoiding destruction" },
        { name: "Jordan", position: "support", stance: "Silent, likely supportive", interest: "Stability, refugee management" },
        { name: "Egypt", position: "neutral", stance: "Cautious, not supportive publicly", interest: "Stability, Suez revenue" },
        { name: "Pakistan", position: "neutral", stance: "Concerned, complex", interest: "Baluchi separatism risk" },
        { name: "Israel", position: "support", stance: "Primary partner", interest: "Existential threat elimination" }
    ],
    
    extraRegionalActors: [
        { name: "United States", position: "support", stance: "Primary striker", interest: "Regime change, nuclear elimination" },
        { name: "Russia", position: "oppose", stance: "Critical, limited response", interest: "Arms sales, anti-US positioning" },
        { name: "China", position: "oppose", stance: "Critical but pragmatic", interest: "Oil imports, Belt and Road" },
        { name: "European Union", position: "neutral", stance: "Divided, concerned", interest: "Nuclear non-proliferation, stability" },
        { name: "United Kingdom", position: "support", stance: "Likely supportive", interest: "Transatlantic alliance" },
        { name: "India", position: "neutral", stance: "Concerned, neutral", interest: "Oil imports, Chabahar Port" }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dashboardData;
}
