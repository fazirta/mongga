module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c50cb534f999ecefc12449b8d177b14'),
  },
});
