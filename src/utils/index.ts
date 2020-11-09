import { RoleType } from "../definitions";

const s4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export const guid = () => {
  return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4());
}

export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function simpleDeepClone<T>(source: T) {
  return JSON.parse(JSON.stringify(source)) as T;
}

export const parseRoleTypeStrToEnum = (roleTypeStr: string): RoleType => {
  switch (roleTypeStr) {
    case RoleType.Warrior.toString(): {
      return RoleType.Warrior;
    }
    case RoleType.Knight.toString(): {
      return RoleType.Knight;
    }
    case RoleType.Assasin.toString(): {
      return RoleType.Assasin;
    }
    default:
      return RoleType.Warrior;
  }
}

export const parseObjectValuesToFix2 = (obj: any) => {
  Object.keys(obj).forEach(key => {
    if (obj[key].toFixed) {
      obj[key] = Number(obj[key].toFixed(2));
    }
  })
}