# Authentication and Authorization Apprentice

A developer who can secure front-end and back-end systems using oAuth.

## Master the following skills:

* Describe the difference between authentication and authorization
* List the different types of security flows an application can implement
* Compare/Contrast OAuth and OpenID Connect
* Understand what elements OpenID Connect adds to the OAuth 2.0 scene


Authorization
* Describe the 3 steps of the OAuth flow.
* Describe the components/systems involved in the OAuth flow.
* List the alternatives to OAuth 2.0.
* Discuss the scenarios where OAuth is the most appropriate choice
* Explain why refresh tokens are necessary
* Describe the role in the OAuth flow of...
  * Resource Owner
  * Client
  * Authorization Server
  * Resource Server
  * Redirect URI
  * Response Type
  * Scope
  * Consent
  * Client ID
  * Client Secret
  * Authorization Code
  * Access Token
* Implement front-end login that uses Github OAuth login
* Implement front-end login that uses Google OAuth login
* Implement front-end login that uses Facebook OAuth login

* Authenticate against OAuth Provider in a SPA front-end with no backend (implicit flow)

* Authenticate against OAuth Provider in server-to-server application (client credentials flow)

Authentication

* Describe the common OAuth grant types and their use cases

* Use "OAuth Debugger" (oauthdebugger.com) to test an OAuth Provider
* Use "OpenID Connect Debugger" (oidcdebugger.com) to test an OpenID Connect Provider
* Use a JWT decoder to view the contents of a Json Web Token
* Describe the anatomy of a JWT
* Use the signature to verify the authenticity of a JWT

* Describe the ideal OpenID Connect and OAuth flow for a SPA website (ex: React)

* Implement auth with a 3rd party IDP like Okta or Auth0.

IDP:
* Generate a JWT that contains user metadata
* Implement a simple identity provider by hand (no OAuth/OIDC libraties)
* Implement an identity provider using a popular OIDC library

OIDC Consumer Servers:
* Implement a server that can intercept a JWT bearer token and grant or deny access to the application based on it's validity
* Implement a server that can intercept a JWT bearer token and grant or deny permissions to the application's features based on it's claims
* Decode JWT to inspect and utilize claims

* Add a Google Sign-In to an existing web application and implement a hybridized client/server flow
* Add a User model/table to your database to store the credentials collected from the OAuth provider's API
* Define permissions in an application database to complement authentication
* Limit access of the application for each logged in user based on permissions

* Implement multiple OAuth providers in a web application
* Add Facebook Login as an alternative sign in option for your users

* Implement forms authentication

* Implement front-end that delegates login to external service, receives token, and uses token to access back-end resources

## Suggested Learning:

* [OAuth 2.0 Docs](https://oauth.net/2/)
* [Authentication and Authorization: OAuth](https://www.udacity.com/course/authentication-authorization-oauth--ud330) by Udacity
* [Authentication and Authorization](https://www.coursera.org/lecture/information-security-data/authentication-and-authorisation-DXhwt) by Coursera
* [Hands-on Authentication and Authorization: OAuth](https://www.udemy.com/course/hands-on-oauth-authentication-and-authorization-with-oauth2/) by Udemy
* [Secure your ReactJS Applications with Auth0](https://www.udemy.com/course/secure-your-reactjs-applications-with-auth0/)
* [JWT Docs](https://jwt.io/)
* [Passport Docs](http://www.passportjs.org/)
* [OAuth with NodeJS and Express](http://thecodebarbarian.com/oauth-with-node-js-and-express.html) Tutorial
* [Implementing OAuth 2.0 with NodeJS](https://www.sohamkamani.com/blog/javascript/2018-06-24-oauth-with-node-js/)
* [An Illustrated Guide to OAuth and OpenID Connect](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc)
* [OAuth 2.0 and OpenID Connect (In Plain English)](https://www.youtube.com/watch?v=996OiexHze0)




## Evaluation:

Ask your mentor if you are ready for evaluation. Then, do one of the following:

1. Schedule a live evaluation by clicking [here](http://evals.codex.academy) to find a time on the calendar. After the evaluation, claim the badge.

or

2. Record a screencast where you talk about and demonstrate each competency listed above. Make sure badge criteria and relevant tools are visible in the screen cast AND that your audio is good enough for the evaluator to hear. Upload the video to a service like Vimeo or Youtube (unlisted is fine) so that you can provide a public url for an evaluator to view. Claim the badge and include the video url in the evidence box.
