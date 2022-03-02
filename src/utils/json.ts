export function jsonIsNull(json: JSON): boolean {
    return Object.keys(json).length === 0
};