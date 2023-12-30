import { useAuthStore } from 'stores/auth-store';

export default (to:any, from:any, next:any) =>
{
    const auth = useAuthStore();

    if(!auth.token) {
        next({ name: 'login' });
    }
    else {
        next();
    } 
}