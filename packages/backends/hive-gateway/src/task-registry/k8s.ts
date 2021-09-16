import {KubeConfig, CoreV1Api, loadYaml, loadAllYaml, KubernetesObject, KubernetesObjectApi} from '@kubernetes/client-node';
import { any } from 'async';
import fs from 'fs';
import path from 'path'

const kc = new KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(CoreV1Api);
const client = KubernetesObjectApi.makeApiClient(kc)


export const apply = async (spec: string) => {
    const specifications = loadAllYaml(spec)
    const created: KubernetesObject[] = [];

    for(const spec of specifications){
 // this is to convince the old version of TypeScript that metadata exists even though we already filtered specs
        // without metadata out
        spec.metadata = spec.metadata || {};
        spec.metadata.annotations = spec.metadata.annotations || {};
        delete spec.metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'];
        spec.metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'] = JSON.stringify(spec);
        try {
            // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
            // block.

            // console.log(spec)
            const r = await client.read({apiVersion: 'tekton.dev/v1beta1', kind: 'Task', metadata: {name: "stp2glb"}});
            console.log("BODY", r.body)
            // we got the resource, so it exists, so patch it

            const response = await client.patch(spec, "true", undefined, undefined, undefined, {
                headers: {
                    'Content-Type': 'application/merge-patch+json'
                }
            });
            created.push(response.body);
        } catch (e) {
            console.log(e)
            // we did not get the resource, so it does not exist, so create it
            const response = await client.create(spec);
            created.push(response.body);
        }
    }
    return created;

}

