export function getattr(obj: object, attr: string, defaultValue: any = undefined): any {
    const getter = Object.getOwnPropertyDescriptor(obj, attr) || {value: defaultValue}
    return getter.value
};