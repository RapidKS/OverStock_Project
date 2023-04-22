const billingForm = document.getElementById('billingForm');
const cardNumber = document.getElementById('cardNumber');
const cvv = document.getElementById('cvv');
const otp = document.getElementById('otp');

billingForm.addEventListener('submit', function(event) {
	event.preventDefault();
	if (!validateCardType()) {
		showErrorMessage('Please select a card type');
		return;
	}
	if (!validateCardNumber()) {
		showErrorMessage('Please enter a valid card number');
		return;
	}
	if (!validateCVV()) {
		showErrorMessage('Please enter a valid CVV');
		return;
	}
	if (!validateOTP()) {
		showErrorMessage('Please enter a valid OTP');
		return;
	}
	billingForm.submit();
});

function validateCardType() {
	return document.getElementById('cardType').value !== '';
}

function validateCardNumber() {
	const cardNumberValue = cardNumber.value.trim();
	if (cardNumberValue.length !== 16) {
		return false;
	}
	for (let i = 0; i < cardNumberValue.length; i++) {
		if (isNaN(cardNumberValue[i])) {
			return false;
		}
	}
	return true;
}

function validateCVV() {
	const cvvValue = cvv.value.trim();
	if (cvvValue.length !== 3) {
		return false;
	}
	for (let i = 0; i < cvvValue.length; i++) {
		if (isNaN(cvvValue[i])) {
			return false;
		}
	}
	return true;
}

function validateOTP() {
	const otpValue = otp.value.trim();
	if (otpValue.length !== 6) {
		return false;
	}
	for (let i = 0; i < otpValue.length; i++) {
		if (isNaN(otpValue[i])) {
			return false;
		}
	}
	return true;
}

function showErrorMessage(message) {
	const errorMessage = document.createElement('div');
	errorMessage.className = 'error-message';
	errorMessage.textContent = message;
	billingForm.appendChild(errorMessage);
	setTimeout(function() {
		billingForm.removeChild(errorMessage);
	}, 3000);
}