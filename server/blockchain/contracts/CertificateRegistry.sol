// contracts/CertificateRegistry.sol
pragma solidity ^0.8.0;

contract CertificateRegistry {
    struct Certificate {
        address student;
        string ipfsHash;
        uint256 issueDate;
    }

    event CertificateIssued(
        address indexed student,
        string ipfsHash,
        uint256 issueDate
    );

    mapping(string => Certificate) public certificates;

    function issueCertificate(
        address _student,
        string memory _ipfsHash
    ) public {
        require(
            bytes(certificates[_ipfsHash].ipfsHash).length == 0,
            "Certificate already exists."
        );

        certificates[_ipfsHash] = Certificate({
            student: _student,
            ipfsHash: _ipfsHash,
            issueDate: block.timestamp
        });

        emit CertificateIssued(_student, _ipfsHash, block.timestamp);
    }

    function verifyCertificate(
        string memory _ipfsHash
    ) public view returns (bool) {
        return bytes(certificates[_ipfsHash].ipfsHash).length != 0;
    }
}
