'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.getUsers);
  router.patch('/user', controller.user.patchUser);
  router.post('/user', controller.user.addUser);
};
