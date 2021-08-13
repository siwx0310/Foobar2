function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCVC(value = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 3;

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);
  const number2 = clearValue.includes(2);
  const number3 = clearValue.includes(3);
  const number4 = clearValue.includes(4);
  const number5 = clearValue.includes(5);
  const number6 = clearValue.includes(6);
  const number7 = clearValue.includes(7);
  const number8 = clearValue.includes(8);
  const number9 = clearValue.includes(9);

  if (clearValue.length === 1) {
    if (
      number2 ||
      number3 ||
      number4 ||
      number5 ||
      number6 ||
      number7 ||
      number8 ||
      number9
    ) {
      return `0${clearValue}`;
    }
  } else if (clearValue.length === 2) {
    const firstNumber = clearValue.slice(0, 1);
    const secondNumber = clearValue.slice(1, 2);
    const secondNumber3 = secondNumber.includes(3);
    const secondNumber4 = secondNumber.includes(4);
    const secondNumber5 = secondNumber.includes(5);
    const secondNumber6 = secondNumber.includes(6);
    const secondNumber7 = secondNumber.includes(7);
    const secondNumber8 = secondNumber.includes(8);
    const secondNumber9 = secondNumber.includes(9);

    if (firstNumber.includes(0)) {
      if (secondNumber.includes(0)) {
        return clearValue.slice(0, 1);
      } else {
        return `${clearValue}`;
      }
    } else if (
      (firstNumber.includes(1) && secondNumber3) ||
      secondNumber4 ||
      secondNumber5 ||
      secondNumber6 ||
      secondNumber7 ||
      secondNumber8 ||
      secondNumber9
    ) {
      return clearValue.slice(0, 1);
    }
  }
  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }
  return clearValue;
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }
  const clearValue = clearNumber(value);
  let nextValue;
  nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
  return nextValue.trim();
}

//changed by siw
export function nextInput(target) {
  const form = document.querySelector("#form");

  const cardNumber = form.number.checkValidity();
  const expiry = form.expiry.checkValidity();
  const cvc = form.cvc.checkValidity();

  // siw changed
  if (target.name === "number") {
    if (cardNumber != false) {
      document.querySelector("#expirydate").focus();
    }
  }
  if (target.name === "expiry") {
    if (expiry != false) {
      document.querySelector("#cvc").focus();
    }
  }
  if (target.name === "cvc") {
    if (cvc != false) {
      document.querySelector("#name").focus();
    }
  }
}

export function validateForm(evt) {
  const form = document.querySelector("#form");
  const multihint = document.querySelector("#multihint");
  const cvc = form.cvc.checkValidity();
  const expiry = form.expiry.checkValidity();
  const cvcInput = form.cvc.value.length;
  const expiryInput = form.expiry.value.length;

  //console.log(evt.target.value);
  if (evt.target.name === "email") {
    document.querySelector("#email span").style.color = "";
  }
  if (evt.target.name === "number") {
    document.querySelector("#cardnumber span").style.color = "";
  }
  if (evt.target.name === "name") {
    document.querySelector("#cardname span").style.color = "";
  }

  // if input target is not cvc or expiry
  if (evt.target.name != "cvc" && evt.target.name != "expiry") {
    if (
      cvcInput >= 1 &&
      cvcInput <= 2 &&
      expiryInput >= 1 &&
      expiryInput <= 4
    ) {
      multihint.innerHTML =
        "PLEASE ENTER A VALID CVC NUMER AND EXPIRY DATE OF YOUR CARD";
      multihint.style.color = "red";
    } else if (
      (cvcInput === 0 && expiryInput >= 1 && expiryInput <= 4) ||
      (cvc === true && expiryInput >= 1 && expiryInput <= 4)
    ) {
      multihint.innerHTML = "PLEASE ENTER THE VALID EXPIRYDATE OF YOUR CARD";
      multihint.style.color = "red";
    } else if (
      (expiryInput === 0 && cvcInput >= 1 && cvcInput <= 2) ||
      (expiry === true && cvcInput >= 1 && cvcInput <= 2)
    ) {
      multihint.innerHTML = "PLEASE ENTER THE VALID CVC NUMBER OF YOUR CARD";
      multihint.style.color = "red";
    } else if (cvc === true && expiry === true) {
      multihint.style.color = "transparent";
    }
    // if input target is cvc
  } else if (evt.target.name === "cvc") {
    console.log("cvc target");
    // if expiry is false
    if (expiryInput >= 1 && expiryInput <= 4) {
      multihint.innerHTML = "PLEASE ENTER THE VALID EXPIRYDATE OF YOUR CARD";
      multihint.style.color = "red";
    } else if (expiry === true) {
      multihint.style.color = "transparent";
    }
    // if input target is expiry
  } else if (evt.target.name === "expiry") {
    console.log("expiry target");
    if (cvcInput === 1 || cvcInput === 2) {
      console.log("expiry target cvc invalid");
      multihint.innerHTML = "PLEASE ENTER THE VALID CVC NUMBER OF YOUR CARD";
      multihint.style.color = "red";
    } else if (cvc === true) {
      multihint.style.color = "transparent";
    }
  }
}
