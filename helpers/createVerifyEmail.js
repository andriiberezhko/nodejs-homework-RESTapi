const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subjeck: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href = "${BASE_URL}/api/auth/verify/${verificationToken}">Подтвердить почту</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
