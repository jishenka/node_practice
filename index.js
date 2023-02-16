const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////////// FILE

// Blocking and synchrounous 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `info: ${textIn}`;
// fs.writeFileSync('./txt/input.txt', textOut);
// console.log(textIn);


// Non-blocking and asynchronous
// fs.readFile('./txt/star.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('File has been written 😂');
//             });
//         });
//     });
// });
// console.log('Will read file!');
///////////////////////////////////////

////////////////////////////////////// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/overview') {
        res.end('overview!');
    } else if (pathName === '/product') {
        res.end('Product!');
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header': "HHH"
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Listening to req on port 8080.');
})