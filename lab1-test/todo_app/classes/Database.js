import SQLite, {openDatabase} from 'react-native-sqlite-storage';

export default class Database{
  init(){
    this.db = SQLite.openDatabase(
      {
        name: 'TasksDatabase',
        // location: 'default',
      },
      () => {console.log('hell ya!')}, 
      error => {console.log(error)}
    )

    this.db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), content VARCHAR(100), checked VARCHAR(10))`,
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

  async setData(data){
    this.db.transaction(function (txn) {
      txn.executeSql(
        'INSERT INTO tasks (name, content, checked) VALUES (?,?,?)',
        [data[0].name, data[0].content, data[0].checked],
        (txn, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  }

  getData(setTasks){
    let data
    this.db.transaction((txn) => {
      txn.executeSql(
        'SELECT * FROM tasks',
        [],
        (txn, results) => {
          data = results.rows.item(0)
          console.log(data)
          setTasks([{...data, checked: (Boolean(data.checked))}])
        }
      );
    });

    return data
  }
}