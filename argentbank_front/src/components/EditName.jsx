import React from 'react';
import PutName from '../service/updateUser'
import "../styles/index.scss"
import "../styles/main.scss"


const submit = () => {
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;

    PutName(lastName, firstName)
}

const cancel = () => {
    const modal = document.getElementById('modal');
    const page = document.getElementById('main');

    page.classList.remove('flou')
    page.classList.add('not-flou')
    modal.classList.add("cancel_modal");
    modal.classList.remove("show");
}


const EditName = () => {
    return (
        <div id="modal" className="bloc_modal cancel_modal">
            <div className="modal bg-dark">
                <h1 className="modale_title">Edit Name</h1>
                <label for='firstName'>Modifier le prénom</label>
                <input type="text" id="firstName"/>
                <label for='lastName'>Modifier le nom</label>
                <input type="text" id="lastName"/>
                <div className='bloc_btn'>
                    <button onClick={cancel} className="cancel btn_modal">Cancel</button>
                    <button onClick={submit} className="sumbit btn_modal">Enregister</button>
                </div>
            </div>
        </div>
    )
}

export default EditName;