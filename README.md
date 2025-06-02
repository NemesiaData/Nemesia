# Nemesia: Your Real-Time DeFi Protection Layer

Nemesia is an AI-powered Chrome extension built to guard you against digital threats in the DeFi ecosystem.

With real-time risk analysis, rug-pull prediction, and on-chain monitoring, Nemesia helps you detect danger before it hits.  
Powered by cutting-edge AI models and real-time DEX data, Nemesia watches token behavior, flags anomalies, and alerts you instantly — all right in your browser.  

Designed for traders exploring **Solana** and **BSC**, it offers a clean, focused interface with powerful protection under the hood.  
Stay ahead of scams, risky tokens, and suspicious wallet activity — with Nemesia, you're never blind in the market.


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

- Vanilla JS + HTML/CSS for extension
- Python-based ML model
- Designed for speed and minimal permissions

---

## 🌟 Key Features

Nemesia delivers real-time DeFi risk detection using **9 core metrics**, all displayed directly in your browser:

- **⚠️ Contract Audit**  
  Checks for unsafe or suspicious contract code and flags potential red flags

- **🔒 Liquidity Lock**  
  Scans liquidity status and lock ratio — indicates whether liquidity is properly secured

- **🤖 AI Verdict**  
  Full AI-driven risk analysis based on historical token patterns, behavior, and known scam features

- **🐋 Whale Entry**  
  Detects pre-pump whale accumulation patterns and unusual large wallet entries

- **📊 Transaction Pattern**  
  Analyzes transfer behavior to identify wash trading, sniper activity, or organic flow

- **🧬 Sybil Pattern**  
  Flags clusters of similar wallets involved in potential sybil or bot-driven attacks

- **🕰️ Token Age**  
  Identifies how new the token is — early-stage tokens tend to have higher risk profiles

- **🧑‍🤝‍🧑 Holder Distribution**  
  Evaluates token ownership concentration — risky if supply is held by few wallets

- **🧮 Nemesia Score (0–100)**  
  Combines all metrics into a unified risk score with live interpretation (Low / Medium / High Risk)



---

## 📍 Phase 1 — MVP (Completed)

Nemesia is live with its foundational features already integrated:

- ✅ **Chrome Extension**  
  Instant risk overview directly in your browser — no signups, no friction.

- ✅ **Token Scanner & Risk Engine**  
  Real-time rug pull prediction, behavior tracking, and contract safety checks for Solana and BSC tokens.

- ✅ **Discord-Integrated Access System**  
  Snapshot-based role verification tied to `$NEMS` token holdings, unlocking access keys and gated modules.

- ✅ **Role-Based Access & Key Issuance**  
  Roles “Watcher” (0.3 SOL) and “Oracle” (0.6 SOL) dynamically sync with your wallet and unlock core or advanced features.

- ✅ **Minimal UI / Max Signal**  
  Designed for traders who want speed and clarity. Visuals are stripped to the essentials, with meaningful metrics front and center.

---

## 🛠 Phase 2 — Planned (Q3 2025)

- 🔜 **DeFi Protocol Risk Scanning**  
  AI models trained to detect weak points in DeFi contracts (e.g., liquidity locks, mint functions, external calls).

- 🔜 **Cross-Chain Risk Framework**  
  Analyze risk behaviors for tokens that bridge or operate across chains — with early support.

- 🔜 **Smart Wallet Movement Patterns**  
  Monitor “smart money” wallet clusters and unusual movement patterns to detect pre-rug behavior or coordinated exits.

---

## 🧠 Phase 3 — Next Milestones (Q4 2025)

- 🔜 **AI Portfolio Risk Profiling**  
  Dynamic analysis of your wallet's holdings, with predictive scoring and alerts tied to individual token risks.

- 🔜 **Enhanced Smart Contract Audit AI**  
  Identify suspicious contract patterns in real time — not just with flag lists, but through behavior-based detection.

- 🔜 **Access Key Evolution**  
  Planned integration of burner access keys for one-time use, useful for auditing and sharing token scans without full role binding.


---
## 🔮 AI Modules

### 1. AI Rug Pull Prediction

Nemesia evaluates behavioral patterns in token liquidity, swap anomalies, and transaction pressure.

**Python Version:**
```python
def predict_rug_pull(data):
    score = 0
    if data['liquidity_removed_ratio'] > 0.7:
        score += 0.4
    if data['owner_tx_count'] > 3:
        score += 0.3
    if data['token_price_drop_pct'] > 40:
        score += 0.3

    return "High Risk" if score > 0.6 else "Low Risk"
```

**Где:**
- `liquidity_removed_ratio` — процент удалённой ликвидности  
- `owner_tx_count` — число подозрительных транзакций от создателя  
- `token_price_drop_pct` — падение цены токена за короткий промежуток времени  

---

### 2. Real-Time Alerts (Transaction Monitor)

Отслеживает всплески активности, цену и движения средств в пределах коротких интервалов времени.

**JavaScript Version:**
```javascript
function monitorTransactions(tx, avgTxTime, avgTxValue) {
  const deltaTime = Date.now() - tx.timestamp;
  const deltaValue = Math.abs(tx.value - avgTxValue);
  const isSuspicious = deltaTime < 60_000 && deltaValue > avgTxValue * 1.8;

  if (isSuspicious) {
    triggerAlert("⚠️ Unusual transaction pattern detected");
  }
}
```

**Где:**
- `tx.value` — объем текущей транзакции  
- `deltaTime` — время с предыдущей транзакции  
- `avgTxValue` — средний объем транзакций по токену  

---

### 3. Behavior & Liquidity Analysis

Анализирует поведение токена и ключевые переменные: изменение цены, тренд объема, частота min/max касаний.

**Python Version:**
```python
def analyze_token_behavior(history):
    prices = [p['price'] for p in history]
    volumes = [v['volume'] for v in history]

    volatility = max(prices) - min(prices)
    volume_spike = volumes[-1] > sum(volumes[:-1]) / len(volumes[:-1]) * 2

    if volatility > 0.4 and volume_spike:
        return "⚠️ High Volatility & Volume Surge"
    else:
        return "✅ Stable Behavior"
```

**Метрики:**
- `volatility` — размах цен (макс - мин)  
- `volume_spike` — резкий рост объёма последней транзакции по сравнению со средним  

---

### 4. Ownership & Mint Risk Detection

Проверка ключевых рисков: открытая минтовка, изменение прав, подозрительные разрешения.

**JavaScript Version:**
```javascript
function detectOwnershipFlags(token) {
  const flags = [];

  if (token.mintAuthority === "open") flags.push("❗ Open Mint Detected");
  if (!token.verified || token.adminTxs > 5) flags.push("⚠️ Admin Activity Anomaly");

  return flags.length ? flags : ["✅ Ownership looks safe"];
}
```

## 🧾 Conclusion

Nemesia is free to use and always on guard. We don’t collect your data. We don’t ask for logins.

Built for real-time speed and minimalism, Nemesia lives in your browser and thinks faster than threats emerge.

🧠 Whether you’re hunting early tokens, dodging scams, or tracking shady wallets — Nemesia is your invisible ally.

🔑 You hold the key — literally.

**Be early. Be sharp. Be unseen.**  
**Nemesia watches when others sleep.**
