/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');

WA.onEnterZone('bbb', () => {
  console.log("Im BBB");
  WA.openTab('https://meet.uni-leipzig.de/b/arn-t81-mdj-sfh');
})
