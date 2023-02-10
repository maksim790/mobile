import SQLite, {
  openDatabase
} from 'react-native-sqlite-storage';

export default class Database {
  init() {
    this.db = SQLite.openDatabase({
        name: 'TasksDatabase',
        // location: 'default',
      },
      () => {
        console.log('hell ya!')
      },
      error => {
        console.log(error)
      }
    )

    this.db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS SuperTasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), 
          content VARCHAR(100), checked VARCHAR(10), hash VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("table created successfully");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  }

  async addTask(task) {
    console.log('task to add: ')
    console.log(task)
    this.db.transaction(function (txn) {
      txn.executeSql(
        'INSERT INTO SuperTasks (name, content, checked, hash) VALUES (?,?,?,?)',
        [task.name, task.content, task.checked.toString(), task.id],
        (txn, results) => {
          console.log('task added')
          console.log('res:' + results.rowsAffected)
        }
      );
    });
  }

  async editTask(task) {
    console.log('task to update: ')
    console.log(task)
    this.db.transaction(function (txn) {
      txn.executeSql(
        'UPDATE SuperTasks SET name = ? , content = ?, checked = ? WHERE hash = ?',
        [task.name, task.content, task.checked.toString(), task.id],
        (txn, results) => {
          console.log('task updated')
          console.log('res:' + results.rowsAffected)
        }
      );
    });
  }

  async deleteTask(id) {
    console.log('id to delete: ' + id)
    this.db.transaction(function (txn) {
      txn.executeSql(
        'DELETE FROM SuperTasks WHERE hash = ?', [id],
        (txn, results) => {
          console.log('task deleted')
          console.log('res:' + results.rowsAffected)
        }
      );
    });
  }

  // async setData(data){
  //   this.db.transaction(function (txn) {
  //     txn.executeSql(
  //       'INSERT INTO SuperTasks (name, content, checked, hash) VALUES (?,?,?,?)',
  //       [data[data.length-1].name, data[data.length-1].content, data[data.length-1].checked, data[data.length-1].id],
  //       (txn, results) => {
  //         console.log('set:' + data.length)
  //         console.log('Results', results.rowsAffected);
  //       }
  //     );
  //   });
  // }

  getData(setTasks) {
    let data
    this.db.transaction((txn) => {
      txn.executeSql(
        'SELECT * FROM SuperTasks',
        [],
        (txn, results) => {
          const length = results.rows.length
          console.log('length: ' + length)
          let task, tasks = []
          for (let i = 0; i < length; i++) {
            data = results.rows.item(i)
            console.log(data)
            task = {
              ...results.rows.item(i),
              checked: data.checked == 'true',
              id: data.hash
            }
            tasks.push(task)
          }

          setTasks(tasks)
        }
      );
    });

    return data
  }
}