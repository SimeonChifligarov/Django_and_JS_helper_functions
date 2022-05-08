function solution(heroInfo) {
    const heroesArr = [];

    for (const currentHero of heroInfo) {
        let [name, level, items] = currentHero.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        let currentHeroObj = {name, level, items};
        heroesArr.push(currentHeroObj);
    }

    console.log(JSON.stringify(heroesArr));
}

// solution([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// );
// solution(['Jake / 1000 / Gauss, HolidayGrenade']);
// 