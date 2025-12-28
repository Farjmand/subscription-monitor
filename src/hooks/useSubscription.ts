
import { useState, useCallback, useEffect } from 'react';
import type { Subscription } from '../types';

export const useSubscriptions = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>(() => {
        const saved = localStorage.getItem('subtracker_subs');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('subtracker_subs', JSON.stringify(subscriptions));
    }, [subscriptions]);

    const addSubscription = useCallback((sub: Omit<Subscription, 'id' | 'createdAt'>) => {
        const newSub: Subscription = {
        ...sub,
        id: Math.random().toString(36).substring(2, 9),
        createdAt: Date.now()
        };
        setSubscriptions(prev => [...prev, newSub]);
    }, []);

    const removeSubscription = useCallback((id: string) => {
        setSubscriptions(prev => prev.filter(s => s.id !== id));
    }, []);

    return {
        subscriptions,
        addSubscription,
        removeSubscription
    };
};
