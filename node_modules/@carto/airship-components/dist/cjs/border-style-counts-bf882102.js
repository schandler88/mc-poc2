'use strict';

function borderStyleCounts(borderStyle) {
    return ['none', 'initial', 'inherit', 'hidden', 'unset'].indexOf(borderStyle) === -1;
}

exports.borderStyleCounts = borderStyleCounts;
