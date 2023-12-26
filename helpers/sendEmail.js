const ElasticEmail = require("@elasticemail/elasticemail-client");

require("dotenv").config(); // метод config шукає в проекті файл <.env> (текстовий файл), читає його построково та додає в process.env змінні оточення DB_HOST та PORT (у вигляді ключ-значення)

const { ELASTIC_API_KEY, EMAIL_FROM } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;
const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTIC_API_KEY;

const api = new ElasticEmail.EmailsApi();

const sendEmail = data => {
  const { to, subject, html } = data;
  const email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [new ElasticEmail.EmailRecipient(to)],
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: "HTML",
          Content: html,
        }),
      ],
      Subject: subject,
      From: EMAIL_FROM,
    },
  });

  const callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully.");
    }
  };

  api.emailsPost(email, callback);
};

module.exports = sendEmail;
