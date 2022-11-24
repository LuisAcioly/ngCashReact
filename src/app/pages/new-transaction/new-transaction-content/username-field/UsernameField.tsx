import { Autocomplete, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../shared/contexts/Auth/AuthContext";
import { useApi } from "../../../../shared/hooks/UseApi";

interface IUsernameProps {
    handleUsername: (arg: string) => void
}

export const UsernameField: React.FC<IUsernameProps> = ({handleUsername}) => {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const api = useApi();
    const context = useContext(AuthContext);

    useEffect(() => {
        async function getUsers() {
            const response = await api.getUsernameList();

            response.forEach((user: any,index: number)=>{
                if(user.username===context.user?.username) response.splice(index,1);;
             });

            setUsers(response);
        }

        getUsers();

    }, []);

    function handleChange(user: any){
        setUsername(user);
        handleUsername(user);
    }

    const flatProps = {
        options: users.map((user: any) => user.username),
    };

    return (
        <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
                onChange={(event: any, user: any ) => {
                    handleChange(user);
                }}
                {...flatProps}
                id="flat-demo"
                renderInput={(params) => (
                <TextField {...params} label="Usuário" variant="standard" />
                )}
            />
        </Stack>
    );
}