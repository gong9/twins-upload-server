import uploadController from './controller/upload-controller';
import testController from './controller/test-controller';

export default [
  {
    path: '/upload',
    method: 'post',
    action: uploadController.upload
  },
  {
    path: '/test',
    method: 'get',
    action: testController.hi
  }
];
