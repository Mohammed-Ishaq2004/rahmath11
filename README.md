Step 1: Use npm.cmd instead of npm
In your VS Code terminal (PowerShell), run these commands:
npm.cmd init -y
npm.cmd install express react react-dom
npm.cmd install -D esbuild


This bypasses the PowerShell script restriction.
Step 2: Your public folder already exists
So don't run mkdir public again.
Step 3: Build and run your project
npx.cmd esbuild App.jsx --bundle --outfile=public/bundle.js
node server.js


Step 4: Open in browser
http://localhost:5004
