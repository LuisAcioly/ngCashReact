const getMessage = (response: any) => {

    if(response.data.length === 2){
        return {
            usernameMessage: response.data[0].constraints.minLength,
            passwordMessage: response.data[1].constraints.matches,
            sucessMessage: ''
        }
    }

    else if(response.data[0].property === 'username'){
        return {
            usernameMessage: response.data[0].constraints.minLength,
            passwordMessage: '',
            sucessMessage: ''
        }
    }

    else if(response.data[0].property === 'password'){
        return {
            usernameMessage: '',
            passwordMessage: response.data[0].constraints.matches,
            sucessMessage: ''
        }
    }

    return {
        usernameMessage: response.data,
        passwordMessage: '',
        sucessMessage: ''
    }
}


const filterResponse = (response: any) => {
    if(response.statusText === "OK"){
        return  {
            usernameMessage: '',
            passwordMessage: '',
            sucessMessage: 'Usuário cadastrado com sucesso.'
        };
    }

    if(response.response){
        return {
            usernameMessage: response.response.data,
            passwordMessage: '',
            sucessMessage: ''
        }
    }
    else{
        return getMessage(response);
    }
    
}

const MessageService = {
    filterResponse
}

export default MessageService;