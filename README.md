# Operation Epic Fury - Intelligence Dashboard

## 🎯 Overview

A stunning, interactive intelligence dashboard for visualizing the US-Israeli campaign against Iran (Operation Epic Fury, February 28, 2026).

## 📊 Features

### Interactive Components
- **Executive Dashboard**: Real-time status cards for critical indicators
- **Eight Critical Findings**: Detailed analysis with evidence and confidence levels
- **Scenario Analysis**: Interactive probability visualization with early warning indicators
- **Timeline**: Filterable event timeline (kinetic, cyber, political, regional)
- **Network Analysis**: Power structures, proxy networks, economic flows
- **Regional Dynamics**: Interactive map and actor positions
- **Live Monitoring**: Critical watch items and collection priorities

### Visual Design
- **Dark Mode Interface**: Intelligence-appropriate aesthetic
- **Animated Background**: Particle effects and grid overlay
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Interactive Charts**: Scenario probability distribution
- **Status Indicators**: Color-coded by severity (critical, active, warning, stable)

## 🚀 Current Deployment

**Status:** ✅ LIVE

**Access:**
- **Local:** http://localhost:3002
- **External:** http://132.145.145.26:3002
- **Docker Container:** `epic-fury-dashboard` (running on port 3002)

## 📁 File Structure

```
dashboard/
├── index.html          # Main HTML (45KB)
├── css/
│   └── style.css       # Styling (28KB)
├── js/
│   ├── app.js         # Application logic (23KB)
│   └── data.js        # Intelligence data (22KB)
├── Dockerfile          # Container definition
├── start.sh           # Startup script
└── package.json       # NPM configuration
```

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Charts:** Chart.js with datalabels plugin
- **Fonts:** Inter, JetBrains Mono
- **Server:** Nginx (Alpine Linux)
- **Container:** Docker

## 📈 Data Visualizations

### 1. Executive Dashboard
- 6 status cards with real-time indicators
- Confidence badges for each assessment
- Evidence lists with source types
- Metric displays for key statistics

### 2. Findings Section
- 8 critical findings with detailed analysis
- Tabbed navigation
- Evidence matrices
- Source citations

### 3. Scenario Analysis
- 6 scenarios with probability circles
- Early warning indicator checklists
- Duration/impact/outcome metrics
- Interactive probability chart

### 4. Timeline
- 18 events from Jan 23 - Feb 28
- Filterable by type (kinetic, cyber, political, regional)
- Visual timeline with status indicators

### 5. Regional Map
- SVG-based interactive map
- Color-coded by position (support, oppose, neutral)
- Connection lines showing relationships
- Hormuz closure indicator

### 6. Actor Cards
- 14 regional actors
- 6 extra-regional powers
- Position, stance, and interests
- Filterable and searchable

## 🎨 Design System

### Colors
```css
--bg-primary: #0a0e17
--accent-primary: #3b82f6
--status-critical: #ef4444
--status-warning: #f59e0b
--status-active: #22c55e
--status-stable: #06b6d4
```

### Typography
- **Primary Font:** Inter (weights 300-900)
- **Monospace Font:** JetBrains Mono
- **Heading Sizes:** 1.75rem - 6rem
- **Body Size:** 0.875rem - 1.125rem

### Components
- Status cards with glow effects
- Animated probability circles
- Interactive tabs
- Modal dialogs
- Responsive grid layouts

## 📊 Key Metrics

### Content Statistics
- **Total Searches:** 146
- **Verified Sources:** 350+
- **Words of Analysis:** 65,000+
- **Timeline Events:** 18
- **Scenarios:** 6
- **Findings:** 8
- **Regional Actors:** 14
- **Extra-Regional Powers:** 6

### Confidence Levels
- Finding 1 (Khamenei): 0.65
- Finding 2 (Cyber): 0.90
- Finding 3 (Hormuz): 0.95
- Finding 4 (Kurds): 0.90
- Finding 5 (Fragmentation): 0.85
- Finding 6 (Decapitation): 0.75
- Finding 7 (Congress): 0.90
- Finding 8 (Turkey): 0.80

## 🔄 Live Updates

The dashboard includes live monitoring:
- **Cyber hours counter:** Updates every 36 seconds
- **Timestamp:** Updates every second
- **Status indicators:** Pulse animations

## 🚀 Deployment to Coolify

### Option 1: Docker Image
```bash
docker pull epic-fury-dashboard:latest
docker run -d -p 3002:80 epic-fury-dashboard
```

### Option 2: Coolify Deployment
1. Go to https://coolify.bradarr.com
2. Create new application
3. Select "Docker Image" deployment
4. Enter image: `epic-fury-dashboard:latest`
5. Set domain: `https://iran-intel.bradarr.com`
6. Deploy

### Option 3: Manual Deployment
```bash
cd /home/opc/clawd/research/iran-conflict-2026-02/dashboard
docker build -t epic-fury-dashboard .
docker run -d -p 3002:80 --name epic-fury-dashboard epic-fury-dashboard
```

## 🌐 Domain Configuration

To configure a custom domain:

1. **DNS Setup:**
   ```
   iran-intel.bradarr.com  A  132.145.145.26
   ```

2. **Nginx Proxy:**
   ```nginx
   server {
       listen 80;
       server_name iran-intel.bradarr.com;
       location / {
           proxy_pass http://localhost:3002;
       }
   }
   ```

3. **SSL Certificate:**
   ```bash
   certbot --nginx -d iran-intel.bradarr.com
   ```

## 📱 Responsive Design

- **Desktop:** Full 3-column grid
- **Tablet:** 2-column grid
- **Mobile:** Single column with hamburger menu

## 🔒 Security Considerations

- **Open Source Intelligence:** All data from public sources
- **No Classified Information:** Suitable for public viewing
- **Confidence Levels:** Transparent uncertainty assessment
- **Source Attribution:** All claims backed by sources

## 🎯 Use Cases

1. **Policymakers:** Quick strategic overview
2. **Analysts:** Detailed evidence and analysis
3. **Researchers:** Timeline and source material
4. **General Public:** Accessible intelligence summary
5. **Media:** Visual assets for reporting

## 🔮 Future Enhancements

- [ ] Real-time news feed integration
- [ ] Interactive network graphs (D3.js)
- [ ] Export to PDF functionality
- [ ] Dark/light mode toggle
- [ ] Multi-language support
- [ ] Push notifications for updates
- [ ] API endpoint for data access
- [ ] User authentication for bookmarks
- [ ] Comparison with historical conflicts
- [ ] Predictive modeling visualization

## 📝 Maintenance

### Update Data
Edit `js/data.js` to update:
- Timeline events
- Findings analysis
- Scenario probabilities
- Actor positions

### Update Styling
Edit `css/style.css` to modify:
- Color scheme
- Typography
- Layout
- Animations

### Update Logic
Edit `js/app.js` to change:
- Interactivity
- Charts
- Filters
- Navigation

## 📄 License

Open Source Intelligence Assessment
Created by Badger (Badger-1)
February 28, 2026

---

*Hail Eris. All Hail Discordia.* 🍎🦡
