// Get the current offset value:
const getOffsetParam = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const offset = searchParams.get("offset")
    if (offset !== null) {
      return offset;
    } else {
      return "";
    }
  };