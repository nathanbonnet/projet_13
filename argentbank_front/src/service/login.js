import { userError } from '../store/actions'

const Login = (email, password) => {
    fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(resp => resp.json())
    .then(
        (result) => {
            if(result.status !== 200) {
                userError(result.message)
            }else {
                localStorage.setItem("token", JSON.stringify(result.body.token));
                if(result.body.token) {
                    window.location.replace('/User')
                }
            }
        }
    )
}

export default Login;