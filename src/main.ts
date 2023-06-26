import {
  encode, decode, trim,
  isBase64, isUrlSafeBase64
} from 'url-safe-base64'
import './style.css'

const encodeInput = document.querySelector("textarea")!
const encodeOutput = document.querySelector("#encodeOutput")!

const decodeInput = document.querySelector("input")!
const decodeOutput = document.querySelector("#decodeOutput")!

decodeInput.addEventListener("input", () => {
  const value = decodeInput.value
  if (isBase64(value)) {
    if (isUrlSafeBase64(value)) {
      const decoded = atob(decode(value));
      try {
        console.log(JSON.parse(decoded))
        decodeOutput.textContent = decoded;
      } catch {
        decodeOutput.textContent = decoded;
      }
    } else {
      decodeOutput.innerHTML = "Base64 is not url safe"
    }
  } else {
    decodeOutput.innerHTML = "Not base64"
  }
})

encodeInput.addEventListener("input", () => {
  encodeOutput.textContent = encode(btoa(trim(encodeInput.value)))
});