
exports.handler = function (context, event, callback) {
  const client = context.getTwilioClient();

  client.verify
    .services(context.VERIFY_SERVICE_SID)
    .verifications.create({ to: `+${event.phone1}`, channel: "sms" })
    .then((verification) => {
      console.log(verification.status);
      return callback(null);
    })
    .catch((e) => {
      console.log(e);
      return callback(e);
    });
};
