
    const passwordEl = document.getElementById('password');
    const lengthEl = document.getElementById('length');
    const lengthValueEl = document.getElementById('lengthValue');

    function updateLength() {
      lengthValueEl.textContent = lengthEl.value;
    }

    function generatePassword() {
      const length = +lengthEl.value;
      const includeUpper = document.getElementById('uppercase').checked;
      const includeLower = document.getElementById('lowercase').checked;
      const includeNumbers = document.getElementById('numbers').checked;
      const includeSymbols = document.getElementById('symbols').checked;

      const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
      const numberChars = '0123456789';
      const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

      let validChars = '';
      if (includeUpper) validChars += upperChars;
      if (includeLower) validChars += lowerChars;
      if (includeNumbers) validChars += numberChars;
      if (includeSymbols) validChars += symbolChars;

      if (!validChars) {
        passwordEl.value = 'Select at least one option!';
        return;
      }

      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }

      passwordEl.value = password;
    }

setTimeout(() => {
  console.log(
    "%c✨ Designed and Developed by Harsh Pandey",
    "color: #007bff; font-weight: bold; font-size: 16px;"
  );
  console.log(
    "%c🔗 https://lucifer01430.github.io/Portfolio/",
    "color: #28a745; font-size: 14px;"
  );
}, 2000);


    function copyPassword() {
      passwordEl.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    }

    // Initialize slider label
    updateLength();
