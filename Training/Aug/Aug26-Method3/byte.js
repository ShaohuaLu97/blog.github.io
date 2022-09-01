function byteSize(string) {
    return Buffer.byteLength(string, 'utf8');
}

console.log(byteSize('Hello World!'))