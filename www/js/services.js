/**
 * Created by dhruv on 11/03/2016.
 */

function Auth(rootRef, $firebaseAuth) {
    return $firebaseAuth(rootRef);
}
Auth.$inject = ['rootRef', '$firebaseAuth'];

.factory('Auth', Auth);