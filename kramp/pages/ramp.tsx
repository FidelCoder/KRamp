import Transak from "@biconomy/transak";

export default function Ramp() {

    const onRamp = () => {
    // init the widget
// use this info for transak package
const transak = new Transak('STAGING', {
    walletAddress: "0xA82fb8eF1dcff52FD38a2ce08Fc8A142e1FAA12b",
    userData: {
      firstName: '',
      email: '',
    },
  });
  transak.init();
    }
return(
        <>
        <button onClick={onRamp}> BUY CRYPTO</button>
        </>
    )
  }
  