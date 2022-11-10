export const environment = {
  production: true,
  clientId: 'api://clientid',//Enter Client id here
  authority: 'https://login.microsoftonline.com/{tenant id}/',
  redirectUri: '',
  //In production Mode fill the redirecturi with the Deployed url
  protectedResourceMap:
    [
      {
        url: 'https://graph.microsoft.com/v1.0/me',
        scopes: ['User.Read']
      },
      {
        url: 'https://outlookcalendarevent.azurewebsites.net',//Replace this url with the api endpoint
        scopes: ['api://backendclientid/scopename'],//pass the scopes which the api is expecting here
      }
    ]
  ,
  msal: {
    clientId: 'api://clientidhere',//Client ID
    authority: 'https://login.microsoftonline.com/{tenant id}/',
    redirectPath: 'auth-response',
  },
};
