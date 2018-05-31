// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pusher : {
    instance_locator : 'v1:us1:8a3110ca-c223-41a6-9333-2184f6d2bc83',
    login_url : 'http://localhost:3001/users',
    auth_url : 'http://localhost:3001/authenticate',
    default_room : 8465939,
    msg_buffer :100
  },
  log : {
    dbg : '%c [[DEBUG]]',
    dbg_style : 'background:#000,color:red;',
    
    info : '%c [[INFO]]',
    info_style :"background:#000,color:aliceblue;"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
