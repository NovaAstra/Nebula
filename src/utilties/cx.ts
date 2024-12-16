export type ClassName = string | boolean | null | undefined;

export function cx(...args: ClassName[]): string[];
export function cx(): string[] {
    let attributes = [],
        i = 0,
        arg: unknown;

    for (; i < arguments.length;) {
        if ((arg = arguments[i++]) && typeof arg === "string") {
            attributes.push(arg);
        }
    }
    return attributes;
}

