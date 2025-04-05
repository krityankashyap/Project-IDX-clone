import util from 'util';
import child_process from 'child_process';

const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req , res) => {

 const {stdout , stderr} = await execPromisified('pwd');

 console.log("stdout :" , stdout);
 console.log("stderr :" , stderr);


 return res.json({
  msg : "success",
 })


}