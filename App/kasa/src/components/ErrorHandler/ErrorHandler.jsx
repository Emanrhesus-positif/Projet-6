import {Link} from "react-router-dom";
function ErrorHandler() {
    const content= [
        <p className="ErrorCode">404</p>,
        <p>Oups! La page que vous demandez n'existe pas.</p>,
        <Link to={`/Home/`}>Retourner sur la page d'accueil</Link>
    ];

    return content;

}
export default ErrorHandler;