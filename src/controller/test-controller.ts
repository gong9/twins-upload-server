
class testController {
  hi = async (ctx) => {
    ctx.body = 'hello world' ;
  };
}

export default new testController();

