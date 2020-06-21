function testuserData()
{
const getuserData = require('./Client.getUserData');

it('test polarity of getUserData with async/await', async () => {
    expect.assertions(1);
    const data = await user.getuserData("This is a very good news");
    expect(data.polarity).toEqual('positive');
  });

}

  export { testuserData }
