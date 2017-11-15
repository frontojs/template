export default [
  { name: 'posts', path: '/posts', children: [
      { name: 'show', path: '/:id' }
    ] 
  }
];
