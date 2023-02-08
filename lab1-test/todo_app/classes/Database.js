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

  async insert(task){
    this.db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO tasks (name, content, checked) VALUES (?,?,?)',
        ['Cry', 'qweqweqweqwe', 'false'],
        // [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
      );
    });
  }

  async select(){
    this.db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tasks',
        [],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          console.log(results.rows.item(0))
        }
      );
    });
  }
}

// const createTable = () => {
//   db.transaction((tx => {
//     tx.executeSql(
//       "CREATE TABLE IF NOT EXISTS "
//       + "Users "
//       + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"     
//     )
//   }))
// }