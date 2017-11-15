export default [
  { name: 'posts', path: '/posts', children: [
    { name: 'show', path: '/:id' }
  ]},
  { name: 'users', path: '/users', children: [
    { name: 'sign_in', path: '/sign_in' },
    { name: 'forgot_password', path: '/forgot_password' },
    { name: 'registration', path: '/registration' }
  ]}
];
