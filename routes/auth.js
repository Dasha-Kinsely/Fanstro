import { wrapAsync} from "./helpers/wrapAsync";
import Auth from '../controllers/auth';

module.exports = (api) => {
    api.route('/auth/signup').post(wrapAsync(Auth.signup));
    api.route('/auth/signin').post(wrapAsync(Auth.signin));
    api.route('/auth/rest-pass').post(wrapAsync(Auth.resetPass));
    api.route('/auth/forgot-pass').post(wrapAsync(Auth.forgotPass));
}

