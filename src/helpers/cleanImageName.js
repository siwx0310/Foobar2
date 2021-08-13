export default function cleanImageName(beerName) {
    const newBeerName = beerName.toLowerCase().replaceAll(" ", "");
    const beerNamePath = `./${newBeerName}.png`;
    return beerNamePath;
}