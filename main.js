function hasTwoCubeSums(n) {
	let count = 0;
    let limit = Math.cbrt(n);

    for (let i = 0; i < limit; i++) {
        for (let j = i; j < limit; j++) {
            if (i ** 3 + j ** 3 == n) {
                count++;
            }

            if (count >= 2) {
                return true;
            }
        }
    }
    return false;
}


//console.log(hasTwoCubeSums(42));


function ipv4Parser(ip, mask){
    let parsedIP = ip.split(".").map(el => +el);
    let parsedMask = mask.split(".").map(el => +el);

    let network = [];
    let host = [];
    for (let i = 0; i < parsedIP.length; i++) {
        network[i] = parsedIP[i] & parsedMask[i];
        host[i] = parsedIP[i] - network[i];
    }
    return [network.join("."), host.join(".")];
}

//console.log(ipv4Parser('192.168.50.1', '255.255.255.0'));


function whatCentury(year) {
    let first = year.slice(0, 2);
    let last = year.slice(2, 4);

    if (last != "00") {
        first++;
    }

    let add = "th";
    if (first < 11 || first > 13) {
        switch (first % 10) {
            case 1: add = "st"; break;
            case 2: add = "nd"; break;
            case 3: add = "rd"; break;
            default: add = "th"; break;
        }
    }

    return first + add;
}

//console.log(whatCentury("2011"));


function findMissing(list) {  
    let resI = 0;

    if (list[1] - list[0] != list[2] - list[1]) {
        resI = list[1] - list[0] > list[2] - list[1] ? 0 : 1;
    }
    else {
        let d = list[1] - list[0];
        for (let i = 3; i < list.length; i++) {
            if (list[i] - list[i - 1] != d) {
                resI = i - 1;
            }
        }
    }

    return list[resI] + (list[resI + 1] - list[resI]) / 2;
}

//console.log(findMissing([1, 2, 3, 4, 5, 7, 8]))


function primeFactors(n){
    let d = 2;
    let power = 0;
    let preResult = [];

    // Проверка на 2
    while (n % d === 0) {
        n /= d;
        power++;
    }
    if (power > 0) {
        preResult.push(power === 1 ? `(${d})` : `(${d}**${power})`);
    }
    d++;

    // Нечётные числа
    while (d * d < n) {
        power = 0;

        while (n % d === 0) {
            n /= d;
            power++;
        }

        if (power > 0) {
            preResult.push(power === 1 ? `(${d})` : `(${d}**${power})`);
        }
        d += 2;    
    }

    if (n != 1) {
        preResult.push(`(${n})`);
    }

    return preResult.join("");
}

//console.log(primeFactors(7775460))


function toWeirdCase(string){
    return string.split(" ").map(word => 
        [...word].map((ch, i) =>
            i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
        ).join("")
    ).join(" ");
}

//console.log(toWeirdCase("String"));


function wave(str){
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            continue;

        result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    }

    return result
}

//console.log(wave("s t r i n g"))


function expandedForm(num) {
    let preResult = [];
    let count = 0;

    while (num > 0) {
        if (num % 10 != 0) {
            preResult.push(`${num % 10}${'0'.repeat(count)}`);
        }
        num = Math.floor(num / 10);
        count++;
    }

    return preResult.reverse().join(" + ");
}

//console.log(expandedForm(123));


function solution(str){
   let flag = str.length % 2 == 0;
   let result = [];

   for (let i = 0; i < str.length - (flag ? 0 : 1); i += 2) {
        result.push(str[i] + str[i + 1]);
   }

   if (!flag) {
        result.push(str[str.length - 1] + "_");
   }

   return result;
}

//console.log(solution("abc"));


function bingo(ticket, win){
    let count = 0;

    ticket.map(el => {
        for (let i = 0; i < el[0].length; i++) {
            if (el[0].charCodeAt(i) === el[1]) {
                count++;
                break;
            }
        }
    })

    return count >= win ? "Winner!" : "Loser!";
}

//console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));


function domainName(url){
    let regex = /(https?:\/\/)?(www\.)?/;
    return url.replace(regex, "").split(".")[0];
}

//console.log(domainName("http://github.com/carbonfive/raygun"));


function longest(arr, n) {
    //return arr.sort((a, b) => b.length - a.length)[n - 1];

    return arr.map((str, index) => ({ str, index })).sort((a, b) =>
      b.str.length - a.str.length || a.index - b.index
    )[n - 1].str;
}

//console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1));


function hexStringToRGB(hexString) {
    return {
        r: parseInt(hexString.slice(1, 3), 16),
        g: parseInt(hexString.slice(3, 5), 16),
        b: parseInt(hexString.slice(5), 16),
    }
}

//console.log(hexStringToRGB("#FF9933"));


function isCircleSorted( arr ){
    let i = 0;
    for (; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            break;
        }
    }

    
    if (i < arr.length - 1) {
        i++;
        let size = i + arr.length - 1;
        for (; i < size; i++) {
            if (arr[(i + 1) % arr.length] < arr[i % arr.length]) {
                return false;
            }
        }
    }

    return true;
}

//console.log(isCircleSorted([6, 2, 3, 4, 5]));


Array.prototype.square = function() {
    return this.map(el => el ** 2);
}

Array.prototype.cube = function() {
    return this.map(el => el ** 3);
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}

Array.prototype.sum = function() {
    let sum = 0;
    this.forEach(el => sum += el);
    return sum;
}

Array.prototype.even = function() {
    let result = []
    this.forEach(el => {
        if (el % 2 === 0)
            result.push(el);
    });
    return result;
}

Array.prototype.odd = function() {
    let result = []
    this.forEach(el => {
        if (el % 2 !== 0)
            result.push(el);
    });
    return result;
}