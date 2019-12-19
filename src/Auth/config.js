export const config = {
    clientId: "your Auth0 client id",
    domain: "dev-bv8eh63c.eu.auth0.com",
    // For production, redirect and logoutUrl should be on port 3005
    redirect: "http://localhost:3000/close-popup",
    logoutUrl: "http://localhost:3000",
    audience: "your API identifier"
};