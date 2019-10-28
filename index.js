var builder = require('xmlbuilder');
const express = require('express')
const app = express()
const port = 3000
 
var xml = builder.create('smartCardTransactionLog', {encoding: 'UTF-8'})
  .ele('deviceInformation')
    .ele('deviceType', 'officePos').up()
    .ele('deviceVersion', '19.09.17').up()
    .ele('deviceID', '002406F05264').up()
    .ele('deviceTransactionCounter', '1').up()
    .ele('faretableTimestamp', '2019-10-09T06:24:00.963Z').up()
    .ele('revenueMode', 'inService').up()
    .ele('operationMode', 'issuing').up()
    .ele('operatorTypeExternalID', '1').up()
    .ele('operatorTypeName', 'a').up()
    .ele('publicTransportOrganizationRef', 'Hubli').up()
  .end({ pretty: true});
 
console.log(xml);



app.get('/', (req, res) => res.send('Hello World!'))
app.post('createxml', function (req, res) {
  console.log(req)
  res.send('Got a ')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


 /*.ele('deviceInformation', '').up()
.ele('deviceType', 'officePos').up()
.ele('locationInformation', '').up()
.ele('financialTransaction', '').up()
.ele('validationInformation', '').up()
.ele('cardReference', '').up()
.ele('cardSnapshot', '').up()
.ele('cardOperation', '').up()
.ele('cardHolderInfoBasic', '').up()
.ele('cardHolderInfoExtended', '').up()*/