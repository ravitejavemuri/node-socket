const expect = require('expect');
const { generateMessage } = require('./message');
describe('generateMessage', () => {
    it('shoild generate a correct message object', () => {
        let from ="Rav";
        let text = "Hiii";
        let message = generateMessage(from , text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});