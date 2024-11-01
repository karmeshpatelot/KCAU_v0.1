// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiBaseURL : 'http://192.168.9.16:453/api/v1/'  // live
  //apiBaseURL : 'http://192.168.1.65:453/api/v1/'  // Local
  apiBaseURL : 'http://192.168.1.200:453/api/v1/'   // 200 server
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
