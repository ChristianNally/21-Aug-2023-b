const express = require('express');
const app = express();
const PORT = 8081;

// CONFIG
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} PATH: ${req.url}`);
    next();
});

// DATABASE
const memes = {
    'meme1': {
            url: 'http://example.com/pic1.jpg',
            text: 'Any Idiot Can Be Uncomfortable',
        },
    'meme2': {
        url: 'http://example.com/pic2.jpg',
        text: 'One does not simply learn web dev!',
    },
    'testcase': {
        url: 'https://packaged-media.redd.it/ds30yujm6ty81/pb/m2-res_720p.mp4?m=DASHPlaylist.mpd&v=1&e=1693954800&s=684469b16cbacbaa4463db1d5e7262f10ff316ba#t=0',
        text: 'Passin all the test cases be like:'
    },
    'pain': {
        'url': 'https://inteng-storage.s3.amazonaws.com/img/iea/yrwQvLJbON/sizes/programmer-memes_md.jpg',
        'text': 'Humour based my pain!'
    }
};

//
// ROUTES
//

// add
app.get('/add/new', (req, res) => {
    res.render('new'); // show the form for the new meme
});

app.post('/add/new', (req, res) => {
    console.log('req.body', req.body);

    memes[req.body.key] = {
        text: req.body.text,
        url: req.body.url
    };

    res.redirect('/');
});

// edit
app.get('/edit/:key', (req, res) => {
    const memeKey = req.params.key;
    const templateVars = {
        memeKey: memeKey,
        meme: memes[memeKey]
    };
    res.render('edit', templateVars); // show the form for the new meme
});

app.post('/edit/:key', (req, res) => {
    console.log('req.body', req.body);

    memes[req.params.key] = {
        text: req.body.text,
        url: req.body.url
    };

    res.redirect('/');
});

// browse (home)
app.get('/', (req, res) => {

    const templateVars = {
        memes: memes
    };

    res.render('home', templateVars); // render a template
});

// read
app.get('/read/:key', (req, res) => {

    console.log('req.params', req.params);
    const memeKey = req.params.key;

    const templateVars = {
        memeKey: memeKey,
        meme: memes[memeKey]
    };

    res.render('read', templateVars); // render a template
});

// delete
app.get('/delete/:key', (req, res) => {

    console.log('req.params', req.params);
    const memeKey = req.params.key;

    delete memes[memeKey];

    res.redirect('/');
});


// LISTENER

app.listen(PORT, () => {
    console.log(`Server is listening on PORT=${PORT}`);
});