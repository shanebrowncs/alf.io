export class TransactionInitializationToken {
    clientSecret: string;
    reservationStatusChanged: boolean;
}

/**
 * Used to identify and describe an organizer-created
 * offline payment method.
 */
export type CustomOfflinePayment = {
    paymentMethodId: string | null;
    localizations: {
        [lang: string]: CustomOfflinePaymentLocalization;
    }
};

/**
 * Defines a single language localization for a payment method
 */
export type CustomOfflinePaymentLocalization = {
    paymentName: string;
    paymentDescription: string;
    paymentInstructions: string;
};
