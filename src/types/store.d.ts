/// store

import {Id, IdOrNull, Ids, Json} from './common.d';

/// TablesSchema
export type TablesSchema = {[tableId: Id]: {[cellId: Id]: CellSchema}};

/// CellSchema
export type CellSchema =
  | {type: 'string'; default?: string}
  | {type: 'number'; default?: number}
  | {type: 'boolean'; default?: boolean};

/// ValuesSchema
export type ValuesSchema = {[valueId: Id]: ValueSchema};

/// ValueSchema
export type ValueSchema =
  | {type: 'string'; default?: string}
  | {type: 'number'; default?: number}
  | {type: 'boolean'; default?: boolean};

/// NoTablesSchema
export type NoTablesSchema = {[tableId: Id]: {[cellId: Id]: {type: 'any'}}};

/// NoValuesSchema
export type NoValuesSchema = {[valueId: Id]: {type: 'any'}};

/// OptionalTablesSchema
export type OptionalTablesSchema = TablesSchema | NoTablesSchema;

/// OptionalValuesSchema
export type OptionalValuesSchema = ValuesSchema | NoValuesSchema;

/// OptionalSchemas
export type OptionalSchemas = [OptionalTablesSchema, OptionalValuesSchema];

/// NoSchemas
export type NoSchemas = [NoTablesSchema, NoValuesSchema];

/// Tables
export type Tables = {[tableId: Id]: Table};

/// Table
export type Table = {[rowId: Id]: Row};

/// Row
export type Row = {[cellId: Id]: Cell};

/// Cell
export type Cell = string | number | boolean;

/// CellOrUndefined
export type CellOrUndefined = Cell | undefined;

/// Values
export type Values = {[valueId: Id]: Value};

/// Value
export type Value = string | number | boolean;

/// ValueOrUndefined
export type ValueOrUndefined = Value | undefined;

/// TableCallback
export type TableCallback = (
  tableId: Id,
  forEachRow: (rowCallback: RowCallback) => void,
) => void;

/// TableCellCallback
export type TableCellCallback = (cellId: Id, count: number) => void;

/// RowCallback
export type RowCallback = (
  rowId: Id,
  forEachCell: (cellCallback: CellCallback) => void,
) => void;

/// CellCallback
export type CellCallback = (cellId: Id, cell: Cell) => void;

/// ValueCallback
export type ValueCallback = (valueId: Id, value: Value) => void;

/// MapCell
export type MapCell = (cell: CellOrUndefined) => Cell;

/// MapValue
export type MapValue = (value: ValueOrUndefined) => Value;

/// GetCell
export type GetCell = (cellId: Id) => CellOrUndefined;

/// IdAddedOrRemoved
export type IdAddedOrRemoved = 1 | -1;

/// ChangedTableIds
export type ChangedTableIds = {[tableId: Id]: IdAddedOrRemoved};

/// ChangedRowIds
export type ChangedRowIds = {[tableId: Id]: {[rowId: Id]: IdAddedOrRemoved}};

/// ChangedCellIds
export type ChangedCellIds = {
  [tableId: Id]: {[rowId: Id]: {[cellId: Id]: IdAddedOrRemoved}};
};

/// ChangedValueIds
export type ChangedValueIds = {[valueId: Id]: IdAddedOrRemoved};

/// DoRollback
export type DoRollback = (
  getTransactionChanges: GetTransactionChanges,
  getTransactionLog: GetTransactionLog,
) => boolean;

/// TransactionListener
export type TransactionListener = (
  store: Store,
  getTransactionChanges: GetTransactionChanges,
  getTransactionLog: GetTransactionLog,
) => void;

/// HasTablesListener
export type HasTablesListener = (store: Store, hasTables: boolean) => void;

/// TablesListener
export type TablesListener = (
  store: Store,
  getCellChange: GetCellChange | undefined,
) => void;

/// TableIdsListener
export type TableIdsListener = (
  store: Store,
  getIdChanges: GetIdChanges | undefined,
) => void;

/// HasTableListener
export type HasTableListener = (
  store: Store,
  tableId: Id,
  hasTable: boolean,
) => void;

/// TableListener
export type TableListener = (
  store: Store,
  tableId: Id,
  getCellChange: GetCellChange | undefined,
) => void;

/// TableCellIdsListener
export type TableCellIdsListener = (
  store: Store,
  tableId: Id,
  getIdChanges: GetIdChanges | undefined,
) => void;

/// HasTableCellListener
export type HasTableCellListener = (
  store: Store,
  tableId: Id,
  cellId: Id,
  hasTableCell: boolean,
) => void;

/// RowCountListener
export type RowCountListener = (
  store: Store,
  tableId: Id,
  count: number,
) => void;

/// RowIdsListener
export type RowIdsListener = (
  store: Store,
  tableId: Id,
  getIdChanges: GetIdChanges | undefined,
) => void;

/// SortedRowIdsListener
export type SortedRowIdsListener = (
  store: Store,
  tableId: Id,
  cellId: Id | undefined,
  descending: boolean,
  offset: number,
  limit: number | undefined,
  sortedRowIds: Ids,
) => void;

/// HasRowListener
export type HasRowListener = (
  store: Store,
  tableId: Id,
  rowId: Id,
  hasRow: boolean,
) => void;

/// RowListener
export type RowListener = (
  store: Store,
  tableId: Id,
  rowId: Id,
  getCellChange: GetCellChange | undefined,
) => void;

/// CellIdsListener
export type CellIdsListener = (
  store: Store,
  tableId: Id,
  rowId: Id,
  getIdChanges: GetIdChanges | undefined,
) => void;

/// HasCellListener
export type HasCellListener = (
  store: Store,
  tableId: Id,
  rowId: Id,
  cellId: Id,
  hasCell: boolean,
) => void;

/// CellListener
export type CellListener = (
  store: Store,
  tableId: Id,
  rowId: Id,
  cellId: Id,
  newCell: Cell,
  oldCell: Cell,
  getCellChange: GetCellChange | undefined,
) => void;

/// HasValuesListener
export type HasValuesListener = (store: Store, hasValues: boolean) => void;

/// ValuesListener
export type ValuesListener = (
  store: Store,
  getValueChange: GetValueChange | undefined,
) => void;

/// ValueIdsListener
export type ValueIdsListener = (
  store: Store,
  getIdChanges: GetIdChanges | undefined,
) => void;

/// HasValueListener
export type HasValueListener = (
  store: Store,
  valueId: Id,
  hasValue: boolean,
) => void;

/// ValueListener
export type ValueListener = (
  store: Store,
  valueId: Id,
  newValue: Value,
  oldValue: Value,
  getValueChange: GetValueChange | undefined,
) => void;

/// InvalidCellListener
export type InvalidCellListener = (
  store: Store,
  tableId: Id,
  rowId: Id,
  cellId: Id,
  invalidCells: any[],
) => void;

/// InvalidValueListener
export type InvalidValueListener = (
  store: Store,
  valueId: Id,
  invalidValues: any[],
) => void;

/// GetIdChanges
export type GetIdChanges = () => {[id: Id]: 1 | -1};

/// GetCellChange
export type GetCellChange = (tableId: Id, rowId: Id, cellId: Id) => CellChange;

/// CellChange
export type CellChange = [
  changed: boolean,
  oldCell: CellOrUndefined,
  newCell: CellOrUndefined,
];

/// GetValueChange
export type GetValueChange = (valueId: Id) => ValueChange;

/// ValueChange
export type ValueChange = [
  changed: boolean,
  oldValue: ValueOrUndefined,
  newValue: ValueOrUndefined,
];

/// ChangedCells
export type ChangedCells = {
  [tableId: Id]: {[rowId: Id]: {[cellId: Id]: ChangedCell}};
};

/// ChangedCell
export type ChangedCell = [CellOrUndefined, CellOrUndefined];

/// InvalidCells
export type InvalidCells = {
  [tableId: Id]: {[rowId: Id]: {[cellId: Id]: any[]}};
};

/// ChangedValues
export type ChangedValues = {
  [valueId: Id]: ChangedValue;
};

/// ChangedValue
export type ChangedValue = [ValueOrUndefined, ValueOrUndefined];

/// InvalidValues
export type InvalidValues = {[valueId: Id]: any[]};

/// TransactionChanges
export type TransactionChanges = [
  {[tableId: Id]: {[rowId: Id]: {[cellId: Id]: Cell | null} | null} | null},
  {[valueId: Id]: Value | null},
];

/// GetTransactionChanges
export type GetTransactionChanges = () => TransactionChanges;

/// TransactionLog
export type TransactionLog = {
  cellsTouched: boolean;
  valuesTouched: boolean;
  changedCells: ChangedCells;
  invalidCells: InvalidCells;
  changedValues: ChangedValues;
  invalidValues: InvalidValues;
  changedTableIds: ChangedTableIds;
  changedRowIds: ChangedRowIds;
  changedCellIds: ChangedCellIds;
  changedValueIds: ChangedValueIds;
};

/// GetTransactionLog
export type GetTransactionLog = () => TransactionLog;

/// StoreListenerStats
export type StoreListenerStats = {
  /// StoreListenerStats.hasTables
  hasTables?: number;
  /// StoreListenerStats.tables
  tables?: number;
  /// StoreListenerStats.tableIds
  tableIds?: number;
  /// StoreListenerStats.hasTable
  hasTable?: number;
  /// StoreListenerStats.table
  table?: number;
  /// StoreListenerStats.tableCellIds
  tableCellIds?: number;
  /// StoreListenerStats.hasTableCell
  hasTableCell?: number;
  /// StoreListenerStats.rowCount
  rowCount?: number;
  /// StoreListenerStats.rowIds
  rowIds?: number;
  /// StoreListenerStats.sortedRowIds
  sortedRowIds?: number;
  /// StoreListenerStats.hasRow
  hasRow?: number;
  /// StoreListenerStats.row
  row?: number;
  /// StoreListenerStats.cellIds
  cellIds?: number;
  /// StoreListenerStats.hasCell
  hasCell?: number;
  /// StoreListenerStats.cell
  cell?: number;
  /// StoreListenerStats.invalidCell
  invalidCell?: number;
  /// StoreListenerStats.hasValues
  hasValues?: number;
  /// StoreListenerStats.values
  values?: number;
  /// StoreListenerStats.valueIds
  valueIds?: number;
  /// StoreListenerStats.hasValue
  hasValue?: number;
  /// StoreListenerStats.value
  value?: number;
  /// StoreListenerStats.invalidValue
  invalidValue?: number;
  /// StoreListenerStats.transaction
  transaction?: number;
};

/// Store
export interface Store {
  //
  /// Store.getContent
  getContent(): [Tables, Values];

  /// Store.getTables
  getTables(): Tables;

  /// Store.getTableIds
  getTableIds(): Ids;

  /// Store.getTable
  getTable(tableId: Id): Table;

  /// Store.getTableCellIds
  getTableCellIds(tableId: Id): Ids;

  /// Store.getRowCount
  getRowCount(tableId: Id): number;

  /// Store.getRowIds
  getRowIds(tableId: Id): Ids;

  /// Store.getSortedRowIds
  getSortedRowIds(
    tableId: Id,
    cellId?: Id,
    descending?: boolean,
    offset?: number,
    limit?: number,
  ): Ids;

  /// Store.getRow
  getRow(tableId: Id, rowId: Id): Row;

  /// Store.getCellIds
  getCellIds(tableId: Id, rowId: Id): Ids;

  /// Store.getCell
  getCell(tableId: Id, rowId: Id, cellId: Id): CellOrUndefined;

  /// Store.getValues
  getValues(): Values;

  /// Store.getValueIds
  getValueIds(): Ids;

  /// Store.getValue
  getValue(valueId: Id): ValueOrUndefined;

  /// Store.hasTables
  hasTables(): boolean;

  /// Store.hasTable
  hasTable(tableId: Id): boolean;

  /// Store.hasTableCell
  hasTableCell(tableId: Id, cellId: Id): boolean;

  /// Store.hasRow
  hasRow(tableId: Id, rowId: Id): boolean;

  /// Store.hasCell
  hasCell(tableId: Id, rowId: Id, cellId: Id): boolean;

  /// Store.hasValues
  hasValues(): boolean;

  /// Store.hasValue
  hasValue(valueId: Id): boolean;

  /// Store.getTablesJson
  getTablesJson(): Json;

  /// Store.getValuesJson
  getValuesJson(): Json;

  /// Store.getJson
  getJson(): Json;

  /// Store.getTablesSchemaJson
  getTablesSchemaJson(): Json;

  /// Store.getValuesSchemaJson
  getValuesSchemaJson(): Json;

  /// Store.getSchemaJson
  getSchemaJson(): Json;

  /// Store.hasTablesSchema
  hasTablesSchema(): boolean;

  /// Store.hasValuesSchema
  hasValuesSchema(): boolean;

  /// Store.setContent
  setContent([tables, values]: [Tables, Values]): Store;

  /// Store.setTables
  setTables(tables: Tables): Store;

  /// Store.setTable
  setTable(tableId: Id, table: Table): Store;

  /// Store.setRow
  setRow(tableId: Id, rowId: Id, row: Row): Store;

  /// Store.addRow
  addRow(tableId: Id, row: Row, reuseRowIds?: boolean): Id | undefined;

  /// Store.setPartialRow
  setPartialRow(tableId: Id, rowId: Id, partialRow: Row): Store;

  /// Store.setCell
  setCell(tableId: Id, rowId: Id, cellId: Id, cell: Cell | MapCell): Store;

  /// Store.setValues
  setValues(values: Values): Store;

  /// Store.setPartialValues
  setPartialValues(partialValues: Values): Store;

  /// Store.setValue
  setValue(valueId: Id, value: Value | MapValue): Store;

  /// Store.setTransactionChanges
  setTransactionChanges(transactionChanges: TransactionChanges): Store;

  /// Store.setTablesJson
  setTablesJson(tablesJson: Json): Store;

  /// Store.setValuesJson
  setValuesJson(valuesJson: Json): Store;

  /// Store.setJson
  setJson(tablesAndValuesJson: Json): Store;

  /// Store.setTablesSchema
  setTablesSchema(tablesSchema: TablesSchema): Store;

  /// Store.setValuesSchema
  setValuesSchema(valuesSchema: ValuesSchema): Store;

  /// Store.setSchema
  setSchema(tablesSchema: TablesSchema, valuesSchema?: ValuesSchema): Store;

  /// Store.delTables
  delTables(): Store;

  /// Store.delTable
  delTable(tableId: Id): Store;

  /// Store.delRow
  delRow(tableId: Id, rowId: Id): Store;

  /// Store.delCell
  delCell(tableId: Id, rowId: Id, cellId: Id, forceDel?: boolean): Store;

  /// Store.delValues
  delValues(): Store;

  /// Store.delValue
  delValue(valueId: Id): Store;

  /// Store.delTablesSchema
  delTablesSchema(): Store;

  /// Store.delValuesSchema
  delValuesSchema(): Store;

  /// Store.delSchema
  delSchema(): Store;

  /// Store.transaction
  transaction<Return>(actions: () => Return, doRollback?: DoRollback): Return;

  /// Store.startTransaction
  startTransaction(): Store;

  /// Store.finishTransaction
  finishTransaction(doRollback?: DoRollback): Store;

  /// Store.forEachTable
  forEachTable(tableCallback: TableCallback): void;

  /// Store.forEachTableCell
  forEachTableCell(tableId: Id, tableCellCallback: TableCellCallback): void;

  /// Store.forEachRow
  forEachRow(tableId: Id, rowCallback: RowCallback): void;

  /// Store.forEachCell
  forEachCell(tableId: Id, rowId: Id, cellCallback: CellCallback): void;

  /// Store.forEachValue
  forEachValue(valueCallback: ValueCallback): void;

  /// Store.addHasTablesListener
  addHasTablesListener(listener: HasTablesListener, mutator?: boolean): Id;

  /// Store.addTablesListener
  addTablesListener(listener: TablesListener, mutator?: boolean): Id;

  /// Store.addTableIdsListener
  addTableIdsListener(listener: TableIdsListener, mutator?: boolean): Id;

  /// Store.addHasTableListener
  addHasTableListener(
    tableId: IdOrNull,
    listener: HasTableListener,
    mutator?: boolean,
  ): Id;

  /// Store.addTableListener
  addTableListener(
    tableId: IdOrNull,
    listener: TableListener,
    mutator?: boolean,
  ): Id;

  /// Store.addTableCellIdsListener
  addTableCellIdsListener(
    tableId: IdOrNull,
    listener: TableCellIdsListener,
    mutator?: boolean,
  ): Id;

  /// Store.addHasTableCellListener
  addHasTableCellListener(
    tableId: IdOrNull,
    cellId: IdOrNull,
    listener: HasTableCellListener,
    mutator?: boolean,
  ): Id;

  /// Store.addRowCountListener
  addRowCountListener(
    tableId: IdOrNull,
    listener: RowCountListener,
    mutator?: boolean,
  ): Id;

  /// Store.addRowIdsListener
  addRowIdsListener(
    tableId: IdOrNull,
    listener: RowIdsListener,
    mutator?: boolean,
  ): Id;

  /// Store.addSortedRowIdsListener
  addSortedRowIdsListener(
    tableId: Id,
    cellId: Id | undefined,
    descending: boolean,
    offset: number,
    limit: number | undefined,
    listener: SortedRowIdsListener,
    mutator?: boolean,
  ): Id;

  /// Store.addHasRowListener
  addHasRowListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    listener: HasRowListener,
    mutator?: boolean,
  ): Id;

  /// Store.addRowListener
  addRowListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    listener: RowListener,
    mutator?: boolean,
  ): Id;

  /// Store.addCellIdsListener
  addCellIdsListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    listener: CellIdsListener,
    mutator?: boolean,
  ): Id;

  /// Store.addHasCellListener
  addHasCellListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    cellId: IdOrNull,
    listener: HasCellListener,
    mutator?: boolean,
  ): Id;

  /// Store.addCellListener
  addCellListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    cellId: IdOrNull,
    listener: CellListener,
    mutator?: boolean,
  ): Id;

  /// Store.addHasValuesListener
  addHasValuesListener(listener: HasValuesListener, mutator?: boolean): Id;

  /// Store.addValuesListener
  addValuesListener(listener: ValuesListener, mutator?: boolean): Id;

  /// Store.addValueIdsListener
  addValueIdsListener(listener: ValueIdsListener, mutator?: boolean): Id;

  /// Store.addHasValueListener
  addHasValueListener(
    valueId: IdOrNull,
    listener: HasValueListener,
    mutator?: boolean,
  ): Id;

  /// Store.addValueListener
  addValueListener(
    valueId: IdOrNull,
    listener: ValueListener,
    mutator?: boolean,
  ): Id;

  /// Store.addInvalidCellListener
  addInvalidCellListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    cellId: IdOrNull,
    listener: InvalidCellListener,
    mutator?: boolean,
  ): Id;

  /// Store.addInvalidValueListener
  addInvalidValueListener(
    valueId: IdOrNull,
    listener: InvalidValueListener,
    mutator?: boolean,
  ): Id;

  /// Store.addStartTransactionListener
  addStartTransactionListener(listener: TransactionListener): Id;

  /// Store.addWillFinishTransactionListener
  addWillFinishTransactionListener(listener: TransactionListener): Id;

  /// Store.addDidFinishTransactionListener
  addDidFinishTransactionListener(listener: TransactionListener): Id;

  /// Store.callListener
  callListener(listenerId: Id): Store;

  /// Store.delListener
  delListener(listenerId: Id): Store;

  /// Store.getListenerStats
  getListenerStats(): StoreListenerStats;
  //
}

/// createStore
export function createStore(): Store;
