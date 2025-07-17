# portfolio Website
To view your portfolio website  on Google Chrome, follow these simple steps:


---


This project uses JSX, Vite, React, etc., directly opening index.html won’t work unless it's already built (e.g., via vite build). If it’s a React or Vite project, follow this next part:


---

🛠 It's a React / Vite Project

so 

👨‍💻 Run It Using Terminal (Node.js must be installed)

1. Open the folder in VS Code / Terminal.


2. Run:



npm install
npm run dev

3. It will show something like:



Local: http://localhost:5173/

4. Open this URL in Chrome.




---

🔄 If Anyone Want to View Without npm or a Dev Server:

they  must:

Build it using Vite:


npm run build

Then serve it using a static server:


npm install -g serve
serve dist

Open the provided link (usually http://localhost:3000) in Chrome.



---
