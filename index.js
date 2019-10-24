// import express (after npm install express)

var builder = require('xmlbuilder');
 
var xml = builder.create('root')
  .ele('CardOperation')
    .ele('validation')
      .ele('denis').up('denis')
      
  .end({ pretty: true});
 
console.log(xml);
