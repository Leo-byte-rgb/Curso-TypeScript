export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectando: ${this.host} ${this.user} ${this.password}`);
  }
  static getDatabase(host: string, user: string, password: string): Database {
    // factory method
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}
const db1 = Database.getDatabase('sql', 'root', '123454');
const db2 = Database.getDatabase('sql', 'root', '123454');
const db3 = Database.getDatabase('sqlite', 'roodt', '123d4254');

if (db1 === db2) console.log('igual');
if (db1 === db3) console.log('igual');

console.log(db3);
