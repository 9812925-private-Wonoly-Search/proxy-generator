const { generateProxy } = require("../src/index");

(async function() {

    let init = Date.now()

    var proxy = await generateProxy();
    console.log(proxy)

    let finish = Date.now()
    console.log(`\nTest finished in : ${finish - init}ms`)
})()