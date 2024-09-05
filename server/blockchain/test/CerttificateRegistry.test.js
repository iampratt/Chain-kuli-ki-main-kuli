// test/CertificateRegistry.test.js
const CertificateRegistry = artifacts.require('CertificateRegistry');

contract('CertificateRegistry', (accounts) => {
  it('should issue and verify a certificate', async () => {
    const instance = await CertificateRegistry.deployed();
    const certificateHash = web3.utils.sha3('Test Certificate');
    await instance.issueCertificate(accounts[1], certificateHash, {
      from: accounts[0],
    });
    const isValid = await instance.verifyCertificate.call(certificateHash);
    assert.equal(isValid, true, 'Certificate should be valid');
  });
});
