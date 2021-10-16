module.exports = function(subject, paramType, paramValue) {
    var logLocation = subject[0];
    const fs = require("fs");
    var validLogPathLocation = logLocation.replace(/\\/g, "\\\\");
    if(paramType=="t"){
    if(paramValue=="json"){
        fs.readFile(logLocation, 'utf8', function (err,data) {
            if (err) {
                return console.log('Error lokasi file tidak ditemukan !');
            }

            try {
                var jsonString = JSON.stringify(data);
                var jsonLocation = validLogPathLocation.replace('.log','_convertJson.json');
                var unescapedJsonString = jsonString.replace(/\\"/g, '"');
                var validJsonString = unescapedJsonString.slice(1, -1);
                var jsonObj = JSON.parse(validJsonString);
                fs.writeFileSync(jsonLocation, JSON.stringify(jsonObj, null, 2))
                console.log('Succes convert to .json');
              } catch (err) {
                console.error(err)
              }
        });
    }
    else {
        fs.readFile(logLocation, 'utf8', function (err,data) {
            if (err) {
                return console.log('Error lokasi file tidak ditemukan !');
            }
      
            try {
                var txtLocation = validLogPathLocation.replace('.log','_convertTxt.txt');
                var unescapedTxtString = data.replace(/\\"/g, '"');
                fs.writeFileSync(txtLocation, unescapedTxtString)
                console.log('Succes convert to .txt');
              } catch (err) {
                console.error(err)
              }
    });
    }
}
else {
    var validTargetPathLocation = paramValue.replace(/\\/g, "\\\\");
    if(paramValue.includes("json")){
        fs.readFile(logLocation, 'utf8', function (err,data) {
            if (err) {
                return console.log('Error lokasi file tidak ditemukan !');
            }

            try {
                var jsonString = JSON.stringify(data);
                var jsonLocation = validTargetPathLocation;
                var unescapedJsonString = jsonString.replace(/\\"/g, '"');
                var validJsonString = unescapedJsonString.slice(1, -1);
                var jsonObj = JSON.parse(validJsonString);
                fs.writeFileSync(jsonLocation, JSON.stringify(jsonObj, null, 2))
                console.log('Succes convert to .json');
              } catch (err) {
                console.error(err)
              }
        });
    }
    else if(paramValue.includes("txt")){
        fs.readFile(logLocation, 'utf8', function (err,data) {
            if (err) {
                return console.log('Error lokasi file tidak ditemukan !');
            }
      
            try {
                var txtLocation = validTargetPathLocation;
                var unescapedTxtString = data.replace(/\\"/g, '"');
                fs.writeFileSync(txtLocation, unescapedTxtString)
                console.log('Succes convert to .txt');
              } catch (err) {
                console.error(err)
              }
    });
    }
    else {
        console.log('Format file harus .json atau .txt');
    }
}
};