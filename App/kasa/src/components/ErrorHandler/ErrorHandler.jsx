import {Link} from "react-router-dom";
function ErrorHandler() {
    const content= [
        <h1 className="ErrorCode">404</h1>,
        <p>Oups! La page que vous demandez n'existe pas.</p>,
        <Link to={`/Home/`}>Retourner sur la page d'accueil</Link>
    ];

    return content;

}
export default ErrorHandler;