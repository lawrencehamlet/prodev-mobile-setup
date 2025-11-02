# prodev-mobile-setup
Mobile Development with React Native

## Installing and Using Expo Go

This repository contains several small example apps created while learning Expo and the Expo Router.

Below are concise, copy-paste ready instructions for installing Expo Go on your mobile device and common challenges you may encounter during setup.

1) Install Expo Go

- iOS (iPhone/iPad):
	- Open the App Store and install the "Expo Go" app by Expo.
- Android: 
	- Open Google Play and install the "Expo Go" app by Expo.

2) Start your development server

From a project folder (for example `prodev-mobile-app-0x03`):

```pwsh
cd C:\\Users\\X13\\Desktop\\prodev-mobile-setup\\prodev-mobile-app-0x03
npm install
npx expo start
```

3) Open the app on your device

- When the Metro/Expo dev server starts it shows a QR code in the terminal and in the browser dashboard.
- iOS: Use the built-in Camera app to scan the QR code. Tap the notification that appears to open Expo Go and load the project.
- Android: Open Expo Go, tap "Scan QR Code" and scan the terminal QR code (or point the Play Store app to the dashboard URL).

Common challenges and solutions

- QR code doesn't scan / app won't open
	- Ensure your development machine and phone are on the same Wi-Fi network. Expo uses the LAN by default.
	- If they're on different networks (guest vs private), connect both to the same network or use the "Tunnel" option in the Expo dev tools.
	- On iOS, if scanning via the Camera doesn't open Expo Go, try copying the URL from the dev tools and opening it inside Expo Go (Open from Clipboard).

- App displays a blank screen or bundle fails to load
	- Run `npx expo start -c` to clear Metro's cache.
	- Ensure firewall or corporate network rules aren't blocking local network traffic.
	- On Android, enable "Debug JS Remotely" only if needed; otherwise run the app normally.

- Native build or dependency errors
	- If you see module not found errors, run `npm install` in the project directory to install missing packages.
	- If a package requires native code or a custom dev client, you may need a development build instead of Expo Go (follow Expo docs).

- Version mismatches
	- Expo Go supports a specific range of SDK versions. If the project was created with a newer SDK than your Expo Go version supports, you may need to update Expo Go or create a development build.

Logging and diagnostics

- Use the terminal output and the browser dashboard logs to inspect runtime errors.
- Run `adb logcat` (Android) or connect to Xcode console (iOS simulator) for native-level logs if needed.

If you'd like, I can add a short troubleshooting checklist to the specific app README files (for example `prodev-mobile-app-0x03/README.md`) with project-specific notes. Tell me which app folder you'd like detailed steps for and I will update that README too.

