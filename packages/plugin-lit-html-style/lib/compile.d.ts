export interface Options {
    file: string;
    data: string;
}
export interface Result extends Options {
}
export interface Compiler {
    (options: Options): Promise<Result>;
}
export declare const compiler: Compiler;
export default compiler;
