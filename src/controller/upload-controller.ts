import UploadService from '../service/upload-service';

class upLoadController {
  private service: UploadService = new UploadService();

  upload = async (ctx) => {
    const { originalFilename, newFilename } = ctx.request.files.file;
    const url = this.service.upload(originalFilename, newFilename);
    ctx.body = url ;
  };
}

export default new upLoadController();

