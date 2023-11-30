export default class uploadService {
  upload = (originalFilename: string, newFilename:string) => {
    const currentUrl = `http://182.92.210.127:8009/image/${newFilename}`;
    return currentUrl
  }
}
