import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './Loader.css';

export default function Loader() {
    return (
        <div className="loader">
            <h3 className="title">Your app is loading</h3>
            <FontAwesomeIcon className="icon" icon={faCircleNotch} spin size="2x" />
        </div>
    );
}
