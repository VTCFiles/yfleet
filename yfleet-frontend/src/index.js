import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './Appcontext/ContextProvider';
import ModalProvider from './Appcontext/ModalProvider';
import PlanModalProvider from './Appcontext/PlanModalProvider';
import BookAppointmentProvider from './Appcontext/BookAppointment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <ModalProvider>
            <PlanModalProvider>
                <BookAppointmentProvider>
                    <App />
                </BookAppointmentProvider>
            </PlanModalProvider>
        </ModalProvider>
    </ContextProvider>
);

