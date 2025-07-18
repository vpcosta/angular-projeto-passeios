import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '728372862862-8i46ksvimd49ch2fc44dr0tq8bnjagtq.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
