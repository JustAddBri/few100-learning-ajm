type Transformer = (x: string) => string;
/*export function formatName(first: string, last: string, transformer?: Transformer): string {
    let fullName = `${last}, ${first}`;

   if (transformer) {
        fullName = transformer(fullName);
    }
    return fullName;
}*/

export function formatName(first: string, last: string, transformer: Transformer = (x) => x): string {
    return transformer(`${last}, ${first}`);
}