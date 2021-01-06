'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/v1/user', controller.user.getUsers);
  router.patch('/v1/user', controller.user.patchUser);
  router.post('/v1/user', controller.user.addUser);
  router.get('/v1/errorTest', controller.user.errorTest);
};
