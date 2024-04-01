export class Log {
    static success(msg:string){
        console.log(`\x1b[30m \x1b[42m ${msg} \x1b[0m`);
    }
    static danger(msg:string){
        console.log(`\x1b[30m \x1b[41m ${msg} \x1b[0m`);
    }
    static info(msg:string){
        console.log(`\x1b[30m \x1b[43m ${msg} \x1b[0m`)
    }
}