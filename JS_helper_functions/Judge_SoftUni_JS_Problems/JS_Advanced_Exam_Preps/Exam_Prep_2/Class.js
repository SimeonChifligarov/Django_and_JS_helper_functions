class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
        this._guestsNames = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        }

        const currentArticle = this.listOfArticles.filter(a => (a.articleName == articleName && a.articleModel == articleModel))[0];
        // let newQuantity;
        if (currentArticle) {
            currentArticle.quantity += quantity;
            // newQuantity = currentArticle.quantity;
        } else {
            const newArticle = { articleModel, articleName, quantity };
            this.listOfArticles.push(newArticle);
            // newQuantity = quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }


    inviteGuest(guestName, personality) {
        if (this._guestsNames.includes(guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        const newGuest = { guestName, points: 0, purchaseArticle: 0 }
        if (personality == 'Vip') {
            newGuest.points = 500;
        } else if (personality == 'Middle') {
            newGuest.points = 250;
        } else {
            newGuest.points = 50;
        }

        this.guests.push(newGuest);
        this._guestsNames.push(guestName);

        return `You have successfully invited ${guestName}!`;
    }


    buyArticle(articleModel, articleName, guestName) {
        const currentArticle = this.listOfArticles.filter(a => (a.articleName == articleName && a.articleModel == articleModel))[0];

        if (!currentArticle) {
            throw new Error("This article is not found.");
        }

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        if (!this._guestsNames.includes(guestName)) {
            return "This guest is not invited.";
        }

        const requiredPoints = this.possibleArticles[articleModel];
        const currentGuest = this.guests.filter(g => g.guestName == guestName)[0];
        if (requiredPoints > currentGuest.points) {
            return "You need to more points to purchase the article."
        } else {
            currentGuest.points -= requiredPoints;
            currentGuest.purchaseArticle += 1;
            currentArticle.quantity -= 1;

            return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;
        }
    }

    showGalleryInfo(criteria) {

        const result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            // console.log(this.listOfArticles);
            for (let a of this.listOfArticles) {
                result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`);
            }
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            for (let g of this.guests) {
                result.push(`${g.guestName} - ${g.purchaseArticle}`)
            }
        }

        return result.join('\n');
    }
}



// let art = new ArtGallery("Curtis Mayfield");

// console.log(art.addArticle('picture', 'Mona Liza', 3)) //"Successfully added article Mona Liza with a new quantity- 3.");

// console.log(art.addArticle('Item', 'Ancient vase', 2)) //"Successfully added article Ancient vase with a new quantity- 2.");

// console.log(art.addArticle('picture', 'Mona Liza', 1)) //"Successfully added article Mona Liza with a new quantity- 1.");



// let art = new ArtGallery("Curtis Mayfield");

// art.addArticle('picture', 'Mona Liza', 3);
// art.addArticle('Item', 'Ancient vase', 2);
// art.addArticle('picture', 'Mona Liza', 1);
// // console.log(art.showGalleryInfo('article'))

// art.inviteGuest('John', 'Vip');
// art.inviteGuest('Peter', 'Middle');

// art.buyArticle('picture', 'Mona Liza', 'John');
// // console.log(art.showGalleryInfo('article'))
// art.buyArticle('item', 'Ancient vase', 'Peter');

// console.log(art.showGalleryInfo('article')) //`Articles information:
// // picture - Mona Liza - 3
// // item - Ancient vase - 1`);

// console.log(art.showGalleryInfo('guest')) //`Guests information:
// // John - 1
// // Peter - 1`);

