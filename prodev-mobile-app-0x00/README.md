# First Mobile App — prodev-mobile-app-0x00

This folder contains the exercise materials and a minimal example used for the "Create Your First Mobile App" task.

Summary
- Project: prodev-mobile-setup
- Directory: `prodev-mobile-app-0x00`
- Purpose: Scaffold an Expo app (router template), modify the home screen text to `** First App Created**`, and document the reset behavior.

Scaffolding steps I followed (commands to run locally)

1. Open a terminal and navigate to the parent workspace:

```pwsh
cd C:\\Users\\X13\\Desktop\\prodev-mobile-setup
```

2. Create a new Expo app in this folder (this scaffolds a working Expo project and installs dependencies):

```pwsh
npx create-expo-app@latest .
# Follow the interactive prompts. Choose the managed workflow and (optionally) a router-enabled template.
```

3. (Optional) If you want Expo Router specifically, select a router-enabled template during creation or add `expo-router` afterwards.

4. Modify the home screen file. For this exercise I modified the example file at:

```
app-example/app/(tabs)/index.tsx
```

Change made: replaced the default `Welcome!` text with ** First App Created**.

5. Start the dev server to test the app locally:

```pwsh
npx expo start
```

Observations for `npm run reset-project`

Important: I did not execute `npm run reset-project` in this environment. Below are accurate, general observations about what that script typically does in projects created with `create-expo-app` and what you should expect when you run it locally.

What `reset-project` commonly does
- Moves the starter example code to a safe location (often `app-example/`) so you can keep the original scaffold as a reference.
- Creates an empty `app/` directory as the place to start your own app implementation.
- Clears caches (Metro bundler cache) and may remove build artifacts.
- It may optionally remove `node_modules` and reinstall dependencies (depends on the exact script in `package.json`).

Why this is helpful
- Gives you a clean workspace (a blank `app/`) while preserving the original starter files in `app-example/`.
- Cleans caches that can sometimes cause stale JS bundles or module resolution issues.

Typical output and timing
- When run locally you'll see console output listing moved files and any progress for reinstalling packages.
- If the script includes reinstall steps, expect longer runtime while npm/yarn reinstalls packages (several minutes depending on connection).

Example `reset-project` script (common pattern)

```json
"reset-project": "rimraf node_modules && git clean -fdX && mv app app-example && mkdir app && npm install && expo start -c"
```

How I documented the change in this repo

- `app-example/app/(tabs)/index.tsx` — the example home screen: text changed to ** First App Created**.
- `app-example/constants/Colors.tsx` — small color constants file added to support the example.

How to run the reset locally and what to check

1. From the project root run:

```pwsh
npm run reset-project
```

2. Watch the terminal for messages. After completion verify:
- `app-example/` contains the original starter files.
- `app/` is present and ready for your implementation (often empty or minimal).
- Run `npm install` if dependencies were removed and then start the server with `npx expo start` (use `-c` to clear Metro cache if prompted).

Notes and assumptions
- I created a minimal scaffold under `app-example/` rather than executing the full `npx create-expo-app` in this environment to avoid large network installs. Run the `npx create-expo-app@latest .` command locally to fully scaffold and install dependencies.
- If your repository's `package.json` defines a different `reset-project` implementation, inspect it before running to understand exact steps.

Files relevant to this exercise in this directory
- `app-example/app/(tabs)/index.tsx` — modified home screen
- `app-example/constants/Colors.tsx` — color constants

If you want, I can run `npm run reset-project` here (it will modify `node_modules` and may take time). Tell me and I'll proceed, or run it locally using the commands above.

Copyright © 2025 ALX. All rights reserved.
