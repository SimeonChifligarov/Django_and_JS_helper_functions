function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };


    async function depart() {
        try {
            departBtn.disabled = true;

            let nextStopId = stop.next;
            const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;

            const resp = await fetch(url);

            if (resp.ok === false) {
                throw new Error(`${resp.status} ${resp.statusText}`)
            }
            
            const data = await resp.json();

            stop = data;

            label.textContent = `Next stop ${stop.name}`

            arriveBtn.disabled = false;

        } catch (error) {
            alert('Error', error);
        }
    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();