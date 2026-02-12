'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeStore = {

    store: new JsonStore('./models/employee-store.json', { employee: {} }),
    collection: 'employee',
    // array: 'creators',

    getEmployeeInfo() {
        return this.store.findAll(this.collection);
    },

};

export default employeeStore;
