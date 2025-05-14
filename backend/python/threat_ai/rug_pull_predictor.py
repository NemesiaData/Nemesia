def is_suspicious_transaction(transaction_volume, avg_volume):
    threshold = 1.5
    return (transaction_volume / avg_volume) > threshold

def predict_rug_pull(token_data):
    features = [
        token_data["liquidity_change"],
        token_data["unusual_transaction_count"],
        token_data["price_change"]
    ]
    prediction = logistic_regression(features)
    return "High Risk" if prediction > 0.5 else "Low Risk"

def logistic_regression(features):
    weights = [0.4, 0.35, 0.25]
    bias = -1.2
    z = sum(f * w for f, w in zip(features, weights)) + bias
    return 1 / (1 + pow(2.718, -z))