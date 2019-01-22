const Application = require('spectron').Application;
const path = require('path');
var assert = require('assert')



var electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
var appPath = path.join(__dirname, '..');

if (process.platform === 'win32') {
    electronPath += '.cmd';
}

console.log(electronPath)
console.log(appPath)




describe('application launch', function () {
    this.timeout(10000)

    before(function () {
        this.app = new Application({
            path: electronPath,
            args: [appPath]
        });
        return this.app.start()
    })

    after(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop()
        }
    })

    it('shows an initial window', function () {
        return this.app.client.getWindowCount().then(function (count) {
            assert.equal(count, 1)
        })
    })
})