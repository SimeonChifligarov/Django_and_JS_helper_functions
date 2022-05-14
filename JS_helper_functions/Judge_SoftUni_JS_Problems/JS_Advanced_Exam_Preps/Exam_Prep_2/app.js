window.addEventListener('load', solve);

function solve() {
    // console.log('it works!');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);

    const tableBody = document.getElementById('furniture-list');

    function onAdd(ev) {
        ev.preventDefault();
        // console.log('clicked');

        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;

        if (model == '' || year == '' || description == '' || price == ''
            || Number(year) <= 0 || Number(price) <= 0 || isNaN(Number(year)) || isNaN(Number(price))) {
            return;
        };
        // console.log('passed');

        const moreBtn = e('button', { className: 'moreBtn' }, 'More Info');
        moreBtn.addEventListener('click', onMoreLess);

        const buyBtn = e('button', { className: 'buyBtn' }, 'Buy it');
        buyBtn.addEventListener('click', (ev) => onBuy(ev, Number(price).toFixed(2)));

        let newTr1 = e('tr', { className: 'info' },
            e('td', {}, `${model}`),
            e('td', {}, `${Number(price).toFixed(2)}`),
            e('td', {}, moreBtn, buyBtn)
        );

        let newTr2 = e('tr', { className: 'hide' },
            e('td', {}, `Year: ${year}`),
            e('td', { colSpan: '3' }, `Description: ${description}`)
        );

        tableBody.appendChild(newTr1);
        tableBody.appendChild(newTr2);



        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';


        function onMoreLess(ev) {
            ev.target.textContent = ev.target.textContent == 'More Info' ? 'Less Info' : 'More Info';
            
            const divElement = ev.target.parentElement.parentElement.nextSibling;
            // console.log(divElement);
            if (ev.target.textContent == 'Less Info') {
                // divElement.style = 'display: contents';
                divElement.style.display = 'contents';
            } else {
                // divElement.style = 'display: none';
                divElement.style.display = 'none';
            }
        }

        function onBuy(ev, price) {

            const totalPriceEl = document.querySelector('.total-price');
            let currenPrice = Number(totalPriceEl.textContent);
            
            totalPriceEl.textContent = (currenPrice + Number(price)).toFixed(2);
            
            
            ev.target.parentElement.parentElement.remove();
        }

    }



    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(el => {
            if (typeof el == 'string' || typeof el == 'number') {
                const node = document.createTextNode(el);
                result.appendChild(node);
            } else {
                result.appendChild(el);
            }
        });

        return result;
    }
}
