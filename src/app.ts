const form = document.querySelector<HTMLFormElement>('form')!;
const ageInput = document.querySelector<HTMLFormElement>('#age')!;
const themesInput = document.querySelector<HTMLFormElement>('#themes')!;
const submitButton = document.querySelector<HTMLFormElement>('button')!;
const footer = document.querySelector<HTMLFormElement>('footer')!;

const generatePromptByageAndThemes = (age: number, themes = '') => {
    let prompt = `Propose moi, avec un ton joyeux et amical, 5
    idées de cadeaux pour une personne âgée de ${age} ans`;
    if(themes.trim()) {
        prompt += ` et qui aime les ${themes}`;
    }

    return prompt + " !";
}

const setLoadingitems = () => {
    footer.textContent = "Chargement des supers idées en cours !";
    footer.setAttribute("aria-busy", 'true');
    submitButton.setAttribute("aria-busy", "true");
    submitButton.disabled = true;
}

const removeLoadingItems =() => {
    footer.setAttribute("aria-busy", 'false');
    submitButton.setAttribute("aria-busy", "false");
    submitButton.disabled = false;
}