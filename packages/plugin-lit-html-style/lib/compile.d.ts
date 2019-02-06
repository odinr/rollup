export interface Options {
    file: string;
    data: string;
}
export interface Result {
    data: string;
}
export interface Compiler {
    (options: Options): Promise<Result>;
}
export declare const compiler: Compiler;
export default compiler;
