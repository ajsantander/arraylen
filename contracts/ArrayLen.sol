pragma solidity ^0.4.24;

contract ArrayLen {
    function checkLen(uint256[3] memory _input) public pure returns (bool) {
        return _input.length == 3;
    }
}
