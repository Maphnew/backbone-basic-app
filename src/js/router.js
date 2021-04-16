import { AppRouter } from 'backbone.marionette';
import Controller from "./controller";

export default AppRouter.extend({
    controller: Controller,
    appRoutes: {
        'todos': 'viewTodos',
        'posts': 'viewPosts',
        // 'photos': 'viewPhotos'
    }
})