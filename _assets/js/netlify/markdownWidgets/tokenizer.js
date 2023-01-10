export default function tokenizer(string) {
    let current = 0;
    let tokens = [];
    while (current < string.length) {
        let char = string[current];
        if (char === '{' && string[current + 1] === '%') {
            let value = '';
            char = string[++current];
            while (char !== '%' && string[current + 1] !== '}') {
                value += char;
                char = string[++current];
            }
            char = string[++current];
            tokens.push({
                type: 'widget',
                value
            });
            continue;
        } else {
            let value = '';
            tokens.push({
                type: 'text',
                value
            });
            current++;
        }
    }
    console.log(tokens);
}
