## Verification checklist — TechZone

Follow these steps to verify the full app (frontend + backend) locally.

1) Start backend
```powershell
cd C:\Users\Rohit\Desktop\techZone\backend
npm install
npm run dev    # or: node server.js
```
Backend should log:
- `TechZone Server is running on port 5000`
- `MongoDB Connected: ...`

2) Start frontend (new terminal)
```powershell
cd C:\Users\Rohit\Desktop\techZone\frontend
npm install
npm run dev
```
Default Vite port is 5173, but Vite may pick another port if 5173 is busy (e.g. 5174).

3) Quick API smoke tests
- Open browser or use PowerShell:
  - `Invoke-RestMethod http://localhost:5000/api/products`
  - Should return an array of products.

4) Manual UI verification
- Open `http://localhost:5174` (or the port Vite shows).
- Sign up (or login) from the UI.
- Confirm token is stored: `localStorage.getItem('token')` (in browser console).
- Add product(s) to cart.
- Open Cart page; verify items show with correct qty and price.
- Fill delivery info and press Checkout.
- On success you should be redirected to Order Success page and the cart should be cleared.

5) Backend logs
- If a request fails, check backend terminal for stack trace / console.error output.
- Useful endpoints to test via PowerShell / curl:
  - `GET /api/products`
  - `POST /api/auth/signup` (body: name, email, password, contact)
  - `POST /api/cart/add` (requires Authorization header)
  - `GET /api/cart` (requires Authorization header)
  - `POST /api/orders` (requires Authorization header)

6) Troubleshooting
- If `MongoDB connection URI not found` -> ensure `.env` is present in project root with `MONGO_URI`.
- If CORS errors -> backend `server.js` already uses `app.use(cors())`; ensure frontend requests target `http://localhost:5000`.
- If token is missing -> check network tab for auth responses.

---
If you want, I can:
- Add a `run-dev.ps1` to open backend and frontend automatically in new terminals.
- Save the integration test output to a log file and commit it.
- Walk through any failing network request you paste (request/response).