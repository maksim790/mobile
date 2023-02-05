import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

class FileSystem{
    constructor(){
        this.path = RNFS.DownloadDirectoryPath
        this.fileName = '/todoApp.json'
        this.fullPath = this.path + this.fileName
    }

    getPath(){
        return this.path
    }

    async init(){
        if(await !RNFS.exists(this.fullPath)){
            await RNFS.writeFile(this.fullPath, null, 'utf-8')
        }

        console.log('file exists')
    }
    
    async saveFile(data){
        await RNFS.writeFile(his.fullPath, data)

        console.log('file saved')
    }

    async getData(){
        return await RNFS.readFile(this.fullPath);
    }
}

export default FileSystem