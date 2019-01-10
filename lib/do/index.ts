import * as math from "./math";

interface ComposableType {
    (...args): any;
}

const chains = new Map<UnaryType, Set<string>>();
const action = new Map<string, ComposableType>();

export {
    math
}
export enum UnaryType {
    NUMBER,
    STRING
}

function toTypeOf(unaryType: UnaryType) {
    switch (unaryType) {
        case UnaryType.STRING:
            return String;
        case UnaryType.NUMBER:
            return Number;
    }
}

export function putLink<T>(key: string, fn: any, group: UnaryType): any {
    if (!chains.has(group)) {
        const set = new Set<string>([key]);

        chains.set(group, set);
    } else {
        const set = new Set<string>(
            [...chains.get(group).values(), key]
        );

        chains.set(group, set);
    }
    const links = [...chains.get(group).values()];



    const actionList = links.reduce((actions, key) => {
        if (!action.has(key)) {
            return actions;
        }
        return actions.concat(action.get(key));
    }, []);

    function it(arg: T) {
        return fn(arg);
    }

    action.set(key, it);

    const chainLinks = links.reduce((chain, K) => {
        chain[K] = action.get(K);

        return chain;
    }, {});

    actionList.forEach(act => {
        Object.assign(act, chainLinks, {});
    });

    return it;
}

