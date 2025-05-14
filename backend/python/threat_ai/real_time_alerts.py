def send_alert_if_suspicious(transaction, previous_transaction, avg_time, avg_price):
    delta_t = abs(transaction["time"] - previous_transaction["time"])
    delta_p = abs(transaction["price"] - previous_transaction["price"])
    alert_threshold = 1.5
    if delta_t / avg_time > alert_threshold and delta_p / avg_price > alert_threshold:
        return "Suspicious transaction detected!"
    return None