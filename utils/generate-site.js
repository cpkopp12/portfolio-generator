const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message:'file created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/style.css','./src/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'stylesheet copied'
            });
        });
    });
};

module.exports = { writeFile, copyFile };