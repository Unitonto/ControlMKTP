import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "entries"));
                let fetchedEntries = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setEntries(fetchedEntries);
            } catch (error) {
                console.error("Error fetching entries: ", error);
            }
        };
        fetchEntries();
    }, []);

    return (
        <div>
            <h1>Cruce Ciego de Recepción</h1>
            <button>Conteo Guardia</button>
            <button>Conteo Ayudante</button>
            <button>Conciliatoria</button>
        </div>
    );
}

export default App;
