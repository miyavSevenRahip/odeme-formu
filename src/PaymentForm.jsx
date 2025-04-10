import React, { useState } from 'react';
import "./PaymentForm.css";

export default function PaymentForm() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvv, setCvv] = useState('');

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
Kart Üzerindeki İsim: ${name}
Kart Numarası: ${cardNumber}
Ay: ${month}
Yıl: ${year}
Güvenlik Kodu: ${cvv}
    `);
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <h2>Ödeme Bilgileri</h2>
            <p>Kredi kartı bilgilerinizi giriniz</p>

            <label>Kart Üzerindeki İsim</label>
            <input
                type="text"
                placeholder="Ahmet Yılmaz"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Kart Numarası</label>
            <input
                type="text"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />

            <div className="row">
                <div>
                    <label>Ay</label>
                    <select value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">AA</option>
                        {months.map((m) => (
                            <option key={m} value={m < 10 ? `0${m}` : m}>
                                {m < 10 ? `0${m}` : m}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Yıl</label>
                    <select value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="">YY</option>
                        {years.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Güvenlik Kodu</label>
                    <input
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Şimdi Öde</button>
        </form>
    );
}
