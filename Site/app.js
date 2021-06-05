process.env.NODE_ENV = 'dev'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var leiturasRouter = require('./routes/leituras');
var publicacoesRouter = require('./routes/publicacoes');
var publicacoesRouter2 = require('./routes/publicacoes2');
var publicacoesRouter3 = require('./routes/publicacoes3');
var publicacoesRouter4 = require('./routes/publicacoes4');

var app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/publicacoes', publicacoesRouter);
app.use('/publicacoes2', publicacoesRouter2);
app.use('/publicacoes3', publicacoesRouter3);
app.use('/publicacoes4', publicacoesRouter4);

module.exports = app;
