import RNFS from 'react-native-fs';

export default class FileSystem {
    constructor() {
        this.path = RNFS.DownloadDirectoryPath
        this.fileName = '/1000.json'
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

    addTask(task) {
        RNFS.readFile(this.fullPath, 'utf8')
            .then(res => {
                console.log(task)
                let tasks = []
                try{
                    tasks = [...(JSON.parse(res)), task]
                }catch{
                    tasks = [task]
                }
                console.log(tasks)
                this.setData(tasks)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    editTask(editedTask) {
        RNFS.readFile(this.fullPath, 'utf8')
            .then(res => {
                const data = JSON.parse(res)
                console.log('parsed:')
                console.log(data)
                console.log(editedTask)

                const newTasks = data?.map((task) => {
                    if(task.id == editedTask.id){
                      return editedTask
                    }
                    return task
                })

                console.log(newTasks)
                this.setData(newTasks)
                //console.log(res)
                //let d = JSON.parse(res)
                //console.log(d[0])
            })
    }

    async deleteTask(id) {
        RNFS.readFile(this.fullPath, 'utf8')
            .then(res => {
                const data = JSON.parse(res)
                const newTasks = data?.filter((task) => {
                    if(task.id != id)
                        return task
                })

                console.log(newTasks)
                this.setData(newTasks)
            })
    }

    async getData(setTasks) {
        RNFS.readFile(this.fullPath, 'utf8')
            .then(res => {
                setTasks(JSON.parse(res))
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}