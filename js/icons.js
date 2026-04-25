// ============================================
// NEXUS GAMES — Duotone SVG Icon System
// Premium Blue Theme: #0ea5e9 + #38bdf8
// Each icon: back layer (blue 25%) + fore layer (sky blue solid)
// ============================================

const ICONS = {
  // Navigation
  home: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="dt-back" d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"/>
    <path class="dt-fore" d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="none" stroke="currentColor" stroke-width="0"/>
    <path class="dt-fore" fill-rule="evenodd" d="M12 4.414L4 12.414V20H8V14H16V20H20V12.414L12 4.414Z"/>
  </svg>`,

  gamepad: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect class="dt-back" x="2" y="7" width="20" height="12" rx="4"/>
    <rect class="dt-fore" x="2" y="7" width="20" height="12" rx="4"/>
    <path class="dt-fore" d="M9 11H7M8 10V12M15 11H17M13 10L15 12M13 12L15 10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  layers: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2L2 7L12 12L22 7L12 2Z"/>
    <path class="dt-fore" d="M12 2L2 7L12 12L22 7L12 2Z"/>
    <path class="dt-fore" d="M2 12L12 17L22 12" stroke-width="1.8" fill="none" stroke="currentColor"/>
    <path class="dt-back" d="M2 12L12 17L22 12" opacity=".4" fill="none"/>
    <path class="dt-fore" d="M2 17L12 22L22 17" stroke-width="1.8" fill="none" stroke="currentColor" opacity=".6"/>
  </svg>`,

  user: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="8" r="4"/>
    <circle class="dt-fore" cx="12" cy="8" r="4"/>
    <path class="dt-back" d="M4 20C4 16 7.6 14 12 14C16.4 14 20 16 20 20" opacity=".5"/>
    <path class="dt-fore" d="M4 20C4 16 7.6 14 12 14C16.4 14 20 16 20 20"/>
  </svg>`,

  shield: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2L4 6V12C4 16.4 7.6 20.8 12 22C16.4 20.8 20 16.4 20 12V6L12 2Z"/>
    <path class="dt-fore" d="M12 2L4 6V12C4 16.4 7.6 20.8 12 22C16.4 20.8 20 16.4 20 12V6L12 2Z"/>
    <path d="M9 12L11 14L15 10" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  info: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M12 8V9M12 11V16" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  envelope: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="3" y="5" width="18" height="14" rx="2"/>
    <rect class="dt-fore" x="3" y="5" width="18" height="14" rx="2"/>
    <path d="M3 7L12 13L21 7" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  // Game categories
  burst: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2L13.8 9H21L15.1 13.4L17.5 21L12 16.6L6.5 21L8.9 13.4L3 9H10.2L12 2Z"/>
    <path class="dt-fore" d="M12 2L13.8 9H21L15.1 13.4L17.5 21L12 16.6L6.5 21L8.9 13.4L3 9H10.2L12 2Z"/>
    <circle cx="12" cy="12" r="3" fill="white" opacity=".6"/>
  </svg>`,

  flag: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M4 3H17L14 9L17 15H4V3Z"/>
    <path class="dt-fore" d="M4 3H17L14 9L17 15H4V3Z"/>
    <line x1="4" y1="3" x2="4" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="dt-fore"/>
    <line x1="4" y1="3" x2="4" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".3" class="dt-back"/>
  </svg>`,

  puzzle: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M4 4H10V7C10 8.1 10.9 9 12 9C13.1 9 14 8.1 14 7V4H20V10H17C15.9 10 15 10.9 15 12C15 13.1 15.9 14 17 14H20V20H14V17C14 15.9 13.1 15 12 15C10.9 15 10 15.9 10 17V20H4V14H7C8.1 14 9 13.1 9 12C9 10.9 8.1 10 7 10H4V4Z"/>
    <path class="dt-fore" d="M4 4H10V7C10 8.1 10.9 9 12 9C13.1 9 14 8.1 14 7V4H20V10H17C15.9 10 15 10.9 15 12C15 13.1 15.9 14 17 14H20V20H14V17C14 15.9 13.1 15 12 15C10.9 15 10 15.9 10 17V20H4V14H7C8.1 14 9 13.1 9 12C9 10.9 8.1 10 7 10H4V4Z" opacity=".85"/>
  </svg>`,

  compass: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M16.2 7.8L14 14L7.8 16.2L10 10L16.2 7.8Z" fill="white" opacity=".85"/>
    <circle cx="12" cy="12" r="1.5" fill="white" opacity=".5"/>
  </svg>`,

  crosshairs: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="3" fill="white" opacity=".7"/>
    <path d="M12 3V7M12 17V21M3 12H7M17 12H21" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  chess: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M4 4H11V7H4V4ZM13 4H20V7H13V4ZM4 13H11V16H4V13ZM13 13H20V16H13V13Z" opacity=".6"/>
    <path class="dt-fore" d="M4 4H11V7H4V4ZM13 4H20V7H13V4ZM4 13H11V16H4V13ZM13 13H20V16H13V13Z"/>
    <path class="dt-back" d="M13 8H20V11H13V8ZM4 18H11V21H4V18ZM4 9H11V12H4V9ZM13 18H20V21H13V18Z"/>
    <path class="dt-fore" d="M13 8H20V11H13V8ZM4 18H11V21H4V18ZM4 9H11V12H4V9ZM13 18H20V21H13V18Z" opacity=".7"/>
  </svg>`,

  trophy: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M6 3H18V12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12V3Z"/>
    <path class="dt-fore" d="M6 3H18V12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12V3Z"/>
    <path d="M6 6H3C3 9 4.5 10.5 6 11M18 6H21C21 9 19.5 10.5 18 11" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M9 21H15M12 18V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="dt-fore"/>
  </svg>`,

  wizard: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2L4 22H20L12 2Z"/>
    <path class="dt-fore" d="M12 2L4 22H20L12 2Z"/>
    <circle cx="12" cy="10" r="2.5" fill="white" opacity=".7"/>
    <path d="M8 16L10 14M16 16L14 14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".8"/>
    <path d="M5 6L7 4M19 6L17 4M3 14L5 13M21 14L19 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="dt-fore" opacity=".5"/>
  </svg>`,

  skull: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 3C7.6 3 4 6.6 4 11C4 13.8 5.4 16.3 7.5 17.8V20H16.5V17.8C18.6 16.3 20 13.8 20 11C20 6.6 16.4 3 12 3Z"/>
    <path class="dt-fore" d="M12 3C7.6 3 4 6.6 4 11C4 13.8 5.4 16.3 7.5 17.8V20H16.5V17.8C18.6 16.3 20 13.8 20 11C20 6.6 16.4 3 12 3Z"/>
    <circle cx="9" cy="11" r="2" fill="white" opacity=".7"/>
    <circle cx="15" cy="11" r="2" fill="white" opacity=".7"/>
    <path d="M10 20V22H14V20" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  // Admin / UI icons
  'user-plus': `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="10" cy="8" r="4"/>
    <circle class="dt-fore" cx="10" cy="8" r="4"/>
    <path class="dt-back" d="M2 20C2 16 5.6 14 10 14" opacity=".5"/>
    <path class="dt-fore" d="M2 20C2 16 5.6 14 10 14"/>
    <path class="dt-fore" d="M18 14V20M15 17H21" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  key: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="8" cy="10" r="5"/>
    <circle class="dt-fore" cx="8" cy="10" r="5"/>
    <path class="dt-fore" d="M13 10H21L19 12V14H17V12L13 12" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="8" cy="10" r="2" fill="white" opacity=".7"/>
  </svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="5" y="11" width="14" height="10" rx="2"/>
    <rect class="dt-fore" x="5" y="11" width="14" height="10" rx="2"/>
    <path class="dt-fore" d="M8 11V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V11" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle cx="12" cy="16" r="1.5" fill="white" opacity=".8"/>
  </svg>`,

  camera: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M2 8C2 6.9 2.9 6 4 6H7L9 3H15L17 6H20C21.1 6 22 6.9 22 8V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V8Z"/>
    <path class="dt-fore" d="M2 8C2 6.9 2.9 6 4 6H7L9 3H15L17 6H20C21.1 6 22 6.9 22 8V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V8Z"/>
    <circle cx="12" cy="13" r="4" fill="white" opacity=".65"/>
    <circle cx="12" cy="13" r="2" fill="white" opacity=".9"/>
  </svg>`,

  play: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="white" opacity=".9"/>
  </svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="11" cy="11" r="7"/>
    <circle class="dt-fore" cx="11" cy="11" r="7"/>
    <path class="dt-fore" d="M16.5 16.5L21 21" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="11" cy="11" r="3.5" fill="white" opacity=".5"/>
  </svg>`,

  star: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2L14.4 9H22L16 13.4L18.5 21L12 16.6L5.5 21L8 13.4L2 9H9.6L12 2Z"/>
    <path class="dt-fore" d="M12 2L14.4 9H22L16 13.4L18.5 21L12 16.6L5.5 21L8 13.4L2 9H9.6L12 2Z"/>
  </svg>`,

  'star-empty': `<svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14.4 9H22L16 13.4L18.5 21L12 16.6L5.5 21L8 13.4L2 9H9.6L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none" style="stroke:var(--t3)"/>
  </svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M7 12L10.5 15.5L17 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  xmark: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-fore" d="M18 6L6 18M6 6L18 18" stroke-width="2.2" stroke-linecap="round"/>
  </svg>`,

  plus: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M12 7V17M7 12H17" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  pen: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M15 5L19 9L9 19H5V15L15 5Z"/>
    <path class="dt-fore" d="M15 5L19 9L9 19H5V15L15 5Z"/>
    <path class="dt-fore" d="M13 7L17 11" fill="none" stroke="white" stroke-width="1.5" opacity=".6"/>
  </svg>`,

  trash: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M5 7H19L17 21H7L5 7Z"/>
    <path class="dt-fore" d="M5 7H19L17 21H7L5 7Z"/>
    <path class="dt-fore" d="M3 7H21M9 3H15" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M10 11V17M14 11V17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  images: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="3" y="5" width="16" height="14" rx="2"/>
    <rect class="dt-fore" x="5" y="3" width="16" height="14" rx="2"/>
    <rect class="dt-back" x="3" y="5" width="16" height="14" rx="2" opacity=".7"/>
    <circle cx="10" cy="10" r="2" fill="white" opacity=".7"/>
    <path d="M5 17L8 13L11 15.5L14 12L19 17H5Z" fill="white" opacity=".6"/>
  </svg>`,

  upload: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M4 16V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V16" opacity=".5"/>
    <path class="dt-fore" d="M4 16V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V16" fill="none"/>
    <path class="dt-fore" d="M12 3L7 9H10V16H14V9H17L12 3Z"/>
    <path class="dt-back" d="M12 3L7 9H10V16H14V9H17L12 3Z" opacity=".3"/>
  </svg>`,

  'file-code': `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M4 4C4 2.9 4.9 2 6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4Z"/>
    <path class="dt-fore" d="M4 4C4 2.9 4.9 2 6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4Z"/>
    <path d="M14 2V8H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>
    <path d="M9 14L7 16L9 18M15 14L17 16L15 18M11 13L13 19" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`,

  link: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M10 6H7C4.8 6 3 7.8 3 10C3 12.2 4.8 14 7 14H10" opacity=".5"/>
    <path class="dt-fore" d="M10 6H7C4.8 6 3 7.8 3 10C3 12.2 4.8 14 7 14H10" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path class="dt-back" d="M14 6H17C19.2 6 21 7.8 21 10C21 12.2 19.2 14 17 14H14" opacity=".5"/>
    <path class="dt-fore" d="M14 6H17C19.2 6 21 7.8 21 10C21 12.2 19.2 14 17 14H14" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path class="dt-fore" d="M8 10H16" stroke-width="2" stroke-linecap="round" fill="none"/>
  </svg>`,

  'right-bracket': `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-fore" d="M9 6L15 12L9 18" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  logout: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M4 4H13C14.1 4 15 4.9 15 6V9H13V6H4V18H13V15H15V18C15 19.1 14.1 20 13 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" opacity=".6"/>
    <path class="dt-fore" d="M4 4H13C14.1 4 15 4.9 15 6V9H13V6H4V18H13V15H15V18C15 19.1 14.1 20 13 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
    <path class="dt-fore" d="M18 9L22 12L18 15V13H10V11H18V9Z"/>
    <path class="dt-back" d="M18 9L22 12L18 15V13H10V11H18V9Z" opacity=".4"/>
  </svg>`,

  sliders: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-fore" d="M4 6H20M4 12H20M4 18H20" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle class="dt-back" cx="8" cy="6" r="2.5"/>
    <circle class="dt-fore" cx="8" cy="6" r="2.5"/>
    <circle class="dt-back" cx="16" cy="12" r="2.5"/>
    <circle class="dt-fore" cx="16" cy="12" r="2.5"/>
    <circle class="dt-back" cx="10" cy="18" r="2.5"/>
    <circle class="dt-fore" cx="10" cy="18" r="2.5"/>
  </svg>`,

  mobile: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="6" y="2" width="12" height="20" rx="2"/>
    <rect class="dt-fore" x="6" y="2" width="12" height="20" rx="2"/>
    <circle cx="12" cy="18" r="1" fill="white" opacity=".8"/>
    <path d="M9 6H15" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="9" cy="8" r="4"/>
    <circle class="dt-fore" cx="9" cy="8" r="4"/>
    <path class="dt-back" d="M1 20C1 16 4.6 14 9 14C13.4 14 17 16 17 20" opacity=".4"/>
    <path class="dt-fore" d="M1 20C1 16 4.6 14 9 14C13.4 14 17 16 17 20"/>
    <circle class="dt-back" cx="18" cy="7" r="3" opacity=".5"/>
    <path class="dt-fore" d="M16 14C19.2 14.3 23 15.8 23 19" opacity=".6"/>
  </svg>`,

  crown: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M3 18L5 8L9 13L12 5L15 13L19 8L21 18H3Z"/>
    <path class="dt-fore" d="M3 18L5 8L9 13L12 5L15 13L19 8L21 18H3Z"/>
    <rect x="3" y="18" width="18" height="2" rx="1" fill="white" opacity=".5"/>
    <circle cx="5" cy="8" r="1.5" fill="white" opacity=".7"/>
    <circle cx="12" cy="5" r="1.5" fill="white" opacity=".7"/>
    <circle cx="19" cy="8" r="1.5" fill="white" opacity=".7"/>
  </svg>`,

  'paper-plane': `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M2 12L22 2L14 22L11 13L2 12Z"/>
    <path class="dt-fore" d="M2 12L22 2L14 22L11 13L2 12Z"/>
    <path d="M11 13L22 2" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  chart: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M3 20H21" opacity=".4"/>
    <path class="dt-fore" d="M3 20H21" stroke-width="2" stroke-linecap="round" fill="none"/>
    <rect class="dt-back" x="5" y="12" width="3" height="8" rx="1"/>
    <rect class="dt-fore" x="5" y="12" width="3" height="8" rx="1"/>
    <rect class="dt-back" x="10.5" y="6" width="3" height="14" rx="1" opacity=".8"/>
    <rect class="dt-fore" x="10.5" y="6" width="3" height="14" rx="1"/>
    <rect class="dt-back" x="16" y="9" width="3" height="11" rx="1" opacity=".7"/>
    <rect class="dt-fore" x="16" y="9" width="3" height="11" rx="1"/>
  </svg>`,

  tag: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M3 3H11L21 13L13 21L3 11V3Z"/>
    <path class="dt-fore" d="M3 3H11L21 13L13 21L3 11V3Z"/>
    <circle cx="8" cy="8" r="1.5" fill="white" opacity=".8"/>
  </svg>`,

  tags: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M2 2H9L18 11L11 18L2 9V2Z" opacity=".5"/>
    <path class="dt-fore" d="M2 2H9L18 11L11 18L2 9V2Z"/>
    <path class="dt-back" d="M6 6H12L21 15L14 22L6 14V6Z"/>
    <path class="dt-fore" d="M6 6H12L21 15L14 22L6 14V6Z" opacity=".7"/>
  </svg>`,

  'code-branch': `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="7" cy="5" r="2.5"/>
    <circle class="dt-fore" cx="7" cy="5" r="2.5"/>
    <circle class="dt-back" cx="17" cy="5" r="2.5" opacity=".6"/>
    <circle class="dt-fore" cx="17" cy="5" r="2.5"/>
    <circle class="dt-back" cx="7" cy="19" r="2.5"/>
    <circle class="dt-fore" cx="7" cy="19" r="2.5"/>
    <path class="dt-fore" d="M7 7.5V16.5M17 7.5C17 11 13 12 10 12H7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="3" y="4" width="18" height="18" rx="2"/>
    <rect class="dt-fore" x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M3 10H21" stroke="white" stroke-width="1.5" opacity=".5"/>
    <path d="M8 2V6M16 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="dt-fore"/>
    <rect x="7" y="13" width="3" height="3" rx="1" fill="white" opacity=".6"/>
    <rect x="14" y="13" width="3" height="3" rx="1" fill="white" opacity=".4"/>
  </svg>`,

  warning: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2L2 21H22L12 2Z"/>
    <path class="dt-fore" d="M12 2L2 21H22L12 2Z"/>
    <path d="M12 9V14M12 17V18" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  bars: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-fore" d="M4 6H20M4 12H20M4 18H14" stroke-width="2" stroke-linecap="round" fill="none"/>
  </svg>`,

  'check-circle': `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M7.5 12L10.5 15L16.5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Social
  instagram: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="2" y="2" width="20" height="20" rx="5"/>
    <rect class="dt-fore" x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4" stroke="white" stroke-width="1.8" fill="none" opacity=".9"/>
    <circle cx="17" cy="7" r="1.2" fill="white" opacity=".8"/>
  </svg>`,

  twitter: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="2" y="2" width="20" height="20" rx="5"/>
    <rect class="dt-fore" x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M7 17L17 7M17 7H12M17 7V12" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  discord: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="2" y="2" width="20" height="20" rx="5"/>
    <rect class="dt-fore" x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M9 17C9 17 8.5 16 9.5 15C8 15 6 14 6 11C6 8 8.5 7 8.5 7H15.5C15.5 7 18 8 18 11C18 14 16 15 14.5 15C15.5 16 15 17 15 17" stroke="white" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".9"/>
    <circle cx="10" cy="11.5" r="1" fill="white" opacity=".8"/>
    <circle cx="14" cy="11.5" r="1" fill="white" opacity=".8"/>
  </svg>`,

  youtube: `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="2" y="5" width="20" height="14" rx="4"/>
    <rect class="dt-fore" x="2" y="5" width="20" height="14" rx="4"/>
    <path d="M10 9.5L15.5 12L10 14.5V9.5Z" fill="white" opacity=".9"/>
  </svg>`,

  github: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="9"/>
    <circle class="dt-fore" cx="12" cy="12" r="9"/>
    <path d="M12 7C9.2 7 7 9.2 7 12C7 14.2 8.4 16.1 10.4 16.8C10.7 16.8 10.8 16.6 10.8 16.5V15.5C9.4 15.8 9 15 9 15C8.7 14.4 8.3 14.2 8.3 14.2C7.7 13.8 8.3 13.8 8.3 13.8C8.9 13.9 9.3 14.4 9.3 14.4C9.9 15.4 10.9 15.1 11.2 14.9C11.3 14.5 11.5 14.2 11.6 14.1C10.2 14 8.7 13.4 8.7 11.1C8.7 10.4 9 9.9 9.3 9.5C9.2 9.3 9 8.7 9.4 7.9C9.4 7.9 10 7.7 11 8.4C11.5 8.3 12 8.2 12.5 8.2C13 8.2 13.5 8.3 14 8.4C15 7.7 15.6 7.9 15.6 7.9C16 8.7 15.8 9.3 15.7 9.5C16 9.9 16.3 10.4 16.3 11.1C16.3 13.4 14.8 14 13.4 14.1C13.6 14.3 13.8 14.7 13.8 15.3V16.5C13.8 16.6 13.9 16.8 14.2 16.8C16.2 16.1 17.5 14.2 17.5 12C17 9.2 14.8 7 12 7Z" fill="white" opacity=".85"/>
  </svg>`,

  // Misc
  'user-pen': `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="9" cy="8" r="4"/>
    <circle class="dt-fore" cx="9" cy="8" r="4"/>
    <path class="dt-fore" d="M2 20C2 16 5.1 14 9 14"/>
    <path class="dt-back" d="M2 20C2 16 5.1 14 9 14" opacity=".4"/>
    <path class="dt-fore" d="M16 13L20 17L15 22H11V18L16 13Z"/>
    <path class="dt-back" d="M16 13L20 17L15 22H11V18L16 13Z" opacity=".4"/>
  </svg>`,

  bolt: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M13 2L4 14H12L11 22L20 10H12L13 2Z"/>
    <path class="dt-fore" d="M13 2L4 14H12L11 22L20 10H12L13 2Z"/>
  </svg>`,

  fire: `<svg viewBox="0 0 24 24" fill="none">
    <path class="dt-back" d="M12 2C12 2 17 7 17 13C17 16.3 14.8 18 12 18C9.2 18 7 16.3 7 13C7 10 9 8 9 8C9 8 9 11 11 11C11 8 12 2 12 2Z"/>
    <path class="dt-fore" d="M12 2C12 2 17 7 17 13C17 16.3 14.8 18 12 18C9.2 18 7 16.3 7 13C7 10 9 8 9 8C9 8 9 11 11 11C11 8 12 2 12 2Z"/>
    <path d="M12 22C10.3 22 9 20.7 9 19C9 17.5 10 16.5 11 16C11 17 11.5 17.5 12 17.5C12.5 17.5 13 17 13 16C14 16.5 15 17.5 15 19C15 20.7 13.7 22 12 22Z" fill="white" opacity=".6"/>
  </svg>`,

  at: `<svg viewBox="0 0 24 24" fill="none">
    <circle class="dt-back" cx="12" cy="12" r="3.5"/>
    <circle class="dt-fore" cx="12" cy="12" r="3.5"/>
    <path class="dt-fore" d="M15.5 12C15.5 14 17.5 15.5 19.5 14.5C20.5 14 21 13 21 12C21 7 17.4 3.5 12 3.5C6.7 3.5 3 7.5 3 12C3 16.5 6.7 20 12 20C14.5 20 16.5 19.2 18 17.8" fill="none" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  'id-card': `<svg viewBox="0 0 24 24" fill="none">
    <rect class="dt-back" x="2" y="5" width="20" height="14" rx="2"/>
    <rect class="dt-fore" x="2" y="5" width="20" height="14" rx="2"/>
    <circle cx="8" cy="12" r="2.5" fill="white" opacity=".7"/>
    <path d="M5 18.5C5 16.5 6.3 15.5 8 15.5C9.7 15.5 11 16.5 11 18.5" stroke="white" stroke-width="1.3" stroke-linecap="round" opacity=".5"/>
    <path d="M14 9H19M14 12H17" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
  </svg>`,
};

// ─── ICON RENDERER — Font Awesome v4-style ──
/**
 * duoIcon now returns Font Awesome <i> tags (v4 style)
 * Maps internal icon names → FA classes
 * Size mapping: xs=10px sm=13px md=16px lg=20px xl=26px 2xl=36px 3xl=52px
 */
const FA_MAP = {
  // Navigation
  'home':          'fa-solid fa-house',
  'gamepad':       'fa-solid fa-gamepad',
  'layers':        'fa-solid fa-layer-group',
  'user':          'fa-solid fa-user',
  'shield':        'fa-solid fa-shield-halved',
  'info':          'fa-solid fa-circle-info',
  'envelope':      'fa-solid fa-envelope',
  // Auth
  'right-bracket': 'fa-solid fa-arrow-right-to-bracket',
  'user-plus':     'fa-solid fa-user-plus',
  'key':           'fa-solid fa-key',
  'lock':          'fa-solid fa-lock',
  'id-card':       'fa-solid fa-id-card',
  'at':            'fa-solid fa-at',
  // Actions
  'play':          'fa-solid fa-play',
  'plus':          'fa-solid fa-plus',
  'pen':           'fa-solid fa-pen',
  'trash':         'fa-solid fa-trash',
  'check':         'fa-solid fa-check',
  'xmark':         'fa-solid fa-xmark',
  'bars':          'fa-solid fa-bars',
  'search':        'fa-solid fa-magnifying-glass',
  'upload':        'fa-solid fa-cloud-arrow-up',
  'camera':        'fa-solid fa-camera',
  'logout':        'fa-solid fa-right-from-bracket',
  // Content
  'star':          'fa-solid fa-star',
  'fire':          'fa-solid fa-fire',
  'crown':         'fa-solid fa-crown',
  'bolt':          'fa-solid fa-bolt',
  'images':        'fa-solid fa-images',
  'image':         'fa-solid fa-image',
  'tag':           'fa-solid fa-tag',
  'tags':          'fa-solid fa-tags',
  'link':          'fa-solid fa-link',
  'paper-plane':   'fa-solid fa-paper-plane',
  'check-circle':  'fa-solid fa-circle-check',
  'warning':       'fa-solid fa-triangle-exclamation',
  'rotate':        'fa-solid fa-rotate',
  'database':      'fa-solid fa-database',
  // Files
  'file-code':     'fa-solid fa-file-code',
  // Misc
  'code':          'fa-solid fa-code',
  'code-branch':   'fa-solid fa-code-branch',
  'calendar':      'fa-solid fa-calendar',
  'sliders':       'fa-solid fa-sliders',
  'mobile':        'fa-solid fa-mobile-screen',
  'trophy':        'fa-solid fa-trophy',
  'sword':         'fa-solid fa-sword',
  'chess':         'fa-solid fa-chess',
  'hat-wizard':    'fa-solid fa-hat-wizard',
  'skull':         'fa-solid fa-skull',
  'burst':         'fa-solid fa-burst',
  'flag':          'fa-solid fa-flag-checkered',
  'puzzle':        'fa-solid fa-puzzle-piece',
  'compass':       'fa-solid fa-compass',
  'crosshairs':    'fa-solid fa-crosshairs',
  'quote':         'fa-solid fa-quote-left',
  // Category icon names (used in CAT map)
  'fa-solid fa-burst':           'fa-solid fa-burst',
  'fa-solid fa-flag-checkered':  'fa-solid fa-flag-checkered',
  'fa-solid fa-puzzle-piece':    'fa-solid fa-puzzle-piece',
  'fa-solid fa-compass':         'fa-solid fa-compass',
  'fa-solid fa-crosshairs':      'fa-solid fa-crosshairs',
  'fa-solid fa-chess':           'fa-solid fa-chess',
  'fa-solid fa-trophy':          'fa-solid fa-trophy',
  'fa-solid fa-hat-wizard':      'fa-solid fa-hat-wizard',
  'fa-solid fa-skull':           'fa-solid fa-skull',
  'fa-solid fa-gamepad':         'fa-solid fa-gamepad',
};

const FA_SIZE = {
  'xs':  '10px',
  'sm':  '13px',
  'md':  '16px',
  'lg':  '20px',
  'xl':  '26px',
  '2xl': '36px',
  '3xl': '52px',
};

// ── Semantic color per icon name ──────────────
// Each icon has its own meaningful color — not all blue
const ICON_COLOR = {
  // Navigation — cool blue tones
  'home':          '#60a5fa',   // soft blue
  'gamepad':       '#fb923c',   // orange (gaming)
  'layers':        '#818cf8',   // indigo
  'shield':        '#34d399',   // green (security/admin)
  'info':          '#38bdf8',   // sky blue
  'envelope':      '#a78bfa',   // purple (mail)
  // Auth
  'right-bracket': '#0ea5e9',   // blue
  'user-plus':     '#34d399',   // green (new user)
  'key':           '#f59e0b',   // gold
  'lock':          '#f87171',   // red/pink
  'id-card':       '#60a5fa',   // blue
  'at':            '#94a3b8',   // gray
  'user':          '#60a5fa',   // blue
  // Actions — vibrant
  'play':          '#34d399',   // green (play/go)
  'plus':          '#34d399',   // green (add)
  'pen':           '#f59e0b',   // gold (edit)
  'trash':         '#f87171',   // red (delete)
  'check':         '#34d399',   // green (success)
  'xmark':         '#f87171',   // red (close/cancel)
  'bars':          '#94a3b8',   // gray (menu)
  'search':        '#94a3b8',   // gray
  'upload':        '#38bdf8',   // sky blue
  'camera':        '#f59e0b',   // gold (photo)
  'logout':        '#f87171',   // red
  // Content
  'star':          '#f59e0b',   // gold ⭐
  'fire':          '#f97316',   // orange 🔥
  'crown':         '#f59e0b',   // gold 👑
  'bolt':          '#facc15',   // yellow ⚡
  'images':        '#818cf8',   // indigo
  'image':         '#818cf8',   // indigo
  'tag':           '#94a3b8',   // gray
  'tags':          '#94a3b8',   // gray
  'link':          '#38bdf8',   // sky blue
  'paper-plane':   '#0ea5e9',   // blue
  'check-circle':  '#34d399',   // green
  'warning':       '#f59e0b',   // gold/amber
  'rotate':        '#60a5fa',   // blue
  'database':      '#34d399',   // green
  'file-code':     '#818cf8',   // purple (code)
  'code':          '#818cf8',   // purple
  'code-branch':   '#818cf8',   // purple
  'calendar':      '#94a3b8',   // gray
  'sliders':       '#f59e0b',   // gold (settings)
  'trophy':        '#f59e0b',   // gold 🏆
  'chess':         '#60a5fa',   // blue
  'hat-wizard':    '#a78bfa',   // purple 🧙
  'skull':         '#94a3b8',   // gray 💀
  'burst':         '#f87171',   // red ⚡
  'flag':          '#f59e0b',   // gold 🏁
  'puzzle':        '#a78bfa',   // purple 🧩
  'compass':       '#34d399',   // green 🧭
  'crosshairs':    '#0ea5e9',   // blue 🎯
  'quote':         '#94a3b8',   // gray
  // Profile / stats
  'sword':         '#f87171',   // red
  'mobile':        '#60a5fa',   // blue
  'chart-bar':     '#34d399',   // green
  'heart':         '#f87171',   // red ❤️
  'clock':         '#94a3b8',   // gray
  'comment':       '#818cf8',   // purple
  'thumbs-up':     '#34d399',   // green
  'medal':         '#f59e0b',   // gold
  'certificate':   '#f59e0b',   // gold
  'ranking-star':  '#f59e0b',   // gold
};

function duoIcon(name, size = 'md', color = '') {
  const faClass = FA_MAP[name] || (name.startsWith('fa-') ? name : 'fa-solid fa-circle');
  const px = FA_SIZE[size] || '16px';
  // Priority: explicit color arg > semantic color map > fallback blue
  const col = color || ICON_COLOR[name] || '#0ea5e9';
  return `<i class="${faClass}" style="font-size:${px};color:${col};flex-shrink:0"></i>`;
}

function duoIconBox(name, boxSize = 'md', iconSize = 'sm', extraStyle = '') {
  return `<div class="ico-box sz-${boxSize}" style="${extraStyle}">${duoIcon(name, iconSize)}</div>`;
}

function ico(name, size = 'sm') {
  return duoIcon(name, size);
}
