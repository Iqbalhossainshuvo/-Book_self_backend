const pick = <T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Pick<T, K> => {
    const finalObj: Pick<T, K> = {} as Pick<T, K>;
    for (const key of keys) {
      if (obj && obj.hasOwnProperty.call(obj, key)) {
        finalObj[key] = obj[key];
      }
    }
    return finalObj;
  };

  export default pick;
