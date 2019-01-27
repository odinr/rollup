export interface Options {
    file: string;
    data: string;
}
export interface Result extends Options {
}
export declare function process(options: Options): Promise<Result>;
export default process;
