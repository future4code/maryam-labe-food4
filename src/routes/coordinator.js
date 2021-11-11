export const goToLogin = (history) => {
  history.push("/");
};

export const goToSignUp = (history) => {
  history.push("/signUp");
};

export const goToAddress = (history) => {
  history.push("/signup-address");
};

export const goToProfile = (history) => {
  history.push("/profile");
};

export const goToCart = (history) => {
  history.push("/cart");
};

export const goToChangeProfile = (history) => {
  history.push("/change-profile");
};

export const goToHome = (history) => {
  history.push("/home");
};

export const goToDetails = (history,id) => {
  history.push(`/restaurant/${id}/`);
};