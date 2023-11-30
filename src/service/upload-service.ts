export default class uploadService {
  upload = (originalFilename: string, newFilename:string) => {
    const currentUrl = `http://localhost:8010/image/${newFilename}`;
    return currentUrl
  }
}
