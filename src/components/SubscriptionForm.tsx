import { useState } from "react";
import { SubscriptionType } from '../types';

interface SubscriptionFormProps {
    onAdd: (sub: {
        appName: string;
        amount: number;
        renewalDate: string;
        subscriptionType: SubscriptionType;
    }) => void;
}
const SubscriptionForm:React.FC<SubscriptionFormProps>  = ({ onAdd }) => {
    
    const [appName, setAppName] = useState('');
    const [amount, setAmount] = useState('');
    const [renewalDate, setRenewalDate] = useState('');
    const [subType, setSubType] = useState<SubscriptionType>(SubscriptionType.MONTHLY);
    const [isSubmitting, setIsSubmitting] = useState(false);


    
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName || !amount || !renewalDate) return;

    setIsSubmitting(true);
    // Simulate slight delay for UX
        setTimeout(() => {
        onAdd({
            appName,
            amount: parseFloat(amount),
            renewalDate,
            subscriptionType: subType
        });
        setAppName('');
        setAmount('');
        setRenewalDate('');
        setSubType(SubscriptionType.MONTHLY);
        setIsSubmitting(false);
        }, 400);
    };


    return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">New Subscription</h2>
            <p className="text-slate-500 text-sm">Track your next digital expense effortlessly.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Application Name</label>
                <input
                required
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="e.g. Netflix, Spotify, AWS"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Amount ($)</label>
                <input
                required
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Renewal Date</label>
                <input
                required
                type="date"
                value={renewalDate}
                onChange={(e) => setRenewalDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                />
            </div>
        </div>

        <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Subscription Cycle</label>
            <div className="grid grid-cols-2 gap-2">
                {Object.values(SubscriptionType).map((type) => (
                <button
                    key={type}
                    type="button"
                    onClick={() => setSubType(type)}
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-all border ${
                    subType === type
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-blue-300'
                    }`}
                >
                    {type}
                </button>
                ))}
            </div>
            </div>

        <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
            >
            {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : 'Add Subscription'}
            </button>
        </form>
    </div>
    );
};

export default SubscriptionForm;