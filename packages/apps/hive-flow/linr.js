module.exports = {
    "extends": [
        "standard",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect",
            "flowVersion": "0.53"
        }
    },
    "overrides": [
        {
            "files": ["*.js", "*.jsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "off"
            }
        }
    ]
}