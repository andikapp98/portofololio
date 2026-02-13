import { type SchemaTypeDefinition } from 'sanity'
import {projectType} from './project'
import {serviceType} from './service'
import {profileType} from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, serviceType, profileType],
}
