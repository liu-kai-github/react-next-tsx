const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const redirects = [
    // {from: '/old-link-1', to: '/new-link-1'},
    // {from: '/old-link-2', to: 'https://externalsite.com/new-link-2'},
];


app
    .prepare()
    .then(() => {
        const server = express();

        redirects.forEach(({from, to, type = 301, method = 'get'}) => {
            server[method](from, (req, res) => {
                res.redirect(type, to)
            })
        });

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post';
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams)
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000')
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });