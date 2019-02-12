pragma solidity ^0.5.0;

contract HelloWorld {

  string public message;
  address public owner;
  uint public num;

  constructor(string memory _message) public {
    message = _message;
    owner = msg.sender;
  }

  modifier onlyOwner() {
  require(msg.sender == owner);
  _;}

  function updateMessage(string memory _message) public onlyOwner {
    message = _message;
  }

  function updateNum(uint _num) public onlyOwner{
    num = _num;
  }
}
