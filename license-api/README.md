# License API

Minimal Cloud Run backend scaffold for trial and Pro status.

## Endpoints

- `GET /health`
- `POST /auth/device`
- `POST /trial/start`
- `POST /license/status`
- `POST /license/activate`

## Environment variables

- `PORT`
- `TRIAL_DAYS`
- `LICENSE_API_KEY`

## Local run

```bash
cd license-api
npm install
npm start
```

## Cloud Run deploy

Deploy from the repo root so Cloud Run uses the root `Dockerfile`.
