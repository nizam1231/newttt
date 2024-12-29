document.getElementById("loginButton").addEventListener("click", async () => {
  const messageElement = document.getElementById("message");

  // تحقق من وجود MetaMask
  if (typeof window.ethereum !== "undefined") {
    try {
      // طلب الوصول إلى المحفظة
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      messageElement.textContent = Connected: ${account};
    } catch (error) {
      console.error(error);
      messageElement.textContent = "Error connecting to MetaMask!";
    }
  } else {
    messageElement.textContent = "MetaMask is not installed. Please install it to use this feature.";
  }
});