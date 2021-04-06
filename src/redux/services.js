import React from 'react'
import axios from 'axios'

export async function fetchData(payload) {
    const res = axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${payload.city}`)
                .then(res => res)
                .catch(error => error)
    return res;
}
