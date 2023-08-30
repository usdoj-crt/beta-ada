export default function setCookies() {
    const isNetlifyUser = sessionStorage.getItem('isNetlifyUser') ?? false;
    setFeatureFlagCookies(isNetlifyUser);
  }

function setPublicPercentVariant(name, publicPercentOn) {
  // Check if the user already has a variant assigned
  const userVariant = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1];

  if (userVariant) return userVariant;

  // Assign a random variant if the user doesn't have one
  return Math.random() < publicPercentOn;
}

const FEATURE_FLAGS = [
    {
      name: 'laws-and-regs',
      released: false,
      publicPercentOn: 0,
      optedIn: false,
    }
];

function setFeatureFlagCookies(allowlisted) {
    FEATURE_FLAGS.forEach((flag) => {
      const publicPercentVariant = setPublicPercentVariant(flag.name, flag.publicPercentOn);
      flag.optedIn = allowlisted;
      document.cookie = flag.name + '=' + (publicPercentVariant || flag.optedIn || flag.released);
    });
}