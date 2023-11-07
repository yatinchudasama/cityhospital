import { deletRequest, getRequest, postRequest, putRequest } from "../request"


export const getMedicinesData = () => {
   return getRequest('medicines')
}

export const addMedicinesData = (data) => {
    return postRequest('medicines', data)
}

export const deletMedicinesData = (id) => {
    return deletRequest('medicines/', id)
}

export const updatedicinesData = (data) => {
    return putRequest('medicines', data)
}