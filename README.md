# Dynamic Profile API (Express)

A simple Node.js/Express API that returns user information along with a random cat fact fetched from an external API.

---

## Features

* Built with **Node.js** and **Express**
* Fetches random cat facts from [CatFact API](https://catfact.ninja/fact)
* Includes basic error handling and timeout logic
* Demonstrates use of **Axios**, **CORS**, and **dotenv**
* Returns response in JSON with UTC timestamp

---

## Dependencies

| Package                                          | Description                                  |
| ------------------------------------------------ | -------------------------------------------- |
| [express](https://www.npmjs.com/package/express) | Web framework for Node.js                    |
| [axios](https://www.npmjs.com/package/axios)     | HTTP client for API requests                 |
| [cors](https://www.npmjs.com/package/cors)       | Enables CORS for cross-origin requests       |
| [dotenv](https://www.npmjs.com/package/dotenv)   | Loads environment variables from `.env` file |

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Fave7903/dynamic-profile-endpoint.git
cd dynamic-profile-endpoint
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root directory and define your desired port:

```env
PORT=3000
```

> If no `PORT` is provided, the app defaults to **3000**.

### 4. Run the Server

```bash
npm start
```

or 

```bash
node server.js
```

or with nodemon (if installed):

```bash
npx nodemon server.js
```

You should see:

```
Server is running on PORT: 3000
```

---

## Test the Endpoint

Once the server is running, open your browser or use `curl`/`Postman` to test:

```
GET http://localhost:3000/me
```

The deployed API URL is also available to test:

```
GET https://dynamic-profile-gxhkc3gpcuf2g6ej.italynorth-01.azurewebsites.net/me
```

### Example Response:

```json
{
  "status": "success",
  "user": {
    "email": "femisolomon15@gmail.com",
    "name": "Favour Solomon",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T13:45:20.234Z",
  "fact": "Cats sleep 70% of their lives."
}
```

If the external API fails or times out, you’ll get a graceful fallback:

```json
{
  "error": "Failed to fetch cat fact.",
  "fallback": "Fun fact: Cats sleep 70% of their lives 😺"
}
```

---

## Environment Variables

| Variable | Description                 | Default |
| -------- | --------------------------- | ------- |
| `PORT`   | Port for the Express server | `3000`  |

---

## Notes

* The API uses `axios`’ built-in timeout (5 seconds).
* Proper HTTP status codes are returned:

  * `200` → Success
  * `502` → External API failure
  * `504` → Timeout

---

## Author

**Favour Solomon**
[femisolomon15@gmail.com](mailto:femisolomon15@gmail.com)

---

## GitHub Repository

[View on GitHub](https://github.com/Fave7903/dynamic-profile-endpoint)
