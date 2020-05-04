'use strict';

const core = require('./core-894cddb9.js');

/**
 * Common fragment used in widgets to manage status.
 *
 * @param isLoading
 * @param error
 * @param isEmpty
 * @param heading
 * @param errorDescription
 * @param noDataMessage
 * @param fragment
 */
function contentFragment (isLoading, error, isEmpty, heading, errorDescription, noDataMessage, fragment) {
    if (isLoading) {
        return core.h("as-loader", { class: heading ? 'content as-pb--36' : 'content as-pb--20' });
    }
    if (error) {
        return core.h("p", { class: 'content as-body' }, errorDescription || 'Unexpected error');
    }
    if (isEmpty) {
        return core.h("p", { class: 'content as-body' }, noDataMessage);
    }
    return fragment;
}

exports.contentFragment = contentFragment;
