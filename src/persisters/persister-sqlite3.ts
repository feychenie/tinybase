import {IdObj, objMap} from '../common/obj';
import {Persister, PersisterListener} from '../types/persisters';
import {Database} from 'sqlite3';
import {Store} from '../types/store';
import {arrayMap} from '../common/array';
import {createCustomPersister} from '../persisters';
import {createSqlite3Persister as createSqlite3PersisterDecl} from '../types/persisters/persister-sqlite3';
import {getSqlitePersistedFunctions} from './common';
import {promise} from '../common/other';

export const createSqlite3Persister = ((
  store: Store,
  db: Database,
): Persister => {
  const [getPersisted, setPersisted] = getSqlitePersistedFunctions(
    (sql: string, args: any[] = []): Promise<void> =>
      promise((resolve) => db.run(sql, args, () => resolve())),
    (sql: string): Promise<any[][]> =>
      promise((resolve) =>
        db.all(sql, (_, rows: IdObj<any>[]) =>
          resolve(
            arrayMap(rows, (row: IdObj<any>) => objMap(row, (value) => value)),
          ),
        ),
      ),
  );

  const addPersisterListener = (listener: PersisterListener): (() => void) => {
    const observer = () => listener();
    db.on('change', observer);
    return observer;
  };

  const delPersisterListener = (observer: () => void): any =>
    db.off('change', observer);

  return createCustomPersister(
    store,
    getPersisted,
    setPersisted,
    addPersisterListener,
    delPersisterListener,
  );
}) as typeof createSqlite3PersisterDecl;