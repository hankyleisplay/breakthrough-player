# License Server (Sales Flow)

This project now includes a minimal license API server for issuing and validating HWID-bound keys.

## 1) Start Server

Set admin token (required for create/revoke/list):

```powershell
$env:LICENSE_ADMIN_TOKEN="your-strong-admin-token"
npm run license:server
```

Optional port:

```powershell
$env:LICENSE_SERVER_PORT="8787"
```

## 2) API Endpoints

Base URL: `http://127.0.0.1:8787`

### Health

```http
GET /health
```

### Create License (Admin)

```http
POST /create-license
Header: X-Admin-Token: <ADMIN_TOKEN>
Body JSON:
{
  "hwid": "1A2B-3C4D-5E6F",
  "plan": "pro",
  "customerEmail": "buyer@example.com",
  "orderId": "ORDER-1001",
  "note": "first purchase"
}
```

### Activate License (Client/App)

```http
POST /activate-license
Body JSON:
{
  "key": "HLP-XXXX-XXXX-XXXX",
  "hwid": "1A2B-3C4D-5E6F"
}
```

### Revoke License (Admin)

```http
POST /revoke-license
Header: X-Admin-Token: <ADMIN_TOKEN>
Body JSON:
{
  "key": "HLP-XXXX-XXXX-XXXX",
  "reason": "refund"
}
```

### List Licenses (Admin)

```http
GET /licenses
Header: X-Admin-Token: <ADMIN_TOKEN>
```

## 3) Sales Workflow (Recommended)

1. Buyer pays on your store.
2. Buyer sends HWID (or in-app submit).
3. Your backend/admin tool calls `/create-license`.
4. Return generated key to buyer.
5. App calls `/activate-license` during activation.

## 4) Data Storage

License records are stored in:

- `tools/license-db.json`

Back up this file regularly.

## 5) Important Security Notes

- Never expose `X-Admin-Token` in the client app.
- Run this service behind HTTPS/reverse proxy in production.
- Keep `LICENSE_ADMIN_TOKEN` in environment variables only.
