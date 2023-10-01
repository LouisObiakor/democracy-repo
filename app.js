// const path = require('path');

// const allPath ={
//     'seperator' : path.sep,
//     'joiner' : path.join()
// }

// console.log(allPath)

const httpHandle = require('http');

const server = httpHandle.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome home');
    }

    if(req.url === '/about'){
        res.end('About page');
    }
   // res.write('What was i doing since about react');

   res.end('<h1>Oops sorry page does not exist.</h1>')
    
});

server.listen(80)