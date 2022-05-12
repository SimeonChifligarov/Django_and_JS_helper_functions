(function () {
    String.prototype.ensureStart = function (str) {
        // if (this.slice(0, str.length) === str) {
        //     return this.toString();
        // } else {
        //     return str + this.toString();
        // }

        // result = this.slice(0, str.length) === str ? this.toString() : str + this.toString();
        // return result;

        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this.toString() + str;
    }

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let words = this.toString().split(' ');
            do {
                words.pop();
            } while (words.join(' ').length + 3 > n)

            let result = words.join(' ') + '...'
            return result;
        }

        if (n > 3) {
            let truncatedWord = this.toString().slice(0, n - 3) + '...';
            return truncatedWord;
        }

        return '.'.repeat(n);

    }

    String.format = function (string, ...params) {
        let replaceRegex = /{(\d+)}/g;
        let replacedString = string.replace(replaceRegex, (match, group1) => {
            let index = Number(group1);
            if (params[index] !== undefined) {
                return params[index];
            }
            return match;
        });
        
        return replacedString;
    }
}())

// let str = 'abc';
// console.log(str.ensureStart('ab'));
// console.log(str.ensureStart('non-case'));
// console.log(str.ensureEnd('bc'));
// console.log(str.ensureEnd('non-case'));
// console.log(str.isEmpty());
// console.log(''.isEmpty());

// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}',
//   'dog');
// console.log(str);
// 