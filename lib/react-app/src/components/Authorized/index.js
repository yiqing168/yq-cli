import Authorized from './Authorized';
import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';
import check from './CheckPermissions.js';

Authorized.Secured = Secured;
Authorized.AuthorizedRoute = AuthorizedRoute;
Authorized.check = check;

export default Authorized;