import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

class FileSystem{
    constructor(){
        this.path = RNFS.DownloadDirectoryPath
        this.fileName = '/tasks.json'
        this.fullPath = this.path + this.fileName
    }

    getPath(){
        return this.fullPath
    }

    async init(){
        console.log('init here')
        RNFS.exists(this.fullPath)
        .then((res) => {
            if(res){
                console.log('file exists')
            }else{
                console.log('no file')
                RNFS.writeFile(this.fullPath, '', 'utf8')
                .then((res) => {
                    console.log('file is created')
                })
                .catch((err) => {
                    console.log(err.message)
                })
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    
    async saveFile(data){
        RNFS.writeFile(this.fullPath, JSON.stringify(data))
        .then(() => {
            console.log('file saved')
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    readFile = async () => {
        const obj = await RNFS.readFile(this.fullPath, 'utf8')
        return await eval(JSON.parse(obj))
    }
}

export default FileSystem