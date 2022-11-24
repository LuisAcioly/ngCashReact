import { Alert } from "@mui/material";
import './FeedbackStyle.css';

interface IFeedbackProps {
    showMessage: boolean;
}

export const Feedback: React.FC<IFeedbackProps> = ({showMessage}) => {
    if(showMessage){
        return (
            <div className="message">
                <Alert severity="error"  variant="outlined">Usuário ou senha invalidos.</Alert>
            </div>
        );
    }
    
    return null;
}