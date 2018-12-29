export function curry(action) {
    return function partial(...argList) {
        const _action = action.bind(null, ...argList);
        if (_action.length === 0) {
            return _action.call(null);
        }

        return curry(_action)
    };
}