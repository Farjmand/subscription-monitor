
export enum SubscriptionType {
    MONTHLY = 'Monthly',
    YEARLY = 'Yearly',
    WEEKLY = 'Weekly',
    QUARTERLY = 'Quarterly'
}

export interface Subscription {
    id: string;
    appName: string;
    amount: number;
    renewalDate: string;
    subscriptionType: SubscriptionType;
    createdAt: number;
}

export interface BudgetInsight {
    summary: string;
    tips: string[];
}
