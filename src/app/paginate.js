
import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // to call the lodaash methods we need to convert the items array to a lodash wrapper
    // // LoDash methods
    // _.slice(items, startIndex)
    // _.take()
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value() // this would convert it back to an array
}