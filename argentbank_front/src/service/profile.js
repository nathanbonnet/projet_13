import { userData } from '../store/todoActions'

const Profile = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }).then(resp => resp.json())
    .then(
        (result) => {
            if(result.status !== 200) {
                console.log(result)
            }else {
                userData(result.body.firstName, result.body.lastName);
            }
        }
    )
}

export default Profile