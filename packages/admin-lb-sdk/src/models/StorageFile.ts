/* tslint:disable */
import {
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface StorageFileInterface {
  "id"?: any;
  "name"?: any;
  "type"?: any;
  "created"?: any;
  "modified"?: any;
  "systemDomainId"?: any;
  "systemUserId"?: any;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class StorageFile implements StorageFileInterface {
  "id": any;
  "name": any;
  "type": any;
  "created": any;
  "modified": any;
  "systemDomainId": any;
  "systemUserId": any;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: StorageFileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StorageFile`.
   */
  public static getModelName() {
    return "StorageFile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StorageFile for dynamic purposes.
  **/
  public static factory(data: StorageFileInterface): StorageFile{
    return new StorageFile(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'StorageFile',
      plural: 'StorageFiles',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "type": {
          name: 'type',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'any'
        },
        "modified": {
          name: 'modified',
          type: 'any'
        },
        "systemDomainId": {
          name: 'systemDomainId',
          type: 'any'
        },
        "systemUserId": {
          name: 'systemUserId',
          type: 'any'
        },
      },
      relations: {
        systemDomain: {
          name: 'systemDomain',
          type: 'SystemDomain',
          model: 'SystemDomain'
        },
        systemUser: {
          name: 'systemUser',
          type: 'SystemUser',
          model: 'SystemUser'
        },
      }
    }
  }
}
