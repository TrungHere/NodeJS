//import express from "express";
const express = require('express');

const configViewEngine = (app) => {
    app.set('view engine', "ejs");
    app.set('views',".src/views");

}

export default configViewEngine;
//const configViewEngine: (app: any) => void