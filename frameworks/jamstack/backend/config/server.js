module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: { enabled: true }, 
  url: env("URL" , "http://localhost"),
  // url: env("", "https://35ae-78-180-50-15.ngrok.io"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "212ee99367294395ae43a712109e25f3"),
    },
  },
});
