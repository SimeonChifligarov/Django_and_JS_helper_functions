function solve(httpObj) {
    validateMethod(httpObj);
    validateURI(httpObj);
    validateVersion(httpObj);
    validateMessage(httpObj);

    return httpObj;

    function validateMethod(httpObj) {
        let propName = 'method';
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        if (httpObj[propName] === undefined || !validMethods.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validateURI(httpObj) {
        let propName = 'uri';
        let uriRegex = /(\*)|^[a-zA-Z0-9\.]+$/;

        if (httpObj[propName] === undefined || !uriRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateVersion(httpObj) {
        let propName = 'version';
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (httpObj[propName] === undefined || !validVersions.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateMessage(httpObj) {
        let propName = 'message';
        let messageRegex = /^[^<>\\'"&]*$/;

        if (httpObj[propName] === undefined || !messageRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

}


// console.log(solve({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }
// ));

// console.log(solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }
// ));



// let obj = {
//     method: 'POST',
//     uri: 'home.bash',
//     version: 'HTTP/2.0'
// };

// console.log(solve(obj));

// let obj2 = {
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   };
  
// console.log(solve(obj2));