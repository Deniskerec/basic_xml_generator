var builder = require('xmlbuilder');
 
var xml = builder.create('root', {encoding: 'UTF-8'})
  .ele('scmartCardTransacttionLog')
    .ele('DeviceId', '1232431')
    .ele('DeviceId', '1232431')
  .end({ pretty: true});
 
console.log(xml);
