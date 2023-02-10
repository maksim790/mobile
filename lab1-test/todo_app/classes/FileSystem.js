import RNFS from 'react-native-fs';

class FileSystem {
    constructor() {
        this.path = RNFS.DownloadDirectoryPath
        this.fileName = '/tasks.json'
        this.fullPath = this.path + this.fileName
    }

    init() {
        console.log('init here')
        RNFS.exists(this.fullPath)
            .then((res) => {
                if (res) {
                    console.log('file exists')
                } else {
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

    async setData(data) { 
        console.log(data)
        RNFS.writeFile(this.fullPath, JSON.stringify(data))
            .then(() => {
                console.log('file saved')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    async addTask(task) {
        RNFS.readFile(this.fullPath, 'utf8')
            .then(res => {
                console.log(JSON.parse(res))
                const tasks = [...(JSON.parse(res)), task]
                console.log(tasks)
                this.setData(tasks)
            })
    }

    async editTask(editedTask) {
        // console.log('edit task')
        // RNFS.readFile(this.fullPath, 'utf8')
        //     .then(res => {
        //         const tasks = JSON.parse(res).map(task => {
        //             if(task.hash == editedTask.hash)
        //                 return editedTask

        //             return task
        //         })

        //         console.log(tasks)
        //         this.setData(tasks)
        //         //console.log(res)
        //         //let d = JSON.parse(res)
        //         //console.log(d[0])
        //     })
    }

    async deleteTask(hash) {
        // console.log('delete task')
        // RNFS.readFile(this.fullPath, 'utf8')
        //     .then(res => {
        //         const tasks = JSON.parse(res).filter(task => {
        //             if(task.hash != hash)
        //                 return task
        //         })

        //         console.log(tasks)
        //         this.setData(tasks)
        //     })
    }

    async getData() {
        const res = await RNFS.readFile(this.fullPath, 'utf8')
        return eval(JSON.parse(res))
    }
}

export default FileSystem