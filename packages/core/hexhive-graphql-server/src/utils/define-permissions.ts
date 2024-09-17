import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import { conditionsMatcher } from "./query-matcher";

export const definePermissions = (user: { permissions: { policies: { effect: string, verbs: string[], resource: string, conditions?: string }[] }[] }) => {

    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    user?.permissions?.map((perm) => {
        perm.policies.map((policy) => {
            policy.verbs.map((verb) => {
                if (policy.effect == 'Allow') {
                    can(verb, policy.resource, policy.conditions ? JSON.parse(policy.conditions) : undefined)
                } else if (policy.effect == 'Deny') {
                    cannot(verb, policy.resource, policy.conditions ? JSON.parse(policy.conditions) : undefined)
                }
            })

        })
    })

    return build({ conditionsMatcher })
}
