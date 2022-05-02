async function getInfo() {
    const stopNameEl = document.getElementById('stopName');
    const timetableEl = document.getElementById('buses');

    const stopId = document.getElementById('stopId').value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        stopNameEl.textContent = 'Loading...';
        timetableEl.replaceChildren();

        const resp = await fetch(url);

        if (resp.status != 200) {
            throw new Error('Stop ID not found')
        }

        const data = await resp.json();

        stopNameEl.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timetableEl.appendChild(liEl);
        });

        // document.getElementById('stopId').value = '';
        
    } catch (error) {
        stopNameEl.textContent = 'Error!';
    }
}
