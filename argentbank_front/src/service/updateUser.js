import React, { useState } from 'react';
import User from '../pages/User';
import { userData } from '../store/todoActions'

const PutName = (lastName, firstName) => {
    // const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('token'));
    fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            lastName: lastName,
            firstName: firstName
        })
    }).then(resp => resp.json())
    .then(
        (result) => {
            if(result.status !== 200) {
                console.log(result)
            }else {
                userData(result.body.firstName, result.body.lastName);
                const modal = document.getElementById('modal');
                const page = document.getElementById('main');

                page.classList.remove('flou')
                page.classList.add('not-flou')
                modal.classList.remove('show')
                modal.classList.add('cancel_modal')
            }
        }
    )
}

export default PutName;