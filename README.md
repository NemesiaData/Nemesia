# Nemesia — Digital Threat Elegance

🛡️ AI-driven RUG prediction & real-time risk analysis
Built to help traders spot danger before it strikes.

---

## 🔧 What is Nemesia?

Nemesia is a lightweight Chrome Extension and backend system that evaluates token risk using real-time market data, on-chain behavior, and AI heuristics.

Designed for speed, clarity, and minimal UI.
Focused first on **Solana/BSC**, with plans to expand to Base/Ethereum.

---
## 🌐 Social Links

- [Chrome Extension](https://chromewebstore.google.com/detail/nemesia/debedjcijbkhamabeemjdhfeafdpamgo)
- [Official Website](https://nemesiadata.com)
- [Twitter](https://twitter.com/NemesiaData)
- [Github](https://github.com/NemesiaData/Nemesia)
- [Gitbook](https://nemesiadata.gitbook.io/nemesiadata/)
- [Email] Nemesiadata@gmail.com
---

## 🧪 Tech Stack

- DexScreener API
- Vanilla JS + HTML/CSS for extension
- Python-based ML model
- Designed for speed and minimal permissions

---

## **Current Features**

### **1. Rug Pull Prediction**  
🔍 **AI models for transaction analysis**  
- Detects potential **rug-pulls** in DeFi projects by analyzing transaction patterns.  
- **Automatic token and smart contract checks** for signs of fraud and manipulation.

### **2. Real-Time Alerts**  
⚠️ **Instant notifications**  
- Sends **real-time alerts** to users about risks associated with specific tokens or projects.  
- **Network activity monitoring** for fast reaction to emerging threats.

### **3. Token Behavior Analysis**  
📊 **Tracking token behaviors**  
- Analyzes **historical token data** to detect suspicious patterns.  
- Identifies anomalies that may indicate fraudulent activities or malicious behavior.

---

## **Future Features**

### **Q2 2025:**

#### **1. DeFi Vulnerability Scanning**  
🔐 **DeFi protocol vulnerability analysis**  
- Analyzes popular DeFi protocols to predict possible **attack vectors** or **manipulation opportunities**.

#### **2. Base/ETH Cross-Chain Risk Assessment**  
🌐 **Multi-chain risk analysis**  
- **Evaluates risks** for tokens and projects interacting across multiple blockchains.  
- Predicts **cross-chain vulnerabilities** and emerging **security threats**.

### **Q3 2025:**

#### **3. AI-Powered Portfolio Risk Scoring**  
💼 **AI-driven portfolio risk assessment**  
- Provides **AI-based risk evaluation** for crypto portfolios.  
- Offers **personalized recommendations** to help minimize portfolio risks.

#### **4. Enhanced Smart Contract Auditing**  
🔍 **Advanced contract security audits**  
- Integrates with tools for **in-depth smart contract security analysis**.  
- Uses **AI-powered code analysis** to identify hidden vulnerabilities and improve contract safety.

---

## **🔬 Main Formulas**

### **1. Rug Pull Prediction**
🔍 **AI models for transaction analysis**  
- Detects potential **rug-pulls** in DeFi projects by analyzing transaction patterns.  
- **Automatic token and smart contract checks** for signs of fraud and manipulation.

#### **Formula:**
**Suspicious Transaction Test:**
```javascript
function isSuspiciousTransaction(transactionVolume, avgVolume) {
  const threshold = 1.5;  // Example threshold for suspicion
  return (transactionVolume / avgVolume) > threshold;
}
```
Where:
> transactionVolume — volume of the current transaction,
> avgVolume — average transaction volume,
> threshold — threshold for detecting suspicious activity.

AI Prediction for Rug Pull:
```
function predictRugPull(tokenData) {
  const features = [
    tokenData.liquidityChange,
    tokenData.unusualTransactionCount,
    tokenData.priceChange
  ];
  // Simple machine learning model to predict rug-pull risk
  const prediction = logisticRegression(features);
  return prediction > 0.5 ? "High Risk" : "Low Risk";  // Risk of rug-pull
}
```
Where:
> features — token features (e.g., liquidity changes, unusual transactions),
> logisticRegression — logistic regression model for prediction.

#### **2. Real-Time Alerts**
**⚠️ Instant notifications**

Sends real-time alerts to users about risks associated with specific tokens or projects.
Network activity monitoring for fast reaction to emerging threats.
Alert Threshold:
```javascript
function sendAlertIfSuspicious(transaction) {
  const deltaT = Math.abs(transaction.time - previousTransactionTime);
  const deltaP = Math.abs(transaction.price - previousTransactionPrice);
  const alertThreshold = 1.5;
  if (deltaT / avgTime > alertThreshold && deltaP / avgPrice > alertThreshold) {
    sendNotification("Suspicious transaction detected!");
  }
}
```
Where:
> deltaT — change in transaction time,
> deltaP — change in transaction price,
> alertThreshold — threshold to trigger the alert.

#### **3. Token Behavior Analysis**
**📊 Tracking token behaviors**
Analyzes historical token data to detect suspicious patterns.
Identifies anomalies in tokens that may indicate fraudulent activities or malicious behavior.
```javascript
function analyzeTokenBehavior(tokenHistory) {
  const avgPrice = getAveragePrice(tokenHistory);
  const anomalies = tokenHistory.map(price => Math.abs(price - avgPrice));

  const anomalyIndex = anomalies.reduce((sum, anomaly) => sum + anomaly, 0) / tokenHistory.length;
  return anomalyIndex > anomalyThreshold ? "Anomalous Behavior" : "Normal Behavior";
}
```
Where:
> tokenHistory — historical prices of the token,
> avgPrice — average token price over the period,
> anomalyThreshold — threshold to flag anomalous behavior.



---

> Nemesia isn’t just a scanner.
> It’s a **digital guardian** for those navigating the wild frontiers of crypto.
