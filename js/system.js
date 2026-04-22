// Create an SVG string based icon placeholder generator since we don't have binary assets
function getIconSvg(type) {
    const xmlns = 'xmlns="http://www.w3.org/2000/svg"';
    const icons = {
        'computer': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs>
            <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00ff41"/><stop offset="100%" stop-color="#006614"/></linearGradient>
            <filter id="cglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <rect x="6" y="8" width="52" height="36" rx="4" fill="#0a0f0a" stroke="#00ff41" stroke-width="1.5" filter="url(#cglow)"/>
          <rect x="10" y="12" width="44" height="28" rx="2" fill="#020f02"/>
          <text x="14" y="22" font-family="monospace" font-size="7" fill="#00ff41" opacity="0.9">natesh@arch:~$</text>
          <text x="14" y="31" font-family="monospace" font-size="6" fill="#00cc33" opacity="0.7">ls -la /home</text>
          <rect x="14" y="33" width="6" height="5" rx="1" fill="#00ff41" opacity="0.8"/>
          <rect x="26" y="44" width="12" height="4" rx="1" fill="#00ff41" opacity="0.5"/>
          <rect x="20" y="48" width="24" height="2" rx="1" fill="#00ff41" opacity="0.3"/>
          <circle cx="32" cy="56" r="3" fill="none" stroke="#00ff41" stroke-width="1" opacity="0.6"/>
        </svg>`
        
        'folder': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="fglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="4" y="20" width="56" height="36" rx="4" fill="#020f02" stroke="#00ff41" stroke-width="1.2" filter="url(#fglow)"/>
          <path d="M4 20 L4 16 Q4 12 8 12 L26 12 L30 20 Z" fill="#020f02" stroke="#00ff41" stroke-width="1.2"/>
          <line x1="12" y1="30" x2="52" y2="30" stroke="#00ff41" stroke-width="0.8" opacity="0.4"/>
          <line x1="12" y1="37" x2="44" y2="37" stroke="#00ff41" stroke-width="0.8" opacity="0.3"/>
          <line x1="12" y1="44" x2="38" y2="44" stroke="#00ff41" stroke-width="0.8" opacity="0.2"/>
          <text x="8" y="28" font-family="monospace" font-size="6" fill="#00ff41" opacity="0.7">drwxr-xr-x</text>
        </svg>`,

        'private_folder': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="pfglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="4" y="20" width="56" height="36" rx="4" fill="#0f0202" stroke="#ff4444" stroke-width="1.2" filter="url(#pfglow)"/>
          <path d="M4 20 L4 16 Q4 12 8 12 L26 12 L30 20 Z" fill="#0f0202" stroke="#ff4444" stroke-width="1.2"/>
          <rect x="24" y="10" width="16" height="12" rx="3" fill="none" stroke="#ff4444" stroke-width="1.5"/>
          <rect x="22" y="18" width="20" height="14" rx="2" fill="#1a0000" stroke="#ff4444" stroke-width="1.2"/>
          <circle cx="32" cy="25" r="2.5" fill="#ff4444" opacity="0.8"/>
          <line x1="32" y1="25" x2="32" y2="29" stroke="#ff4444" stroke-width="1.5"/>
          <text x="8" y="44" font-family="monospace" font-size="6" fill="#ff4444" opacity="0.7">drwx------</text>
        </svg>`,
        
        'terminal': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="tglow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="4" y="8" width="56" height="48" rx="6" fill="#050f05" stroke="#00ff41" stroke-width="1.5" filter="url(#tglow)"/>
          <rect x="4" y="8" width="56" height="14" rx="6" fill="#0a1a0a"/>
          <circle cx="14" cy="15" r="3" fill="#ff5f57"/>
          <circle cx="24" cy="15" r="3" fill="#f5a623"/>
          <circle cx="34" cy="15" r="3" fill="#27c93f"/>
          <text x="10" y="34" font-family="monospace" font-size="7" fill="#00ff41">$ whoami</text>
          <text x="10" y="43" font-family="monospace" font-size="7" fill="#00cc33" opacity="0.8">natesh</text>
          <rect x="10" y="46" width="5" height="7" rx="1" fill="#00ff41" opacity="0.9"/>
        </svg>`,
        
        'document': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="dglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="10" y="6" width="38" height="48" rx="3" fill="#050f05" stroke="#00ff41" stroke-width="1.2" filter="url(#dglow)"/>
          <path d="M34 6 L48 20 L34 20 Z" fill="#020802" stroke="#00ff41" stroke-width="1"/>
          <path d="M34 6 L48 20 L34 20" fill="#0a1a0a"/>
          <line x1="16" y1="28" x2="42" y2="28" stroke="#00ff41" stroke-width="1" opacity="0.8"/>
          <line x1="16" y1="34" x2="38" y2="34" stroke="#00ff41" stroke-width="1" opacity="0.5"/>
          <line x1="16" y1="40" x2="40" y2="40" stroke="#00ff41" stroke-width="1" opacity="0.4"/>
          <line x1="16" y1="46" x2="30" y2="46" stroke="#00ff41" stroke-width="1" opacity="0.3"/>
          <text x="13" y="22" font-family="monospace" font-size="5.5" fill="#00ff41" opacity="0.6">resume.pdf</text>
        </svg>`,
        
        'contact': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="contglow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <circle cx="32" cy="32" r="26" fill="#050f05" stroke="#00ff41" stroke-width="1.5" filter="url(#contglow)"/>
          <circle cx="32" cy="24" r="8" fill="none" stroke="#00ff41" stroke-width="1.5"/>
          <path d="M16 50 Q16 38 32 38 Q48 38 48 50" fill="none" stroke="#00ff41" stroke-width="1.5"/>
          <circle cx="32" cy="24" r="3" fill="#00ff41" opacity="0.6"/>
        </svg>`,
        
        'github': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="gglow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <circle cx="32" cy="32" r="26" fill="#050f05" stroke="#00ff41" stroke-width="1.5" filter="url(#gglow)"/>
          <path d="M32 14C22.06 14 14 22.06 14 32c0 7.97 5.17 14.73 12.34 17.12.9.17 1.23-.39 1.23-.87v-3.07c-5.01 1.09-6.07-2.41-6.07-2.41-.82-2.08-2-2.63-2-2.63-1.64-1.12.12-1.1.12-1.1 1.82.13 2.78 1.87 2.78 1.87 1.61 2.77 4.23 1.97 5.26 1.5.16-1.17.63-1.97 1.15-2.42-4-.45-8.2-2-8.2-8.88 0-1.96.7-3.56 1.85-4.82-.19-.45-.8-2.28.17-4.75 0 0 1.51-.48 4.95 1.84A17.2 17.2 0 0132 20.75c1.53.01 3.07.21 4.51.61 3.43-2.33 4.94-1.84 4.94-1.84.97 2.47.36 4.3.18 4.75 1.15 1.26 1.85 2.86 1.85 4.82 0 6.9-4.21 8.42-8.22 8.86.65.56 1.22 1.66 1.22 3.34v4.96c0 .48.32 1.05 1.24.87C44.84 46.72 50 39.96 50 32c0-9.94-8.06-18-18-18z" fill="#00ff41"/>
        </svg>`,
        
        'recycle': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="rglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="18" y="22" width="28" height="32" rx="3" fill="#050f05" stroke="#ff4444" stroke-width="1.2" filter="url(#rglow)"/>
          <rect x="12" y="18" width="40" height="6" rx="2" fill="#0f0202" stroke="#ff4444" stroke-width="1"/>
          <rect x="24" y="12" width="16" height="6" rx="2" fill="#0f0202" stroke="#ff4444" stroke-width="1"/>
          <line x1="24" y1="30" x2="24" y2="46" stroke="#ff4444" stroke-width="1" opacity="0.6"/>
          <line x1="32" y1="30" x2="32" y2="46" stroke="#ff4444" stroke-width="1" opacity="0.6"/>
          <line x1="40" y1="30" x2="40" y2="46" stroke="#ff4444" stroke-width="1" opacity="0.6"/>
        </svg>`,
        
        'skills': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="skglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="4" y="4" width="56" height="56" rx="6" fill="#050f05" stroke="#00ff41" stroke-width="1.2" filter="url(#skglow)"/>
          <rect x="12" y="42" width="8" height="14" rx="1" fill="#00ff41" opacity="0.9"/>
          <rect x="24" y="32" width="8" height="24" rx="1" fill="#00cc33" opacity="0.8"/>
          <rect x="36" y="22" width="8" height="34" rx="1" fill="#00ff41" opacity="0.7"/>
          <rect x="48" y="14" width="8" height="42" rx="1" fill="#00ff41" opacity="0.6"/>
          <line x1="8" y1="56" x2="58" y2="56" stroke="#00ff41" stroke-width="1" opacity="0.4"/>
          <text x="8" y="14" font-family="monospace" font-size="6" fill="#00ff41" opacity="0.6">skills.sh</text>
        </svg>`,

        'calculator': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="calcglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="10" y="4" width="44" height="56" rx="5" fill="#050f05" stroke="#00ff41" stroke-width="1.2" filter="url(#calcglow)"/>
          <rect x="14" y="10" width="36" height="14" rx="2" fill="#020802" stroke="#00ff41" stroke-width="0.8"/>
          <text x="38" y="21" font-family="monospace" font-size="9" fill="#00ff41" text-anchor="end">42</text>
          <g fill="#020802" stroke="#00ff41" stroke-width="0.8">
            <rect x="14" y="30" width="9" height="7" rx="1.5"/><rect x="27" y="30" width="9" height="7" rx="1.5"/><rect x="40" y="30" width="9" height="7" rx="1.5"/>
            <rect x="14" y="40" width="9" height="7" rx="1.5"/><rect x="27" y="40" width="9" height="7" rx="1.5"/><rect x="40" y="40" width="9" height="7" rx="1.5"/>
            <rect x="14" y="50" width="22" height="7" rx="1.5"/>
          </g>
          <rect x="40" y="50" width="9" height="7" rx="1.5" fill="#00ff41" opacity="0.8"/>
        </svg>`,

        'notepad': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="nglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="8" y="6" width="48" height="52" rx="4" fill="#050f05" stroke="#00ff41" stroke-width="1.2" filter="url(#nglow)"/>
          <rect x="8" y="6" width="48" height="10" rx="4" fill="#0a1a0a" stroke="#00ff41" stroke-width="1.2"/>
          <circle cx="18" cy="11" r="2" fill="#ff5f57"/>
          <circle cx="26" cy="11" r="2" fill="#f5a623"/>
          <circle cx="34" cy="11" r="2" fill="#27c93f"/>
          <text x="12" y="26" font-family="monospace" font-size="5.5" fill="#00ff41" opacity="0.8">nano ~/notes.md</text>
          <line x1="12" y1="30" x2="52" y2="30" stroke="#00ff41" stroke-width="0.6" opacity="0.3"/>
          <line x1="12" y1="36" x2="48" y2="36" stroke="#00ff41" stroke-width="0.6" opacity="0.25"/>
          <line x1="12" y1="42" x2="44" y2="42" stroke="#00ff41" stroke-width="0.6" opacity="0.2"/>
          <line x1="12" y1="48" x2="36" y2="48" stroke="#00ff41" stroke-width="0.6" opacity="0.15"/>
        </svg>`,

        'paint': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="paintglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="4" y="4" width="56" height="56" rx="6" fill="#050f05" stroke="#00ff41" stroke-width="1.2" filter="url(#paintglow)"/>
          <circle cx="20" cy="20" r="6" fill="none" stroke="#ff5f57" stroke-width="2"/>
          <circle cx="32" cy="16" r="6" fill="none" stroke="#f5a623" stroke-width="2"/>
          <circle cx="44" cy="20" r="6" fill="none" stroke="#27c93f" stroke-width="2"/>
          <circle cx="44" cy="34" r="6" fill="none" stroke="#1793d1" stroke-width="2"/>
          <circle cx="32" cy="40" r="6" fill="none" stroke="#b44be1" stroke-width="2"/>
          <circle cx="20" cy="34" r="6" fill="none" stroke="#00ff41" stroke-width="2"/>
          <line x1="38" y1="42" x2="56" y2="58" stroke="#00ff41" stroke-width="3" stroke-linecap="round"/>
          <rect x="34" y="38" width="8" height="6" rx="1" fill="#0a1a0a" stroke="#00ff41" stroke-width="1"/>
        </svg>`,

        'taskmanager': `<svg ${xmlns} viewBox="0 0 64 64">
          <defs><filter id="htopglow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <rect x="4" y="4" width="56" height="56" rx="6" fill="#050f05" stroke="#00ff41" stroke-width="1.2" filter="url(#htopglow)"/>
          <text x="8" y="14" font-family="monospace" font-size="5.5" fill="#00ff41" opacity="0.7">htop - natesh@arch</text>
          <rect x="8" y="17" width="48" height="1" fill="#00ff41" opacity="0.3"/>
          <text x="8" y="25" font-family="monospace" font-size="4.5" fill="#00cc33">CPU[</text>
          <rect x="22" y="21" width="28" height="4" rx="1" fill="#020802"/>
          <rect x="22" y="21" width="18" height="4" rx="1" fill="#00ff41" opacity="0.8"/>
          <text x="8" y="33" font-family="monospace" font-size="4.5" fill="#00cc33">MEM[</text>
          <rect x="22" y="29" width="28" height="4" rx="1" fill="#020802"/>
          <rect x="22" y="29" width="22" height="4" rx="1" fill="#1793d1" opacity="0.8"/>
          <polyline points="8,56 14,48 20,52 26,40 32,44 38,36 44,42 50,30 56,56" fill="none" stroke="#00ff41" stroke-width="1.2" opacity="0.7"/>
        </svg>`
    };
    return `data:image/svg+xml,${encodeURIComponent(icons[type] || icons['folder'])}`;
}

const APPS = {
    'computer': { title: 'My Computer', icon: 'computer', type: 'iframe', url: 'computer.html', width: 700, height: 480 },
    'projects': { title: '~/projects', icon: 'folder', type: 'iframe', url: 'projects.html' },
    'private-projects': { title: '~/private', icon: 'private_folder', type: 'iframe', url: 'private-projects.html' },
    'resume': { title: 'resume.pdf', icon: 'document', type: 'iframe', url: 'resume.html' },
    'skills': { title: 'skills.sh', icon: 'skills', type: 'iframe', url: 'skills.html', width: 500, height: 600 },
    'terminal': { title: 'terminal', icon: 'terminal', type: 'iframe', url: 'terminal.html', width: 600, height: 400 },
    'calculator': { title: 'calc', icon: 'calculator', type: 'iframe', url: 'calculator.html', width: 360, height: 580 },
    'notepad': { title: 'nano', icon: 'notepad', type: 'iframe', url: 'notepad.html', width: 760, height: 520 },
    'paint': { title: 'gimp', icon: 'paint', type: 'iframe', url: 'paint.html', width: 640, height: 480 },
    'taskmanager': { title: 'htop', icon: 'taskmanager', type: 'iframe', url: 'taskmanager.html', width: 650, height: 550 },
    'about': { title: 'whoami', icon: 'computer', width: 450, height: 420, type: 'iframe', url: 'about.html' },
    'github': { title: 'github', icon: 'github', type: 'link', url: 'https://github.com/natesh-kanna' },
    'contact': { title: 'contact', icon: 'contact', type: 'iframe', url: 'contact.html' },
    'recycle': { title: 'trash', icon: 'recycle', type: 'iframe', url: 'recycle.html', width: 600, height: 420 }
};

// Global State
const SystemState = {
    isBooting: true,
    startMenuOpen: false,
    isShuttingDown: false
};

const WALLPAPER_URL = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80';
const PROFILE_PIC_URL = 'https://ui-avatars.com/api/?name=Natesh+Kanna&background=003b0f&color=00ff41&bold=true&size=128';
let appWarmupScheduled = false;

// Preload and manage wallpaper caching
function initializeWallpaper() {
    const desktopEl = document.getElementById('desktop-environment');
    let cachedBackground = null;
    try {
        cachedBackground = localStorage.getItem('win7_wallpaper');
    } catch (e) { console.warn("localStorage disabled", e); }
    
    if (cachedBackground) {
        desktopEl.style.backgroundImage = `url(${cachedBackground})`;
    } else {
        fetch(WALLPAPER_URL, { credentials: 'omit' })
            .then(response => {
                const contentType = response.headers.get('content-type') || '';
                if (!response.ok || !contentType.startsWith('image/')) throw new Error('Invalid wallpaper response');
                return response.blob();
            })
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64data = reader.result;
                    try { localStorage.setItem('win7_wallpaper', base64data); } catch(e) {}
                    desktopEl.style.backgroundImage = `url(${base64data})`;
                }
                reader.readAsDataURL(blob);
            })
            .catch(err => {
                console.error("Failed to fetch wallpaper:", err);
                desktopEl.style.backgroundImage = `url('${WALLPAPER_URL}')`;
            });
    }
}

// Preload and manage profile picture caching for start menu
function initializeProfilePic() {
    // Also save in localStorage so iframes like resume.html can easily access it
    let cachedProfile = null;
    try {
        cachedProfile = localStorage.getItem('win7_profile');
    } catch (e) { }
    
    const setProfileSrc = (src) => {
        const startMenuAvatar = document.querySelector('.user-avatar');
        if (startMenuAvatar) startMenuAvatar.src = src;
    };

    if (cachedProfile) {
        setProfileSrc(cachedProfile);
    } else {
        fetch(PROFILE_PIC_URL, { credentials: 'omit' })
            .then(response => {
                const contentType = response.headers.get('content-type') || '';
                if (!response.ok || !contentType.startsWith('image/')) throw new Error('Invalid profile pic response');
                return response.blob();
            })
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64data = reader.result;
                    try { localStorage.setItem('win7_profile', base64data); } catch(e) {}
                    setProfileSrc(base64data);
                }
                reader.readAsDataURL(blob);
            })
            .catch(err => {
                console.error("Failed to fetch profile pic:", err);
                setProfileSrc(PROFILE_PIC_URL);
            });
    }
}

function warmHostedAppCache() {
    // Warm iframe app pages only when running over HTTP(S).
    if (!/^https?:$/.test(window.location.protocol)) return;
    if (navigator.connection && navigator.connection.saveData) return;

    const appUrls = [...new Set(
        Object.values(APPS)
            .filter(app => app.type === 'iframe' && app.url)
            .map(app => app.url)
    )];
    const warmUrls = ['css/apps.css', ...appUrls];

    appUrls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'document';
        link.href = url;
        document.head.appendChild(link);
    });

    const styleLink = document.createElement('link');
    styleLink.rel = 'prefetch';
    styleLink.as = 'style';
    styleLink.href = 'css/apps.css';
    document.head.appendChild(styleLink);

    warmUrls.forEach((url) => {
        fetch(url, { cache: 'force-cache', credentials: 'same-origin' }).catch(() => {});
    });
}

function scheduleAppWarmup() {
    if (appWarmupScheduled) return;
    appWarmupScheduled = true;

    const runWarmup = () => {
        setTimeout(warmHostedAppCache, 500);
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(runWarmup, { timeout: 1500 });
    } else {
        setTimeout(runWarmup, 900);
    }
}

// System Functions
document.addEventListener('DOMContentLoaded', () => {
    initializeWallpaper();
    initializeProfilePic();
    
    // Boot Sequence (Straight to Login)
    const loginScreen = document.getElementById('login-screen');
    const desktopEnv = document.getElementById('desktop-environment');
    const startupAudio = document.getElementById('audio-startup');
    const shutdownAudio = document.getElementById('audio-shutdown');
    const restartAudio = document.getElementById('audio-restart');
    const loginBtn = document.getElementById('btn-login');
    const loginNameEl = document.getElementById('login-selected-user');
    const loginUserItems = Array.from(document.querySelectorAll('.login-bottom-left .w11-user-list-item'));
    const loginActionToast = document.getElementById('login-action-toast');
    const accessibilityToggleBtn = document.querySelector('.lock-icon-btn[data-action="accessibility"]');
    const themeToggleBtn = document.querySelector('.lock-icon-btn[data-action="theme"]');
    const restartLoginBtn = document.querySelector('.lock-icon-btn[data-action="restart"]');
    const lockTimeEl = document.getElementById('lock-time');
    const lockDateEl = document.getElementById('lock-date');
    const shutdownScreenEl = document.getElementById('shutdown-screen');
    const shutdownScreenLabelEl = shutdownScreenEl ? shutdownScreenEl.querySelector('h1') : null;
    let shutdownAudioPrimed = false;
    let lockClockIntervalId = null;
    let loginToastTimeoutId = null;
    let skipNextLoginAppear = false;

    try {
        skipNextLoginAppear = sessionStorage.getItem('skipLoginAppearOnce') === '1';
        if (skipNextLoginAppear) {
            sessionStorage.removeItem('skipLoginAppearOnce');
        }
    } catch (_) {
        skipNextLoginAppear = false;
    }

    if (startupAudio) startupAudio.preload = 'auto';
    if (shutdownAudio) {
        shutdownAudio.preload = 'auto';
        shutdownAudio.load();
    }
    if (restartAudio) {
        restartAudio.preload = 'auto';
        restartAudio.load();
    }

    const primeShutdownAudio = () => {
        if (!shutdownAudio || shutdownAudioPrimed) return;
        shutdownAudioPrimed = true;
        shutdownAudio.volume = 0;
        shutdownAudio.play()
            .then(() => {
                shutdownAudio.pause();
                shutdownAudio.currentTime = 0;
                shutdownAudio.volume = 0.5;
            })
            .catch(() => {
                shutdownAudio.volume = 0.5;
                shutdownAudio.load();
            });
    };

    const revealLoginScreen = () => {
        if (!loginScreen) return;
        loginScreen.classList.remove('hidden');
        loginScreen.style.display = 'flex';
        loginScreen.classList.remove('login-appear');
        if (skipNextLoginAppear) {
            skipNextLoginAppear = false;
            return;
        }
        // Force reflow so repeated calls restart the fade-in animation.
        void loginScreen.offsetWidth;
        loginScreen.classList.add('login-appear');
    };
    window.showLoginScreenWithFade = revealLoginScreen;

    const revealDesktopWithFade = () => {
        if (!desktopEnv) return;
        desktopEnv.style.display = 'flex';
        desktopEnv.classList.add('fade-in-start');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                desktopEnv.classList.remove('fade-in-start');
            });
        });
    };

    const updateLockClock = () => {
        const now = new Date();
        if (lockTimeEl) {
            lockTimeEl.textContent = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        if (lockDateEl) {
            lockDateEl.textContent = now.toLocaleDateString([], {
                weekday: 'long',
                month: 'long',
                day: '2-digit'
            });
        }
    };

    if (lockTimeEl || lockDateEl) {
        updateLockClock();
        lockClockIntervalId = setInterval(updateLockClock, 1000);
    }
    revealLoginScreen();

    const setSelectedLoginUser = (targetItem) => {
        if (!targetItem) return;
        loginUserItems.forEach((item) => {
            const isActive = item === targetItem;
            item.classList.toggle('active', isActive);
            item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        if (loginNameEl) {
            loginNameEl.textContent = targetItem.dataset.user || targetItem.innerText.trim();
        }
    };

    loginUserItems.forEach((item) => {
        item.addEventListener('click', () => setSelectedLoginUser(item));
        item.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            event.stopPropagation();
            setSelectedLoginUser(item);
        });
    });
    setSelectedLoginUser(loginUserItems.find((item) => item.classList.contains('active')) || loginUserItems[0]);

    const showLoginActionToast = (message) => {
        if (!loginActionToast) return;
        loginActionToast.textContent = message;
        loginActionToast.classList.add('show');
        if (loginToastTimeoutId !== null) {
            clearTimeout(loginToastTimeoutId);
        }
        loginToastTimeoutId = setTimeout(() => {
            loginActionToast.classList.remove('show');
            loginToastTimeoutId = null;
        }, 1100);
    };

    if (accessibilityToggleBtn && loginScreen) {
        accessibilityToggleBtn.addEventListener('click', () => {
            const enabled = loginScreen.classList.toggle('login-a11y-mode');
            accessibilityToggleBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
            showLoginActionToast(enabled ? 'Accessibility mode on' : 'Accessibility mode off');
        });
    }

    if (themeToggleBtn && loginScreen) {
        themeToggleBtn.addEventListener('click', () => {
            const enabled = loginScreen.classList.toggle('login-alt-theme');
            themeToggleBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
            showLoginActionToast(enabled ? 'Background style: warm' : 'Background style: default');
        });
    }

    if (restartLoginBtn) {
        restartLoginBtn.addEventListener('click', () => {
            try {
                sessionStorage.setItem('skipLoginAppearOnce', '1');
            } catch (_) {}
            if (restartAudio) {
                restartAudio.pause();
                restartAudio.currentTime = 0;
                restartAudio.volume = 0.5;
                restartAudio.play().catch(() => {});
            }
            if (shutdownScreenEl) {
                if (loginActionToast) loginActionToast.classList.remove('show');
                if (shutdownScreenLabelEl) shutdownScreenLabelEl.textContent = 'Restarting...';
                shutdownScreenEl.style.display = 'flex';
                setTimeout(() => window.location.reload(), 1500);
            } else {
                showLoginActionToast('Restarting...');
                setTimeout(() => window.location.reload(), 260);
            }
        });
    }

    const handleLoginHotkey = (event) => {
        if (event.key !== 'Enter') return;
        if (event.target && event.target.closest && (event.target.closest('.login-bottom-left') || event.target.closest('.login-bottom-right'))) return;
        if (!loginScreen || loginScreen.style.display === 'none' || !loginBtn) return;
        event.preventDefault();
        loginBtn.click();
    };
    document.addEventListener('keydown', handleLoginHotkey);

    if (loginBtn && loginScreen) {
        loginBtn.addEventListener('click', () => {
            // Play startup sound
            if (startupAudio) {
                startupAudio.volume = 0.5;
                startupAudio.play().catch(e => console.log('Audio autoplay prevented:', e));
            }
            primeShutdownAudio();

            if (lockClockIntervalId !== null) {
                clearInterval(lockClockIntervalId);
                lockClockIntervalId = null;
            }

            // Fade out login first, then bring desktop in smoothly.
            loginScreen.classList.remove('login-appear');
            // Ensure we transition from steady state (opacity: 1) before hiding.
            void loginScreen.offsetWidth;
            loginScreen.classList.add('hidden');
            setTimeout(() => {
                revealDesktopWithFade();
            }, 540);

            setTimeout(() => {
                document.removeEventListener('keydown', handleLoginHotkey);
                loginScreen.style.display = 'none';
                SystemState.isBooting = false;
                scheduleAppWarmup();
            }, 1000);
        });
    } else {
        // Fallback if login screen is missing
        revealDesktopWithFade();
        SystemState.isBooting = false;
        scheduleAppWarmup();
    }

    // Global Click Handler (close start menu)
    document.addEventListener('click', (e) => {
        if (SystemState.startMenuOpen && 
            !e.target.closest('#start-menu') && 
            !e.target.closest('#start-button')) {
            TaskBar.toggleStartMenu(false);
        }
        
        // Deselect icons
        if (!e.target.closest('.desktop-icon')) {
            document.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.remove('selected'));
        }
    });
});
