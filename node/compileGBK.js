const fs = require('fs')
const path = require('path')

function readText (pathname) {
    var bin = fs.readFileSync(pathname);

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3);
    }

    return bin.toString('utf-8');
}
const str = readText(path.resolve(__dirname, '../static/1.txt'))
console.log(str);


// fs.readFile(path.resolve(__dirname, '../static/1.txt'),function(err,buffer){
//     console.log(buffer[0].toString(16), buffer[1].toString(16));

//     if(buffer[0]==0xff&&buffer[1]==0xfe){

//          console.log('unicode')

//    }else if(buffer[0]==0xfe&&buffer[1]==0xff){

//   　　console.log('unicode')

//    }else if(buffer[0]==0xef&&buffer[1]==0xbb){

// 　　　console.log('utf8')

//    }else{

//   　　console.log('else')

//    }

// })