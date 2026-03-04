'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeStore = {

    store: new JsonStore('./models/employee-store.json', { employees: {} }),
    collection: 'employees',

    getEmployeeInfo() {
        return this.store.findAll(this.collection);
    },

};

export default employeeStore;
