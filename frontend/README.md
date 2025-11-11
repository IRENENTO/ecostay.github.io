# EcostaStay Frontend

Vue 3 + Vite frontend for the EcostaStay eco-tourism platform.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Firebase API key

This project uses Firebase for authentication. To run the app locally:

1. **Get your API key from Firebase Console**:
   - Go to https://console.firebase.google.com
   - Select the `ecostay-rwanda` project
   - Click Project Settings (gear icon) → General
   - Under "Your apps", find the Web app and copy the Web API Key

2. **Create `.env.local` in this folder** (frontend/):
   ```bash
   cp .env.example .env.local
   ```

3. **Edit `.env.local`** and replace `your-web-api-key-here` with your real API key:
   ```
   VITE_FIREBASE_API_KEY=AIzaSy...your_real_key_here
   ```

> **⚠️ Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

### 3. Start development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Features

- Multi-language support (EN, FR, Kinyarwanda, Arabic)
- User authentication (Email, Google, Apple OAuth)
- Protected routes (Club page requires login)
- Responsive design with glassmorphism UI
- Internationalization (i18n) with localStorage persistence

## Project Structure

```
src/
├── pages/           # Route pages (home, club, login, register, etc.)
├── components/      # Reusable components (NavBar, Footer, etc.)
├── stores/          # Pinia state management (auth store)
├── views/           # Alternative view components
├── router/          # Vue Router config with auth guards
├── firebase.js      # Firebase initialization (reads env variables)
├── i18n.js          # Internationalization config
├── App.vue          # Root component
├── main.js          # Entry point
└── index.css        # Global styles
```

## Environment Variables

Create `.env.local` with these variables (see `.env.example`):

| Variable | Source |
|----------|--------|
| `VITE_FIREBASE_API_KEY` | Firebase Console → Project Settings |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase project domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |

## Build

```bash
npm run build
```

Output is in `dist/`.

## Troubleshooting

### "api-key-not-valid" Firebase error
- Ensure `.env.local` exists and contains a valid `VITE_FIREBASE_API_KEY` from Firebase Console.
- Restart the dev server after updating `.env.local` (Vite loads env vars at startup).

### Language not switching
- Check browser console for i18n errors.
- Ensure all translation keys exist in `src/locales/` JSON files.

## License

MIT
