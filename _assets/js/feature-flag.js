export default function getCookies() {
    const isNetlifyUser = sessionStorage.getItem('isNetlifyUser') ?? false;
    const featureFlags = setFeatureFlagCookies(isNetlifyUser);
    const variant = setVariant();

    return {'variant': variant, 'feature_flags': featureFlags};
  }

function setVariant() {
  let variant;
  // Check if the user already has a variant assigned
  const userVariant = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ab_variant="))
      ?.split("=")[1];

  if (userVariant) {
    variant = userVariant;
  } else {
    // Assign a random variant if the user doesn't have one
    variant = Math.random() < 0.5 ? 'A' : 'B';
    // Set the variant in a cookie for future visits
    document.cookie = 'ab_variant='+ variant;
  }

  return variant;
}

const FEATURE_FLAGS = [
    'laws-and-regs',
];

function setFeatureFlagCookies(allowlisted=false) {
    return FEATURE_FLAGS.filter((flag) => {
      document.cookie = flag + '=' + allowlisted;
      return allowlisted;
    });
}