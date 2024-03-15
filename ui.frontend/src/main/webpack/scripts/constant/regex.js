export const RegexTypes = {
    search: /^[a-zA-Z0-9+-/ ]+$/,
    noSpecialChar: /^[a-zA-Z0-9]+$/,
    onlySpaceAllowed: /^[a-zA-Z0-9_ ,]*$/,
    email: /^([\w\.\-])+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/,
    name: /^\S*$/,
    number: /^[0-9]+$/,
    alphabet: /^[a-zA-Z]+$/,
    alphabetWithSpace: /^[a-zA-Z\s]+$/,
    postal: /^\d{4}$/,
    xssPrevention: /^(?!\s*$)[^<>`]+$/
}