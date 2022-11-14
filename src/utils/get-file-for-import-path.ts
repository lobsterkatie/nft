
import { dirname, basename } from 'path';

export function getReadableFilePath(path: string): { path: string, filePath: string, fileQuery: string} {
    const dir = dirname(path);
    const fullFile = basename(path);
    const fileQuery = fullFile.includes('?') ? fullFile.slice(fullFile.indexOf('?')) : '';
    const file = fullFile.includes('?') ? fullFile.slice(0, fullFile.indexOf('?')) : fullFile;

    const filePath = dir === '.' ? file : `${dir}/${file}`;

    return {
        path,
        filePath,
        fileQuery
    };
}