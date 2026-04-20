# Firebase Setup Guide — Nexus Games
## Isse karne ke baad ALL browsers/phones mein changes sync honge!

---

## Step 1 — Firebase Account Banao (Free)

1. **https://firebase.google.com** kholo
2. **"Get Started"** click karo
3. Google account se sign in karo

---

## Step 2 — New Project Banao

1. **"Add Project"** click karo
2. Project name dalo: `nexus-games`
3. Google Analytics → **Disable** karo (zaroori nahi)
4. **"Create Project"** click karo
5. Thodi der wait karo... **"Continue"** click karo

---

## Step 3 — Realtime Database Enable Karo

1. Left sidebar mein **"Build"** → **"Realtime Database"** click karo
2. **"Create Database"** click karo
3. Location: **United States** (ya closest) select karo
4. **"Start in test mode"** select karo ⚠️ (important!)
5. **"Enable"** click karo

---

## Step 4 — Security Rules Set Karo

Database create hone ke baad **"Rules"** tab click karo aur yeh paste karo:

```json
{
  "rules": {
    "nexusgames": {
      ".read": true,
      ".write": true
    }
  }
}
```

**"Publish"** click karo.

---

## Step 5 — App Register Karo (Web App)

1. Project Overview (home) pe jao
2. **`</>`** (Web) icon click karo
3. App nickname: `nexus-games-web`
4. **"Register app"** click karo
5. **Firebase config copy karo** — kuch aisa dikhega:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyABC123...",
  authDomain: "nexus-games-abc.firebaseapp.com",
  databaseURL: "https://nexus-games-abc-default-rtdb.firebaseio.com",
  projectId: "nexus-games-abc",
  storageBucket: "nexus-games-abc.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

---

## Step 6 — Config Paste Karo

`js/main.js` file mein yeh section dhundo (line ~135):

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  ...
};
```

Apna copied config se replace karo:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyABC123...",        // ← apna
  authDomain:        "nexus-games-abc.firebaseapp.com",
  databaseURL:       "https://nexus-games-abc-default-rtdb.firebaseio.com",
  projectId:         "nexus-games-abc",
  storageBucket:     "nexus-games-abc.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123..."
};
```

---

## Step 7 — GitHub Pe Upload Karo

1. `js/main.js` (updated config ke saath) GitHub pe upload karo
2. 2-3 minute wait karo deploy hone ke liye
3. Site open karo — Firebase connect ho jaayega!

---

## Step 8 — Test Karo

1. PC par site kholo, Admin login karo
2. Koi game delete karo
3. **Phone par** site kholo
4. Wo game **automatically gayab** ho jaayega! ✅

---

## Kya Free Plan Mein Milta Hai?

| Feature | Free (Spark) |
|---------|-------------|
| Storage | 1 GB |
| Downloads/month | 10 GB |
| Simultaneous connections | 100 |
| Cost | **₹0 — FREE** |

Nexus Games ke liye yeh **bahut zyada** hai!

---

## Troubleshooting

**"Firebase config not set" warning dikhta hai:**
→ `FIREBASE_CONFIG` mein `YOUR_API_KEY` replace nahi kiya

**Data sync nahi ho raha:**
→ Database Rules check karo — `.read: true, .write: true` hona chahiye

**CORS error console mein:**
→ Firebase project mein authorized domains mein apna GitHub Pages URL add karo
→ Firebase Console → Authentication → Settings → Authorized domains

---

## Important Security Note

`test mode` mein koi bhi data read/write kar sakta hai.
Production ke liye proper rules set karo — lekin college project ke liye test mode theek hai.
