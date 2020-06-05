var Service = require('node-windows').Service;

var svc = new Service({
    name: 'MJML server',
    description: 'MJML rendering server',
    script: 'index.js'
})

var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
case 'uninstall':
    console.log('un-installing mjml-server, bye bye!');
    svc.uninstall();
    break;
case 'install':
    console.log('installing mjml-server, welcome home!');
    svc.on('install', function() {
        svc.start();
    })
    svc.install();
    break;
default:
    console.log('command : node service.js [install|uninstall]');
}
