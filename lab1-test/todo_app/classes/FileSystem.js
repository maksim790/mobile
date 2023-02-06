import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

class FileSystem{
    constructor(){
        this.path = RNFS.DownloadDirectoryPath
        this.fileName = '/tas.json'
        this.fullPath = this.path + this.fileName
    }

    getPath(){
        return this.fullPath
    }

    async init(){
        RNFS.exists(this.fullPath)
        .then((res) => {
            if(res){
                console.log('file exists')
            }else{
                console.log('no file')
                RNFS.writeFile(this.fullPath, '')
                .then((res) => {
                    console.log('file is created')
                })
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    
    async saveFile(data){
        RNFS.writeFile(this.fullPath, data)
        .then(() => {
            console.log('file saved: ' + data)
        })
    }

    readFile = async () => {
        const response = await RNFS.readFile(this.fullPath);
        console.log('data from file: ' + response);
        return response
    };
}

export default FileSystem