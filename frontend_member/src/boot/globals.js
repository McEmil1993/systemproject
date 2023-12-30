import global_mixins from '../mixins/global_mixins';

export default ({ app, router, store }) =>
{
    app.mixin(global_mixins);
}