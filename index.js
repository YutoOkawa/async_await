/**
 * シンプルにPromiseを返す
 * @param {string} value 
 * @returns 
 */
function promiseCallback(value) {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(value);
        }, 2000);
    })
}

/**
 * asyncでPromiseを返す
 * @param {string} value 
 */
async function asyncCallback(value) {
    setTimeout(()=> {
        return value;
    }, 2000);
}

/**
 * 非同期処理
 * @param {string} value 
 */
function callback(value) {
    setTimeout(()=> {
        console.log(value);
    }, 2000);
}

/**
 * Promiseを返す関数を3つ呼び出す
 */
async function promiseFunctions() {
    const a = await promiseCallback('a');
    console.log(a);
    const b = await promiseCallback('b');
    console.log(b);
    const c = await promiseCallback('c');
    console.log(c);
}

/**
 * asyncを返す関数を3つ呼び出す
 */
async function asyncFunctions() {
    const a = await asyncCallback('a');
    console.log(a);
    const b = await asyncCallback('b');
    console.log(b);
    const c = await asyncCallback('c');
    console.log(c);
}

/**
 * 非同期関数を呼び出す
 */
function functions() {
    callback('a');
    callback('b');
    callback('c');
}

// promiseFunctions();  // 同期処理できる
// asyncFunctions();  // 同期処理できない
functions();  // 同期処理できない