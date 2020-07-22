export interface IBaseResponse<T> {
    totalRecordCount: number;
    data: Array<T>;
    singleData: T;
    humanReadableMessage: Array<string>;
}