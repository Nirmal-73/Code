function checkStatus() {
  const statusText = document.getElementById("status");
  const statuses = [
    "🛠️ Compiling source code...",
    "📦 Creating build package...",
    "🔄 Deploying to production...",
    "✅ Deployment successful!",
    "❌ Deployment failed. Retrying...",
    "📡 Uploading to cloud server...",
    "🔍 Running final tests..."
  ];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  statusText.textContent = randomStatus;
}

window.onload = checkStatus;
