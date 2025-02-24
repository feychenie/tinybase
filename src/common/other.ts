import {BOOLEAN, FUNCTION, STRING, getTypeOf} from './strings';

const promise = Promise;

export const DEBUG = (globalThis as any).DEBUG ?? true;

export const startInterval = setInterval;
export const stopInterval = clearInterval;

export const mathMax = Math.max;
export const mathMin = Math.min;
export const mathFloor = Math.floor;

export const isFiniteNumber: (num: any) => boolean = isFinite;

export const isInstanceOf = (
  thing: unknown,
  cls: MapConstructor | SetConstructor | ObjectConstructor,
): boolean => thing instanceof cls;

export const isUndefined = (thing: unknown): thing is undefined | null =>
  thing == undefined;

export const ifNotUndefined = <Value, Return>(
  value: Value | undefined,
  then: (value: Value) => Return,
  otherwise?: () => Return,
): Return | undefined => (isUndefined(value) ? otherwise?.() : then(value));

export const isTypeStringOrBoolean = (
  type: string,
): type is 'string' | 'boolean' => type == STRING || type == BOOLEAN;

export const isString = (thing: unknown): thing is string =>
  getTypeOf(thing) == STRING;

export const isFunction = (thing: unknown): thing is (...args: any[]) => any =>
  getTypeOf(thing) == FUNCTION;

export const isArray = (thing: unknown): thing is any[] => Array.isArray(thing);

export const slice = <ArrayOrString extends string | any[]>(
  arrayOrString: ArrayOrString,
  start: number,
  end?: number,
): ArrayOrString => arrayOrString.slice(start, end) as ArrayOrString;

export const size = (arrayOrString: string | any[]): number =>
  arrayOrString.length;

export const test = (regex: RegExp, subject: string): boolean =>
  regex.test(subject);

export const getUndefined = (): undefined => undefined;

export const promiseNew = <Value>(
  resolver: (
    resolve: (value: Value) => void,
    reject: (reason?: any) => void,
  ) => void,
): Promise<Value> => new promise(resolver);

export const promiseAll = async (promises: Promise<any>[]) =>
  promise.all(promises);
