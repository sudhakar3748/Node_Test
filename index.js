const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' ) {
        res.end('ABES ENGineering college');
    }
    else if (req.url === '/contact' ) {
        res.end('802 , Tower 6 , Panchsheel Wellington , Ghaziabad , UP , 201016, 7233934311');
    }
    else if (req.url === '/about'){
        res.end('We are student of ABES Engineering College');
    }
    
    else {
        res.statusCode = 404;
        res.end('404 Page Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server running ');
});
