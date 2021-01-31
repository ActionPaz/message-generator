function pickStock() {
    const stockArray = ['Sampo A', 'Altia', 'Wärtsilä', 'Outokumpu', 'Nokia', 'Fortum', 'Harvia', 'Nordea', 'Finnair', 'Rovio'];
    return stockArray[Math.floor(Math.random() * stockArray.length)];
}

function pickAdjective() {
    const adjectiveArray = ['interesting', 'purple', 'rigid', 'ripe', 'lemony', 'bad to the bone', 'explosive', 'ready to go', 'like this is it', 'thirsty'];
    return adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
}

function pickAdverb() {
    const adverbArray = ['definitely', 'probably', 'surely', 'without a doubt', 'for sure', 'maybe', 'possibly', 'absolutely', 'swiftly', 'quickly'];
    return adverbArray[Math.floor(Math.random() * adverbArray.length)];
}

function pickVerb() {
    const verbArray = ['buy', 'sell', 'hold'];
    return verbArray[Math.floor(Math.random() * verbArray.length)];
}

function pickPhrase() {
    const phraseArray = ['The stars are aligned.', 'The cards have spoken.', 'The Force is strong in this one.', 'The future is set.', 'The spirits are present.'];
    return phraseArray[Math.floor(Math.random() * phraseArray.length)];
}

console.log();
console.log(`The stock of ${pickStock()} looks ${pickAdjective()}!`);
console.log(`You should ${pickAdverb()} ${pickVerb()}.`);
console.log();
console.log(pickPhrase());