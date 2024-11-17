
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
    return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
    plop.setHelper("capitalize", (text) => {
        return capitalize(camelCase(text));
    });
    plop.setHelper("camelCase", (text) => {
        return camelCase(text);
    });

    plop.setGenerator("package", {
        description: `Generates a packages`,
        prompts: [
            {
                type: "input",
                name: `name`,
                message: `Enter packages name:`,
                validate: (value) => {
                    if (!value) {
                        return `Packages name is required`;
                    }
                    if (value !== value.toLowerCase()) {
                        return `Packages name must be in lowercase`;
                    }
                    if (value.includes(" ")) {
                        return `Packages name cannot have spaces`;
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "description",
                message: `The description of this packages:`,
            },
        ],
        actions(answers) {
            const actions = [];
            if (!answers) return actions;
            const {name, description} = answers;
            const generatorName = answers['packagesName'] ?? "";

            const data = {
                packagesName: generatorName,
                description,
            };

            actions.push({
                type: "addMany",
                templateFiles: `plop/package/**`,
                destination: `./packages/${name}/{{dashCase packagesName}}`,
                base: `plop/package`,
                data,
                abortOnFail: true,
            });

            return actions;
        }
    })
}