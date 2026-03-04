'use strict';

import logger from "../utils/logger.js";
import employeeStore from "../models/employee-store.js";

const about = {
    createView(request, response) {
        const viewData = {
            title: "Welcome to the Playlist app!",
            employees: employeeStore.getEmployeeInfo()
        };

        logger.debug(viewData);
        response.render('about', viewData);
    },
};

export default about;
