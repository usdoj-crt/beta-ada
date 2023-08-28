export default function setCookies() {
    const isNetlifyUser = sessionStorage.getItem('isNetlifyUser') ?? false;
    setFeatureFlagCookies(isNetlifyUser);
  }

function setPublicPercentVariant(name, publicPercentOn) {
  let variant;
  // Check if the user already has a variant assigned
  const userVariant = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1];

  if (userVariant) {
    variant = userVariant;
  } else {
    // Assign a random variant if the user doesn't have one
    variant = Math.random() < publicPercentOn ? true : false;
  }

  return variant;
}

const FEATURE_FLAGS = [
    {
      name: 'laws-and-regs',
      released: false,
      publicPercentOn: 0,
      optedIn: false,
    }
];

function setFeatureFlagCookies(allowlisted=false) {
    FEATURE_FLAGS.forEach((flag) => {
      const publicPercentVariant = setPublicPercentVariant(flag.name, flag.publicPercentOn);
      flag.optedIn = allowlisted;
      document.cookie = flag.name + '=' + (publicPercentVariant || flag.optedIn || flag.released);
    });
}