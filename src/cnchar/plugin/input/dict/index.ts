import dict from "./wubi.json";

export function getDict() {
  return { wubi: dict };
}

export function setDict<T>(key: string, value: T) {
   (dict as any)[key] = value;
}
