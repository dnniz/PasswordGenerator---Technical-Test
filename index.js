
function passwordGenerator(charsQuantity) {

    console.log('Initial solution - passwordGenerator');
    // Implement function


    if(!Number.isInteger(charsQuantity))
        return 'Not an Integer'

    if(charsQuantity < 3)
        return 'Minimum length allowed: 3'

    const minQuantity = 3;
    const passwordLength = charsQuantity > minQuantity ? charsQuantity : minQuantity;

    let passGenerated = '';

    const templateNumbers = '0123456789';
    const templateSymbols = '~!@#$%^&*_-+=`|(){}[]:;""<>,.?/';
    const templateUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const templateLowerCase = 'abcdefghijklmnopqrstuvwxyz';

    const templates = [templateNumbers, templateSymbols, templateUpperCase, templateLowerCase];

    const templateUsed = [];

    for(let i = 1; i <= passwordLength; i++){
        let randomIndex = 0;
        let currentTemplate = '';
    
        //If the length of templates used is the same as the templates so skip the random template
        if(templateUsed.length < minQuantity){
            // Take random template except previous template used
            const notUsedYetTemplates = templates.filter( template => !templateUsed.includes(template) );
            randomIndex = Math.floor(Math.random() * notUsedYetTemplates.length);
            currentTemplate =  notUsedYetTemplates[randomIndex];
        }else{
            // Take random from used templates
            randomIndex = Math.floor(Math.random() * templateUsed.length);
            currentTemplate =  templateUsed[randomIndex];
        }

        // Save template usage
        templateUsed.push(currentTemplate);

        // Extract random character from current template
        const randomCharacterIndex = Math.floor(Math.random() * currentTemplate.length);
        const randomCharacter = currentTemplate[randomCharacterIndex];

        // Merge random character for the password
        passGenerated = passGenerated + randomCharacter
    }

    console.log("TEST:passGenerated:", passGenerated);

    return passGenerated; 
}



module.exports = {
    passwordGenerator
};
console.log("Hello CodeSandbox");
