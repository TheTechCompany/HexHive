export const authDirective = (name: string) => {
    return {
        authDirectiveTypeDefs: `directive @${name}(capabilities: [String], roles: [String], role: String, capability: String) on`
    }
}
