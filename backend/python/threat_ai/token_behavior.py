def analyze_token_behavior(token_history):
    avg_price = sum(token_history) / len(token_history)
    anomalies = [abs(p - avg_price) for p in token_history]
    anomaly_index = sum(anomalies) / len(anomalies)
    return "Anomalous Behavior" if anomaly_index > 0.12 else "Normal Behavior"