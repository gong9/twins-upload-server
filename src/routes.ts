import uploadController from './controller/upload-controller';

export default [
  {
    path: '/upload',
    method: 'post',
    action: uploadController.upload
  }
];
