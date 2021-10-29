function bowdlerize(input, dictionary){
    if (typeof input !== 'string'){
        throw new Error('Input should be a string')
    }
    for (let item of dictionary){
        if (typeof item !== 'string'){
            throw new Error('Invalid dictionary format')
        }    
    }
    let items = input.split(' ')
    for (let i = 0; i < items.length; i++){
        if (dictionary.indexOf(items[i].toLowerCase()) !== -1){
            items[i] = items[i][0] + "*".repeat(items[i].length - 2) + items[i][items[i].length - 1]
        }
    }
    return items.join(' ')
}

const app = {
    bowdlerize
};

module.exports = app;