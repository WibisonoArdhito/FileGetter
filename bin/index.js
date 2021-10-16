#!/usr/bin/env node
const yargs = require("yargs");
const convertLogFile = require("../util/getLogFile.js");
const helpMenu = require("../util/help.js");

const usage = "\nUsage: filegetter <log_file_address> -t fileType(json or text)";const options = yargs  
      .usage(usage)
      .option("t", {alias:"typeFile", describe: "json or text.", type: "string", demandOption
      : false }) 
      .option("o", {alias:"targetLocation", describe: "place to put converted file", type: "string", demandOption
      : false })   
.option("h", {alias:"caraPengunaan", describe: "Deskripsi Cara Pengunaan.", type: "boolean", demandOption
: false })                                                                                                      
      .help(true)  
      .argv;

      var paramValue;
      var paramType;
      var targetLoc = options.targetLocation;
      var help = options.caraPengunaan;

    if(help==true){
        helpMenu();
    }
    if(help!=true) {
      //Add condition to set parameter
      if(targetLoc == null || targetLoc ==''){
        paramType = 't';
        paramValue= options.typeFile;
      }
      else{
        paramType = 'o';
        paramValue= options.targetLocation;
      }

      // Call getLogFile.js
      convertLogFile(yargs.argv._,paramType,paramValue)
    }
