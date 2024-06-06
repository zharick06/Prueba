import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../..//App.css';


export  function Body() {

    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Realiza la solicitud GET a una API utilizando axios
                const response = await axios.get('https://api-pxebh7jv9-zharick06s-projects.vercel.app');
                // Actualiza el estado 'ordenes' con los datos obtenidos de la API
                setOrdenes(response.data);
            } catch (error) {
                // Se lanza un error si la solicitud a la api falla
                console.error('Error fetching orders:', error);
            }
        };
         // Llama a la función fetchOrders cuando el componente se monta
        fetchOrders();
    }, []);

    // Ordena las órdenes por precio total de mayor a menor
    const sortedOrders = ordenes.slice().sort((a, b) => b.total_price - a.total_price);

    return (
        <>
        <h2>Lista de Órdenes</h2>
        <div className="home">
            {sortedOrders.map(order => (
                         <p>
                        <h3>Order ID: {order.id}</h3>
                        <h4>Email: {order.email}</h4>
                        <h4>Total Price: {order.total_price}</h4>
                        </p>
                   
                ))}
        </div>
        </>
    );
};