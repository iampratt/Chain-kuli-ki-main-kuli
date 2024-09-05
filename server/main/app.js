// backend/app.js
const express = require('express');
const { Web3 } = require('web3');
const contract = require('@truffle/contract');
const cors = require('cors');
const bodyParser = require('body-parser');
const CertificateRegistryJSON = require('../blockchain/build/contracts/CertificateRegistry.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const web3 = new Web3('http://127.0.0.1:7545');
const CertificateRegistry = contract(CertificateRegistryJSON);
CertificateRegistry.setProvider(web3.currentProvider);

app.post('/issue-certificate', async (req, res) => {
  const { studentAddress, certificateData } = req.body;
  const certificateHash = web3.utils.sha3(JSON.stringify(certificateData));
  const accounts = await web3.eth.getAccounts();
  const instance = await CertificateRegistry.deployed();
  await instance.issueCertificate(studentAddress, certificateHash, {
    from: accounts[0],
  });
  res.json({ success: true, certificateHash });
});

app.post('/verify-certificate', async (req, res) => {
  const { certificateData } = req.body;
  const certificateHash = web3.utils.sha3(JSON.stringify(certificateData));

  const instance = await CertificateRegistry.deployed();
  const isValid = await instance.verifyCertificate.call(certificateHash);

  res.json({ isValid });
});

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
