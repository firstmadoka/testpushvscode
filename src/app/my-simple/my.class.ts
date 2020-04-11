import { MyDecorator } from "./my.decorator";

@MyDecorator('สวัสดีชาวโลก')
export class MyClass {
    arrays: number[] = [200, 300, 400, 500];
    objects = { firstname: 'My Firstname', lastname: 'My Lastname' };

    onFunction(param: string): string {
        return `onFunction ${param}`;
    }

    get onGetFunction(): string {
        const sum = 2 + 2 + 2 * 2;
        return `onGetFunction : ${sum}`;
    }

    constructor() {
        this.arrays.push(600);
        this.arrays.push(700);
    }
}