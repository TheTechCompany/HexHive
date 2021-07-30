import { Models } from '@hive-flow/data-types'
import mongoose from 'mongoose'
const {
  User, Project, File
} = Models;


async function create_file(template: any) {
  let owner_id = await User.findOne({id: template.uploader})

  console.log(owner_id)
  let file = await new File({
    //id: template.id,
    name: template.name,
    extension: template.extension,
    mimeType: template.mimetype,
    owner: owner_id._id,
    timestamp: template.uploadedAt,
    status: template.status
  })

  return await file.save();
}


/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  // Write migration here

  console.log("Migrating up")
  let projects = await Project.find();

  let migrated: number = 0;

  console.log(projects)
  await Promise.all(projects.map(async (project: any) => {

    //Create files from internal references

    const files : any[] = await Promise.all((project.files || []).map(async (file: any) => {
      const result =  await create_file(file)
      return result;
    }))

    console.log(files.map((x) => x._id))
    //Create new project using refs
    let new_project = new Project({
      ...project,
      id: project.id,
      files: files.map((x) => x._id.toString())
    })

    await new_project.save();

    await project.remove()

    migrated++;
  }))

  console.log("Migrateed up", migrated)

}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  // Write migration here

  let projects = await Project.find().populate('files');

  await Promise.all(projects.map(async (project: any) => {

    let files = await (project.files || []).map(async (file: any) => ({
      id: file.id,
      name: file.name,
      uploader: file.owner,
      uploadedAt: file.timestamp,
      status: file.status,
      extension: file.extension,
      mimetype: file.mimeType
    }))

    let new_project = new Project({
      id: project.id,
      name: project.name,
      files
    })

    await new_project.save()

    await project.remove()
  }))
}
