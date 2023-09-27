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

export default function setCookies() {
    FEATURE_FLAGS.forEach((flag) => {
      const publicPercentVariant = setPublicPercentVariant(flag.name, flag.publicPercentOn);
      flag.optedIn = sessionStorage.getItem(flag.name) ?? false;
      document.cookie = flag.name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      if (flag.optedIn === 'false') return;
      if (publicPercentVariant || flag.optedIn || flag.released) document.cookie = flag.name + '=true';
    });
}
