import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

class FileSystem{
    constructor(){
        this.path = RNFS.DownloadDirectoryPath
        this.fileName = '/999.json'
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
                RNFS.writeFile(this.fullPath, '[{"id":"todo-0","name":"Sleep","content":"do sleep","checked":true}]', 'utf8')
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
        // console.log('stringify: ' + data)
        // RNFS.writeFile(this.fullPath, JSON.stringify(data))
        // .then(() => {
        //     console.log('file saved: ' + data)
        // })
    }

    readFile = async () => {
        return await RNFS.readFile(this.fullPath, 'utf8')
    }
}

export default FileSystem