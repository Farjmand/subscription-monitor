/**
 * This function uses Google's GenAI to generate budget insights based on user subscriptions and
 * provides tips to save money or optimize subscriptions in JSON format.
 * @param {Subscription[]} subscriptions - The `getBudgetInsights` function takes an array of
 * `Subscription` objects as input. Each `Subscription` object contains information about a user's
 * subscription, such as the app name, amount, and subscription type.
 * @returns The `getBudgetInsights` function returns a JSON object with a `summary` property (string)
 * and a `tips` property (array of strings) based on the user subscriptions provided.
 */

// import React, { useEffect, useState } from 'react';
// import type { Subscription, BudgetInsight } from '../types';
// import { getBudgetInsights } from '../services/geminiService';

// interface InsightsPanelProps {
//     subscriptions: Subscription[];
// }

// const InsightsPanel: React.FC<InsightsPanelProps> = ({ subscriptions }) => {
    
//     const [insights, setInsights] = useState<BudgetInsight | null>(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (subscriptions.length > 0) {
//         const fetchInsights = async () => {
//             setLoading(true);
//             const data = await getBudgetInsights(subscriptions);
//             setInsights(data);
//             setLoading(false);
//         };
//         fetchInsights();
//         } else {
//         setInsights(null);
//         }
//     }, [subscriptions]);

//     if (subscriptions.length === 0) return null;
    
//     return();

// };