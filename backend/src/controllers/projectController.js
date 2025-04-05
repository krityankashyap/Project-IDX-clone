import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';

const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req , res) => {

 // create a unidue id and then inside the projects folder create a new folder with that id
    const projectId = uuid4();
    console.log("new projectid is :" , projectId);
    
    await fs.mkdir(`./projects/${projectId}`);

 // after this call the npm vite@create command in the newly created projects folder

    const response = await execPromisified('npm create vite@latest sandbox -- --template react' , {
      cwd : `./projects/${projectId}`
    })
 
    

 return res.json({
  msg : "success",
  data : projectId
 })


}