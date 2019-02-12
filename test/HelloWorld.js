const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', (accounts) => {

  it("Has a default value", async () => {
    let instance = await HelloWorld.deployed();
    let _messsage = await instance.message();

    assert.equal(_messsage, "hello world");
  });

  it("Shoud update the value of message", async () => {
    let instance = await HelloWorld.deployed();
    await instance.updateMessage("new message");
    let _message = await instance.message();
    assert.equal(_message, "new message");
  });

  it("Should allow the owner to update the value of message", async() => {
    let instance = await HelloWorld.deployed();
    await instance.updateMessage("newer message");
    let _message = await instance.message();
    assert.equal(_message, "newer message");
    
  });

  it("Should NOT let non owner update message", async () => {
    let instance = await HelloWorld.deployed();

    try {
      //assert.fail();
      //console.log("after fail");
      await instance.updateMessage("newest message", { from: accounts[1] });
      console.log("This passed when it should have failed");
      assert.fail();
    }
    catch (err) {
    //console.log("catch");
      let newMessage = await instance.message();
      assert.equal(newMessage, "newer message");
    }
  });

    it("Num a default value", async () => {
    let instance = await HelloWorld.deployed();
    let _num = await instance.num();

    assert.equal(_num, 0);
  });

  it("Shoud update the value of num", async () => {
    let instance = await HelloWorld.deployed();
    await instance.updateNum(2);
    let _num = await instance.num();
    assert.equal(_num, 2);
  });

  it("Should allow the owner to update the value of num", async() => {
    let instance = await HelloWorld.deployed();
    await instance.updateNum(5);
    let _num = await instance.num();
    assert.equal(_num, 5);
    
  });

  it("Should NOT let non owner update message", async () => {
    let instance = await HelloWorld.deployed();

    try {
      //assert.fail();
      //console.log("after fail");
      await instance.updateNum(7, { from: accounts[1] });
      console.log("This passed when it should have failed");
      assert.fail();
    }
    catch (err) {
    //console.log("catch");
      let newNum = await instance.num();
      assert.equal(newNum, 5);
    }
  });
});
