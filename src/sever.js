const express = require('express')
//import express from 'express';
//import configViewEngine from './config/viewEngine';
const configViewEngine = require('./config/viewEngine');
const app = express()
//const path = require('path');
configViewEngine(app);
app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, './index.html'));
  res.render('test/index.ejs')
})

app.listen(3000)
//tao 1 nhanh moi tren git 
//git checkout -b REPO
//keo code ve:+ tao thu muc + mo git bat + git clone (url) [vid4 nodejs BK :21:47] roi cd den thu muc chua code keo ve + git checkout dev(de tao nhanh)
//khong tai node modules len github , nen khi keo source code ve phai : npm install