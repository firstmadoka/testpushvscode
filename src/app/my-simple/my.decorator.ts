export function MyDecorator(message: string) {
    return function (target: Function) {
        target.prototype.sayHello = message;
    }
}