// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $timeout, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
//    $rootScope.deviceToken = 'Waiting...';
//        $rootScope.log = '';
//
//        /* Helper functions */
//        function log(msg) {
//            $timeout(function() {
//                var m = JSON.stringify(msg);
//
//                console.log(m);
//                $rootScope.log += '<br>' + m;
//            }, 300);
//        }
//    var push = new window.VoipPush();
//
//    push.register(function onRegistered(data) {
//        console.log('VOIP PushKit registered');
//        log('VOIP PushKit registered');
//        $rootScope.deviceToken = data.token;
//        log(data.token);
//        console.log(data.token);
//    }, function onNotification(notification) {
//        console.log('VOIP push notification received:');
//        console.log(notification);
//        log('VOIP push notification received:');
//        log(notification.payload);
//    });
    
    

    if (window.cordova && window.Keyboard) {
      // window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
