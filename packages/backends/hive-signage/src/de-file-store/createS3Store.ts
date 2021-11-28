import { S3Datastore } from 'datastore-s3'
import { createRepo,RepoLock } from 'ipfs-repo'
import S3 from 'aws-sdk/clients/s3'
import { BlockstoreDatastoreAdapter } from 'blockstore-datastore-adapter'
import { ShardingDatastore } from 'datastore-core/sharding'
import { NextToLast } from 'datastore-core/shard' 
import * as raw from 'multiformats/codecs/raw'
import * as json from 'multiformats/codecs/json'
import * as dagPb from '@ipld/dag-pb'
import * as dagCbor from '@ipld/dag-cbor'

/**
 * @typedef {import('multiformats/codecs/interface').BlockCodec<any, any>} BlockCodec
 */

/**
 * A convenience method for creating an S3 backed IPFS repo
 *
 * @param {string} path
 * @param {import('aws-sdk/clients/s3')} s3
 * @param {import('ipfs-repo').RepoLock} repoLock
 */
export const createS3Repo = (path: string, s3: S3, repoLock: RepoLock) => {
  const storeConfig = {
    s3,
    createIfMissing: true
  }

  /**
   * These are the codecs we want to support, you may wish to add others
   *
   * @type {Record<string | number, BlockCodec>}
   */
  const codecs = {
    [raw.code]: raw,
    [raw.name]: raw,
    [json.code]: json,
    [json.name]: json,
    [dagPb.code]: dagPb,
    [dagPb.name]: dagPb,
    [dagCbor.code]: dagCbor,
    [dagCbor.name]: dagCbor
  }

  /**
   * @type {import('ipfs-repo/src/types').loadCodec}
   */
  const loadCodec = async (codeOrName: string | number) => {
    if ((codecs as any)[codeOrName]) {
      return (codecs as any)[codeOrName]
    }

    throw new Error(`Unsupported codec ${codeOrName}`)
  }

  return createRepo(path, loadCodec, {
    root: new ShardingDatastore(
      new S3Datastore(path, storeConfig),
      new NextToLast(2)
    ),
    blocks: new BlockstoreDatastoreAdapter(
      new ShardingDatastore(
        new S3Datastore(`${path}blocks`, storeConfig),
        new NextToLast(2)
      )
    ),
    datastore: new ShardingDatastore(
      new S3Datastore(`${path}datastore`, storeConfig),
      new NextToLast(2)
    ),
    keys: new ShardingDatastore(
      new S3Datastore(`${path}keys`, storeConfig),
      new NextToLast(2)
    ),
    pins: new ShardingDatastore(
      new S3Datastore(`${path}pins`, storeConfig),
      new NextToLast(2)
    )
  })
}