const extraResolver = {
  Query: {
    extra: () => {
      return {
        message: "This comes from extraResolver"
      };
    },
  },
};

export default extraResolver;